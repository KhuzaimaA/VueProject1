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
        class="tw-w-full bg tw-min-h-[50vh] tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-gap-2"
      >
        <h1
          class="tw-text-[18px] max-sm:tw-text-[16px] tw-text-white tw-font-[400] tw-leading-[18px]"
        >
          Our Members
        </h1>

        <h1
          class="tw-text-[45px] tw-text-white tw-font-[400] max-sm:tw-text-[30px] tw-leading-[40px]"
        >
          Start Looking For You Partner
        </h1>
        <br />
        <p class="tw-text-[16px] tw-text-white tw-font-[400] max-sm:tw-text-[14px] tw-leading-[27px]">
          Search your match based on your interests and don’t hesitate to
          approach them first. Interact with as <br />
          many people as possible.
        </p>
      </div>
    </div>

    <div
      class="tw-w-[55%] max-sm:tw-w-[70%] tw-min-h-[100vh] tw-bg-white tw-mx-auto tw-p-2"
    >
      <q-input
        class="tw-shadow-md  tw-mx-auto tw-mt-5 tw-pl-[40px] tw-rounded-md tw-flex tw-justify-between tw-relative placeholder:tw-text-[#757575]"
        color="pink"
        v-model="model"
        placeholder="Search Members.."
      >
        <div
          v-if="state"
          class="tw-max-w-[300px] w-full tw-p-2 tw-rounded-bl-md tw-flex tw-gap-5 tw-justify-center tw-flex-col tw-items-center tw-rounded-br-md tw-min-h-[600px] tw-py-6 tw-shadow-md tw-bg-white tw-absolute tw-top-[110%] tw-right-[0%] tw-z-[1]"
          style="
            border-top: 5px solid #fb406c;
            border-bottom: 0.2px solid #969696;
            border-left: 0.2px solid #969696;
            border-right: 0.2px solid #969696;
          "
        >
          <h1
            class="tw-text-[12px] tw-text-[#fb406c] tw-h-[20px] tw-flex tw-justify-center tw-items-center tw-font-[400] tw-self-start tw-p-1"
          >
            Fliters
          </h1>
          <q-select
            v-model="model2"
            outlined

         stack-label
            label="Age From "
            :options="stringOptions"
            style="width: 250px"
            behavior="menu"
            color="pink"
          >
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
        </q-select>

          <q-select
            v-model="model3"
            outlined
         stack-label
            label="Marital Status "
            :options="stringOptions"
            style="width: 250px"
            behavior="menu"
            color="pink">
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
          </q-select>
          <q-select
            v-model="model4"
            outlined
         stack-label
            label="Caste"
            :options="stringOptions"
            style="width: 250px"
            behavior="menu"
            color="pink">
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
          </q-select>
          <q-select
            v-model="model5"
            outlined
         stack-label
            label="Job Title "
            :options="stringOptions"
            style="width: 250px"
            behavior="menu"
            color="pink">
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
          </q-select><q-select
            v-model="model6"
            outlined
         stack-label
            label="Hight(feet) "
            :options="stringOptions"
            style="width: 250px"
            behavior="menu"
            color="pink">
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
          </q-select>
          <q-select
            v-model="model7"
            outlined
         stack-label
            label="Education "
            :options="stringOptions"
            style="width: 250px"
            behavior="menu"
            color="pink">
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
          </q-select>
          <q-select
            v-model="model8"
            outlined
         stack-label
            label="Nationality "
            :options="stringOptions2"
            style="width: 250px"
            behavior="menu"
            color="pink">
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
          </q-select>
          <q-select
            v-model="model9"
            outlined
         stack-label
            label="Country "
            :options="stringOptions"
            style="width: 250px"
            behavior="menu"
            color="pink">
         <input :dense="dense" disable readonly placeholder=" select.." borderless   color="white" class=" tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[15%] tw-left-[-2%] tw-border-none placeholder:tw-text-[10px] placeholder:tw-text-[#AFAFAF]"/>
          </q-select>
          <q-btn
            class="tw-bg-[#FB406C] tw-text-white tw-block tw-w-full tw-max-w-[250px] tw-text-[16px] tw-text-center tw-capitalize tw-font-[700]"
            >Apply</q-btn
          >
        </div>
        <i
          class="fa fa-solid fa-magnifying-glass tw-absolute tw-left-[-3%] max-lg:tw-left-[-4%] max-md:tw-left-[-8%] max-sm:tw-left-[-10%] tw-top-[43%]"
        ></i>
        <q-img
          src="../assets/Filter.svg"
          class="tw-w-[50px] tw-rounded-md tw-m-2 tw-cursor-pointer"
          @click.stop="Change()"
        />
      </q-input>
      <div
        class=" tw-grid tw-grid-cols-3   max-lg:tw-grid-cols-2 max-md:tw-grid-cols-1 tw-justify-items-center tw-w-[100%] tw-mx-auto tw-gap-2 tw-flex-wrap tw-my-6"
      >
        <MemberCard
          v-if="current == 1 || current == 3 || current == 5"
          :msg="data"
        />
        <MemberCard v-if="current == 2 || current == 4" :msg="data2" />
      </div>
      <div class="q-pa-lg  max-sm:tw-w-[105%] tw-mx-auto">
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
import MemberCard from "../components/MemberCard.vue";
import { colors } from 'quasar'
const { getPaletteColor } = colors
const model2 = ref("");
const model4 = ref("");
const model5 = ref("");
const model6 = ref("");
const model7 = ref("");
const model8 = ref("");
const model9 = ref("");

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const stringOptions2 = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const model3 = ref("");
const model = ref("");
const current = ref(1);
const data = [
  {
    id: 1,
    img: new URL(`../assets/member2.svg`, import.meta.url).href,
    text: "Age 60 years, Dubai, UAE Doctor",
    name: "rukshana",
  },
  {
    id: 2,
    img: new URL(`../assets/aiyzah.svg`, import.meta.url).href,
    text: `Age 60 years, Dubai, UAE  Doctor`,
    name: "rukshana",
  },
  {
    id: 3,
    img: new URL(`../assets/member3.svg`, import.meta.url).href,
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
    img: new URL(`../assets/member3.svg`, import.meta.url).href,
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
    text: `Age 60 years, Dubai, UAE  Doctor`,
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
  console.log(getPaletteColor('pink-1'));
  state.value = !state.value;
}
</script>
<style >
.bg {
  background-image: url("../assets/douleHearts.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.q-field__label{
    top: 0%;
    background-color: white;
    padding: 4px; color: #444444;
    font-family: 'Helvetica';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
}
.q-field--auto-height .q-field__control {
  min-height: 30px; max-height: 40px;
}
.q-field__marginal{
  height: 40px;
}
.q-field--outlined .q-field__control {

  padding: 0 12px;
}
.q-field--auto-height.q-field--labeled .q-field__control-container {
  padding-top: 10px;
}

.q-field__native span{
  background-color: white;
}
</style>
