<template>
  <div class=" tw-w-[100vw]">
   <!-- card1 -->
   <div class="tw-w-[75%] max-sm:tw-w-[80%] tw-mt-[50px] tw-mx-auto max-md:tw-flex-wrap tw-my-10 tw-flex  tw-gap-5 tw-min-h-[300px] tw-p-5 tw-bg-white  tw-drop-shadow-md tw-rounded-md">
    <q-img src="../assets/profileImg.svg" alt="../assets/profileImg.svg" class=" tw-max-w-[250px] tw-w-full tw-h-[300px]"/>
    <div class=" tw-flex tw-flex-col tw-justify-start tw-gap-10 tw-max-w-[900px] tw-w-full">
      <div class=" tw-flex tw-justify-between max-xl:tw-flex-wrap tw-gap-3">
       <div class=" tw-flex tw-flex-col tw-gap-4 tw-w-[250px]">
        <h1 class="tw-text-[#444444]  tw-text-[32px] tw-font-[700] tw-leading-[150%] max-sm:tw-text-[26px] max-xl:tw-text-[25px] ">Zarina Saloon</h1>
        <p class="tw-text-[#444444]  tw-text-[20px] tw-font-[400] tw-leading-[150%] max-sm:tw-text-[16px] max-xl:tw-text-[16px] ">- Introduction here</p>
       </div>
       <div class=" tw-flex tw-justify-start tw-flex-wrap tw-items-start tw-gap-2">
        <q-btn class=" tw-bg-[#FB406C] tw-text-white tw-rounded-md tw-min-h-[40px] tw-gap-2  tw-text-[16px] max-sm:tw-text-[12px] tw-font-[400] tw-leading-[18px]    ">
          <i class="fa fa-solid fa-message tw-mr-3" style="color:white"></i>
          Message</q-btn>
          <q-btn class=" tw-bg-[#FB406C] tw-text-white tw-rounded-md tw-min-h-[40px] tw-flex tw-items-center  max-sm:tw-text-[12px] tw-justify-center tw-gap-2  tw-text-[16px] tw-font-[400] tw-leading-[18px]    ">
            <i class="fa fa-solid fa-heart tw-mr-3" style="color:white"></i>
            Like</q-btn>
            <q-btn class=" tw-bg-[#FB406C] tw-text-white tw-rounded-md tw-min-h-[40px] tw-flex tw-items-center  max-sm:tw-text-[12px] tw-justify-center tw-gap-2  tw-text-[16px] tw-font-[400] tw-leading-[18px]    ">
              <i class="fa fa-solid fa-xmark tw-mr-3" style="color:white"></i>
              Ignore</q-btn>
              <q-btn class=" tw-bg-[#FB406C] tw-text-white tw-rounded-md tw-min-h-[40px] tw-flex tw-items-center  max-sm:tw-text-[12px] tw-justify-center tw-gap-2  tw-text-[16px] tw-font-[400] tw-leading-[18px]    ">
                <i class="fa fa-solid fa-flag tw-mr-3" style="color:white"></i>
                Report</q-btn>

       </div>
      </div>
      <hr class=" tw-w-full tw-h-[0.5px] tw-bg-[#8C8E97] ">
      <div class=" tw-grid tw-grid-cols-2 tw-max-w-[400px] tw-w-full ">
       <h1 class="tw-text-[#8C8E97]  max-sm:tw-text-[16px] tw-text-[20px] tw-font-[400] tw-leading-[30px]">Profile ID#:</h1>
       <h1 class="tw-text-[#444444]  max-sm:tw-text-[16px] tw-text-[20px] tw-font-[400] tw-leading-[30px]">3434</h1>
       <h1 class="tw-text-[#8C8E97]  max-sm:tw-text-[16px] tw-text-[20px] tw-font-[400] tw-leading-[30px]">Age</h1>
       <h1 class="tw-text-[#444444]  max-sm:tw-text-[16px] tw-text-[20px] tw-font-[400] tw-leading-[30px]">22 years</h1>
       <h1 class="tw-text-[#8C8E97]  max-sm:tw-text-[16px] tw-text-[20px] tw-font-[400] tw-leading-[30px]">Location</h1>
       <h1 class="tw-text-[#444444]  max-sm:tw-text-[16px] tw-text-[20px] tw-font-[400] tw-leading-[30px]">Lahore,  Pakistan</h1>
      </div>
    </div>
   </div>
   <div class="tw-w-[75%] max-sm:tw-w-[80%] tw-mx-auto  tw-my-10 tw-flex tw-flex-col tw-flex-wrap  tw-gap-5 tw-min-h-[150px] tw-p-5 tw-bg-white tw-shadow-md tw-rounded-md">
    <h1 class="tw-text-[#444444]  tw-text-[20px] tw-font-[700] tw-leading-[24px]">Photos</h1>
    <div class="tw-flex tw-overflow-x-auto scrollbar-remover tw-w-full  tw-items-center tw-justify-start tw-gap-2">
    <img v-for="item in data" :key="item.img" :src="item.img" alt="">
    </div>
   </div>
   <div class="tw-w-[75%] max-sm:tw-w-[80%] tw-mx-auto tw-my-10 tw-flex tw-flex-col  tw-gap-5 tw-min-h-[150px] tw-p-5 tw-bg-white tw-shadow-md tw-rounded-md">
    <h1 class="tw-text-[#444444]  tw-text-[20px] tw-font-[700] max-sm:tw-text-[16px] tw-leading-[24px]">Personal Information</h1>
    <div class=" tw-grid tw-grid-cols-2  tw-gap-3 tw-max-w-[500px] tw-w-full ">
      <h1 v-for="item in data2" :key="item.id" class="tw-text-[20px] lg:tw-whitespace-nowrap max-sm:tw-text-[16px] tw-font-[400] tw-leading-[30px]" :style="{'color':item.color}">{{item.title}}</h1>

     </div>
   </div>
   <div class="tw-w-[75%] max-sm:tw-w-[80%] tw-mx-auto tw-my-10 tw-flex tw-flex-col  tw-gap-5 tw-min-h-[150px] tw-p-5 tw-bg-white tw-shadow-md tw-rounded-md">
    <h1 class="tw-text-[#444444]  tw-text-[20px] tw-font-[700] tw-leading-[24px] max-sm:tw-text-[16px]">Present Address Information</h1>
    <div class=" tw-grid tw-grid-cols-2  tw-gap-3 tw-max-w-[500px] tw-w-full ">
      <h1 v-for="item in data3" :key="item.id" class="tw-text-[20px] lg:tw-whitespace-nowrap tw-font-[400] max-sm:tw-text-[16px] tw-leading-[30px]" :style="{'color':item.color}">{{item.title}}</h1>

     </div>
   </div>
   <div class="tw-w-[75%] max-sm:tw-w-[80%] tw-mx-auto tw-my-10 tw-flex tw-flex-col  tw-gap-5 tw-min-h-[150px] tw-p-5 tw-bg-white tw-shadow-md tw-rounded-md">
    <h1 class="tw-text-[#444444]  tw-text-[20px] tw-font-[700] tw-leading-[24px] max-sm:tw-text-[16px]">Partner Expectation</h1>
    <div class=" tw-grid tw-grid-cols-2  tw-gap-3 tw-max-w-[500px] tw-w-full ">
      <h1 v-for="item in data4" :key="item.id" class="tw-text-[20px] xl:tw-whitespace-nowrap tw-font-[400] tw-leading-[30px] max-sm:tw-text-[16px]" :style="{'color':item.color}">{{item.title}}</h1>

     </div>
   </div>
   <div class="tw-w-[75%] max-sm:tw-w-[80%] tw-mx-auto tw-my-10 tw-flex tw-flex-col  tw-gap-5 tw-min-h-[150px] tw-p-5 tw-bg-white tw-shadow-md tw-rounded-md">
    <h1 class="tw-text-[#444444]  tw-text-[20px] tw-font-[700] tw-leading-[24px] max-sm:tw-text-[16px]">Education & Career</h1>
    <div class=" tw-grid tw-grid-cols-2  tw-gap-3 tw-max-w-[500px] tw-w-full ">
      <h1 v-for="item in data5" :key="item.id" class="tw-text-[20px] tw-font-[400] lg:tw-whitespace-nowrap tw-leading-[30px] max-sm:tw-text-[16px]" :style="{'color':item.color}">{{item.title}}</h1>

     </div>
   </div>
   <div class="tw-w-[75%] max-sm:tw-w-[80%] tw-mx-auto tw-my-10 tw-flex tw-flex-col  tw-gap-5 tw-min-h-[150px] tw-p-5 tw-bg-white tw-shadow-md tw-rounded-md">
    <h1 class="tw-text-[#444444]  tw-text-[20px] tw-font-[700] tw-leading-[24px] max-sm:tw-text-[16px]">Personal Information</h1>
    <div class=" tw-grid tw-grid-cols-2  tw-gap-3 tw-max-w-[500px] tw-w-full ">
      <h1 v-for="item in data6" :key="item.id" class="tw-text-[20px] tw-font-[400] tw-leading-[30px] max-sm:tw-text-[16px] lg:tw-whitespace-nowrap" :style="{'color':item.color}">{{item.title}}</h1>

     </div>
   </div>
  </div>

