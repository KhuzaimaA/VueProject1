<template>
  <div class="tw-bg-white tw-px-10 tw-py-8">
    <div class="tw-container tw-mx-auto tw-h-auto tw-shadow-md">
      <div
        class="tw-flex md:tw-justify-around max-sm:tw-justify-center tw-items-center tw-gap-2"
      >
        <div>
          <q-img
            class="max-sm:tw-hidden lg:tw-flex"
            src="../assets/login-cover-image.svg"
            alt=""
            style="height: 85vh; width: 40vw"
          />
        </div>
        <div class="max-sm-w-full lg:tw-w-4/5">
          <div
            class="tw-flex tw-flex-col tw-mx-auto max-sm-w-full lg:tw-w-9/12 tw-p-4 tw-gap-2"
          >
            <h1
              class="tw-text-center tw-font-normal tw-text-[35px] tw-leading-[42px] tw-font-serif"
            >
              Login
            </h1>
            <label for="Enter Email" class="tw-font-normal">Enter Email</label>
            <q-input
              outlined
              dense
              color="pink"
              v-model="text"
              label="Email"
              class="tw-font-normal tw-text-base tw-leading-4"
            />
            <label for="Enter Email" class="tw-font-normal">Password</label>
            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              outlined
              dense
              label="password"
              color="pink"
              class="tw-font-normal tw-text-base tw-leading-4"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                  size="xs"
                />
              </template>
            </q-input>
            <a href="#" class="tw-text-right tw-font-normal text-sm tw-py-1"
              >Forget Password?</a
            >

            <q-btn
              class="tw-text-[14px] tw-leading-[22px] tw-font-normal label tw-bg-[#fb406c] tw-justify-center tw-h-11 tw-flex tw-text-white tw-rounded"
              >Login</q-btn
            >

            <div
              class="tw-font-normal tw-text-center tw-flex tw-justify-center tw-gap-2 tw-my-2"
            >
              <hr class="tw-border tw-w-full tw-my-3" />
              <p class="tw-text-[#94a7af]">OR</p>
              <hr class="tw-border tw-w-full tw-my-3" />
            </div>

            <div class="tw-flex lg:tw-flex-nowrap max-md:tw-flex-wrap tw-gap-2">
              <q-btn
                class="tw-bg-[#2066b9] tw-text-[12px] max-lg:tw-text-[10px] tw-font-bold tw-w-full tw-justify-center tw-h-10 tw-flex tw-text-white tw-rounded"
              >
                <q-img
                  class="tw-w-4 tw-mr-4"
                  src="../assets/facebook-icon.svg"
                  alt=""
                />
                Login with Facebook
              </q-btn>
              <q-btn
                class="tw-bg-[#d92047] tw-text-[12px] max-lg:tw-text-[10px] tw-font-bold tw-w-full tw-justify-center tw-h-10 tw-flex tw-text-white tw-rounded"
              >
                <q-img
                  class="tw-w-4 tw-mr-4"
                  src="../assets/gmail-icon.svg"
                  alt=""
                />
                Login with Google
              </q-btn>
            </div>
            <p
              class="tw-text-center tw-font-normal lg:tw-text-[16px] max-sm:text-[14px] tw-py-3"
            >
              New Member?
              <router-link to="/register" class="tw-text-[#fb406c]"
                >Register Now</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
const password = ref("");
const isPwd = ref(true);
</script>

<style scoped></style>
