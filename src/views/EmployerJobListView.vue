<template>
  <div class="d-flex align-center">
    <v-card class="main-card" v-if="jobs.length > 0">
      <v-card-title class="card-title" style="color: #4b1c56"
        >Jobs you have posted</v-card-title
      >
      <table class="d-flex align-center custom-table">
        <thead>
          <tr>
            <th class="text-no-wrap" style="width: 12rem">Title</th>
            <th class="text-no-wrap" style="width: 10rem">Category</th>
            <th class="text-no-wrap" style="width: 12rem">Location</th>
            <th class="text-no-wrap" style="width: 6rem">Created Date</th>
            <th class="text-no-wrap" style="width: 10rem">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs" :key="job.id">
            <td class="text-no-wrap" style="width: 12rem">{{ job.title }}</td>
            <td class="text-no-wrap" style="width: 10rem">
              {{ job.category }}
            </td>
            <td class="text-no-wrap" style="width: 12rem">
              {{ job.location }}
            </td>
            <td class="text-no-wrap" style="width: 6rem">
              {{ job.createdDate }}
            </td>
            <td class="text-no-wrap" style="width: 10rem">
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
        Currently, there are no job postings.
      </v-card-title>
      <v-card-subtitle class="not-main-subtitle"
        >Would you like to post a new job?</v-card-subtitle
      >
      <v-btn
        @click="openJobPosting"
        color="#f9f9f9"
        class="post-job-btn"
        tile
        text
        variant="plain"
      >
        Post a new job
      </v-btn>
    </v-card>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selectedJob: null,
      jobs: [],
    };
  },
  mounted() {
    this.getJobsForEmployer();
  },
  methods: {
    openJobDetails(id) {
      this.$router.push({
        name: "EmployerJobDetailsView",
        params: { id: id },
      });
    },
    openJobPosting() {
      this.$router.push("/employer/jobs/create");
    },
    async getJobsForEmployer() {
      try {
        const userSessionData = sessionStorage.getItem("user");
        if (userSessionData) {
          const employer = JSON.parse(userSessionData);
          const employerId = employer._id;
          const response = await this.$apiClient.get(
            `/api/employer/jobs?employerId=${employerId}`
          );

          if (response.status === 200) {
            console.log("Response:", response);
            const jobsData = response.data;

            if (Array.isArray(jobsData)) {
              jobsData.forEach((jobData) => {
                const originalDate = jobData.createdAt;
                const formattedDate = new Date(originalDate)
                  .toISOString()
                  .split("T")[0];
                this.jobs.push({
                  id: jobData._id,
                  title: jobData.title,
                  category: jobData.category,
                  location: jobData.location,
                  createdDate: formattedDate,
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

.card-title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: italic;
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
.not-main-title {
  margin-top: 20px;
}
.not-main-subtitle {
  margin-top: 10px;
}
.post-job-btn {
  width: 150px !important;
  height: 40px !important;
  background-color: #4b1c56 !important;
  margin: 50px;
}
</style>