import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD6hC40qQkLHBxiu4Ht-N8h090UYRAhpMw",
  authDomain: "my-address-pj-a9ed6.firebaseapp.com",
  projectId: "my-address-pj-a9ed6",
  storageBucket: "my-address-pj-a9ed6.appspot.com",
  messagingSenderId: "755203204816",
  appId: "1:755203204816:web:e2d925de066c05b4a9e0d5",
  measurementId: "G-FPX3PD8PXP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
