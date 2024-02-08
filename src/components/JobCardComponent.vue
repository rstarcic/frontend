<template>
  <v-card class="card-style">
    <v-card-title>{{ job.title }}</v-card-title>
    <v-card-text>
      <v-row v-for="(detail, index) in job.details" :key="index">
        <v-col cols="12">
          <div class="detail-row">
            <v-icon :color="iconColor" class="mr-2">{{ detail.icon }}</v-icon>
            <span>{{ detail.text }}</span>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="white" text variant="plain" @click="showJobDetails(job.id)"
        >Show details</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
    iconColor: {
      type: String,
      default: "white",
    },
  },
  methods: {
    showJobDetails(jobId) {
      this.$router.push({
        name: "JobSeekerJobDetailsView",
        params: { id: jobId },
      });
    },
  },
};
</script>

<style scoped>
.detail-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.mr-2 {
  margin-right: 8px;
}
.card-style {
  width: 350px;
  padding: 20px;
}
</style>
