<<<<<<< HEAD
export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
=======
export default function () {
    return [
        {
            name: "Dashboard",
            to: "/home",
            to1: "/manage-resources",
            htmlBefore: '<i class="icon tides-icon-dashboard tides-fw tides-white"></i>',
            htmlAfter: "",
            show: false,
        },
        {
            name: "Manage Resources",
            htmlBefore: '<i class="icon tides-icon-resource tides-fw tides-white"></i>',
            to: "/manage-resources",
            show: true,
        },
        {
            name: "Contribution",
            htmlBefore: '<i class="icon tides-icon-contribution tides-fw tides-white"></i>',
            to: "/contribution",
            show: false,
        },
        {
            name: "Templates",
            htmlBefore: '<i class="icon tides-icon-template tides-fw tides-white"></i>',
            to: "/templates",
            show: false,
        },
        {
            name: "Settings",
            htmlBefore: '<i class="icon tides-icon-settings tides-fw tides-white"></i>',
            to: "/settings",
            show: false,
        },
    ];
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
}
