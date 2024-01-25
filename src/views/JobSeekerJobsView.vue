<template>
  <div class="d-flex align-center">
    <v-autocomplete
      v-model="searchQuery"
      class="search-bar"
      auto-select-first
      density="comfortable"
      item-props
      placeholder="Search jobs"
      append-inner-icon="mdi-magnify"
      rounded
      theme="light"
      variant="solo"
    ></v-autocomplete>
    <div>
      <v-row class="row-class" no-gutters>
        <v-col cols="4" md="4">
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn class="btn-icon" color="#642b73" v-bind="props">
                <v-icon class="icon" left>mdi-cog</v-icon>
                {{ selectedCategory || "Job category" }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(category, index) in categories"
                :key="index"
                :value="index"
                @click="selectCategory(category)"
              >
                <v-list-item-title>{{ category }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col cols="4" md="4">
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn class="btn-icon" color="#642b73" v-bind="props">
                <v-icon class="icon">mdi-map-marker </v-icon>
                {{ selectedLocation || "Location" }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(location, index) in locations"
                :key="index"
                :value="index"
                @click="selectLocation(location)"
              >
                <v-list-item-title>{{ location }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-cols cols="4" md="4">
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn class="btn-icon" color="#642b73" v-bind="props">
                <v-icon class="icon">mdi-credit-card-outline</v-icon>
                {{ selectedPayment || "Payment" }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(payment, index) in payments"
                :key="index"
                :value="index"
                @click="selectPayment(payment)"
              >
                <v-list-item-title>{{ payment }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-cols>
      </v-row>
    </div>
    <div class="d-flex justify-center align-center">
      <v-row class="align-center">
        <v-row justify="center" class="job-card-row">
          <v-col
            v-for="(job, index) in jobAds"
            :key="index"
            cols="12"
            md="3"
            class="job-card"
          >
            <JobCardComponent :job="job" :color="color"></JobCardComponent>
          </v-col>
        </v-row>
      </v-row>
    </div>
  </div>
</template>

<script>
import JobCardComponent from "../components/JobCardComponent.vue";
export default {
  data() {
    return {
      searchQuery: "",
      categories: [
        "Cleaning",
        "Home Repairs",
        "Gardening",
        "Moving",
        "Childcare",
        "Pet Services",
        "Personal Trainer",
        "Digital Services",
        "Design",
        "Web Development",
        "Writing",
        "Content Editing",
        "Translation",
        "Event Planning",
        "Photography",
        "Catering",
        "Delivery",
        "Tutoring",
        "Consulting",
        "Driving",
      ],
      locations: ["Pula", "Rijeka", "Zagreb", "Split"],
      payments: ["< 30€", "30€ - 50€", "50€ - 70€", "70€ - 100€", "> 100€"],
      selectedCategory: null,
      selectedLocation: null,
      selectedPayment: null,
      jobAds: [
        {
          id: 1,
          title: "Front-End Developer Wanted",
          details: [
            { icon: "mdi-currency-eur", text: "40e/hr" },
            { icon: "mdi-map-marker", text: "Remote" },
            { icon: "mdi-phone", text: "ivan@company.com" },
          ],
        },
        {
          id: 2,
          title: "House Painter",
          details: [
            { icon: "mdi-currency-eur", text: "30e/hr" },
            { icon: "mdi-map-marker", text: "Milanovićeva ulica 23, Zagreb" },
            { icon: "mdi-phone", text: "contact@painter.com" },
          ],
        },
        {
          id: 3,
          title: "Graphic Designer for Logo",
          details: [
            { icon: "mdi-currency-eur", text: "45e/hr" },
            {
              icon: "mdi-map-marker",
              text: "Argonautska ulica 58, Virovitica",
            },
            { icon: "mdi-phone", text: "design@graphics.com" },
          ],
        },
        {
          id: 4,
          title: "Gardening Assistance Required",
          details: [
            { icon: "mdi-currency-eur", text: "25e/hr" },
            { icon: "mdi-map-marker", text: "Istarska ulica, Osijek" },
            { icon: "mdi-phone", text: "gardenhelp@landscaping.com" },
          ],
        },
        {
          id: 5,
          title: "Pet Sitting for the Weekend",
          details: [
            { icon: "mdi-currency-eur", text: "20e/hr" },
            { icon: "mdi-map-marker", text: "Trpinjska cesta 7, Rijeka" },
            { icon: "mdi-phone", text: "petsitter@animals.com" },
          ],
        },
        {
          id: 6,
          title: "Event Planner",
          details: [
            { icon: "mdi-currency-eur", text: "50e/hr" },
            { icon: "mdi-map-marker", text: "Krčka ulica 14, Mali Lošinj" },
            { icon: "mdi-phone", text: "events@planner.com" },
          ],
        },
        {
          id: 7,
          title: "Tutor Needed for Math Tutoring",
          details: [
            { icon: "mdi-currency-eur", text: "35e/hr" },
            { icon: "mdi-map-marker", text: "Zadarska ulica 29, Zadar" },
            { icon: "mdi-phone", text: "mathtutor@education.com" },
          ],
        },
        {
          id: 8,
          title: "Furniture Assembly",
          details: [
            { icon: "mdi-currency-eur", text: "25e/hr" },
            {
              icon: "mdi-map-marker",
              text: "Ulica Eugena Kvaternika, Vinkovci",
            },
            { icon: "mdi-phone", text: "assembly@furniture.com" },
          ],
        },
        {
          id: 9,
          title: "Photographer for Family Event",
          details: [
            { icon: "mdi-currency-eur", text: "50e/hr" },
            { icon: "mdi-map-marker", text: "123 Main Street, Your City" },
            { icon: "mdi-phone", text: "photographer@example.com" },
          ],
        },
      ],
      color: "#642b73",
    };
  },
  components: {
    JobCardComponent,
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    selectLocation(location) {
      this.selectedLocation = location;
    },
    selectPayment(payment) {
      this.selectedPayment = payment;
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-top: 100px;
  width: 600px;
  height: 40px;
}

.row-class {
  margin: 40px 0px 50px 0px !important;
}

.icon {
  padding: 1px 2px 1px 2px;
}

.btn-icon {
  width: 200px;
  margin-left: 10px;
}

.job-card {
  margin: 20px;
}
</style>