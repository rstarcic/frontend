<template>
  <div class="main">
    <v-parallax
      :src="require('@/assets/trafficJam.png')"
      alt="Rush Hour"
      class="customParallax"
    >
      <div>
        <h1 class="title">
          Revolutinizing <br />How You Work <br />
          Find Gigs & <br />
          Gigs Find You
        </h1>
        <v-row class="btnRow">
          <v-btn class="hireBtn" @click="this.$router.push('/signup/employer')"
            >Hire a job seeker</v-btn
          >
          <v-btn class="gigBtn" @click="this.$router.push('/signup/job-seeker')"
            >Find your gig</v-btn
          >
        </v-row>
      </div>
    </v-parallax>

    <div class="d-flex justify-center align-center">
      <v-container>
        <v-row class="align-center">
          <h1 class="title-text">
            Newest <span class="job-color">jobs</span>for you
          </h1>
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
      </v-container>
    </div>
    <div class="d-flex justify-center align-center rectangle-div">
      <div class="rectangle">
        <h1 class="heading-class">Your Next Gig is a Click Away</h1>
        <p class="paragraph-class">
          Don't miss out on your dream gig. Join Jobify today and take the first
          step towards a more flexible, fulfilling, and rewarding work life.
        </p>
        <v-btn
          variant="plain"
          type="submit"
          text
          color="#FFFFFF"
          class="signup-button"
          @click="this.$router.push('/signup/job-seeker')"
          >Join Jobify</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import JobCardComponent from "../components/JobCardComponent.vue";
export default {
  name: "HomeView",
  data: () => ({
    jobAds: [
      {
        id: 1,
        title: "Front-End Developer Wanted",
        details: [
          { icon: "mdi-shape", text: "Web Development" },
          { icon: "mdi-currency-eur", text: "40e/hr" },
          { icon: "mdi-map-marker", text: "Remote" },
          { icon: "mdi-phone", text: "ivan@company.com" },
        ],
      },
      {
        id: 2,
        title: "House Painter",
        details: [
          { icon: "mdi-shape", text: "Painting" },
          { icon: "mdi-currency-eur", text: "30e/hr" },
          { icon: "mdi-map-marker", text: "Milanovićeva ulica 23, Zagreb" },
          { icon: "mdi-phone", text: "contact@painter.com" },
        ],
      },
      {
        id: 3,
        title: "Graphic Designer for Logo",
        details: [
          { icon: "mdi-shape", text: "Graphic Design" },
          { icon: "mdi-currency-eur", text: "45e/hr" },
          { icon: "mdi-map-marker", text: "Argonautska ulica 58, Virovitica" },
          { icon: "mdi-phone", text: "design@graphics.com" },
        ],
      },
      {
        id: 4,
        title: "Gardening Assistance Required",
        details: [
          { icon: "mdi-shape", text: "Gardening" },
          { icon: "mdi-currency-eur", text: "25e/hr" },
          { icon: "mdi-map-marker", text: "Istarska ulica, Osijek" },
          { icon: "mdi-phone", text: "gardenhelp@landscaping.com" },
        ],
      },
      {
        id: 5,
        title: "Pet Sitting for the Weekend",
        details: [
          { icon: "mdi-shape", text: "Pet Service" },
          { icon: "mdi-currency-eur", text: "20e/hr" },
          { icon: "mdi-map-marker", text: "Trpinjska cesta 7, Rijeka" },
          { icon: "mdi-phone", text: "petsitter@animals.com" },
        ],
      },
      {
        id: 6,
        title: "Event Planner",
        details: [
          { icon: "mdi-shape", text: "Event Planning" },
          { icon: "mdi-currency-eur", text: "50e/hr" },
          { icon: "mdi-map-marker", text: "Krčka ulica 14, Mali Lošinj" },
          { icon: "mdi-phone", text: "events@planner.com" },
        ],
      },
      {
        id: 7,
        title: "Tutor Needed for Math Tutoring",
        details: [
          { icon: "mdi-shape", text: "Tutoring" },
          { icon: "mdi-currency-eur", text: "35e/hr" },
          { icon: "mdi-map-marker", text: "Zadarska ulica 29, Zadar" },
          { icon: "mdi-phone", text: "mathtutor@education.com" },
        ],
      },
      {
        id: 8,
        title: "Furniture Assembly",
        details: [
          { icon: "mdi-shape", text: "Furniture Assembly" },
          { icon: "mdi-currency-eur", text: "25e/hr" },
          { icon: "mdi-map-marker", text: "Ulica Eugena Kvaternika, Vinkovci" },
          { icon: "mdi-phone", text: "assembly@furniture.com" },
        ],
      },
      {
        id: 9,
        title: "Photographer for Family Event",
        details: [
          { icon: "mdi-shape", text: "Photography" },
          { icon: "mdi-currency-eur", text: "50e/hr" },
          { icon: "mdi-map-marker", text: "123 Main Street, Your City" },
          { icon: "mdi-phone", text: "photographer@example.com" },
        ],
      },
    ],
    color: "#642b73",
  }),
  components: {
    JobCardComponent,
  },
};
</script>

<style>
.main {
  margin: -15px;
}
.title {
  position: absolute;
  width: 757px;
  height: 578px;
  left: 300px;
  top: 100px;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  display: flex;
  align-items: center;
  color: #f7f8f9;
}

.customParallax {
  height: 1000px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: -25px;
}

.align-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btnRow {
  padding-left: 14%;
  display: none;
}

.hireBtn,
.gigBtn {
  border-radius: 3px;
  height: 35px !important;
  width: 200px;
  top: 665px;
  bottom: 3394px;
  color: #f7f8f9 !important;
}
.hireBtn {
  padding-right: 20px;
  background: linear-gradient(
    180deg,
    #ce9ffc 0%,
    #a582f7 50%,
    rgba(142, 104, 178, 0.9) 100%
  ) !important;
}
.gigBtn {
  padding: 5px;
  background: linear-gradient(
    180deg,
    rgba(5, 3, 1, 0.22) 10.83%,
    rgba(121, 120, 118, 0.27) 47.81%,
    rgba(121, 120, 118, 0.13) 98.85%
  ) !important;
}

.job-card-row {
  display: flex;
  justify-content: center;
  width: 90%;
}

.job-card {
  margin: 20px;
  background-color: transparent !important;
}

.title-text {
  color: #000000;
}
.job-color {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 30px;
  color: #643f7d;
}
.rectangle-div {
  background-color: #f2f2f2;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.rectangle {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background-color: #643f7d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slide-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.heading-class,
.paragraph-class {
  color: #f2f2f2;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
