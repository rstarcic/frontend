<template>
  <div class="d-flex align-center job-detail-card" v-if="job">
    <v-card class="card-style">
      <v-card-title class="text-h4 text-center">{{ job.title }}</v-card-title>
      <v-card-subtitle class="mb-2 text-center">{{
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
        <v-btn color="green" @click="updateJob(job.id)">Update</v-btn>
        <v-btn color="red" @click="deleteJob(job.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      job: null,
      jobs: [
        {
          id: 1,
          category: "Programming",
          title: "Front-End Developer Wanted",
          description:
            "We are looking for an experienced Front-End developer...",
          jobType: "One-time job",
          location: "Remote",
          payment: "40€/h",
          paymentMethod: "PayPal",
          duration: "3 months",
          qualifications: "Experience with React, CSS...",
          equipmentNeeded: false,
          contactInfo: "ivan@company.com",
          applicationDeadline: "01.05.2024",
          workConditions: "Working hours from 9 to 17h",
          createdBy: "Ivan Ivanović",
          createdDate: "25.04.2024.",
        },
        {
          id: 2,
          category: "Maintenance",
          title: "House Painter",
          description:
            "Looking for a skilled house painter with experience in various painting techniques for residential properties.",
          jobType: "One-time job",
          location: "Milanovićeva ulica 23, Zagreb",
          payment: "30€/h",
          paymentMethod: "Bank Transfer",
          duration: "2 weeks",
          qualifications:
            "Experience in painting, knowledge of paint types and techniques.",
          equipmentNeeded: true,
          contactInfo: "contact@painter.com",
          applicationDeadline: "2024-04-15",
          workConditions: "Weekdays from 8 to 16h",
          createdBy: "Ivan Ivanović",
          createdDate: "20.04.2024.",
        },
      ],
    };
  },
  mounted() {
    const jobId = this.$route.params.id;
    this.job = this.fetchJobDetails(jobId);
  },
  methods: {
    fetchJobDetails(jobId) {
      return this.jobs.find((job) => job.id === parseInt(jobId));
    },
    updateJob() {},
    deleteJob() {},
  },
};
</script>
