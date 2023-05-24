<template>
  <div class="tw-w-[100vw]">
    <div
      class="tw-w-full tw-min-h-[50vh]"
      style="
        background: linear-gradient(
          87.57deg,
          #fb406c 0%,
          rgba(234, 20, 126, 0.95) 0%,
          #1baacc 99.61%
        );
      "
    >
      <div
        class="tw-w-full bg tw-min-h-[50vh] tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-gap-4"
      >
        <h1
          class="tw-text-[18px] max-sm:tw-text-[16px] tw-text-white tw-font-[400] tw-leading-[18px]"
        >
          Our Success Stories
        </h1>

        <h1
          class="tw-text-[45px] max-sm:tw-text-[30px] tw-text-white tw-font-[400] tw-leading-[40px]"
        >
          WE PROMISE GOOD MATCH
        </h1>
        <br />
      </div>
    </div>

    <div
      class="tw-w-[70%] tw-flex tw-flex-col tw-gap-4 tw-justify-center tw-items-center tw-pt-16 tw-min-h-[100vh] tw-bg-white tw-mx-auto tw-p-2"
    >
      <h1
        class="tw-relative tw-text-[#FB406C] max-sm:tw-text-[30px] tw-text-5xl tw-font-normal tw-text-center"
      >
        <img
          src="../assets/hearts.svg"
          class="tw-absolute tw-top-[-60%] max-sm:tw-top-[-80%]"
          style="left: -10%"
          alt=""
        />
        Happy Couples
      </h1>
      <p
        class="tw-text-[#444444] tw-text-lg max-sm:tw-text-[16px] tw-font-bold tw-leading-7 tw-text-center"
      >
        Here are some of the couples who have successfully married through our
        Matrimonial events & online services.
      </p>
      <div
        class="tw-grid tw-grid-cols-3 max-lg:tw-grid-cols-2 max-sm:tw-grid-cols-1 tw-justify-items-center tw-w-[95%] tw-gap-8 tw-flex-wrap tw-my-6"
      >
        <successfulStoriesCard :msg="data" />
      </div>
      <div class="q-pa-lg max-sm:tw-w-[105%] tw-mx-auto">
        <div class="q-gutter-md">
          <q-pagination
            v-model="current"
            max="5"
            direction-links
            outline
            class="tw-justify-center"
            color="grey"
            active-design="pushed"
            active-color="pink"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import successfulStoriesCard from "../components/SuccessfulStoriesCard.vue";

const current = ref(1);
const data = [
  {
    id: 1,
    img: new URL(`../assets/couple1.svg`, import.meta.url).href,
    name: "T&R",
  },
  {
    id: 2,
    img: new URL(`../assets/couple2.svg`, import.meta.url).href,
    name: "T&R",
  },
  {
    id: 3,
    img: new URL(`../assets/couple3.svg`, import.meta.url).href,

    name: "T&R",
  },
  {
    id: 4,
    img: new URL(`../assets/couple4.svg`, import.meta.url).href,

    name: "T&R",
  },
  {
    id: 5,
    img: new URL(`../assets/couple1.svg`, import.meta.url).href,

    name: "T&R",
  },
  {
    id: 6,
    img: new URL(`../assets/couple2.svg`, import.meta.url).href,

    name: "T&R",
  },
];
const data2 = [
  {
    id: 1,
    img: new URL(`../assets/member3.svg`, import.meta.url).href,
    text: "Age 60 years, Dubai, UAE Doctor",
    name: "rukshana",
  },
  {
    id: 2,
    img: new URL(`../assets/member4.svg`, import.meta.url).href,

    name: "rukshana",
  },
  {
    id: 3,
    img: new URL(`../assets/member4.svg`, import.meta.url).href,
    text: " Age 26 years, Lahore, Pakistan Graphic Designer",
    name: "rukshana",
  },
  {
    id: 4,
    img: new URL(`../assets/aiyzah.svg`, import.meta.url).href,
    text: " Age 26 years, Lahore, Pakistan Graphic Designer",
    name: "rukshana",
  },
  {
    id: 5,
    img: new URL(`../assets/member2.svg`, import.meta.url).href,
    text: `Age 60 years, Dubai, UAE  Doctor`,
    name: "rukshana",
  },
  {
    id: 6,
    img: new URL(`../assets/member4.svg`, import.meta.url).href,
    text: " Age 56 years, Dubai, UAE Doctor",
    name: "rukshana",
  },
];
const state = ref(false);
function Change() {
  state.value = !state.value;
}
</script>
<style scoped>
.bg {
  background-image: url("../assets/douleHearts.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
