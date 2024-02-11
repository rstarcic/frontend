<template>
  <div class="d-flex align-center">
    <v-card class="main-card" v-if="jobs.length > 0">
      <v-card-title class="card-title" style="color: #4b1c56"
        >Jobs you have applied to</v-card-title
      >
      <table class="d-flex align-center custom-table">
        <thead>
          <tr>
            <th class="text-no-wrap" style="width: 12rem">Title</th>
            <th class="text-no-wrap" style="width: 12rem">Category</th>
            <th class="text-no-wrap" style="width: 12rem">Location</th>
            <th class="text-no-wrap" style="width: 12rem">Payment</th>
            <th class="text-no-wrap" style="width: 5rem">Created Date</th>
            <th class="text-no-wrap" style="width: 5rem">Applied Date</th>
            <th class="text-no-wrap" style="width: 12rem">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs" :key="job.id">
            <td class="text-no-wrap" style="width: 12rem">{{ job.title }}</td>
            <td class="text-no-wrap" style="width: 12rem">
              {{ job.category }}
            </td>
            <td class="text-no-wrap" style="width: 12rem">
              {{ job.location }}
            </td>
            <td class="text-no-wrap" style="width: 12rem">
              {{ job.payment }}
            </td>
            <td class="text-no-wrap" style="width: 6rem">
              {{ job.createdDate }}
            </td>
            <td class="text-no-wrap" style="width: 6rem">
              {{ job.applicationDate }}
            </td>
            <td class="text-no-wrap" style="width: 12rem">
              <v-btn
                color="#4b1c56
"
                @click="openJobDetails(job.id)"
                >View details</v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>

    <v-card class="not-main-card" v-else>
      <v-card-title class="not-main-title">
        Currently, you do not have any job application.
      </v-card-title>
      <v-card-subtitle class="not-main-subtitle"
        >Would you like to apply to a new job?</v-card-subtitle
      >
      <v-btn
        @click="openJobFinding"
        color="#f9f9f9"
        class="seek-job-btn"
        tile
        text
        variant="plain"
      >
        Seek jobs
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.getJobsForJobSeeker();
  },
  methods: {
    openJobDetails(id) {
      this.$router.push({
        name: "JobSeekerJobDetailsView",
        params: { id: id },
      });
    },
    openJobFinding() {
      this.$router.push({
        name: "JobSeekerJobs",
      });
    },
    async getJobsForJobSeeker() {
      try {
        const userSessionData = sessionStorage.getItem("user");
        if (userSessionData) {
          const jobSeeker = JSON.parse(userSessionData);
          const jobSeekerId = jobSeeker._id;
          const response = await this.$apiClient.get(
            `/api/job-seeker/jobs/applied?jobSeekerId=${jobSeekerId}`
          );

          console.log("Response: ", response);
          if (response.data && response.status === 200) {
            console.log("Response:", response);
            const jobsData = response.data;
            if (Array.isArray(jobsData)) {
              jobsData.forEach((jobData) => {
                const applicant = jobData.applicants.find(
                  (app) => app.jobSeekerId === jobSeekerId
                );
                const originalAppliedDate = applicant
                  ? applicant.applicationDate
                  : "Not Applied";

                const formattedCreatedDate = new Date(jobData.createdAt)
                  .toISOString()
                  .split("T")[0];

                const formattedAppliedDate = applicant
                  ? new Date(originalAppliedDate).toISOString().split("T")[0]
                  : "Not Applied";
                this.jobs.push({
                  id: jobData._id,
                  title: jobData.title,
                  category: jobData.category,
                  location: jobData.location,
                  payment: jobData.payment,
                  createdDate: formattedCreatedDate,
                  applicationDate: formattedAppliedDate,
                });
              });
            } else {
              console.error("Failed to retrieve jobs.");
            }
          } else {
            console.error("Failed to retrieve jobs.");
          }
        }
      } catch (error) {
        console.error("Error while retrieveing job:", error);
      }
    },
  },
};
</script>

<style scoped>
.seek-job-btn {
  width: 150px !important;
  height: 40px !important;
  background-color: #4b1c56 !important;
  margin: 50px;
}

.text-no-wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 12rem;
}
.card-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: italic;
}
.not-main-card {
  margin-top: 50px;
  width: 600px;
  height: 250px;
  background-color: #f2f2f2;
}
.not-main-title {
  margin-top: 20px;
}
.not-main-subtitle {
  margin-top: 10px;
}

.main-card {
  margin-top: 50px;
  background-color: #f2f2f2;
}

.not-main-card {
  margin-top: 50px;
  width: 600px;
  height: 250px;
  background-color: #f2f2f2;
}
.custom-table {
  width: 100%;
  margin: 5px 0;
  border-collapse: collapse;
  padding: 50px;
}

.column-header {
  padding: 12px;
  text-align: center;
  background-color: #f2f2f2;
}

.text-no-wrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 12rem;
}

.custom-table td,
.custom-table th {
  padding: 12px;
  width: auto;
  color: #f2f2f2;
  border: 1px solid #4b1c56;
}

.custom-table td {
  background-color: #894699;
}
.custom-table th {
  background-color: #642b73;
}
</style>
