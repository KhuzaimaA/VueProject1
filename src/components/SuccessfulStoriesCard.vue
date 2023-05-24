<template>
  <div
    class="tw-flex tw-flex-col tw-bg-white tw-shadow-md tw-w-full inner-div5 tw-max-w-[300px] tw-rounded-[10px] tw-overflow-hidden"
    v-for="items in props.msg"
    :key="items.id"
  >
    <q-img :src="items.img" alt="" />
    <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
      <div class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center">
        <h1 class="tw-text-xl tw-leading-7 tw-font-bold tw-text-gray-800">
          {{ items.name }}
        </h1>
        <q-span class="tw-text-[#1baacc]">
          <i class="fa fa-regular fa-clock" style="color: #1baacc"></i>
          Mar 28,2023</q-span
        >
      </div>
      <h6
        class="tw-self-start tw-px-2 tw-text-sm tw-leading-7 tw-font-normal tw-text-gray-800"
      >
        We both met through the SME platform, and I have to say that the team
        they have and the comfort you feel when dealing ... <br />
      </h6>

      <router-link to="/stories-description">
        <q-btn
          class="tw-flex tw-bg-red-500 tw-text-white tw-w-full tw-p-2 tw-gap-2 tw-items-center tw-justify-center"
        >
          View Details
        </q-btn>
      </router-link>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["msg"]);
</script>
