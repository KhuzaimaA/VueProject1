<template>
  <div
    class="tw-w-full bg tw-min-h-[50vh] tw-flex tw-text-white tw-flex-col tw-justify-center tw-items-center tw-text-center tw-gap-2"
  >
    <h1
      class="tw-text-[18px] max-md:tw-text-[16px] tw-font-normal tw-leading-[18px]"
    >
      Check out your
    </h1>

    <h1
      class="tw-text-[45px] max-md:tw-text-[36px] tw-font-normal tw-leading-[40px]"
    >
      PICTURE PRIVACY
    </h1>
  </div>
  <div
    class="tw-bg-gradient-to-r tw-flex tw-flex-col tw-justify-center tw-from-pink-100 tw-to-sky-100 tw-mx-auto"
  >
    <div
      class="tw-container tw-px-32 max-md:tw-px-6 tw-mx-auto tw-py-16 max-md:tw-py-10"
    >
      <div class="tw-flex tw-flex-col tw-gap-4">
        <div
          class="tw-bg-white tw-w-full tw-shadow-md tw-justify-center tw-rounded-md tw-flex tw-flex-col"
        >
          <h1
            class="tw-font-normal tw-text-[28px] max-md:tw-text-[20px] tw-leading-[38px] tw-pt-3 tw-px-4"
          >
            Picture Privacy Setting
          </h1>
          <hr class="tw-w-full" />
          <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2 tw-px-4">
            <label for="Enter Email" class="tw-font-normal"
              >Profile Picture</label
            >
            <q-select
              outlined
              dense
              v-model="model"
              :options="options"
              label="Open"
              color="pink"
              class="tw-font-normal tw-text-base tw-leading-4"
            />
          </div>
          <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2 tw-px-4">
            <label for="Enter Email" class="tw-font-normal">
              Gallery Image
            </label>
            <q-input
              outlined
              dense
              label="All member"
              v-model="text"
              color="pink"
              class="tw-font-normal tw-text-base tw-leading-4"
            />
          </div>
          <q-btn
            class="tw-bg-[#FB406C] tw-m-4 tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white max-md:tw-w-[100px] tw-w-[120px]"
            >Save</q-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const text = ref("");
const model = ref(null);
const options = ["open", "close"];
</script>
<style scoped>
.bg {
  background-image: url("../assets/HeartBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
