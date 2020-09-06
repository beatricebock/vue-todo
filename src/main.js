import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyBT8trOP-0d0QrLiwEO4ey8DXGU73inv-M",
  authDomain: "vue-todo-d602d.firebaseapp.com",
  databaseURL: "https://vue-todo-d602d.firebaseio.com",
  projectId: "vue-todo-d602d",
  storageBucket: "vue-todo-d602d.appspot.com",
  messagingSenderId: "148555864022",
};

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
