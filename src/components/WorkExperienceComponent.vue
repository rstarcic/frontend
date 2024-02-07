<template>
  <div class="d-flex align-center">
    <div v-for="(entry, index) in workExperiences" :key="index">
      <v-row justify="center">
        <v-col cols="6" xl="5" class="pa-1">
          <v-text-field
            class="text-field-design"
            label="Company Name"
            v-model="entry.company"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" xl="5" class="pa-1">
          <v-text-field
            class="text-field-design"
            label="Job Title"
            v-model="entry.title"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" xl="5" class="pa-1">
          <v-text-field
            class="text-field-design"
            label="Start Date"
            type="date"
            v-model="entry.startDate"
          ></v-text-field>
        </v-col>
        <v-col cols="6" xl="5" class="pa-1">
          <v-text-field
            class="text-field-design"
            label="End Date"
            type="date"
            v-model="entry.endDate"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex align-center justify-center">
          <v-textarea
            class="textarea-design"
            label="Description"
            v-model="entry.description"
            variant="underlined"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" class="pa-1">
          <v-btn
            class="add-btn"
            variant="plain"
            color="#FFFFFF"
            @click="addWorkExperience"
            >Add Work</v-btn
          >
          <v-btn
            class="delete-btn"
            variant="plain"
            color="#FFFFFF"
            @click="removeWorkExperience(index)"
          >
            Delete
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    workData: {
      type: Array,
      default: () => [
        { company: "", title: "", startDate: "", endDate: "", description: "" },
      ],
    },
  },
  data() {
    return {
      workExperiences: this.workData,
    };
  },
  mounted() {
    this.loadWorkExperienceData();
  },
  methods: {
    addWorkExperience() {
      this.workExperiences.push({
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      });
      this.$emit("work-experience-updated", this.workExperiences);
    },
    removeWorkExperience(index) {
      this.workExperiences.splice(index, 1);
      this.$emit("work-experience-updated", this.workExperiences);
    },
    loadWorkExperienceData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user && user.WorkExperience) {
        this.workExperiences = user.WorkExperience;
      }
    },
  },
};
</script>
  
  <style>
.text-field-design {
  font-size: 16px;
  width: fit-content !important;
  height: 48px;
  color: #000000;
}
.textarea-design {
  width: 300px !important;
}
</style>
  