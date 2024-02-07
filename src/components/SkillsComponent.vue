<template>
  <div>
    <div v-for="(skill, index) in skills" :key="index">
      <v-row>
        <v-col cols="6" xl="10">
          <v-text-field
            class="text-field-design"
            label="Skill"
            v-model="skill.name"
            variant="underlined"
          ></v-text-field> </v-col
      ></v-row>

      <v-row justify="center">
        <v-col cols="6">
          <v-btn
            class="add-btn"
            variant="plain"
            color="#FFFFFF"
            @click="addSkill"
            >Add Skill</v-btn
          >
          <v-btn
            class="delete-btn"
            variant="plain"
            color="#FFFFFF"
            @click="removeSkill(index)"
            >Delete
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    skillsData: {
      type: Array,
      default: () => [{ name: "" }],
    },
  },
  data() {
    return {
      skills: this.skillsData,
    };
  },
  mounted() {
    this.loadSkillData();
  },
  methods: {
    addSkill() {
      this.skills.push({ name: "" });
      this.$emit("skills-updated", this.skills);
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
      this.$emit("skills-updated", this.skills);
    },
    loadSkillData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user && user.Skills) {
        this.skills = user.Skills;
      }
    },
  },
};
</script>
  
  <style>
.text-field-design {
  font-size: 16px;
  width: 250px !important;
  height: 48px;
  color: #000000;
}
</style>
  