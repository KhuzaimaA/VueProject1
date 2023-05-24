<template>
  <div class="tw-bg-white tw-px-10 tw-py-8">
    <div class="tw-container tw-mx-auto tw-h-auto tw-shadow-md">
      <div
        class="tw-flex md:tw-justify-around max-sm:tw-justify-center tw-items-center"
      >
        <div>
          <q-img
            class="max-sm:tw-hidden lg:tw-flex"
            src="../assets/login-cover-image.svg"
            alt=""
            style="height: 103vh; width: 40vw"
          />
        </div>
        <div class="max-sm-w-full lg:tw-w-4/5">
          <div
            class="tw-flex tw-flex-col tw-mx-auto max-sm-w-full lg:tw-w-9/12 tw-p-4 tw-gap-1"
          >
            <h1
              class="tw-text-center tw-font-normal tw-text-[35px] tw-leading-[42px] tw-font-serif lg:tw-pb-2 max-sm:tw-pb-2"
            >
              Register Now
            </h1>
            <div class="tw-flex tw-gap-3">
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="tw-font-normal">
                  First Name
                </label>
                <q-input
                  outlined
                  dense
                  color="pink"
                  v-model="text"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="tw-font-normaltext-sm"
                  >Last Name</label
                >
                <q-input
                  outlined
                  color="pink"
                  dense
                  v-model="text1"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
            </div>
            <label for="Enter Email" class="tw-font-normal">Enter Email</label>
            <q-input
              outlined
              dense
              color="pink"
              v-model="text2"
              class="tw-font-normal tw-text-base tw-leading-4"
            />
            <label for="Enter Email" class="tw-font-normal">Password</label>
            <q-input
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              outlined
              dense
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
            <label for="Enter Email" class="tw-font-normal"
              >Confirm Password</label
            >
            <q-input
              v-model="confirmpassword"
              :type="isconfPwd ? 'password' : 'text'"
              outlined
              dense
              color="pink"
              class="tw-font-normal tw-text-base tw-leading-4"
            >
              <template v-slot:append>
                <q-icon
                  :name="isconfPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  size="xs"
                  @click="isconfPwd = !isconfPwd"
                />
              </template>
            </q-input>
            <div class="tw-flex tw-gap-4 tw-font-normal">
              <q-radio
                v-model="shape"
                dense
                val="Male"
                label="Male"
                color="pink"
                size="xs"
                class="lg:tw-text-[16px] max-sm:text-[14px]"
              />
              <q-radio
                v-model="shape"
                val="Female"
                label="Female"
                dense
                size="xs"
                color="pink"
                class="lg:tw-text-[16px] max-sm:text-[14px]"
              />
            </div>
            <div class="tw-flex tw-align-center tw-gap-3 tw-py-1">
              <q-checkbox v-model="val" dense color="pink" size="sm" />
              <p class="tw-font-normal tw-text-[14px] max-sm:tw-text-[13px]">
                By clicking Register Now you agree to our
                <a href="#" class="tw-text-[#fb406c]">terms and conditions</a>
              </p>
            </div>

            <q-btn
              class="tw-text-[14px] tw-leading-[22px] tw-font-normal tw-bg-[#fb406c] tw-justify-center tw-h-11 tw-flex tw-text-white tw-rounded"
              >Register</q-btn
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
              Already Member?
              <router-link to="/login" class="tw-text-[#fb406c]"
                >Login here</router-link
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
const text1 = ref("");
const text2 = ref("");
const password = ref("");
const isPwd = ref(true);
const confirmpassword = ref("");
const isconfPwd = ref(true);
const val = ref(true);
const shape = ref("Male");
</script>

<style scoped></style>
