<template>
  <div class="d-flex align-center job-detail-card">
    <v-card class="card-style" v-if="job">
      <v-card-title class="text-h2 text-center">{{ job.title }}</v-card-title>
      <v-card-subtitle class="text-h4 text-center">{{
        job.category
      }}</v-card-subtitle>

      <v-card-text>
        <div class="info-item">
          <v-icon class="info-icon">mdi-information</v-icon>
          <p>Description:</p>
          <span>{{ job.description }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-map-marker</v-icon>
          <p>Location:</p>
          <span>{{ job.location }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-cash</v-icon>
          <p>Payment:</p>
          <span>{{ job.payment }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-briefcase-variant</v-icon>
          <p>Job Type:</p>
          <span>{{ job.jobType }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-bank</v-icon>
          <p>Payment Method:</p>
          <span>{{ job.paymentMethod }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-timer-sand</v-icon>
          <p>Duration:</p>
          <span>{{ job.duration }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-school</v-icon>
          <p>Qualifications:</p>
          <span>{{ job.qualifications }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-hammer-screwdriver</v-icon>
          <p>Equipment Needed:</p>
          <span>{{ job.equipmentNeeded ? "Yes" : "No" }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-email</v-icon>
          <p>Contact Info:</p>
          <span>{{ job.contactInfo }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-calendar-clock</v-icon>
          <p>Application Deadline:</p>
          <span>{{ job.applicationDeadline }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-seat-recline-normal</v-icon>
          <p>Work Conditions:</p>
          <span>{{ job.workConditions }}</span>
        </div>
        <div class="info-item">
          <v-icon class="info-icon">mdi-account-circle</v-icon>
          <p>Created By:</p>
          <span>{{ job.createdBy }}</span>
        </div>
      </v-card-text>

      <v-card-actions class="d-flex justify-end align-center">
        <v-btn
          color="#FFFFFF"
          class="apply-btn"
          tile
          text
          variant="plain"
          @click="applyForJob(job.id)"
          >Apply</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="isDialogOpen"
      persistent
      max-width="400px"
      class="application-dialog"
    >
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">Application Successful</v-card-title>
        <v-card-text class="dialog-text"
          >You have successfully applied for the job.</v-card-text
        >
        <v-card-actions class="dialog-actions">
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="isDialogOpen = false"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      job: null,
      isDialogOpen: false,
      jobs: [],
    };
  },
  mounted() {
    this.fetchJobDetails();
  },
  methods: {
    async fetchJobDetails() {
      const id = this.$route.params.id;
      try {
        const response = await this.$apiClient.get(
          `http://localhost:3000/api/job-seeker/jobs/${id}`
        );
        if (response && response.data) {
          this.job = response.data.jobDetails;
        } else {
          console.log("No job details found for the provided job ID.");
          this.job = null;
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        this.job = null;
      }
    },
    async applyForJob() {
      const userSessionData = sessionStorage.getItem("user");
      try {
        if (userSessionData) {
          const id = this.$route.params.id;
          const jobSeeker = JSON.parse(userSessionData);
          const jobSeekerId = jobSeeker._id;
          const response = await this.$apiClient.patch(
            `http://localhost:3000/api/job-seeker/jobs/${id}`,
            { jobSeekerId }
          );
          if (response && response.status === 201 && response.data.success) {
            console.log("Job seeker successfully applied to this job");
            this.isDialogOpen = true;
          } else {
            console.error(
              "Failed to apply for the job:",
              response.data.message
            );
          }
        }
      } catch (error) {
        console.error("Error applying for the job:", error);
      }
    },
  },
};
</script>
<style>
.card-style {
  margin-top: 50px;
  width: 40%;
}

.v-card {
  padding: 20px 30px !important;
}

.info-item {
  display: flex;
  align-items: left;
  margin-bottom: 10px;
}

.info-icon {
  margin-right: 10px;
  color: #642b73;
}

p {
  margin: 0 10px 0 0;
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
}

span {
  margin: 0 10px 0 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 16px;
}

.text-h2,
.text-h4 {
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.text-h2 {
  margin-top: 20px;
}
.text-h4 {
  font-size: 15px !important;
}
.application-dialog .v-card {
  background-color: #642b73;
  color: white;
  border-radius: 5px;
}

.dialog-title {
  color: white;
  text-align: center;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.dialog-text {
  padding: 20px;
  font-size: 1.1em;
  line-height: 1.5;
}

.dialog-actions {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  justify-content: center;
}

.dialog-actions .v-btn {
  border: 2px solid white;
  border-radius: 2px;
}
.apply-btn {
  width: 150px !important;
  height: 40px !important;
  background-color: #642b73 !important;
  color: #f9f9f9;
  margin: 50px;
}
</style>