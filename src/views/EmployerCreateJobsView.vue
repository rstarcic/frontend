<template>
  <div class="d-flex align-center">
    <v-card class="job-card" v-if="jobData">
      <v-form @submit.prevent="PostAJob">
        <v-card-title class="form-title"> Job Information </v-card-title>
        <v-card-subtitle class="form-subtitle"
          >Dear employer, please fill in the job details below</v-card-subtitle
        >
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Job Title"
                v-model="jobData.title"
                outlined
                prepend-icon="mdi-account"
                placeholder="e.g., Senior Web Developer"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Category"
                v-model="jobData.category"
                outlined
                placeholder="e.g., Tech Industry"
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row no-gutters>
            <v-textarea
              label="Description"
              v-model="jobData.description"
              outlined
              placeholder="Briefly describe the job role and responsibilities"
            ></v-textarea>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Job Type"
                v-model="jobData.jobType"
                outlined
                placeholder="Always One-time"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Location"
                v-model="jobData.location"
                outlined
                placeholder="e.g., Remote, Zagreb, Croatia"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters
            ><v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Payment"
                v-model="jobData.payment"
                outlined
                placeholder="e.g., 3000€/month, 40€/h"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Duration"
                v-model="jobData.duration"
                outlined
                placeholder="e.g., 2 days, 6 weeks"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Qualifications"
                v-model="jobData.qualifications"
                outlined
                placeholder="e.g., 5+ years in web development, React proficiency"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Equipment Needed"
                v-model="jobData.equipmentNeeded"
                outlined
                placeholder="e.g., Yes, No, Laptop required"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Contact Info"
                v-model="jobData.contactInfo"
                outlined
                placeholder="e.g., hr@example.com, +3851234567"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                class="text-field-design"
                label="Application Deadline"
                v-model="jobData.applicationDeadline"
                outlined
                placeholder="e.g., 25.09.2024"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-text-field
              class="text-field-design"
              label="Work Conditions"
              v-model="jobData.workConditions"
              outlined
              placeholder="e.g., Office based, flexible hours"
            ></v-text-field>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center align-center">
          <v-btn color="deep-purple accent-4" type="submit" dark
            >Post a job</v-btn
          >
        </v-card-actions>
        <v-dialog v-model="openDialog" max-width="400px">
          <v-card>
            <v-card-title class="headline">Confirm Job Posting</v-card-title>
            <v-card-text> Are you sure you want to post this job? </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#642b73" text @click="confirmPostJob">
                Yes, Post It
              </v-btn>
              <v-btn color="#642b73" text @click="openDialog = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-form>
    </v-card>
    <div v-else class="text-center">Loading job details...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobData: {},
      openDialog: false,
    };
  },
  methods: {
    PostAJob() {
      this.openDialog = true;
    },
    confirmPostJob() {
      console.log("Job posted");
      this.openDialog = false;
    },
  },
};
</script>

<style>
.job-card {
  width: 700px;
  background-color: #f5f5f5;
}

.form-title,
.form-subtitle {
  background-color: #642b73;
  color: white;
  padding: 16px;
}
.text-field-design {
  font-size: 12px;
  width: 300px;
  height: 48px;

  color: #000000;
}

.v-btn {
  font-weight: 500;
}
</style>
