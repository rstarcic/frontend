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
          <v-btn class="add-btn" @click="addEducation">Add Education</v-btn>
          <v-btn class="delete-btn" @click="removeEducation(index)">
            Delete
          </v-btn>
        </v-row>
      </v-col>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      educationEntries: [
        { institution: "", degree: "", startYear: "", endYear: "" },
      ],
    };
  },
  methods: {
    addEducation() {
      this.educationEntries.push({
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
      });
    },
    removeEducation(index) {
      this.educationEntries.splice(index, 1);
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

.delete-btn {
  margin: 0px 5px 0px 20px;
}
</style>
