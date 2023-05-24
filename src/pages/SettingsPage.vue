<template>
  <div
    class="tw-w-full bg tw-min-h-[50vh] tw-flex tw-text-white tw-flex-col tw-justify-center tw-items-center tw-text-center tw-gap-2"
  >
    <h1
      class="tw-text-[45px] max-md:tw-text-[36px] tw-font-normal tw-leading-[40px]"
    >
      Save Card
    </h1>
  </div>
  <div
    class="tw-bg-gradient-to-r tw-flex tw-from-pink-100 tw-to-sky-100 tw-mx-auto"
  >
    <div
      class="tw-container tw-px-20 max-md:tw-px-8 tw-mx-auto tw-py-16 max-md:tw-py-10"
    >
      <div class="tw-flex tw-gap-4 max-lg:tw-flex-wrap">
        <div
          class="tw-bg-white max-lg:tw-w-full lg:tw-w-1/3 tw-h-[340px] tw-shadow-md tw-rounded-md tw-flex tw-flex-col"
        >
          <h1
            class="tw-font-normal tw-text-[38px] max-md:tw-text-[28px] tw-leading-[54px] tw-pt-2 tw-px-3"
          >
            Settings menu
          </h1>
          <hr class="tw-w-full" />
          <q-tabs
            v-model="tab"
            class="tw-px-3"
            active-bg-color="pink"
            active-color="white"
            vertical
            align="left"
          >
            <q-tab
              name="paymentstatus"
              class="tw-rounded-md tw-my-3"
              label="Payment method connection status"
            />
            <q-tab
              name="changepassword"
              label="Change Password"
              class="tw-rounded-md tw-my-3"
            />
            <q-tab
              name="feedback"
              class="tw-rounded-md tw-my-3"
              label="Feedback"
            />
            <q-tab
              name="closeaccount"
              class="tw-rounded-md tw-my-3"
              label="Close Account"
            />
          </q-tabs>
        </div>
        <div
          class="tw-bg-white tw-w-full tw-shadow-md tw-rounded-md tw-flex tw-flex-col"
        >
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="paymentstatus">
              <h1
                class="tw-font-normal tw-text-[28px] max-md:tw-text-[20px] tw-leading-[38px]"
              >
                Payments
              </h1>
              <hr class="tw-w-full" />
              <q-tabs
                v-model="tab"
                dense
                class="tw-text-[#717172]"
                active-color="pink"
                indicator-color="pink"
                align="left"
                narrow-indicator
              >
                <q-tab name="paymentstatus" label="Payment Method" />
                <q-tab name="transaction" label="Transactions" />
              </q-tabs>
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-py-3">
                <label for="Enter Email" class="tw-font-normal">
                  Card Name
                </label>
                <q-input
                  outlined
                  dense
                  label="Enter current password"
                  v-model="text"
                  color="pink"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <div class="tw-w-full tw-py-2">
                <q-input
                  outlined
                  dense
                  label="Card Number"
                  v-model="text1"
                  color="pink"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <q-btn
                class="tw-bg-[#FB406C] tw-mt-5 tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white max-md:tw-w-[120px] tw-w-[160px]"
                >Save</q-btn
              >
            </q-tab-panel>
            <q-tab-panel name="transaction">
              <h1
                class="tw-font-normal tw-text-[28px] max-md:tw-text-[20px] tw-leading-[38px]"
              >
                Payments
              </h1>
              <hr class="tw-w-full" />
              <q-tabs
                v-model="tab"
                dense
                class="tw-text-[#717172]"
                active-color="pink"
                indicator-color="pink"
                align="left"
                narrow-indicator
              >
                <q-tab name="paymentstatus" label="Payment Method" />
                <q-tab name="transaction" label="Transactions" />
              </q-tabs>
              <div class="tw-py-2 tw-flex tw-flex-col tw-gap-4">
                <q-table
                  :rows="rows"
                  :columns="columns"
                  row-key="name"
                  class="my-sticky-header-table tw-bg-[#F3F4F6]"
                  flat
                  hide-bottom
                >
                  <template v-slot:body="props">
                    <q-tr :props="props" class="tw-bg-white">
                      <q-td key="name">
                        {{ props.row.name }}
                      </q-td>
                      <q-td key="relation">
                        {{ props.row.relation }}
                      </q-td>
                      <q-td key="age">
                        {{ props.row.age }}
                      </q-td>
                      <q-td key="gender">
                        {{ props.row.gender }}
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
              </div>
              <q-btn
                class="tw-bg-[#FB406C] tw-mb-2 tw-mt-6 tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white max-md:tw-w-[120px] tw-w-[160px]"
                >Save</q-btn
              >
            </q-tab-panel>
            <q-tab-panel name="changepassword">
              <h1
                class="tw-font-normal tw-text-[28px] max-md:tw-text-[20px] tw-leading-[38px]"
              >
                Update your password
              </h1>
              <hr class="tw-w-full" />
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-mt-4">
                <label for="Enter Email" class="tw-font-normal">
                  Current Password
                </label>
                <q-input
                  v-model="currentpassword"
                  :type="iscurrPwd ? 'password' : 'text'"
                  outlined
                  dense
                  color="pink"
                  label="Enter current password"
                  class="tw-font-normal tw-text-base tw-leading-4"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="iscurrPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="iscurrPwd = !iscurrPwd"
                      size="xs"
                    />
                  </template>
                </q-input>
              </div>
              <div
                class="tw-w-full max-sm:tw-flex-wrap tw-flex tw-gap-2 tw-py-2"
              >
                <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                  <label for="Enter Email" class="tw-font-normal">
                    New Password
                  </label>
                  <q-input
                    v-model="password"
                    :type="isPwd ? 'password' : 'text'"
                    outlined
                    color="pink"
                    label="Enter new password"
                    dense
                    class="tw-font-normal tw-text-base tw-leading-4"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        size="xs"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </div>
                <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                  <label for="Enter Email" class="tw-font-normal"
                    >Confirm New Password</label
                  >
                  <q-input
                    v-model="confirmpassword"
                    :type="isconfPwd ? 'password' : 'text'"
                    outlined
                    dense
                    label="Confirm your new password"
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
                </div>
              </div>
              <q-btn
                class="tw-bg-[#FB406C] tw-mb-2 tw-mt-8 tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white max-md:tw-w-[130px] tw-w-[160px]"
                >Save changes</q-btn
              >
            </q-tab-panel>
            <q-tab-panel name="feedback">
              <h1
                class="tw-font-normal tw-text-[28px] max-md:tw-text-[20px] tw-leading-[38px]"
              >
                Feedback
              </h1>
              <hr class="tw-w-full" />
              <div
                class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2 tw-mt-3"
              >
                <label for="Enter Title" class="tw-font-normal"> Title </label>
                <q-input
                  outlined
                  color="pink"
                  dense
                  v-model="text2"
                  label="Enter Title"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2">
                <div class="tw-w-full tw-flex tw-flex-col tw-gap-2">
                  <label for="Enter Description" class="tw-font-normal">
                    Description
                  </label>
                  <q-input
                    outlined
                    color="pink"
                    dense
                    v-model="text3"
                    label="Write Description"
                    type="textarea"
                    class="tw-font-normal tw-text-base tw-leading-4"
                  />
                </div>
                <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2">
                  <label for="Enter Email" class="tw-font-normal">Image</label>
                  <q-input
                    outlined
                    color="pink"
                    dense
                    v-model="model"
                    type="file"
                    class="tw-font-normal tw-text-[13px] tw-leading-4"
                  />
                </div>
              </div>
              <q-btn
                class="tw-bg-[#FB406C] tw-mb-2 tw-mt-6 tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white max-md:tw-w-[130px] tw-w-[160px]"
                >Save changes</q-btn
              >
            </q-tab-panel>
            <q-tab-panel name="closeaccount">
              <h1
                class="tw-font-normal tw-text-[28px] max-md:tw-text-[20px] tw-leading-[38px]"
              >
                Close your account
              </h1>
              <hr class="tw-w-full" />
              <q-tabs
                v-model="tab"
                dense
                class="tw-text-[#717172]"
                active-color="pink"
                indicator-color="pink"
                align="left"
                narrow-indicator
              >
                <q-tab name="closeaccount" label="Close with reason" />
                <q-tab
                  name="closewithsuccess"
                  label="Close with success story"
                />
              </q-tabs>
              <q-list dense class="tw-mt-4">
                <q-item tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio
                      size="sm"
                      v-model="color"
                      val="pink1"
                      color="pink"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Not Willing</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-radio
                      size="sm"
                      v-model="color"
                      val="pink2"
                      color="pink"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Not interested anymore</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item tag="label" v-ripple>
                  <q-item-section avatar top>
                    <q-radio
                      size="sm"
                      v-model="color"
                      val="pink3"
                      color="pink"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>I have no time</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section avatar top>
                    <q-radio
                      size="sm"
                      v-model="color"
                      val="pink4"
                      color="pink"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Don't like it</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section avatar top>
                    <q-radio
                      size="sm"
                      v-model="color"
                      val="pink5"
                      color="pink"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>I found someone</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section avatar top>
                    <q-radio
                      size="sm"
                      v-model="color"
                      val="pink6"
                      color="pink"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Other</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <q-btn
                class="tw-bg-[#FB406C] tw-ml-4 tw-mt-6 tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white max-md:tw-w-[100px] tw-w-[140px]"
                >Save</q-btn
              >
            </q-tab-panel>
            <q-tab-panel name="closewithsuccess">
              <h1
                class="tw-font-normal tw-text-[28px] max-md:tw-text-[20px] tw-leading-[38px]"
              >
                Close your account
              </h1>
              <hr class="tw-w-full" />
              <q-tabs
                v-model="tab"
                dense
                class="tw-text-[#717172]"
                active-color="pink"
                indicator-color="pink"
                align="left"
                narrow-indicator
              >
                <q-tab name="closeaccount" label="Close with reason" />
                <q-tab
                  name="closewithsuccess"
                  label="Close with success story"
                />
              </q-tabs>
              <div
                class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-pt-2 tw-mt-3"
              >
                <label for="Enter Title" class="tw-font-normal"> Title </label>
                <q-input
                  outlined
                  color="pink"
                  dense
                  v-model="text4"
                  label="Enter Title"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <div
                class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2 tw-mt-2"
              >
                <label for="Enter Title" class="tw-font-normal">
                  Partner Name
                </label>
                <q-input
                  outlined
                  color="pink"
                  dense
                  v-model="text5"
                  label="Enter Name"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2">
                <div class="tw-w-full tw-flex tw-flex-col tw-gap-2">
                  <label for="Enter Description" class="tw-font-normal">
                    Description
                  </label>
                  <q-input
                    outlined
                    color="pink"
                    dense
                    v-model="text6"
                    label="Write Description"
                    type="textarea"
                    class="tw-font-normal tw-text-base tw-leading-4"
                  />
                </div>
                <div class="tw-w-full tw-flex tw-flex-col tw-gap-2 tw-py-2">
                  <label for="Enter Email" class="tw-font-normal">Image</label>
                  <q-input
                    outlined
                    color="pink"
                    dense
                    v-model="model1"
                    type="file"
                    class="tw-font-normal tw-text-[13px] tw-leading-4"
                  />
                </div>
              </div>
              <q-btn
                class="tw-bg-[#FB406C] tw-mb-2 tw-mt-6 tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white max-md:tw-w-[130px] tw-w-[160px]"
                >Save changes</q-btn
              >
            </q-tab-panel>
          </q-tab-panels>
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
const text3 = ref("");
const text4 = ref("");
const text5 = ref("");
const text6 = ref("");
const tab = ref("paymentstatus");
const currentpassword = ref("");
const iscurrPwd = ref(true);
const password = ref("");
const isPwd = ref(true);
const confirmpassword = ref("");
const isconfPwd = ref(true);
const model = ref(null);
const model1 = ref(null);
const color = ref("pink1");
const columns = [
  {
    name: "name",
    required: true,
    label: "TRANSACTION",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "relation",
    align: "left",
    label: "PRICE (USD)",
    field: "relation",
    sortable: true,
  },
  { name: "age", label: "DATE", align: "left", field: "age", sortable: true },
  {
    name: "gender",
    label: "STATUS",
    align: "left",
    field: "gender",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "abcd1234",
    relation: "$50",
    age: "12-04-2022",
    gender: "Pending",
  },
  {
    name: "abcd1234",
    relation: "$50",
    age: "12-04-2022",
    gender: "Pending",
  },
];
</script>
<style scoped>
.bg {
  background-image: url("../assets/HeartBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
