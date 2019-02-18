// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'

Vue.config.productionTip = false

let app = ''

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBnKanjxyLWPJYPDQ3X2IGc5Mn3CSUlXNA",
  authDomain: "vue-firebase-demo-3e592.firebaseapp.com",
  databaseURL: "https://vue-firebase-demo-3e592.firebaseio.com",
  projectId: "vue-firebase-demo-3e592",
  storageBucket: "vue-firebase-demo-3e592.appspot.com",
  messagingSenderId: "461425320463"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
