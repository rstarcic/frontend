<template>
  <div class="d-flex align-center">
    <v-card class="main-card">
      <v-card-title style="color: #4b1c56">Jobs you have posted</v-card-title>
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
                @click="openJobDetails(job)"
                >View details</v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selectedJob: null,
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
  methods: {
    openJobDetails(job) {
      const jobId = job.id;
      this.$router.push({
        name: "EmployerJobDetailsView",
        params: { id: jobId },
      });
    },
  },
};
</script>

<style>
.main-card {
  margin-top: 50px;
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