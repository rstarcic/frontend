<template>
  <div>
    <div
      v-for="(entry, index) in workExperiences"
      :key="index"
      class="main-component-div"
    >
      <v-row justify="center">
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Company Name"
            v-model="entry.company"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Job Title"
            v-model="entry.title"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Start Date"
            type="date"
            v-model="entry.startDate"
          ></v-text-field>
        </v-col>
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="End Date"
            type="date"
            v-model="entry.endDate"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-col cols="6" xl="5">
        <v-textarea
          class="textarea-design"
          label="Description"
          v-model="entry.description"
          variant="underlined"
        ></v-textarea>
      </v-col>

      <v-col cols="6">
        <v-row>
          <v-btn class="add-btn" @click="addWorkExperience">Add Work</v-btn>
          <v-btn class="delete-btn" @click="removeWorkExperience(index)">
            Delete
          </v-btn>
        </v-row>
      </v-col>
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
  },
};
</script>
  
  <style>
.main-component-div {
  margin-left: 50px !important;
}
.text-field-design {
  font-size: 16px;
  width: 70%;
  height: 48px;
  color: #000000;
}
.textarea-design {
  width: 250 !important;
}
.delete-btn {
  margin: 0px 5px 0px 20px;
}
</style>
  