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
          Check out your
        </h1>

        <h1
          class="tw-text-[45px] max-sm:tw-text-[30px] tw-text-white tw-font-[400] tw-leading-[40px]"
        >
          Profile
        </h1>
        <br />
      </div>
    </div>

    <div
      class="tw-w-[75%] max-lg:tw-w-[80%] tw-mt-[50px] tw-mx-auto max-md:tw-flex-wrap tw-my-10 tw-flex tw-gap-5 tw-min-h-[300px] tw-p-5 tw-bg-white tw-drop-shadow-md tw-rounded-md"
    >
      <q-img
        src="../assets/profileImg.svg"
        alt="../assets/profileImg.svg"
        class="tw-max-w-[250px] tw-w-full tw-h-[300px]"
      />
      <div
        class="tw-flex tw-flex-col tw-justify-start tw-gap-10 tw-max-w-[900px] tw-w-full"
      >
        <div class="tw-flex tw-justify-between max-xl:tw-flex-wrap tw-gap-3">
          <div class="tw-flex tw-flex-col tw-gap-4 tw-w-[200px]">
            <h1
              class="tw-text-[#444444] tw-text-[32px] tw-font-[700] tw-leading-[150%] max-sm:tw-text-[26px] max-xl:tw-text-[25px]"
            >
              Zarina Saloon
            </h1>
            <p
              class="tw-text-[#444444] tw-text-[20px] tw-font-[400] tw-leading-[150%] max-sm:tw-text-[16px] max-xl:tw-text-[16px]"
            >
              - Introduction here
            </p>
          </div>
          <h1
            class="tw-text-[#8C8E97] tw-mt-1 max-sm:tw-text-[16px] tw-text-[20px] tw-font-[400] tw-leading-[30px]"
          >
            Profile
          </h1>
        </div>
        <hr class="tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97]" />
        <div
          class="tw-grid tw-grid-cols-2 tw-max-w-[400px] max-lg:tw-gap-0 tw-gap-3 tw-w-full"
        >
          <h1
            class="tw-text-[#8C8E97] max-sm:tw-text-[14px] tw-text-[20px] max-lg:tw-text-[16px] tw-font-[400] tw-leading-[30px]"
          >
            Email:
          </h1>
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[14px] tw-text-[20px] max-lg:tw-text-[16px] tw-font-[400] tw-leading-[30px]"
          >
            gct.205129@gmail.com
          </h1>
          <h1
            class="tw-text-[#8C8E97] max-sm:tw-text-[14px] tw-text-[20px] max-lg:tw-text-[16px] tw-font-[400] tw-leading-[30px]"
          >
            Profile ID#:
          </h1>
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[14px] tw-text-[20px] max-lg:tw-text-[16px] tw-font-[400] tw-leading-[30px]"
          >
            3434
          </h1>
          <h1
            class="tw-text-[#8C8E97] max-sm:tw-text-[14px] tw-text-[20px] max-lg:tw-text-[16px] tw-font-[400] tw-leading-[30px]"
          >
            Joined
          </h1>
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[14px] tw-text-[20px] max-lg:tw-text-[16px] tw-font-[400] tw-leading-[30px]"
          >
            03 Apr, 2023
          </h1>
        </div>
      </div>
    </div>
    <div
      class="tw-w-[75%] max-lg:tw-w-[80%] tw-mx-auto tw-my-10 tw-flex tw-flex-col tw-flex-wrap tw-gap-5 tw-min-h-[150px] tw-p-5 tw-bg-white tw-shadow-md tw-rounded-md"
    >
      <div class="tw-flex tw-w-full tw-justify-between tw-items-center">
        <h1
          class="tw-text-[#444444] tw-text-[20px] tw-font-[700] tw-leading-[24px]"
        >
          Photos
        </h1>
        <q-btn
          class="tw-bg-[#FB406C] tw-text-white tw-capitalize tw-rounded-md tw-min-h-[40px] tw-gap-2 tw-text-[16px] max-sm:tw-text-[12px] tw-font-[400] tw-leading-[18px]"
        >
          Picture Privacy</q-btn
        >
      </div>
      <div
        class="tw-flex tw-overflow-x-auto scrollbar-remover tw-w-full tw-items-center tw-justify-start tw-gap-2"
      >
        <img v-for="item in data" :key="item.img" :src="item.img" alt="" />
      </div>
    </div>
    <div
      class="tw-w-[75%] max-lg:tw-w-[80%] tw-mt-[50px] tw-mx-auto tw-my-10 tw-flex tw-flex-col tw-gap-5 tw-min-h-[300px] tw-p-5 tw-bg-white tw-drop-shadow-md tw-rounded-md"
    >
      <div class="tw-flex tw-gap-4 tw-items-center tw-justify-start tw-mb-5">
        <h1
          class="tw-text-[#444444] max-sm:tw-text-[14px] tw-text-[20px] tw-font-[700] tw-leading-[23px]"
        >
          Account Basic Information
        </h1>
        <q-btn
          class="tw-bg-[#E9FFF3] tw-text-[#4ABC81] tw-rounded-md tw-min-h-[40px] tw-gap-2 tw-text-[16px] max-sm:tw-text-[10px] tw-font-[400] tw-leading-[24px]"
        >
          Mandatory</q-btn
        >
      </div>
      <h1
        class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
      >
        Personal
      </h1>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md tw-mt-3 tw-grid tw-gap-5 tw-grid-cols-3 max-md:tw-grid-cols-4 max-sm:tw-grid-cols-1"
      >
        <div v-for="item in data2" :key="item.id" class="max-md:tw-col-span-2">
          <label
            for=""
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >{{ item.title }}</label
          >
          <q-input
            v-if="item.type == 'input'"
            outlined
          v-model="item.model"
            :value="item.model"
            dense
            stack-label
            style="width: 100%"
            color="pink"
          />
          <!-- :rules="[ val => val && val.length > 0 || 'Please type something']" -->
          <q-select
            v-if="item.type == 'select'"
            v-model="item.model"
            outlined
            dense
            stack-label
            :options="stringOptions"
            style="width: 100%"
            behavior="menu"
            color="pink"
          >
            <input
              :dense="dense"
              disable
              readonly
              placeholder=" select.."
              borderless
              color="white"
              class="tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[25%] tw-left-[-2%] tw-border-none placeholder:tw-text-[14px] placeholder:tw-text-[#AFAFAF]"
            />
          </q-select>
          <q-input
            outlined
            dense
            stack-label
            style="width: 100%"
            v-if="item.type == 'date'"
            color="pink"
            v-model="date"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date" color="pink-13">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="pink-13" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2 tw-col-span-3">
          <label
            for="textarea"
            class="tw-text-[#444444] max-sm:tw-text-[14px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >Introduction (Please write about you & your family)
          </label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            placeholder="Intro here"
            class="tw-p-4 tw-rounded-md tw-border-[#DDDFE5]"
            rows="10"
          ></textarea>
        </div>

        <div
          class="tw-flex tw-items-center tw-gap-3 tw-justify-self-end tw-col-span-3"
        >
          <q-btn
            label="Save"
            type="submit"
            class="tw-bg-[#FB406C] tw-text-white tw-text-[16px] max-sm:tw-text-[10px] tw-font-[400] tw-leading-[16px]"
          />
          <q-btn
            label="Submit for admin aproval"
            type="submit"
            class="tw-bg-[#1BAACC] tw-text-white max-sm:tw-text-[10px] tw-text-[16px] tw-font-[400] tw-leading-[16px]"
          />
        </div>
      </q-form>
    </div>
    <div
      class="tw-w-[75%] max-lg:tw-w-[80%] tw-mt-[50px] tw-mx-auto tw-my-10 tw-flex tw-flex-col tw-gap-5 tw-min-h-[300px] tw-p-5 tw-bg-white tw-drop-shadow-md tw-rounded-md"
    >
      <div class="tw-flex tw-gap-4 tw-items-center tw-justify-start tw-mb-5">
        <h1
          class="tw-text-[#444444] max-sm:tw-text-[14px] tw-text-[20px] tw-font-[700] tw-leading-[23px]"
        >
          Additional Personal Details
        </h1>
        <q-btn
          class="tw-bg-[#E9FFF3] tw-text-[#4ABC81] tw-rounded-md tw-min-h-[40px] tw-text-[16px] max-sm:tw-text-[10px] tw-font-[400] tw-leading-[24px]"
          >Optional</q-btn
        >
      </div>
      <h1
        class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
      >
        Additional Personal Details
      </h1>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md tw-mt-1 tw-grid tw-gap-5 tw-grid-cols-3 max-md:tw-grid-cols-4 max-sm:tw-grid-cols-1"
      >
        <div v-for="item in data3" :key="item.id" class="max-md:tw-col-span-2">
          <label
            for=""
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >{{ item.title }}</label
          >
          <q-input
            v-if="item.type == 'input'"
            outlined
            v-model="item.model"
            dense
            stack-label
            style="width: 100%"
            color="pink"
          />
          <!-- :rules="[ val => val && val.length > 0 || 'Please type something']" -->
          <q-select
            v-if="item.type == 'select'"
            v-model="item.model"
            outlined
            dense
            stack-label
            :options="stringOptions"
            style="width: 100%"
            behavior="menu"
            color="pink"
          >
            <input
              :dense="dense"
              disable
              readonly
              placeholder=" select.."
              borderless
              color="white"
              class="tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[25%] tw-left-[-2%] tw-border-none placeholder:tw-text-[14px] placeholder:tw-text-[#AFAFAF]"
            />
          </q-select>
        </div>
        <div class="tw-col-span-3">
          <hr class="tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97]" />
          <br />
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
          >
            Physical Attributes
          </h1>
        </div>

        <div v-for="item in data4" :key="item.id" class="max-md:tw-col-span-2">
          <label
            for=""
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >{{ item.title }}</label
          >
          <q-input
            v-if="item.type == 'input'"
            outlined
            v-model="item.model"
            dense
            stack-label
            style="width: 100%"
            color="pink"
          />
          <!-- :rules="[ val => val && val.length > 0 || 'Please type something']" -->
          <q-select
            v-if="item.type == 'select'"
            v-model="item.model"
            outlined
            dense
            stack-label
            :options="stringOptions"
            style="width: 100%"
            behavior="menu"
            color="pink"
          >
            <input
              :dense="dense"
              disable
              readonly
              placeholder=" select.."
              borderless
              color="white"
              class="tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[25%] tw-left-[-2%] tw-border-none placeholder:tw-text-[14px] placeholder:tw-text-[#AFAFAF]"
            />
          </q-select>
        </div>

        <div class="tw-col-span-3">
          <hr class="tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97]" />
          <br />
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
          >
            Language
          </h1>
        </div>

        <div v-for="item in data5" :key="item.id" class="max-md:tw-col-span-2">
          <label
            for=""
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >{{ item.title }}</label
          >
          <q-input
            v-if="item.type == 'input'"
            outlined
            v-model="item.model"
            dense
            stack-label
            style="width: 100%"
            color="pink"
          />
          <!-- :rules="[ val => val && val.length > 0 || 'Please type something']" -->
          <q-select
            v-if="item.type == 'select'"
            v-model="item.model"
            outlined
            dense
            stack-label
            :options="stringOptions"
            style="width: 100%"
            behavior="menu"
            color="pink"
          >
            <input
              :dense="dense"
              disable
              readonly
              placeholder=" select.."
              borderless
              color="white"
              class="tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[25%] tw-left-[-2%] tw-border-none placeholder:tw-text-[14px] placeholder:tw-text-[#AFAFAF]"
            />
          </q-select>
        </div>
        <div class="tw-col-span-3">
          <hr class="tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97]" />
          <br />
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
          >
            Residency Information
          </h1>
        </div>

        <div v-for="item in data6" :key="item.id" class="max-md:tw-col-span-2">
          <label
            for=""
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >{{ item.title }}</label
          >
          <q-input
            v-if="item.type == 'input'"
            outlined
            v-model="item.model"
            dense
            stack-label
            style="width: 100%"
            color="pink"
          />
          <!-- :rules="[ val => val && val.length > 0 || 'Please type something']" -->
          <q-select
            v-if="item.type == 'select'"
            v-model="item.model"
            outlined
            dense
            stack-label
            :options="stringOptions"
            style="width: 100%"
            behavior="menu"
            color="pink"
          >
            <input
              :dense="dense"
              disable
              readonly
              placeholder=" select.."
              borderless
              color="white"
              class="tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[25%] tw-left-[-2%] tw-border-none placeholder:tw-text-[14px] placeholder:tw-text-[#AFAFAF]"
            />
          </q-select>
        </div>
        <div class="tw-col-span-3">
          <hr class="tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97]" />
          <br />
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
          >
            Family Information
          </h1>
        </div>

        <div v-for="item in data7" :key="item.id" class="max-md:tw-col-span-2">
          <label
            for=""
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >{{ item.title }}</label
          >
          <q-input
            v-if="item.type == 'input'"
            outlined
            v-model="item.model"
            dense
            stack-label
            style="width: 100%"
            color="pink"
          />
          <!-- :rules="[ val => val && val.length > 0 || 'Please type something']" -->
          <q-select
            v-if="item.type == 'select'"
            v-model="item.model"
            outlined
            dense
            stack-label
            :options="stringOptions"
            style="width: 100%"
            behavior="menu"
            color="pink"
          >
            <input
              :dense="dense"
              disable
              readonly
              placeholder=" select.."
              borderless
              color="white"
              class="tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[25%] tw-left-[-2%] tw-border-none placeholder:tw-text-[14px] placeholder:tw-text-[#AFAFAF]"
            />
          </q-select>
        </div>
        <div class="tw-col-span-3">
          <hr class="tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97]" />
          <br />
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
          >
            Partner Expectation
          </h1>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-2 tw-col-span-3">
          <label
            for="textarea"
            class="tw-text-[#444444] max-sm:tw-text-[14px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >General Requirement
          </label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            placeholder="General requirement here"
            class="tw-p-4 tw-rounded-md tw-border-[#DDDFE5]"
            rows="10"
          ></textarea>
        </div>
        <div class="tw-col-span-3">
          <hr class="tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97]" />
          <br />
          <h1
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[700] tw-leading-[20px]"
          >
            General
          </h1>
        </div>

        <div v-for="item in data8" :key="item.id" class="max-md:tw-col-span-2">
          <label
            for=""
            class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-[16px] tw-font-[400] tw-leading-[20px]"
            >{{ item.title }}</label
          >
          <q-input
            v-if="item.type == 'input'"
            outlined
            v-model="item.model"
            dense
            stack-label
            style="width: 100%"
            color="pink"
          />
          <!-- :rules="[ val => val && val.length > 0 || 'Please type something']" -->
          <q-select
            v-if="item.type == 'select'"
            v-model="item.model"
            outlined
            dense
            stack-label
            :options="stringOptions"
            style="width: 100%"
            behavior="menu"
            color="pink"
          >
            <input
              :dense="dense"
              disable
              readonly
              placeholder=" select.."
              borderless
              color="white"
              class="tw-absolute tw-cursor-pointer tw-z-[-1] tw-top-[25%] tw-left-[-2%] tw-border-none placeholder:tw-text-[14px] placeholder:tw-text-[#AFAFAF]"
            />
          </q-select>
        </div>

        <div
          class="tw-flex tw-items-center tw-gap-3 tw-justify-self-end tw-col-span-3"
        >
          <q-btn
            label="Save"
            type="submit"
            class="tw-bg-[#FB406C] tw-text-white tw-text-[16px] max-sm:tw-text-[10px] tw-font-[400] tw-leading-[16px]"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const modelData = ref({
 FirstName:'',
 Email:'',
 PreferredState: '',
 PreferredCountry: '',
 FamilyValue: '',
 PreferredStatus: '',
 MotherTongue: '',
 AnyDesablity: '',
 Diet: '',
 SmokingHabits: '',
 DrinkingHabits: '',
 Profession: '',
 Education: '',
 Caste: '',
 Weight: '',
 Age: '',
 BrothersSisters: '',
 MotherName: '',
 FatherName: '',
 Manglik: '',
 Manglik2: '',
 Manglik3: '',
 Ethniciy: '',
 Ethniciy2: '',
 CommunityValue: '',
 CommunityValue2: '',
 PersonalValue: '',
 PersonalValue2: '',
 PersonalValue3: '',
 PersonalValue4: '',
 PersonalValue5: '',
 AnnualIncome: '',
 FamilyStatus: '',
 BirthCountry: '',
 Read: '',
 Speek: '',
 Language: '',
 MotherTongue: '',
 AnyDisability: '',
 BodyArt: '',
 BodyType: '',
 BodyType2: '',
 BloodGroup: '',
 Complexion: '',
 Complexion2: '',
 HairColor: '',
 EyeColor: '',
 Wight: '',
 SpecialCircumstances: '',
 FamilyResidence: '',
 HomeDistrict: '',
 City: '',
 State: '',
 Country: '',
 Occupation: '',
 HighestEducation: '',
 Height: '',
 OnBehalf2: '',
 Cast: '',
 Religion: '',
 Religion2: '',
 DateofBirth: '',
 OnBehalf: '',
 Gender: '',
 ConfirmPassword: '',
 Password: '',
 LastName:','
});
const date = ref("2019/02/01");
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const data = [
  { img: new URL(`../assets/photo1.svg`, import.meta.url).href },
  { img: new URL(`../assets/photo2.svg`, import.meta.url).href },
  { img: new URL(`../assets/photo3.svg`, import.meta.url).href },
  { img: new URL(`../assets/photo4.svg`, import.meta.url).href },
  { img: new URL(`../assets/photo2.svg`, import.meta.url).href },
  { img: new URL(`../assets/photo4.svg`, import.meta.url).href },
  { img: new URL(`../assets/camera.svg`, import.meta.url).href },
];
const data2 = ref([
  { id: 1, type: "input", title: "First Name", model: modelData.value.FirstName },
  { id: 2, type: "input", title: "Last Name", model: modelData.value.LastName },
  { id: 3, type: "input", title: "Email", model: modelData.value.Email},
  { id: 4, type: "input", title: "Password", model: modelData.value.Password },
  { id: 5, type: "input", title: "Confirm Password", model: modelData.value.ConfirmPassword },
  { id: 6, type: "select", title: "Gender", model: modelData.value.Gender },
  { id: 7, type: "select", title: "On Behalf", model: modelData.value.OnBehalf},
  { id: 8, type: "date", title: "Date of Birth", model: modelData.value.DateofBirth },
  { id: 9, type: "select", title: "Religion", model: modelData.value.Religion},
  { id: 10, type: "select", title: "Cast", model: modelData.value.Cast },
  { id: 11, type: "select", title: "On Behalf:", model: modelData.value.OnBehalf2 },
  { id: 12, type: "input", title: "Height", model: modelData.value.Height },
  { id: 13, type: "select", title: "Highest Education", model: modelData.value.HighestEducation },
  { id: 14, type: "select", title: "Occupation", model: modelData.value.Occupation },
  { id: 15, type: "select", title: "Country", model: modelData.value.Country },
  { id: 16, type: "select", title: "State", model: modelData.value.State },
  { id: 17, type: "select", title: "City", model: modelData.value.City },
  { id: 18 },
]);
const data3 = [
  { id: 1, type: "input", title: "Home District", model: modelData.value.HomeDistrict },

  { id: 2, type: "input", title: "Family Residence", model: modelData.value.FamilyResidence },
  { id: 3, type: "input", title: "Special Circumstances", model: modelData.value.SpecialCircumstances },
];
const data4 = [
  { id: 1, type: "select", title: "Wight", model: modelData.value.Wight },
  { id: 2, type: "input", title: "Eye Color", model: modelData.value.EyeColor },
  { id: 3, type: "input", title: "Hair Color", model: modelData.value.HairColor },
  { id: 4, type: "input", title: "Complexion", model: modelData.value.Complexion},
  { id: 5, type: "input", title: "Blood Group", model: modelData.value.BloodGroup },
  { id: 6, type: "input", title: "Body Type", model: modelData.value.BodyType },
  { id: 7, type: "input", title: "Body Art", model: modelData.value.BodyArt },
  { id: 8, type: "input", title: "Any Disability", model: modelData.value.AnyDisability },
];
const data5 = [
  { id: 1, type: "select", title: "Mother Tongue", model: modelData.value.MotherTongue },
  { id: 2, type: "select", title: "Language", model: modelData.value.Language },
  { id: 3, type: "select", title: "Speek", model: modelData.value.Speek },
  { id: 4, type: "select", title: "Read", model: modelData.value.Read },
];
const data6 = [
  { id: 1, type: "select", title: "Birth Country", model: modelData.value.BirthCountry },
  { id: 2, type: "select", title: "Family Status", model: modelData.value.FamilyStatus },
  { id: 3, type: "select", title: "Annual Income", model: modelData.value.AnnualIncome },
  { id: 4, type: "input", title: "Personal Value", model: modelData.value.PersonalValue },
  { id: 5, type: "input", title: "Community Value", model: modelData.value.CommunityValue },
  { id: 6, type: "input", title: "Ethniciy", model: modelData.value.Ethniciy },
  { id: 7, type: "select", title: "Manglik", model: modelData.value.Manglik },
];
const data7 = [
  { id: 1, type: "input", title: "Father Name", model: modelData.value.FatherName },
  { id: 2, type: "input", title: "Mother Name", model: modelData.value.MotherName },
  { id: 3, type: "input", title: "Brothers Sisters", model: modelData.value.BrothersSisters },
  { id: 4, type: "input", title: "Personal Value", model: modelData.value.PersonalValue3 },
  { id: 5, type: "select", title: "Community Value", model: modelData.value.CommunityValue2 },
  { id: 6, type: "select", title: "Ethniciy", model: modelData.value.Ethniciy2 },
  { id: 7, type: "select", title: "Manglik", model: modelData.value.Manglik2 },
];
const data8 = [
  { id: 1, type: "select", title: "Age", model: modelData.value.Age},
  { id: 2, type: "input", title: "Height", model: modelData.value.Height },
  { id: 3, type: "input", title: "Weight", model: modelData.value.Weight },
  { id: 4, type: "select", title: "Marital Status", model: modelData.value.MaritalStatus},
  { id: 5, type: "select", title: "Children Acceptables", model: modelData.value.ChildrenAcceptables },
  { id: 6, type: "select", title: "Caste", model: modelData.value.Caste },
  { id: 7, type: "select", title: "Religion", model: modelData.value.Religion2 },
  { id: 8, type: "select", title: "Country of Residence", model: modelData.value.CountryofResidence },
  { model: modelData.value.Education, id: 9, type: "select", title: "Education" },
  { model: modelData.value.Profession, id: 10, type: "select", title: "Profession" },
  { model: modelData.value.Complexion2, id: 11, type: "input", title: "Complexion" },
  { model: modelData.value.DrinkingHabits, id: 12, type: "select", title: "Drinking Habits" },
  { model: modelData.value.SmokingHabits, id: 13, type: "select", title: "Smoking Habits" },
  { model: modelData.value.Diet, id: 14, type: "select", title: "Diet" },
  { model: modelData.value.BodyType2, id: 15, type: "select", title: "Body Type" },
  { model: modelData.value.PersonalValue5, id: 16, type: "input", title: "Personal Value" },
  { model: modelData.value.Manglik3, id: 17, type: "select", title: "Manglik" },
  { model: modelData.value.AnyDesablity, id: 18, type: "input", title: "Any Desablity" },
  { model: modelData.value.MotherTongue, id: 19, type: "select", title: "Mother Tongue" },
  { model: modelData.value.PreferredStatus, id: 20, type: "input", title: "Preferred Status" },
  { model: modelData.value.FamilyValue, id: 21, type: "select", title: "Family Value" },
  { model: modelData.value.PreferredCountry, id: 22, type: "select", title: "Preferred Country" },
  { model: modelData.value.PreferredState, id: 23, type: "select", title: "Preferred State" },
];
</script>
<style>
.q-field__label {
  font-size: 14px;
  top: -15px;
  left: -2%;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  color: #444444;
  font-size: 16px;
  line-height: 150%;
}
.q-field__native span {
  background-color: #ffffff;
}
.q-focus-helper {
  display: none;
}
.bg {
  background-image: url("../assets/douleHearts.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
