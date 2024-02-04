<template>
  <div>
    <div
      v-for="(entry, index) in educationEntries"
      :key="index"
      class="main-component-div"
    >
      <v-row justify="center">
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Institution"
            v-model="entry.institution"
            variant="underlined"
            :placeholder="entry.institution"
          ></v-text-field>
        </v-col>
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Degree"
            v-model="entry.degree"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Start Year"
            v-model="entry.startYear"
            type="number"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="End Year"
            v-model="entry.endYear"
            type="number"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-col cols="6">
        <v-row class="buttons">
          <v-btn
            class="add-btn"
            tile
            text
            variant="plain"
            color="#FFFFFF"
            @click="addEducation"
            >Add Education</v-btn
          >
          <v-btn
            class="delete-btn"
            text
            variant="plain"
            color="#FFFFFF"
            @click="removeEducation(index)"
          >
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
    educationData: {
      type: Array,
      default: () => [
        { institution: "", degree: "", startYear: "", endYear: "" },
      ],
    },
  },
  data() {
    return {
      educationEntries: this.educationData,
    };
  },
  mounted() {
    this.loadEducationData();
  },
  methods: {
    addEducation() {
      this.educationEntries.push({
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
      });
      this.$emit("education-updated", this.educationEntries);
      console.log("Education data emitted:", this.educationEntries);
    },
    removeEducation(index) {
      this.educationEntries.splice(index, 1);
      this.$emit("education-updated", this.educationEntries);
      console.log("Education data emitted:", this.educationEntries);
    },
    loadEducationData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user && user.Education) {
        this.educationEntries = user.Education;
      }
    },
  },
};
</script>

<style>
.text-field-design {
  font-size: 16px;
  width: 70%;
  height: 48px;
  color: #000000;
}
.main-component-div {
  margin-left: 50px !important;
}

.add-btn,
.delete-btn {
  background-color: #a33594 !important;
  color: #f9f9f9;
}
.delete-btn {
  margin: 0px 5px 0px 20px;
}
</style>
