<template>
  <div class="d-flex align-center">
    <v-card class="job-card">
      <v-form @submit.prevent="confirmAndPostJob">
        <v-card-title class="form-title"> Job Information </v-card-title>
        <v-card-subtitle class="form-subtitle"
          >Dear employer, please fill in the job details below</v-card-subtitle
        >
        <v-card-text class="d-flex justify-center align-center">
          <div class="text-field-div">
            <p class="poppins-medium-italic">Title</p>
            <v-text-field
              class="text-field-design"
              label="Job Title"
              v-model="jobData.title"
              outlined
              placeholder="e.g., Senior Web Developer"
              :rules="[rule.required, rule.minLength, rule.maxLength]"
            ></v-text-field>
          </div>
          <div class="text-field-div">
            <p class="poppins-medium-italic">Category</p>
            <v-text-field
              class="text-field-design"
              label="Category"
              v-model="jobData.category"
              outlined
              placeholder="e.g., Tech Industry"
              :rules="[
                rule.required,
                rule.name,
                rule.minLength,
                rule.maxLength,
              ]"
            ></v-text-field>
          </div>
          <div class="text-field-div">
            <p class="poppins-medium-italic">Description</p>

            <v-text-field
              class="text-field-design"
              label="Description"
              v-model="jobData.description"
              placeholder="Briefly describe the job role and responsibilities"
              :rules="[rule.required, rule.minLength]"
            ></v-text-field>
          </div>

          <div class="text-field-div">
            <p class="poppins-medium-italic">Job type</p>
            <v-text-field
              class="text-field-design"
              readonly
              v-model="jobData.jobType"
              :disabled="!isEditing"
              value="One-time"
              :rules="[rule.required, rule.name]"
            ></v-text-field>
          </div>

          <div class="text-field-div">
            <p class="poppins-medium-italic">Payment</p>

            <v-text-field
              class="text-field-design"
              label="Payment"
              v-model="jobData.payment"
              outlined
              placeholder="e.g., 3000€/month, 40€/h"
              :rules="[rule.required, rule.payment]"
            ></v-text-field>
          </div>
          <div class="text-field-div">
            <p class="poppins-medium-italic">Payment Method</p>

            <v-text-field
              class="text-field-design"
              readonly
              v-model="jobData.paymentMethod"
              :disabled="!isEditing"
              value="Integrated PayPal"
            ></v-text-field>
          </div>
          <div class="text-field-div">
            <p class="poppins-medium-italic">Location</p>

            <v-text-field
              class="text-field-design"
              label="Location"
              v-model="jobData.location"
              outlined
              placeholder="e.g., Remote, Zagreb, Croatia"
              :rules="[rule.required, rule.name]"
            ></v-text-field>
          </div>

          <div class="text-field-div">
            <p class="poppins-medium-italic">Duration</p>

            <v-text-field
              class="text-field-design"
              label="Duration"
              v-model="jobData.duration"
              outlined
              placeholder="e.g., 2 days, 6 weeks"
              :rules="[rule.required]"
            ></v-text-field>
          </div>

          <div class="text-field-div">
            <p class="poppins-medium-italic">Qualifications</p>

            <v-text-field
              class="text-field-design"
              label="Qualifications"
              v-model="jobData.qualifications"
              outlined
              placeholder="e.g., 5+ years in web development, React proficiency"
              :rules="[rule.required]"
            ></v-text-field>
          </div>
          <div class="text-field-div">
            <p class="poppins-medium-italic">Equipment needed</p>

            <v-text-field
              class="text-field-design"
              label="Equipment Needed"
              v-model="jobData.equipmentNeeded"
              outlined
              placeholder="e.g., Yes, No, Laptop required"
              :rules="[rule.required]"
            ></v-text-field>
          </div>
          <div>
            <div class="text-field-div">
              <p class="poppins-medium-italic">Contact information</p>

              <v-text-field
                class="text-field-design"
                label="Contact Info"
                v-model="jobData.contactInfo"
                outlined
                placeholder="e.g., hr@example.com, +3851234567"
                :rules="[rule.required]"
              ></v-text-field>
            </div>
            <div class="text-field-div">
              <p class="poppins-medium-italic">Application deadline</p>

              <v-text-field
                class="text-field-design"
                label="Application Deadline"
                v-model="jobData.applicationDeadline"
                outlined
                placeholder="e.g., 25.09.2024, None"
                :rules="[rule.required, rule.date]"
              ></v-text-field>
            </div>
          </div>
          <div class="text-field-div">
            <p class="poppins-medium-italic">Work conditions</p>

            <v-text-field
              class="text-field-design"
              label="Work Conditions"
              v-model="jobData.workConditions"
              outlined
              placeholder="e.g., Office based, flexible hours"
              :rules="[rule.required]"
            ></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-center align-center">
          <v-btn
            tile
            class="post-a-job-btn"
            text
            variant="plain"
            color="#FFFFFF"
            @click="submitJobPosting"
            >Post a job</v-btn
          >
        </v-card-actions>
        <v-dialog v-model="openDialog" max-width="400px">
          <v-card>
            <v-card-title class="headline">Confirm Job Posting</v-card-title>
            <v-card-text> Are you sure you want to post this job? </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                tile
                class="job-btn"
                variant="plain"
                type="submit"
                text
                color="#FFFFFF"
                @click="confirmAndPostJob"
              >
                Yes, Post It
              </v-btn>
              <v-btn
                color="#FFFFFF"
                tile
                class="job-btn"
                variant="plain"
                type="submit"
                text
                @click="openDialog = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-form>
    </v-card>

    <v-snackbar
      v-model="showSnackbar"
      :timeout="4000"
      :color="snackbarColor"
      elevation="24"
    >
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="showSnackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobData: {
        title: "",
        category: "",
        description: "",
        location: "",
        payment: "",
        duration: "",
        qualifications: "",
        equipmentNeeded: "",
        contactInfo: "",
        applicationDeadline: "",
        workConditions: "",
        createdBy: "",
        jobType: "One-time",
        paymentMethod: "Integrated PayPal",
      },
      isEditing: false,
      openDialog: false,
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      rule: {
        name: (v) =>
          /^[A-Za-zŠĐČĆŽšđčćž ]+$/.test(v) || "Must not contain numbers",
        payment: (v) =>
          /^\d+(\.\d+)?\s*(\$|€)\/(hr|h|day|week|month)$/.test(v) ||
          "Invalid format. You can use hr, h, day, week, month",
        date: (v) => {
          if (v === "None") return true;
          return (
            /^[0-3][0-9]\.[0-1][0-9]\.\d{4}$/.test(v) ||
            "Date must be in format dd.mm.yyyy"
          );
        },
        minLength: (v) => v.length >= 2 || "Must be at least 2 characters long",
        maxLength: (v) =>
          v.length <= 50 || "Must be at most 50 characters long",
      },
    };
  },
  methods: {
    submitJobPosting() {
      this.openDialog = true;
    },
    async confirmAndPostJob() {
      try {
        const userSessionData = sessionStorage.getItem("user");
        if (userSessionData) {
          const employer = JSON.parse(userSessionData);
          const employerId = employer._id;
          this.jobData.createdBy = `${employer.firstName} ${employer.lastName}`;
          const jobRequestData = {
            employerId: employerId,
            ...this.jobData,
          };
          const response = await this.$apiClient.post(
            "http://localhost:3000/api/employer/jobs/create",
            jobRequestData
          );

          console.log("Response servera: ", response);
          console.log("Response servera: ", response.status);
          if (response && response.status === 201 && response.data.success) {
            this.snackbarMessage = "Job successfully created";
            this.snackbarColor = "success";
            this.showSnackbar = true;
            console.log("Job posted");
            this.openDialog = false;
          } else {
            this.snackbarMessage = "Please try again.";
            this.snackbarColor = "error";
            this.showSnackbar = true;
            this.openDialog = false;
          }
        } else {
          this.showSnackbar = true;
          this.snackbarMessage = "Session data not found. Please log in.";
          this.snackbarColor = "error";
          this.openDialog = false;
        }
      } catch (error) {
        this.showSnackbar = true;
        this.snackbarMessage = "An error occurred.";
        this.snackbarColor = "error";
        this.openDialog = false;
      }
    },
  },
};
</script>

<style>
.job-card {
  width: 800px;
  background-color: #f5f5f5;
  margin: 50px auto;
}

.form-title,
.form-subtitle {
  background-color: #642b73;
  color: white;
  padding: 15px 20px;
  height: 50px;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.form-subtitle {
  margin-bottom: 20px;
}
.text-field-design {
  font-size: 16px;
  width: 400px !important;
  height: auto;
  color: #000000;
}
.info-icon {
  margin-right: 8px;
}
.poppins-medium-italic {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 5px !important;
}

.text-field-div {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 5px;
}

.post-a-job-btn {
  width: 150px !important;
  height: 40px !important;
  background-color: #cf5dc0 !important;
  color: #f9f9f9;
  margin-bottom: 30px;
}
.job-btn {
  background-color: #642b73 !important;
  color: #f9f9f9;
}
</style>
