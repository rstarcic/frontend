<template>
  <div>
    <div v-for="(hobby, index) in hobbiesAndInterests" :key="index">
      <v-row>
        <v-col cols="6" xl="5">
          <v-text-field
            class="text-field-design"
            label="Hobby or Interest"
            v-model="hobby.name"
            variant="underlined"
          ></v-text-field> </v-col
      ></v-row>
      <v-row justify="center">
        <v-col cols="6">
          <v-btn
            class="add-btn"
            variant="plain"
            color="#FFFFFF"
            @click="addHobby"
            >Add Hobby</v-btn
          >
          <v-btn
            class="delete-btn"
            variant="plain"
            color="#FFFFFF"
            @click="removeHobby(index)"
            >Delete</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    hobbiesAndInterestsData: {
      type: Array,
      default: () => [{ name: "" }],
    },
  },
  data() {
    return {
      hobbiesAndInterests: this.hobbiesAndInterestsData,
    };
  },
  mounted() {
    this.loadHobbiesAndInterestsData();
  },
  methods: {
    addHobby() {
      this.hobbiesAndInterests.push({ name: "" });
      this.$emit("hobbies-interests-updated", this.hobbiesAndInterests);
    },
    removeHobby(index) {
      this.hobbiesAndInterests.splice(index, 1);
      this.$emit("hobbies-interests-updated", this.hobbiesAndInterests);
    },
    loadHobbiesAndInterestsData() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      if (user && user.HobbiesAndInterests) {
        this.hobbiesAndInterests = user.HobbiesAndInterests;
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

.add-btn,
.delete-btn {
  background-color: #a33594 !important;
  color: #f9f9f9;
}
</style>
  