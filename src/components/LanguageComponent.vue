<template>
  <div v-for="(language, index) in languages" :key="index">
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
    <v-row justify="center">
      <v-col cols="6">
        <v-btn
          class="add-btn"
          variant="plain"
          color="#FFFFFF"
          @click="addLanguage"
          >Add Language</v-btn
        >
        <v-btn
          class="delete-btn"
          variant="plain"
          color="#FFFFFF"
          @click="removeLanguage(index)"
          >Delete</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  props: {
    languagesData: {
      type: Array,
      default: () => [{ name: "", proficiency: "" }],
    },
  },
  data() {
    return {
      languages: this.languagesData,
      proficiencyLevels: ["Beginner", "Intermediate", "Advanced", "Native"],
    };
  },
  mounted() {
    this.loadLanguageData();
  },
  methods: {
    addLanguage() {
      this.languages.push({ name: "", proficiency: "" });
      this.$emit("language-updated", this.languages);
    },
    removeLanguage(index) {
      this.languages.splice(index, 1);
      this.$emit("language-updated", this.languages);
    },
    loadLanguageData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user && user.Languages) {
        this.languages = user.Languages;
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
.delete-btn {
  margin: 0px 5px 0px 20px;
}
</style>
  