<template>
  <section>
    <div
      class="banner tw-flex tw-justify-center tw-flex-col tw-items-center tw-text-white tw-w-100 tw-bg-no-repeat tw-bg-cover tw-bg-center"
    >
      <span class="tw-font-normal tw-text-lg tw-leading-4">Our Packages</span>

      <h1
        class="heading tw-text-3xl tw-font-normal tw-leading-10 md:tw-text-5xl"
      >
        CHOOSE YOUR PACKAGES
      </h1>
    </div>
    <div
      class="tw-px-10 lg:tw-px-[10%] xl:tw-px-[20%] tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-justify-center tw-gap-5 tw-my-20"
    >
      <!-- basic plan -->
      <div class="shadow tw-rounded-xl lg:tw-mt-12 tw-bg-white tw-h-[497px]">
        <div class="tw-relative tw-text-center">
          <img src="./../assets/pink.svg" alt="basic plan" />
          <div class="tw-absolute plan-name tw-text-white">
            <h4>BASIC PLAN</h4>
            <p class="tw-text-[14px] tw-leading-5">Please check this out</p>
          </div>
          <h2 class="price tw-absolute tw-font-bold tw-bottom-8 tw-text-4xl">
            <span class="tw-text-sm">$</span>20.00
          </h2>
        </div>
        <div
          class="tw-text-center plan-details tw-px-12 tw-text-[17px] tw-font-normal"
        >
          <p>2 Days</p>
          <hr />
          <div class="tw-flex tw-gap-1 tw-justify-center">
            <p><b>2</b> Instant Count Message</p>
            <img src="../assets/info_icon.png.svg" alt="" />
          </div>
        </div>
        <div class="tw-text-center tw-mt-14">
          <button
            class="plan-btn-basic tw-border-none text-white tw-font-semibold tw-text-base tw-rounded-lg tw-px-5 tw-py-2"
          >
            Buy Now
          </button>
        </div>
      </div>
      <!-- silver plan -->
      <div class="shadow-silver tw-rounded-xl tw-bg-white tw-h-[497px]">
        <div class="tw-relative tw-text-center">
          <img src="./../assets/blue.svg" alt="silver plan" />
          <div class="tw-absolute plan-name-silver tw-text-white">
            <h4>SILVER PLAN</h4>
            <!-- <p class="tw-text-[14px] tw-leading-5">Please check this out</p> -->
          </div>
          <h2 class="price tw-absolute tw-font-bold tw-bottom-8 tw-text-4xl">
            <span class="tw-text-sm">$</span>10.00
          </h2>
        </div>
        <div
          class="tw-text-center plan-details tw-px-12 tw-text-[17px] tw-font-normal"
        >
          <p>10 Days</p>
          <hr />
          <div class="tw-flex tw-gap-1 tw-justify-center">
            <p><b>2</b> Instant Count Message</p>
            <img src="../assets/info_icon.png.svg" alt="" />
          </div>
        </div>
        <div class="tw-text-center tw-mt-14">
          <button
            class="plan-btn-silver tw-border-none text-white tw-font-semibold tw-text-base tw-rounded-lg tw-px-5 tw-py-2"
          >
            Buy Now
          </button>
        </div>
      </div>
      <!-- gold plan -->
      <div class="shadow tw-rounded-xl lg:tw-mt-12 tw-bg-white tw-h-[497px]">
        <div class="tw-relative tw-text-center">
          <img src="./../assets/purple.svg" alt="gold plan" />
          <div class="tw-absolute plan-name tw-text-white">
            <h4>GOLD PLAN</h4>
            <p class="tw-text-[14px] tw-leading-5">Free event registration</p>
          </div>
          <h2 class="price tw-absolute tw-font-bold tw-bottom-8 tw-text-4xl">
            <span class="tw-text-sm">$</span>100.00
          </h2>
        </div>
        <div
          class="tw-text-center plan-details tw-px-12 tw-text-[17px] tw-font-normal"
        >
          <p>80 Days</p>
          <hr />
          <div class="tw-flex tw-gap-1 tw-justify-center">
            <p><b>12</b> Instant Count Message</p>
            <img src="../assets/info_icon.png.svg" alt="" />
          </div>
        </div>
        <div class="tw-text-center tw-mt-14">
          <button
            class="plan-btn-gold tw-border-none text-white tw-font-semibold tw-text-base tw-rounded-lg tw-px-5 tw-py-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.banner {
  background-image: url("src/assets/banner.svg");
  height: 400px;
}
button {
  cursor: pointer;
}
.shadow {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.plan-btn-basic {
  background-image: linear-gradient(to right, #f093fb, #f5576c);
}
.plan-btn-silver {
  background-image: linear-gradient(to right, #6dd5ed, #2193b0);
}
.plan-btn-gold {
  background-image: linear-gradient(to right, #f093fb, #753a88);
}
.plan-name {
  top: 33%;
  left: 40%;
  transform: translate(-33%, -40%);
}
.plan-name-silver {
  top: 33%;
  left: 38%;
  transform: translate(-33%, -40%);
}
.price {
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
}
.plan-details {
  color: rgba(29, 41, 52, 0.55);
}
.shadow-silver {
  box-shadow: 0px 38px 15px -3px rgba(27, 170, 204, 0.08);
}
</style>
