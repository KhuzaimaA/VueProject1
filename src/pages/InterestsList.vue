<template>
  <div>
    <!-- banner -->
    <div
      class="banner tw-flex tw-justify-center tw-flex-col tw-items-center tw-text-white tw-w-100 tw-bg-no-repeat tw-bg-cover tw-bg-center tw-mb-8"
    >
      <p class="tw-text-[18px] tw-text-slate-50">Check out your</p>
      <h2
        class="sm:tw-text-[48px] tw-text-[30px] tw-text-slate-50 tw-font-serif tw-font-normal tw-uppercase"
      >
        Interests List
      </h2>
    </div>
    <!-- banner end -->
    <div class="customBorder tw-mb-8">
      <!-- tabs menu -->
      <ul
        class="tw-flex tw-flex-wrap tw-justify-center tw-items-center tw--mb-px tw-p-0"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        <li class="tw-mr-2 tw-list-none" role="presentation">
          <button
            class="tw-inline-block tw-text-gray-500 hover:tw-text-[#FB406C] hover:tw-border-b-[#FB406C] tw-rounded-t-lg sm:tw-py-4 tw-p-2 sm:tw-px-4 tw-text-center tw-border-transparent tw-border-b-2 tw-bg-transparent tw-text-[14px] sm:tw-text-[24px]"
          >
            Accepted
          </button>
        </li>
        <li class="tw-mr-2 tw-list-none" role="presentation">
          <button
            class="tw-inline-block tw-text-[#FB406C] tw-border-b-[#FB406C] tw-rounded-t-lg tw-p-2 sm:tw-py-4 sm:tw-px-4 tw-text-center tw-border-transparent tw-border-b-2 tw-active tw-bg-transparent tw-text-[#FB406C] tw-text-[14px] sm:tw-text-[24px]"
          >
            Requested
          </button>
        </li>
        <li class="tw-mr-2 tw-list-none" role="presentation">
          <button
            class="tw-inline-block tw-text-gray-500 hover:tw-text-[#FB406C] hover:tw-border-b-[#FB406C] tw-rounded-t-lg tw-p-2 sm:tw-py-4 sm:tw-px-4 tw-text-center tw-border-transparent tw-border-b-2 dark:hover:tw-text-[#FB406C]-300 tw-bg-transparent tw-text-[14px] sm:tw-text-[24px]"
          >
            Interest
          </button>
        </li>
        <li class="tw-list-none" role="presentation">
          <button
            class="tw-inline-block tw-text-gray-500 hover:tw-text-[#FB406C] hover:tw-border-b-[#FB406C] tw-rounded-t-lg tw-p-2 sm:tw-py-4 sm:tw-px-4 tw-text-center tw-border-transparent tw-border-b-2 dark:hover:tw-text-[#FB406C]-300 tw-bg-transparent tw-text-[14px] sm:tw-text-[24px]"
          >
            Rejected
          </button>
        </li>
      </ul>
    </div>

    <!-- card content -->

    <div id="myTabContent">
      <!-- accepted -->
      <div
        class="tw-bg-gray-50 tw-p-4 tw-rounded-lg tw-hidden tw-w-10/12 tw-mx-auto"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <!-- accepted card main div -->
        <div class="sm:tw-flex tw-justify-between tw-flex-wrap tw-gap-4">
          <p>Accepted</p>
        </div>
      </div>
      <!-- Requested -->
      <div
        class="tw-bg-gray-50 tw-p-4 tw-rounded-lg tw-w-10/12 tw-mx-auto"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <!-- Requested card main div -->
        <div class="sm:tw-flex tw-justify-between tw-flex-wrap tw-gap-4">
          <!-- card 1 -->
          <div
            class="sm:tw-w-[48%] xl:tw-w-[23%] tw-h-auto tw-rounded-lg tw-shadow-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-pb-3 tw-mb-6 sm:tw-mb-0"
          >
            <!-- colored section div -->
            <div
              class="tw-w-[100%] tw-h-[166px] tw-rounded-[10px]"
              style="
                background: linear-gradient(
                  87.57deg,
                  #fb406c 0%,
                  rgba(234, 20, 126, 0.95) 0%,
                  #1baacc 99.61%
                );
              "
            ></div>
            <!-- image section div -->
            <div
              class="tw-w-[198px] tw-h-[199px] tw-mt-[-99.9px] tw-rounded-full tw-border-[#FB406C] tw-border-2"
            >
              <img src="../assets/thumb_8_1680500967.jpg.png" alt="image" />
            </div>
            <div
              class="tw-w-[100%] tw-flex tw-justify-between tw-items-center tw-p-4"
            >
              <p class="tw-text-[20px] tw-text-dark tw-font-medium">Bilal</p>
              <a href="#" class="tw-text-[#66CC66] tw-text-sm">View Profile</a>
            </div>
            <div class="tw-w-[100%] tw-p-4 tw-font-lg tw-font-normal">
              <p>
                Age <span>60</span> years, <span>Dubai</span>,
                <span>UAE</span>
              </p>
              <p>Doctor</p>
            </div>
            <div class="tw-w-[100%]">
              <button
                class="tw-py-2 tw-bg-[#FB406C] tw-text-white tw-font-normal tw-border-none tw-w-[100%] tw-cursor-pointer"
              >
                Send message
              </button>

              <div class="tw-grid tw-grid-cols-2">
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center crossButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-xmark" style="color: #d92047"></i>
                </button>
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center heartButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-heart" style="color: #1baacc"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- card 2 -->
          <div
            class="sm:tw-w-[48%] xl:tw-w-[23%] tw-h-auto tw-rounded-lg tw-shadow-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-pb-3 tw-mb-6 sm:tw-mb-0"
          >
            <!-- colored section div -->
            <div
              class="tw-w-[100%] tw-h-[166px] tw-rounded-[10px]"
              style="
                background: linear-gradient(
                  87.57deg,
                  #fb406c 0%,
                  rgba(234, 20, 126, 0.95) 0%,
                  #1baacc 99.61%
                );
              "
            ></div>
            <!-- image section div -->
            <div
              class="tw-w-[198px] tw-h-[199px] tw-mt-[-99.9px] tw-rounded-full tw-border-[#FB406C] tw-border-2"
            >
              <img src="../assets/thumb_8_1680500967.jpg.png" alt="image" />
            </div>
            <div
              class="tw-w-[100%] tw-flex tw-justify-between tw-items-center tw-p-4"
            >
              <p class="tw-text-[20px] tw-text-dark tw-font-medium">Bilal</p>
              <a href="#" class="tw-text-[#66CC66] tw-text-sm">View Profile</a>
            </div>
            <div class="tw-w-[100%] tw-p-4 tw-font-lg tw-font-normal">
              <p>
                Age <span>60</span> years, <span>Dubai</span>,
                <span>UAE</span>
              </p>
              <p>Doctor</p>
            </div>
            <div class="tw-w-[100%]">
              <button
                class="tw-py-2 tw-bg-[#FB406C] tw-text-white tw-font-normal tw-border-none tw-w-[100%] tw-cursor-pointer"
              >
                Send message
              </button>

              <div class="tw-grid tw-grid-cols-2">
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center crossButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-xmark" style="color: #d92047"></i>
                </button>
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center heartButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-heart" style="color: #1baacc"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- card 3 -->
          <div
            class="sm:tw-w-[48%] xl:tw-w-[23%] tw-h-auto tw-rounded-lg tw-shadow-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-pb-3 tw-mb-6 sm:tw-mb-0"
          >
            <!-- colored section div -->
            <div
              class="tw-w-[100%] tw-h-[166px] tw-rounded-[10px]"
              style="
                background: linear-gradient(
                  87.57deg,
                  #fb406c 0%,
                  rgba(234, 20, 126, 0.95) 0%,
                  #1baacc 99.61%
                );
              "
            ></div>
            <!-- image section div -->
            <div
              class="tw-w-[198px] tw-h-[199px] tw-mt-[-99.9px] tw-rounded-full tw-border-[#FB406C] tw-border-2"
            >
              <img src="../assets/thumb_8_1680500967.jpg.png" alt="image" />
            </div>
            <div
              class="tw-w-[100%] tw-flex tw-justify-between tw-items-center tw-p-4"
            >
              <p class="tw-text-[20px] tw-text-dark tw-font-medium">Bilal</p>
              <a href="#" class="tw-text-[#66CC66] tw-text-sm">View Profile</a>
            </div>
            <div class="tw-w-[100%] tw-p-4 tw-font-lg tw-font-normal">
              <p>
                Age <span>60</span> years, <span>Dubai</span>,
                <span>UAE</span>
              </p>
              <p>Doctor</p>
            </div>
            <div class="tw-w-[100%]">
              <button
                class="tw-py-2 tw-bg-[#FB406C] tw-text-white tw-font-normal tw-border-none tw-w-[100%] tw-cursor-pointer"
              >
                Send message
              </button>

              <div class="tw-grid tw-grid-cols-2">
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center crossButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-xmark" style="color: #d92047"></i>
                </button>
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center heartButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-heart" style="color: #1baacc"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- card 4 -->
          <div
            class="sm:tw-w-[48%] xl:tw-w-[23%] tw-h-auto tw-rounded-lg tw-shadow-lg tw-flex tw-flex-col tw-justify-center tw-items-center tw-pb-3 tw-mb-6 sm:tw-mb-0"
          >
            <!-- colored section div -->
            <div
              class="tw-w-[100%] tw-h-[166px] tw-rounded-[10px]"
              style="
                background: linear-gradient(
                  87.57deg,
                  #fb406c 0%,
                  rgba(234, 20, 126, 0.95) 0%,
                  #1baacc 99.61%
                );
              "
            ></div>
            <!-- image section div -->
            <div
              class="tw-w-[198px] tw-h-[199px] tw-mt-[-99.9px] tw-rounded-full tw-border-[#FB406C] tw-border-2"
            >
              <img src="../assets/thumb_8_1680500967.jpg.png" alt="image" />
            </div>
            <div
              class="tw-w-[100%] tw-flex tw-justify-between tw-items-center tw-p-4"
            >
              <p class="tw-text-[20px] tw-text-dark tw-font-medium">Bilal</p>
              <a href="#" class="tw-text-[#66CC66] tw-text-sm">View Profile</a>
            </div>
            <div class="tw-w-[100%] tw-p-4 tw-font-lg tw-font-normal">
              <p>
                Age <span>60</span> years, <span>Dubai</span>,
                <span>UAE</span>
              </p>
              <p>Doctor</p>
            </div>
            <div class="tw-w-[100%]">
              <button
                class="tw-py-2 tw-bg-[#FB406C] tw-text-white tw-font-normal tw-border-none tw-w-[100%] tw-cursor-pointer"
              >
                Send message
              </button>

              <div class="tw-grid tw-grid-cols-2">
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center crossButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-xmark" style="color: #d92047"></i>
                </button>
                <button
                  class="tw-flex tw-p-2 tw-bg-white tw-items-center tw-justify-center heartButton tw-border-none tw-cursor-pointer"
                >
                  <i class="fa fa-solid fa-heart" style="color: #1baacc"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Intrest -->
      <div
        class="tw-bg-gray-50 tw-p-4 tw-rounded-lg tw-hidden tw-w-10/12 tw-mx-auto"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <!-- Intrest card main div -->
        <div class="sm:tw-flex tw-justify-between tw-flex-wrap tw-gap-4">
          <p>this is Intrest List</p>
        </div>

        <!-- card -->
      </div>
      <!-- Rejected -->
      <div
        class="tw-bg-gray-50 tw-p-4 tw-rounded-lg tw-hidden tw-w-10/12 tw-mx-auto"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <!-- Rejected card main div -->
        <div class="sm:tw-flex tw-justify-between tw-flex-wrap tw-gap-4">
          <p>this is Rejected List</p>
        </div>
      </div>
    </div>
    <!-- card content end -->
  </div>
</template>
<script></script>
<style scoped>
.banner {
  background-image: url("src/assets/banner.svg");
  height: 400px;
}

.crossButton {
  border-bottom: 1px solid #d92047;
  border-left: 1px solid #d92047;
  border-bottom-left-radius: 10px;
}
.heartButton {
  border-bottom: 1px solid #1baacc;
  border-left: 1px solid #1baacc;
  border-right: 1px solid #1baacc;
  border-bottom-right-radius: 10px;
}

.customBorder {
  border-bottom: 1px solid #ebebeb;
}
</style>
