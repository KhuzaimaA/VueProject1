<template>
  <section>
    <div
      class="banner tw-flex tw-justify-center tw-flex-col tw-items-center tw-text-white tw-w-100 tw-bg-no-repeat tw-bg-cover tw-bg-center"
    >
      <span class="tw-font-normal tw-text-lg tw-leading-4">Our Events</span>

      <h1
        class="heading tw-text-3xl tw-font-normal tw-leading-10 md:tw-text-5xl"
      >
        Matrimonial Events
      </h1>
      <p class="tw-pt-3 tw-font-normal tw-leading-7 tw-text-sm md:tw-text-base">
        Matrimonial Events Description
      </p>
    </div>
    <!-- search bar  -->
    <div class="tw-my-14 tw-w-[60%] tw-mx-auto">
      <div
        class="search tw-border-none tw-relative tw-bg-white tw-my-0 tw-mx-auto"
      >
        <img
          src="../assets/search.svg"
          class="tw-absolute tw-top-5 tw-left-4"
          alt="search icon "
        />
        <input
          type="text"
          placeholder="Search Members..."
          class="search-input tw-border-none tw-bg-white tw-h-14 tw-w-full tw-px-12 tw-rounded-lg tw-font-normal tw-text-base tw-text-[#757575] tw-max-sm:text-xs"
          name=""
        />
      </div>
    </div>

    <!-- upcoming events  -->
    <div class="tw-text-center">
      <div
        class="upcoming_events tw-text-[#fb406c] tw-text-center tw-my-8 tw-leading-10 tw-font-normal tw-relative"
      >
        <h1 class="tw-text-[32px] md:tw-text-[40px] tw-font-medium">
          Upcoming Events
        </h1>
      </div>
    </div>
    <!--upcoming event cards  -->
    <div class="tw-w-[60%] tw-mx-auto">
      <div
        class="tw-grid tw-gap-4 sm:tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3"
      >
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
      </div>
    </div>

    <!-- past events  -->

    <div class="tw-text-center">
      <div
        class="upcoming_events tw-text-[#fb406c] tw-text-center tw-my-8 tw-leading-10 tw-font-normal tw-relative"
      >
        <h1 class="tw-text-[32px] md:tw-text-[40px] tw-font-medium">
          Past Events
        </h1>
      </div>
    </div>
    <!--past event cards  -->
    <div class="tw-w-[60%] tw-mx-auto tw-mb-10">
      <div
        class="tw-grid tw-gap-4 sm:tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3"
      >
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
        <div class="card_main">
          <div class="tw-my-1 tw-px-1 tw-w-full">
            <!-- Article -->
            <article class="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <img
                alt="Placeholder"
                class="tw-w-full"
                src="../assets/thumb_8_1680500967.svg"
              />
              <div
                class="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 tw-md:p-4"
              >
                <h1
                  class="event_at tw-font-semibold tw-text-base md:tw-text-base lg:tw-text-xl tw-leading-7 xl:tw-text-[15px]"
                >
                  Dubai Events
                </h1>
                <p
                  class="tw-text-[#1baacc] tw-flex tw-items-center tw-gap-1 tw-font-normal tw-text-xs lg:tw-text-sm"
                >
                  <img src="../assets/Vector.svg" alt="icon" />
                  <i>Lahore, Pakistan</i>
                </p>
              </div>
              <div
                class="tw-items-center tw-justify-between tw-leading-none tw-p-2 tw-md:p-4"
              >
                <p
                  class="tw-text-[#444444] tw-text-sm tw-font-normal tw-text-[11px]"
                >
                  Matrimonial events description here Matrimonial events
                  description hereMatrimonial events description here
                </p>
                <p
                  class="event_location tw-flex tw-items-center tw-gap-1 tw-mt-2 tw-font-normal tw-text-sm tw-font-[Helvetica]"
                >
                  <img src="../assets/Frame.svg" alt="clock icon" /> Mar 28,2023
                </p>
              </div>
              <button
                :onclick="clickHandler"
                class="tw-cursor-pointer tw-border-none tw-rounded-bl-lg tw-rounded-br-lg tw-bg-[#FB406C] tw-border-[#FB406C] tw-p-2 tw-w-full tw-text-center tw-text-white tw-font-normal tw-text-base tw-font-[Helvetica]"
              >
                View Details
              </button>
            </article>
            <!-- END Article -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useRouter } from "vue-router";
const Router = useRouter();
function clickHandler() {
  Router.push({ path: "/event-description" });
}
</script>
<style scoped>
.banner {
  background-image: url("src/assets/banner.svg");
  height: 400px;
}
.search {
  box-shadow: 17px 10px 14px -9px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.search-input:focus {
  outline-color: #fb406c;
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
  content: url("../assets/pseudo.svg");
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-39%);
}

.past_events {
  color: #fb406c;
}
.past_events:before {
  content: url("../assets/pseudo.svg");
  position: absolute;
  top: 0;
  left: 41%;
}

.cards {
  width: 60%;
}

.event_at {
  color: #343434;
}
.event_location {
  color: #1baacc;
}

.card_grid {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
