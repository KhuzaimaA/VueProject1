const routes = [
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Admin/Dashboard/DashboardPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/FrontEndLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "",
        component: () => import("pages/HomeSme.vue"),
        exact: true,
      },
      {
        path: "home",
        component: () => import("pages/HomeSme.vue"),
      },
      {
        path: "member",
        component: () => import("pages/MemberPage.vue"),
      },
      { path: "register", component: () => import("pages/RegisterPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      {
        path: "add-member",
        component: () => import("pages/AddMemberPage.vue"),
      },
      {
        path: "picture-privacy",
        component: () => import("pages/PicturePrivacySetting.vue"),
      },
      {
        path: "notification",
        component: () => import("pages/NotificationPage.vue"),
      },
      {
        path: "settings",
        component: () => import("pages/SettingsPage.vue"),
      },
      {
        path: "matrimonial-events",
        component: () => import("pages/MatrimonialEvents.vue"),
      },
      { path: "member", component: () => import("pages/MemberPage.vue") },
      {
        path: "happy-couples",
        component: () => import("src/pages/SuccessfulStories.vue"),
      },
      {
        path: "stories-description",
        component: () => import("src/pages/SuccessStoriesDescription.vue"),
      },
      {
        path: "member-profile",
        component: () => import("src/pages/MemberProfile.vue"),
      },
      {
        path: "profile-setting",
        component: () => import("src/pages/ProfileSetting.vue"),
      },
      {
        path: "event-description",
        component: () => import("pages/EventDescription.vue"),
      },
      {
        path: "event-register",
        component: () => import("pages/EventRegisterCheckOut.vue"),
      },

      {
        path: "plans",
        component: () => import("pages/plansPage.vue"),
      },
      {
        path: "interests",
        component: () => import("pages/InterestsList.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
