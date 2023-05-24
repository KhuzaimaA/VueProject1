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
          class="tw-text-[18px] tw-text-white tw-font-[400] tw-leading-[18px]"
        >
        Our Happy Copple
        </h1>

        <h1
          class="tw-text-[45px] max-sm:tw-text-[30px] tw-text-white tw-font-[400] tw-leading-[40px]"
        >
        T&R
        </h1>
        <br />
      </div>
    </div>

    <div
      class="tw-w-[70%] max-sm:tw-w-[80%] tw-flex tw-flex-col tw-gap-4 tw-justify-center tw-items-center tw-pt-16 tw-min-h-[100vh] tw-bg-white tw-mx-auto tw-p-2"
    >
      <h1
        class="tw-relative max-sm:tw-text-[30px] tw-text-[#FB406C] tw-text-5xl tw-font-normal tw-text-center"
      >
        <img
          src="../assets/hearts.svg"
          class="tw-absolute"
          style="top: -40%; left: -5%"
          alt=""
        />
        Let’s read how this get started
      </h1>
      <p
        class="tw-text-[#444444] max-sm:tw-text-[16px] tw-text-lg tw-font-bold tw-leading-7 tw-text-center"
      >
        Here are some of the couples who have successfully married through our
        Matrimonial events & online services.
      </p>
      <div
        class="tw-flex tw-justify-start tw-w-[95%] tw-gap-8 tw-flex-wrap tw-my-6"
      >
        <q-img src="../assets/couple1DescriptionPhoto.svg" class="w-[95%]" alt=""/>
        <p class=" tw-text-[18px] tw-font-normal tw-leading-[40px] text-[#444444] tw-text-center max-sm:tw-text-[16px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </p>
        <hr class="tw-w-[100px] tw-bg-[#444444] tw-h-[2px]">
        <p class=" tw-text-[18px] tw-font-normal tw-leading-[40px] text-[#444444] tw-text-center max-sm:tw-text-[16px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </p>
      </div>
      <!-- <div
      class="tw-w-[100%] tw-flex tw-flex-col tw-gap-4 tw-justify-center tw-items-center tw-pt-16 tw-min-h-[100vh] tw-bg-white tw-mx-auto tw-p-2"
    >
      <h1
        class="tw-relative tw-text-[#FB406C] tw-text-5xl tw-font-normal tw-text-center max-sm:tw-text-[30px]"
      >
        <img
          src="../assets/hearts.svg"
          class="tw-absolute tw-top-[-60%] tw-left-[-10%] max-sm:tw-left-[5%]  max-sm:tw-top-[-40%]"
          style=" "
          alt=""
        />
        More Success Stories
      </h1>

      <div
        class="tw-grid tw-grid-cols-3 tw-justify-items-center max-lg:tw-grid-cols-2 max-sm:tw-grid-cols-1 tw-justify-start tw-w-[95%] max-md:tw-justify-center tw-gap-8 tw-flex-wrap tw-my-6"
      >
        <succussfulStoriesCard :msg="data" />
      </div>

    </div> -->
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

];


</script>
<style scoped>
.bg {
  background-image: url("../assets/douleHearts.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
