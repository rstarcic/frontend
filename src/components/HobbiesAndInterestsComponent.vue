<template>
  <div>
    <div
      v-for="(hobby, index) in hobbiesAndInterests"
      :key="index"
      class="main-component-div"
    >
      <v-row>
        <v-col cols="6" xl="10">
          <v-text-field
            class="text-field-design"
            label="Hobby or Interest"
            v-model="hobby.name"
            variant="underlined"
          ></v-text-field> </v-col
      ></v-row>
      <v-col cols="6">
        <v-row>
          <v-btn class="add-btn" @click="addHobby">Add Hobby</v-btn>
          <v-btn class="delete-btn" @click="removeHobby(index)">Delete</v-btn>
        </v-row>
      </v-col>
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
  methods: {
    addHobby() {
      this.hobbiesAndInterests.push({ name: "" });
      this.$emit("hobbies-interests-updated", this.hobbiesAndInterests);
    },
    removeHobby(index) {
      this.hobbiesAndInterests.splice(index, 1);
      this.$emit("hobbies-interests-updated", this.hobbiesAndInterests);
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
  