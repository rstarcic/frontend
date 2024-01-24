<template>
  <div>
    <div
      v-for="(language, index) in languages"
      :key="index"
      class="main-component-div"
    >
      <v-row>
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Language"
            v-model="language.name"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="6" xl="5">
          <v-select
            class="text-field-design"
            label="Proficiency"
            :items="proficiencyLevels"
            v-model="language.proficiency"
            variant="underlined"
          ></v-select>
        </v-col>
      </v-row>
      <v-col cols="6">
        <v-row>
          <v-btn class="add-btn" @click="addLanguage">Add Language</v-btn>
          <v-btn class="delete-btn" @click="removeLanguage(index)"
            >Delete</v-btn
          >
        </v-row>
      </v-col>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      languages: [{ name: "", proficiency: "" }],
      proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Native"],
    };
  },
  methods: {
    addLanguage() {
      this.languages.push({ name: "", proficiency: "" });
    },
    removeLanguage(index) {
      this.languages.splice(index, 1);
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
.delete-btn {
  margin: 0px 5px 0px 20px;
}
</style>
  