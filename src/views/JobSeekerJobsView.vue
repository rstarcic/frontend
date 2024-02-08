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
      <v-row class="row-class">
        <v-col cols="6" md="12">
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn class="btn-icon" color="#642b73" v-bind="props">
                <v-icon class="icon">mdi-map-marker </v-icon>
                {{ selectedLocation || "Location" }}
                <v-icon class="icon" right>mdi-chevron-down</v-icon>
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
      </v-row>
    </div>
    <div class="d-flex">
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
import { cities } from "../utils/location.js";
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
      locations: cities,

      selectedLocation: null,
      jobAds: [{}],
      color: "#642b73",
    };
  },
  components: {
    JobCardComponent,
  },
  mounted() {
    this.fetchJobs();
  },
  computed: {
    filteredJobs() {
      return this.jobAds.filter((job) =>
        job.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    selectLocation(location) {
      this.selectedLocation = location;
      this.fetchJobs();
    },
    async fetchJobs() {
      try {
        let location = "";

        if (this.selectedLocation) {
          location = `?location=${this.selectedLocation}`;
        }
        const response = await this.$apiClient.get(
          `http://localhost:3000/api/job-seeker/jobs${location}`
        );
        if (response.data && response.status === 200) {
          const transformedData = response.data.allJobs.map((job) => ({
            id: job._id,
            title: job.title,
            details: [
              { icon: "mdi-shape", text: job.category },
              { icon: "mdi-currency-eur", text: job.payment },
              { icon: "mdi-map-marker", text: job.location },
              { icon: "mdi-phone", text: job.contactInfo },
            ],
          }));
          this.jobAds = transformedData;
        } else {
          console.log("Jobs fetching failed", response);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-top: 100px;
  width: 500px;
  height: 40px;
}

.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.row-class {
  margin: 40px 0px 50px 0px !important;
}

.icon {
  padding: 5px 10px;
}

.btn-icon {
  width: 200px;
  margin-left: 10px;
  padding: 5px;
}

.job-card {
  margin: 20px;
  padding-left: 20px;
  background-color: transparent;
}
.job-card-row {
  margin-bottom: 5px !important;
}
</style>