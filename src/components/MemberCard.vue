<template>
  <div
    class="tw-flex tw-flex-col tw-bg-white tw-shadow-md w-full inner-div4 tw-w-full tw-max-w-[250px] tw-rounded-[10px] tw-overflow-hidden"
    v-for="items in props.msg"
    :key="items.id"
  >
    <q-img :src="items.img" alt="" />
    <div class="tw-flex tw-flex-col tw-gap-4 tw-bg-white">
      <div class="tw-flex tw-w-full tw-p-2 tw-justify-between tw-items-center">
        <q-h1 class="tw-text-xl tw-leading-7 tw-font-bold tw-text-gray-800">
          {{ items.name }}
        </q-h1>
        <router-link to="/member-profile">
          <p class="tw-text-sm tw-leading-7 tw-font-normal tw-text-green-500">
            View Profile
          </p>
        </router-link>
      </div>
      <div class="tw-self-start tw-p-2 tw-h-[50px]">{{ items.text }}</div>
      <q-btn
        class="tw-flex tw-bg-[#FB406C] tw-text-white tw-text-base tw-leading-7 tw-font-normal tw-p-3 tw-gap-2 tw-items-center tw-justify-center"
      >
        Send message
      </q-btn>
    </div>
    <div class="tw-grid tw-grid-cols-2">
      <q-btn
        class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center tw-border-solid tw-border-[#d92047] tw-border-b-[1px] tw-border-l-[1px] tw-rounded-bl-[10px]"
      >
        <i class="fa fa-solid fa-xmark" style="color: #d92047"></i>
      </q-btn>
      <q-btn
        class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center tw-border-solid tw-border-[#1baacc] tw-border-b-[1px] tw-border-l-[1px] tw-border-r-[1px] tw-rounded-br-[10px]"
      >
        <i class="fa fa-solid fa-heart" style="color: #1baacc"></i>
      </q-btn>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["msg"]);
</script>