</template>
<script setup>
const data=[
  {img:new URL(`../assets/photo1.svg`, import.meta.url).href},
  {img:new URL(`../assets/photo2.svg`, import.meta.url).href},
  {img:new URL(`../assets/photo3.svg`, import.meta.url).href},
  {img:new URL(`../assets/photo4.svg`, import.meta.url).href},
  {img:new URL(`../assets/photo2.svg`, import.meta.url).href},
  {img:new URL(`../assets/photo4.svg`, import.meta.url).href},
  {img:new URL(`../assets/photo1.svg`, import.meta.url).href},
  {img:new URL(`../assets/photo3.svg`, import.meta.url).href},
];
const data2=[
  { id: 1,title:'Full Name:' ,color:'#8C8E97' },

{ id: 2, title:'Zoya Khan' ,color:'#444444' },
{ id: 2, title:'Gender:' ,color:'#8C8E97' },
{ id: 3, title:'Female' ,color:'#444444' },
{ id: 6, title:'Martial Status:' ,color:'#8C8E97' },
{ id: 4,title:'Never Married' ,color:'#444444' },
{ id: 5, title:'Hight:' ,color:'#8C8E97' },
{ id: 6, title:'5ft 3in - 160cm:' ,color:'#444444' },
{ id: 7, title:'Date of birth::' ,color:'#8C8E97' },
{ id: 8, title:'2023-04-04' ,color:'#444444' },
{ id: 9, title:'On Behalf:' ,color:'#8C8E97' },
{ id: 10, title:'Self' ,color:'#444444' },
{ id: 11, title:'Religion:' ,color:'#8C8E97' },
{ id: 12, title:'Islam' ,color:'#444444' },
{ id: 13, title:'Caste:' ,color:'#8C8E97' },
{ id: 14, title:'Niazi' ,color:'#444444' },

]
const data3=[
  { id: 1,title:'Country:' ,color:'#8C8E97' },

{ id: 2, title:'Pakistan' ,color:'#444444' },
{ id: 3, title:'State:' ,color:'#8C8E97' },
{ id: 4, title:'Punjab' ,color:'#444444' },
{ id: 5, title:'City' ,color:'#8C8E97' },
{ id: 6,title:'Lahore' ,color:'#444444' },
{ id: 7, title:'Nationality:' ,color:'#8C8E97' },
{ id: 8, title:'Pakistani' ,color:'#444444' },


]
const data4=[
  { id: 1,title:'General Requirement:' ,color:'#8C8E97' },

{ id: 2, title:'respect and kindness, shared values, good communication skills, trustworthiness' ,color:'#444444' },
{ id: 3, title:'Specialization:' ,color:'#8C8E97' },
{ id: 4, title:'History' ,color:'#444444' },
{ id: 5, title:'Occupation' ,color:'#8C8E97' },
{ id: 6,title:'Teacher' ,color:'#444444' },
{ id: 7, title:'Working with:' ,color:'#8C8E97' },
{ id: 8, title:'Google' ,color:'#444444' },
{ id: 9, title:'Annually Income' ,color:'#8C8E97' },
{ id: 10, title:'$78000 to $80000' ,color:'#444444' },



]
const data5=[
  { id: 1,title:'Education:' ,color:'#8C8E97' },

{ id: 2, title:'Undergraduate' ,color:'#444444' },
{ id: 3, title:'Specialization:' ,color:'#8C8E97' },
{ id: 4, title:'History' ,color:'#444444' },
{ id: 5, title:'Occupation' ,color:'#8C8E97' },
{ id: 6,title:'Teacher' ,color:'#444444' },
{ id: 7, title:'Working with:' ,color:'#8C8E97' },
{ id: 8, title:'Google' ,color:'#444444' },
{ id: 9, title:'Annually Income' ,color:'#8C8E97' },
{ id: 10, title:'$78000 to $80000' ,color:'#444444' },



]
const data6=[
  { id: 1,title:'Appearance:' ,color:'#8C8E97' },

{ id: 2, title:'188 cm, 91 kg, athletic build, brown hair and brown eyes' ,color:'#444444' },
{ id: 3, title:'Age' ,color:'#8C8E97' },
{ id: 4, title:'20 -28' ,color:'#444444' },
{ id: 5, title:'Hight:' ,color:'#8C8E97' },
{ id: 6,title:'5ft 3in - 160cm' ,color:'#444444' },
{ id: 7, title:'Weight' ,color:'#8C8E97' },
{ id: 8, title:'50 kg - 70 kg' ,color:'#444444' },
{ id: 9, title:'Martial Status:' ,color:'#8C8E97' },
{ id: 10, title:'Never Married' ,color:'#444444' },
{ id: 9, title:'Children Acceptable:' ,color:'#8C8E97' },
{ id: 10, title:'No, and Im looking without children' ,color:'#444444' },
{ id: 9, title:'Caste:' ,color:'#8C8E97' },
{ id: 10, title:'Niazi' ,color:'#444444' },
{ id: 9, title:'Religion:' ,color:'#8C8E97' },
{ id: 10, title:'Islam' ,color:'#444444' },
{ id: 9, title:'Country of Residence' ,color:'#8C8E97' },
{ id: 10, title:'Pakistan ' ,color:'#444444' },
{ id: 9, title:'Availability of a car:' ,color:'#8C8E97' },
{ id: 10, title:'There are' ,color:'#444444' },
{ id: 9, title:'Education:' ,color:'#8C8E97' },
{ id: 10, title:'Higher' ,color:'#444444' },
{ id: 9, title:'Profession' ,color:'#8C8E97' },
{ id: 10, title:'Any' ,color:'#444444' },
{ id: 9, title:'Complexion' ,color:'#8C8E97' },
{ id: 10, title:'---' ,color:'#444444' },
{ id: 9, title:'Drinking Habit:' ,color:'#8C8E97' },
{ id: 10, title:'I dont drink, but I dont mind' ,color:'#444444' },
{ id: 9, title:'Smoking Habit:' ,color:'#8C8E97' },
{ id: 10, title:'Against smoking' ,color:'#444444' },
{ id: 9, title:'Diet' ,color:'#8C8E97' },
{ id: 10, title:'---' ,color:'#444444' },
{ id: 9, title:'Body Type:' ,color:'#8C8E97' },
{ id: 10, title:'---' ,color:'#444444' },
{ id: 9, title:'Personal Value' ,color:'#8C8E97' },
{ id: 10, title:'---' ,color:'#444444' },
{ id: 9, title:'Manglik :' ,color:'#8C8E97' },
{ id: 10, title:'No' ,color:'#444444' },
{ id: 9, title:'Any Disability :' ,color:'#8C8E97' },
{ id: 10, title:'No' ,color:'#444444' },
{ id: 9, title:'Mother Tongue :' ,color:'#8C8E97' },
{ id: 10, title:'---' ,color:'#444444' },
{ id: 9, title:'Preferred Status' ,color:'#8C8E97' },
{ id: 10, title:'---' ,color:'#444444' },
{ id: 9, title:'Family Value' ,color:'#8C8E97' },
{ id: 10, title:'---' ,color:'#444444' },
{ id: 9, title:'Preferred Country' ,color:'#8C8E97' },
{ id: 10, title:'Pakistan' ,color:'#444444' },
{ id: 9, title:'Preferred State' ,color:'#8C8E97' },
{ id: 10, title:'Punjab' ,color:'#444444' },
]
</script>

<style>

.scrollbar-remover::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-remover {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
