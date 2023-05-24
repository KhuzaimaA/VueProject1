<template>
  <div
    class="tw-w-full bg tw-min-h-[50vh] tw-flex tw-text-white tw-flex-col tw-justify-center tw-items-center tw-text-center tw-gap-2"
  >
    <h1
      class="tw-text-[18px] max-md:tw-text-[16px] tw-font-normal tw-leading-[18px]"
    >
      Our Events
    </h1>

    <h1
      class="tw-text-[45px] max-md:tw-text-[36px] tw-font-normal tw-leading-[40px]"
    >
      PAKISTAN EVENT
    </h1>
  </div>
  <div
    v-if="!state"
    class="tw-flex tw-flex-col tw-justify-center tw-bg-gradient-to-r tw-from-pink-100 tw-to-sky-100 tw-mx-auto"
  >
    <div
      class="text-white tw-flex tw-justify-center tw-p-8 tw-text-center tw-mt-6"
    >
      <h1
        class="tw-text-[#FB406C] tw-text-[40px] max-md:tw-text-[28px] tw-leading-10 max-sm:tw-leading-8 tw-font-normal tw-relative"
      >
        <q-img
          src="../assets/hearts.svg"
          class="tw-absolute tw-w-12 tw-left-[-6%] tw-top-[-60%] max-sm:tw-left-[-8%] max-sm:tw-top-[-40%]"
          alt=""
        />
        We're excited to see you at the event!!
      </h1>
    </div>
    <div class="tw-container tw-px-20 max-md:tw-px-6 tw-mx-auto tw-pb-6">
      <h1
        class="tw-font-normal tw-text-[36px] max-md:tw-text-[26px] tw-leading-10 tw-pb-4 max-md:tw-pb-0"
      >
        Add family member
      </h1>
      <div
        class="tw-flex max-lg:tw-flex-wrap tw-gap-3 tw-justify-between tw-py-6 max-md:tw-py-4"
      >
        <div
          class="tw-flex tw-flex-col tw-gap-4 tw-w-[600px] max-lg:tw-w-full tw-min-h-[200px]"
        >
          <div
            class="tw-bg-white tw-shadow-md tw-justify-center tw-rounded-md tw-p-4 tw-flex tw-flex-col tw-gap-4"
          >
            <div class="tw-flex max-md:tw-flex-wrap tw-gap-3">
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="tw-font-normal"> Name </label>
                <q-input
                  outlined
                  dense
                  label="Mark"
                  v-model="text"
                  color="pink"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="tw-font-normal">Age</label>
                <q-select
                  outlined
                  dense
                  v-model="model"
                  :options="options"
                  label="Mark"
                  color="pink"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
            </div>
            <div class="tw-flex tw-gap-3">
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="tw-font-normal">
                  Relation
                </label>
                <q-select
                  outlined
                  v-model="model1"
                  dense
                  :options="options1"
                  label="Brother"
                  color="pink"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
              <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
                <label for="Enter Email" class="tw-font-normal">Gender</label>
                <q-select
                  outlined
                  dense
                  v-model="model2"
                  :options="options2"
                  label="Mark"
                  color="pink"
                  class="tw-font-normal tw-text-base tw-leading-4"
                />
              </div>
            </div>
          </div>
          <q-btn
            class="tw-bg-[#FB406C] tw-text-[15px] max-md:tw-text-[13px] tw-h-[40px] tw-rounded-md tw-text-white tw-w-[90px]"
            >Add +</q-btn
          >
        </div>
        <div
          class="tw-bg-white tw-w-[450px] max-lg:tw-w-full tw-shadow-md tw-rounded-sm tw-p-4 tw-flex tw-flex-col tw-gap-4"
          style="border-top: 3px solid #fb406c"
        >
          <h1
            class="tw-font-bold tw-text-[30px] max-md:tw-text-[20px] tw-leading-[34px]"
          >
            Details
          </h1>
          <div
            class="tw-flex tw-justify-between tw-gap-1 tw-font-normal tw-text-[18px] max-md:tw-text-[14px] tw-leading-[22px]"
          >
            User Name
            <p>Muhammad Bilal Ansari</p>
          </div>
          <div
            class="tw-flex tw-justify-between tw-gap-1 tw-font-normal tw-text-[18px] max-md:tw-text-[14px] tw-leading-[22px]"
          >
            Seat for family reserved
            <p>2</p>
          </div>
          <div
            class="tw-flex tw-justify-between tw-gap-1 tw-font-normal tw-text-[18px] max-md:tw-text-[14px] tw-leading-[22px]"
          >
            Charges for family reserved
            <p>10 USD</p>
          </div>
          <div
            class="tw-flex tw-justify-between tw-gap-1 tw-font-normal tw-text-[18px] max-md:tw-text-[14px] tw-leading-[22px]"
          >
            Event Charges
            <p>100.00 USD</p>
          </div>
          <hr class="tw-w-full" />
          <div
            class="tw-flex tw-justify-between tw-gap-1 tw-font-bold tw-text-[18px] max-md:tw-text-[14px] tw-leading-[20px]"
          >
            Total Charges
            <p class="tw-font-normal">120.00 USD</p>
          </div>
        </div>
      </div>
      <div class="tw-pb-6 tw-flex tw-flex-col tw-gap-4">
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          class="my-sticky-header-table"
          flat
          hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props">
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
              <q-td key="price">
                {{ props.row.price }}
              </q-td>
              <q-td key="action"
                ><q-icon
                  color="red"
                  round
                  dense
                  size="sm"
                  class="icon tw-cursor-pointer"
                  name="delete"
                />
              </q-td>
            </q-tr>
          </template>
        </q-table>
        <q-btn
          @click="clickHandler"
          class="tw-bg-[#FB406C] tw-text-white tw-text-[15px] tw-rounded-md max-md:tw-text-[13px] tw-h-[40px] tw-w-[90px]"
          >Next</q-btn
        >
      </div>
    </div>
  </div>
  <Event />
</template>
<script setup>
import { ref } from "vue";
const text = ref("");
const model = ref(null);
const options = ["20", "25", "30", "35", "40"];
const model1 = ref(null);
const options1 = ["Brother", "Sister", "Mother", "Father"];
const model2 = ref(null);
const options2 = ["Male", "Female"];
import { useRouter } from "vue-router";
const Router = useRouter();
function clickHandler() {
  // Router.push("/event-register");
  state.value = !state.value;
}
const state = ref(false);
const columns = [
  {
    name: "name",
    required: true,
    label: "FULL NAME",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "relation",
    align: "left",
    label: "RELATION",
    field: "relation",
    sortable: true,
  },
  { name: "age", label: "AGE", align: "left", field: "age", sortable: true },
  {
    name: "gender",
    label: "GENDER",
    align: "left",
    field: "gender",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "price",
    label: "PRICE",
    align: "left",
    field: "price",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "action",
    label: "DELETE",
    align: "left",
    field: "action",
  },
];

const rows = [
  {
    name: "Flat Prices",
    relation: "Flat Prices",
    age: "Flat Prices",
    gender: "Flat Prices",
    price: "$12",
  },
  {
    name: "Flat Prices",
    relation: "Flat Prices",
    age: "Flat Prices",
    gender: "Flat Prices",
    price: "$12",
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
.my-sticky-header-table {
  height: 150px;
}
</style>
