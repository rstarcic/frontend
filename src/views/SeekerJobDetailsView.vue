<template>
  <div class="d-flex align-center job-detail-card">
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
        <v-btn color="#050301" @click="applyForJob(job.id)">Apply</v-btn>
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
          applicationDeadline: "2024-05-01",
          workConditions: "Working hours from 9 to 17h",
          createdBy: "Ivan Ivanović",
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
          createdBy: "Marko Marković",
        },
        {
          id: 3,
          category: "Design",
          title: "Graphic Designer for Logo",
          description:
            "Seeking a creative graphic designer to develop a unique logo for our new brand.",
          jobType: "Freelance",
          location: "Argonautska ulica 58, Virovitica",
          payment: "45€/h",
          paymentMethod: "PayPal",
          duration: "1 month",
          qualifications:
            "Strong portfolio in graphic design, especially in logo creation.",
          equipmentNeeded: false,
          contactInfo: "design@graphics.com",
          applicationDeadline: "2024-05-20",
          workConditions: "Remote, flexible hours",
          createdBy: "Ana Anić",
        },
        {
          id: 4,
          category: "Gardening",
          title: "Gardening Assistance Required",
          description:
            "Need help with regular garden maintenance including planting, weeding, and landscaping.",
          jobType: "Part-time",
          location: "Istarska ulica, Osijek",
          payment: "25€/h",
          paymentMethod: "Cash",
          duration: "3 months",
          qualifications:
            "Previous gardening experience, knowledge of plants and gardening techniques.",
          equipmentNeeded: false,
          contactInfo: "gardenhelp@landscaping.com",
          applicationDeadline: "2024-03-31",
          workConditions: "Weekend work required",
          createdBy: "Iva Ivanić",
        },
        {
          id: 5,
          category: "Pet Care",
          title: "Pet Sitting for the Weekend",
          description:
            "Looking for a responsible and caring pet sitter to take care of pets over the weekend.",
          jobType: "Temporary",
          location: "Trpinjska cesta 7, Rijeka",
          payment: "20€/h",
          paymentMethod: "Bank Transfer",
          duration: "Weekend",
          qualifications:
            "Experience in pet care, especially with dogs and cats.",
          equipmentNeeded: false,
          contactInfo: "petsitter@animals.com",
          applicationDeadline: "2024-06-30",
          workConditions: "Must be comfortable with pets",
          createdBy: "Pet Care Ltd.",
        },
        {
          id: 6,
          category: "Event Management",
          title: "Event Planner",
          description:
            "Experienced event planner needed for organizing and managing corporate events.",
          jobType: "Freelance",
          location: "Krčka ulica 14, Mali Lošinj",
          payment: "50€/h",
          paymentMethod: "PayPal",
          duration: "Varies per event",
          qualifications: "Proven experience in event planning and management.",
          equipmentNeeded: false,
          contactInfo: "events@planner.com",
          applicationDeadline: "2024-07-15",
          workConditions: "Flexible hours, must be available on weekends",
          createdBy: "Events Co.",
        },
        {
          id: 7,
          category: "Education",
          title: "Tutor Needed for Math Tutoring",
          description:
            "Seeking a skilled math tutor to provide lessons for high school students.",
          jobType: "Part-time",
          location: "Zadarska ulica 29, Zadar",
          payment: "35€/h",
          paymentMethod: "Cash",
          duration: "6 months",
          qualifications:
            "Strong background in mathematics, teaching experience preferred.",
          equipmentNeeded: false,
          contactInfo: "mathtutor@education.com",
          applicationDeadline: "2024-08-01",
          workConditions: "After school hours, flexible scheduling",
          createdBy: "Math Academy",
        },
        {
          id: 8,
          category: "General Labor",
          title: "Furniture Assembly",
          description:
            "Looking for individuals skilled in furniture assembly for various projects.",
          jobType: "One-time job",
          location: "Ulica Eugena Kvaternika, Vinkovci",
          payment: "25€/h",
          paymentMethod: "Bank Transfer",
          duration: "Varies per project",
          qualifications:
            "Experience with furniture assembly, attention to detail.",
          equipmentNeeded: true,
          contactInfo: "assembly@furniture.com",
          applicationDeadline: "2024-09-10",
          workConditions: "Physical work, ability to lift heavy objects",
          createdBy: "Furniture Assembly Services",
        },
        {
          id: 9,
          category: "Photography",
          title: "Photographer for Family Event",
          description:
            "Professional photographer needed for capturing a family event.",
          jobType: "Freelance",
          location: "123 Main Street, Your City",
          payment: "€/h",
          paymentMethod: "PayPal",
          duration: "1 day",
          qualifications:
            "Experience in event photography, portfolio required.",
          equipmentNeeded: false,
          contactInfo: "photographer@example.com",
          applicationDeadline: "2024-10-05",
          workConditions: "Weekend work, outdoor and indoor photography",
          createdBy: "Your City Photography",
        },
      ],
    };
  },
  created() {
    this.fetchJobDetails();
  },
  methods: {
    fetchJobDetails() {
      const jobId = this.$route.params.id;
      this.job = this.jobs.find((job) => job.id === parseInt(jobId));
    },
    applyForJob() {
      this.isDialogOpen = true;
    },
  },
};
</script>
  
<style>
.card-style {
  margin-top: 50px;
  width: 50%;
}
.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.info-icon {
  margin-right: 10px;
  color: #642b73;
}

p {
  margin: 0 10px 0 0;
  font-weight: bold;
  font-size: 16px;
}
.application-dialog .v-card {
  background-color: #474343;
  color: white;
  border-radius: 5px;
}

.dialog-title {
  background-color: #a582f7;
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
</style>