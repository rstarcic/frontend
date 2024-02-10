<template>
  <div class="main align-center">
    <v-autocomplete
      v-model="searchQuery"
      class="search-bar"
      auto-select-first
      density="comfortable"
      :items="searchOptions"
      label="Search jobs by location or category"
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
    <div class="job-card-container d-flex justify-center align-center">
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
import { categories } from "../utils/category.js";
export default {
  data() {
    return {
      searchQuery: "",
      categories: categories,
      locations: cities,
      selectedLocation: null,
      jobAds: [{}],
      color: "#642b73",
    };
  },
  components: {
    JobCardComponent,
  },
  watch: {
    searchQuery() {
      this.fetchJobs();
    },
  },
  computed: {
    searchOptions() {
      return [...this.locations, ...this.categories];
    },
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    selectLocation(location) {
      this.selectedLocation = location;
      this.fetchJobs();
    },
    async fetchJobs() {
      try {
        let queryParam = "";

        if (this.selectedLocation) {
          queryParam = `?location=${this.selectedLocation}`;
        } else if (this.searchQuery) {
          queryParam = `${queryParam ? "&" : "?"}category=${this.searchQuery}`;
        }
        const response = await this.$apiClient.get(
          `/api/job-seeker/jobs${queryParam}`
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

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  margin: 50px;
  padding-left: 20px;
  background-color: transparent;
}
.job-card-row {
  margin-bottom: 5px !important;
}

@media screen and (max-width: 960px) {
  .job-card-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>