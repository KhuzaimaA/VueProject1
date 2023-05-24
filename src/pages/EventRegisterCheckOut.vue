<template>
  <div class="tw-bg-gradient-to-r tw-from-cyan-100 tw-to-blue-100">
    <div class="tw-w-[80%] tw-mx-auto">
      <!-- <div
        class="upcoming_events tw-text-center tw-text-[#FB406C] tw-text-4xl tw-my-8 tw-leading-10 tw-font-normal tw-relative"
      >
        <p>We're excited to see you at the event!!</p>
      </div> -->
      <div class="tw-text-center tw-pt-6">
        <div
          class="upcoming_events tw-text-[#FB406C] tw-text-center tw-text-4xl tw-my-8 tw-leading-10 tw-font-normal tw-relative"
        >
          <span
            class="tw-text-[25px] sm:tw-text-[30px] md:tw-text-[40px] lg:tw-text-[45px] tw-text-center tw-text-[#FB406C] tw-font-serif"
          >
            We're excited to see you at the event!!
          </span>
        </div>
      </div>
      <div class="lg:tw-flex tw-gap-4 tw-w-full tw-flex-wrap lg:tw-flex-nowrap">
        <div
          class="tw-shadow lg:tw-w-[58%] tw-p-6 tw-mb-5 tw-border-t-2 tw-my-2 tw-lg:my-0 tw-bg-[#FFFFFF] tw-flex tw-justify-around tw-flex-col"
          style="padding: 0 8px"
        >
          <div
            class="tw-flex tw-w-full tw-justify-between tw-flex-col sm:tw-flex-row"
          >
            <div class="tw-flex-grow">
              <div class="tw-my-4 tw-px-2">
                <label
                  for="frm-whatever"
                  class="tw-font-[Helvetica] tw-font-normal tw-leading-[18.4px]"
                  >Card Name</label
                >
                <br />
                <input
                  type="text"
                  class="tw-py-2 tw-px-2 tw-w-[100%]"
                  placeholder="Mark"
                />
              </div>
              <div
                class="tw-relative tw-flex tw-flex-col sect-2 tw-mb-4 tw-px-2"
              >
                <label
                  class="tw-font-[Helvetica] tw-font-normal tw-leading-[18.4px]"
                  >Card number</label
                >
                <input
                  type="text"
                  class="tw-py-2 tw-px-2 tw-w-full tw-font-bold"
                  placeholder=".... .... .... ...."
                />
                <span
                  class="tw-absolute tw-right-[20px] tw-top-[35px] tw-text-[10px]"
                  >MM/YY CVC</span
                >
              </div>
            </div>
            <div class="tw-mt-8">
              <img class="tw-w-full" src="../assets/bank-card.svg" alt="" />
            </div>
          </div>
          <div>
            <button
              class="tw-font-[Helvetica] tw-w-full tw-bg-[#fb406c] tw-mb-4 lg:tw-mb-0 tw-text-white tw-text-center tw-font-medium tw-rounded tw-py-2 tw-cursor-pointer tw-border-none"
            >
              Click here
            </button>
          </div>
        </div>

        <div class="lg:tw-w-[42%] tw-mb-3">
          <div
            class="tw-shadow custom-border tw-p-2 tw-my-2 tw-lg:my-0 tw-bg-[#FFFFFF]"
          >
            <div
              class="tw-ml-4 tw-my-4 tw-text-3xl tw-font-[Helvetica ] tw-font-bold tw-leading-[34.5px]"
            >
              <span>Details</span>
            </div>
            <div
              class="tw-text-[18px] tw-flex tw-justify-between tw-my-2 tw-mx-4 tw-font-normal tw-text-lg tw-leading-[22.12px]"
            >
              <span>User Name</span>
              <p>Muhammad Bilal Ansari</p>
            </div>
            <div
              class="tw-flex tw-justify-between tw-my-2 tw-mx-4 tw-font-[Helvetica Light] tw-font-normal tw-text-lg tw-leading-[22.12px]"
            >
              <p>Seat for family reserved</p>
              <span>2</span>
            </div>
            <div
              class="tw-flex tw-justify-between tw-my-2 tw-mx-4 tw-font-[Helvetica Light] tw-font-normal tw-text-lg tw-leading-[22.12px]"
            >
              <p>Charges for family reserved</p>
              <span>10 USD</span>
            </div>
            <div
              class="tw-flex tw-justify-between tw-my-6 tw-mx-4 tw-font-[Helvetica Light] tw-font-normal tw-text-lg tw-leading-[22.12px]"
            >
              <p>Event Charges</p>
              <span>100.00 USD</span>
            </div>
            <hr class="tw-my-4 tw-mx-4" />
            <div class="tw-flex tw-justify-between tw-my-4 tw-mx-4">
              <p
                class="tw-font-[Helvetica] tw-font-bold tw-text-lg tw-leading-[20.7px]"
              >
                Total Charges
              </p>
              <span
                class="tw-font-[Helvetica] tw-font-normal tw-leading-[20.7px]"
                >120.00 USD</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.upcoming_events {
  display: inline-block;
  position: relative;
  text-align: center;
  /* margin-top: 18px; */
  line-height: 1.4;
  font-weight: normal;
}
.upcoming_events:before {
  content: url("../assets/pseudo.svg");
  position: absolute;
  top: -20px;
  left: -10px;
  transform: translateX(-39%);
}
.custom-border {
  border-top: 2px solid #c81a43;
}
</style>
