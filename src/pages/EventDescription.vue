<template>
  <div>
    <!-- banner -->
    <div
      class="banner tw-flex tw-justify-center tw-flex-col tw-items-center tw-text-white tw-w-100 tw-bg-no-repeat tw-bg-cover tw-bg-center"
    >
      <p class="tw-text-[18px] tw-text-slate-50">Our Events</p>
      <h2
        class="sm:tw-text-[48px] tw-text-[30px] tw-text-slate-50 tw-font-serif tw-font-normal tw-uppercase"
      >
        PAKISTAN EVENT
      </h2>
      <div class="tw-text-center tw-py-6" @click="registerHandler">
        <button
          class="tw-text-center tw-cursor-pointer tw-bg-[#FB406C] tw-border-none tw-text-[16px] tw-p-3 tw-px-6 tw-text-white tw-rounded"
        >
          <img class="" src="../assets/user1.svg" alt="" />
          Register Now
        </button>
      </div>
    </div>
    <!-- banner end -->

    <!-- main div -->
    <div>
      <div class="tw-mx-[20%]">
        <div class="tw-text-center tw-mt-6">
          <div
            class="upcoming_events tw-text-[#fb406c] tw-text-center tw-my-8 tw-leading-10 tw-font-normal tw-relative"
          >
            <h1
              class="tw-text-[16px] sm:tw-text-[20px] md:tw-text-[30px] lg:tw-text-[45px] tw-text-center tw-text-[#FB406C] tw-font-serif"
            >
              About DUBAI EVENT Event
            </h1>
          </div>
        </div>

        <video class="tw-my-8 tw-w-[100%]" controls>
          <source src="../assets/havili.mp4" />
        </video>

        <p class="tw-text-center tw-text-[18px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>

        <hr class="tw-my-5 tw-w-28" />

        <p class="tw-text-center tw-text-[18px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>

        <div class="tw-text-center tw-py-6" @click="registerHandler">
          <button
            class="tw-text-center tw-text-white tw-cursor-pointer tw-bg-[#FB406C] tw-border-none tw-text-[16px] tw-p-3 tw-px-6 tw-rounded"
          >
            <img class="" src="../assets/user1.svg" alt="" />
            Register Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const Router = useRouter();
function registerHandler() {
  Router.push("/add-member");
}
</script>
<style scoped>
.banner {
  background-image: url("src/assets/banner.svg");
  height: 400px;
}

.upcoming_events {
  display: inline-block;
  position: relative;
  text-align: center;
  margin-top: 8px;
  line-height: 1.4;
  font-weight: normal;
}

.upcoming_events:before {
  content: url("../assets/pinkHeart.svg");
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-39%);
}
</style>
