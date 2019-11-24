import React from "react";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
// import BlogOverview from "./views/BlogOverview";
// import UserProfileLite from "./views/UserProfileLite";
// import AddNewPost from "./views/AddNewPost";
// import Errors from "./views/Errors";
// import ComponentsOverview from "./views/ComponentsOverview";
// import Tables from "./views/Tables";
// import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  // {
  //   path: "/blog-overview",
  //   layout: DefaultLayout,
  //   component: BlogOverview
  // },
  // {
  //   path: "/user-profile-lite",
  //   layout: DefaultLayout,
  //   component: UserProfileLite
  // },
  // {
  //   path: "/add-new-post",
  //   layout: DefaultLayout,
  //   component: AddNewPost
  // },
  // {
  //   path: "/errors",
  //   layout: DefaultLayout,
  //   component: Errors
  // },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  // {
  //   path: "/blog-posts",
  //   layout: DefaultLayout,
  //   component: BlogPosts
  // }
=======
import {Redirect} from "react-router-dom";

// Layout Types
import {DefaultLayout} from "./layouts";

// Route Views
import {STATE_LOGIN, STATE_SIGNUP} from "./components/auth/AuthForn";
import AuthPage from "./views/AuthPage";
import Dashboard from "./views/Dashboard";
import ManageResources from "./views/ManageResources";
import Contribution from "./views/Contribution";
import Templates from "./views/Templates";
import Errors from "./views/Errors";
import EmptyLayout from "./layouts/Empty";
import Settings from "./views/Settings";
// import UserProfileLite from "./views/UserProfileLite";
// import AddNewPost from "./views/AddNewPost";
// import ComponentsOverview from "./views/ComponentsOverview";
// import Tables from "./views/Tables";
// import BlogPosts from "./views/BlogPosts";
export default [
    // {
    //     path: "/",
    //     exact: true,
    //     layout: DefaultLayout,
    //     component: () => <Redirect to="/blog-overview"/>
    // },
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: Errors
    },
    {
        path: "/login",
        layout: EmptyLayout,
        component: props => <AuthPage {...props} authState={STATE_LOGIN}/>
    },
    {
        path: "/signup",
        layout: EmptyLayout,
        component: props => <AuthPage {...props} authState={STATE_SIGNUP}/>
    },
    {
        path: "/home",
        layout: DefaultLayout,
        component: Dashboard
    },
    {
        path: "/manage-resources",
        layout: DefaultLayout,
        component: ManageResources
    },
    {
        path: "/contribution",
        layout: DefaultLayout,
        component: Contribution
    },
    {
        path: "/templates",
        layout: DefaultLayout,
        component: Templates
    },
    {
        path: "/settings",
        layout: DefaultLayout,
        component: Settings
    },
    {
        path: "/errors",
        layout: DefaultLayout,
        component: Errors
    },
    // {
    //   path: "/components-overview",
    //   layout: DefaultLayout,
    //   component: ComponentsOverview
    // },
    // {
    //   path: "/tables",
    //   layout: DefaultLayout,
    //   component: Tables
    // },
    // {
    //   path: "/blog-posts",
    //   layout: DefaultLayout,
    //   component: BlogPosts
    // }
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1
];
