<template>
  <div class="d-flex align-center job-detail-card" v-if="job">
    <v-card class="card-style">
      <v-toolbar flat class="toolbar-style" color="#642b73">
        <v-toolbar-title class="toolbar-title font-weight-light">
          Job details
        </v-toolbar-title>

        <v-btn icon @click="toggleEditing">
          <v-fade-transition leave-absolute>
            <v-icon v-if="isEditing">mdi-close</v-icon>

            <v-icon v-else>mdi-pencil</v-icon>
          </v-fade-transition>
        </v-btn>
      </v-toolbar>
      <div class="title-subtitle-container">
        <v-card-title class="text-h4"
          ><v-text-field
            class="title-text-field"
            v-model="job.title"
            label="Title"
            :disabled="!isEditing"
          ></v-text-field
        ></v-card-title>
        <v-card-subtitle class="mb-2">
          <v-text-field
            class="subtitle-text-field"
            v-model="job.category"
            label="Category"
            :disabled="!isEditing"
          ></v-text-field
        ></v-card-subtitle>
      </div>
      <v-card-text>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-information</v-icon>
            <p>Description:</p>
          </div>
          <v-text-field
            v-model="job.description"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-map-marker</v-icon>
            <p>Location:</p>
          </div>
          <v-text-field
            v-model="job.location"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-cash</v-icon>
            <p>Payment:</p>
          </div>
          <v-text-field
            v-model="job.payment"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-briefcase-variant</v-icon>
            <p>Job Type:</p>
          </div>
          <v-text-field
            v-model="job.jobType"
            :disabled="!isEditing"
            readonly
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-bank</v-icon>
            <p>Payment Method:</p>
          </div>
          <v-text-field
            v-model="job.paymentMethod"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-timer-sand</v-icon>
            <p>Duration:</p>
          </div>
          <v-text-field
            v-model="job.duration"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-school</v-icon>
            <p>Qualifications:</p>
          </div>
          <v-text-field
            v-model="job.qualifications"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-hammer-screwdriver</v-icon>
            <p>Equipment Needed:</p>
          </div>
          <v-text-field
            v-model="job.equipmentNeeded"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-email</v-icon>
            <p>Contact Info:</p>
          </div>
          <v-text-field
            v-model="job.contactInfo"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-calendar-clock</v-icon>
            <p>Application Deadline:</p>
          </div>
          <v-text-field
            v-model="job.applicationDeadline"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-seat-recline-normal</v-icon>
            <p>Work Conditions:</p>
          </div>
          <v-text-field
            v-model="job.workConditions"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
        <div class="info-item">
          <div class="label-container">
            <v-icon class="info-icon">mdi-account-circle</v-icon>

            <p>Created By:</p>
          </div>
          <v-text-field
            readonly
            v-model="job.createdBy"
            :disabled="!isEditing"
          ></v-text-field>
        </div>
      </v-card-text>

      <v-card-actions class="d-flex justify-center align-center">
        <div class="save-delete-button-container">
          <v-btn icon @click="saveChanges" v-if="isEditing">
            <v-icon>mdi-check</v-icon>
          </v-btn>

          <v-btn icon color="red" @click="deleteJob(job.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-card-actions>
      <v-divider :thickness="2"></v-divider>
      <v-container class="applicant-cards align-center">
        <h2>Applications</h2>
        <v-row no-gutters justify="center">
          <v-col
            cols="12"
            md="4"
            v-for="applicant in applicants"
            :key="applicant.id"
          >
            <v-card class="applicant-card">
              <v-img :src="applicant.image" height="150px"></v-img>
              <v-card-title>{{ applicant.name }}</v-card-title>
              <v-card-subtitle>{{ applicant.email }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text>View profile</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      job: null,
      isEditing: false,
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
      applicants: [
        {
          name: "Marko Marković",
          email: "marko@example.com",
          profile: "profile_link",
        },
        { name: "Ana Anić", email: "ana@example.com", profile: "profile_link" },
        {
          name: "Luka Lukić",
          email: "luka@example.com",
          profile: "profile_link",
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
    toggleEditing() {
      this.isEditing = !this.isEditing;
    },
    saveChanges() {
      this.isEditing = false;
    },
    deleteJob(jobId) {
      this.jobs = this.jobs.filter((job) => job.id !== jobId);
      this.job = null;
    },
  },
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  font-style: normal;
}
.job-detail-card {
  padding: 20px;
}

.card-style {
  margin: 50px;
}
.toolbar-title {
  font-weight: 400;
  font-size: 25px !important;
  color: #f5f5f5;
}

.toolbar-style {
  font-size: 35px !important;
  height: 70px;
  margin-bottom: 20px;
}

.label-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 20px !important;
}

.title-subtitle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.save-delete-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.applicant-card {
  width: 200px;
  margin: 30px 30px;
}
.v-text-field .v-label,
.v-text-field input {
  font-size: 16px !important;
  width: 300px;
}
.v-text-field {
  width: 300px;
}
.label-container {
  width: 150px;
  font-size: 20px !important;
}
</style>