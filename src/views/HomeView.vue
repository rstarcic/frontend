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
          <v-btn class="hireBtn">Hire a job seeker</v-btn>
          <v-btn class="gigBtn">Find your gig</v-btn>
        </v-row>
      </div>
    </v-parallax>
    <div class="d-flex justify-center align-center">
      <v-row> <h1>Looking for a gig to complete?</h1></v-row>
      <v-row> </v-row>
    </div>
    <div class="d-flex justify-center align-center">
      <v-row class="align-center">
        <h1 class="title-text">
          Newest <span class="job-color">jobs</span> for you
        </h1>
        <v-row justify="center" class="job-card-row">
          <v-col
            v-for="(job, index) in jobAds"
            :key="index"
            cols="12"
            md="3"
            class="job-card"
          >
            <v-card class="mx-auto" max-width="344" :color="color" :job="job">
              <v-card-item>
                <div>
                  <div class="text-overline mb-1 custom-text-color">
                    {{ job.title }}
                  </div>
                  <v-list class="list">
                    <v-list-item
                      v-for="(detail, detailIndex) in job.details"
                      :key="detailIndex"
                    >
                      <v-list-item-icon>
                        <v-icon class="custom-text-color">{{
                          detail.icon
                        }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content class="custom-text-color">
                        {{ detail.text }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-card-item>
              <v-card-actions>
                <v-btn class="apply-btn" variant="flat"> Apply </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </div>
    <div class="d-flex justify-center align-center rectangle-div">
      <div class="rectangle">
        <h1 class="heading-class">Your Next Gig is a Click Away</h1>
        <p>
          Don't miss out on your dream gig. Join Jobify today and take the first
          step towards a more flexible, fulfilling, and rewarding work life.
        </p>
        <v-btn elevation="1" tile outlined class="signup-button" to="/signup"
          >Join Jobify</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    activeStep: 1,
    features: [
      {
        title: "Post a Gig",
        text: "Posting a job on Jobify is both free and effortless. Just provide a title and budget and competitive bids come within minutes.",
        icon: "mdi-briefcase",
      },
      {
        title: "Choose your performer",
        text: "We believe that every task deserves the perfect performer. Whether your project is big or small, simple or complex, we've got a diverse pool of talented job seekers ready to bring your ideas to life.",
      },
      {
        title: "Secure payments",
        text: "Rest assured, you only pay for the work once it's been successfully completed, and you're fully content with the results. ",
      },
      {
        title: "Generate Contract Documents",
        text: "Jobify allows you to generate contract documents, making it easier to formalize your working agreements.",
      },
    ],
    featureTitles: ["Step 1", "Step 2", "Step 3"],
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
          { icon: "mdi-map-marker", text: "Argonautska ulica 58, Virovitica" },
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
          { icon: "mdi-map-marker", text: "Ulica Eugena Kvaternika, Vinkovci" },
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
  }),
  methods: {
    isActiveStep(step) {
      return step === this.activeStep;
    },
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
  height: 900px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: -25px;
}

.title2 {
  position: absolute;
  width: 980px;
  height: 56px;
  left: 231px;
  top: 52px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #f7f8f9;
}

.align-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btnRow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.hireBtn,
.gigBtn {
  border-radius: 3px;
  height: 35px !important;
  display: inline-flex;
  width: 180px;
  right: 480px;
  top: 665px;
  bottom: 3394px;
  margin-left: 15px;
  color: #f7f8f9 !important;
}
.hireBtn {
  background: linear-gradient(
    180deg,
    #ce9ffc 0%,
    #a582f7 50%,
    rgba(142, 104, 178, 0.9) 100%
  ) !important;
  margin-left: 400px;
}
.gigBtn {
  background: linear-gradient(
    180deg,
    rgba(5, 3, 1, 0.22) 10.83%,
    rgba(121, 120, 118, 0.27) 47.81%,
    rgba(121, 120, 118, 0.13) 98.85%
  ) !important;
}

.feature-card {
  height: 100%;
  width: max-content;
  margin-bottom: 20px;
}
.job-card-row {
  width: 75%;
  margin-left: 300px !important;
}

.job-card {
  padding: 20px;
}
.mx-auto {
  background-color: #643f7d !important;
  color: #f7f8f9 !important;
}

.list,
.mx-auto2 {
  background-color: #643f7d !important;
}

.title-text {
  color: #000000;
}
.job-color {
  color: #643f7d;
}
.custom-text-color {
  color: #f7f8f9;
}

.rectangle {
  position: absolute;
  left: 0;
  right: 0;
  height: 250px;
  background-color: #ffffff;
  padding: 20px 100px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  margin-bottom: 50px;
}

.rectangle-div {
  margin-top: 250px;
}
</style>
