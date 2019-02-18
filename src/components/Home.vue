<template>
  <div class="home">
      <app-helloworld
        :msg="'Welcome to your Vue.js App'"
      ></app-helloworld>
    <HelloWorld msg="Welcome to your Vue.js App" />
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components: {
      'app-helloworld': HelloWorld
  },
  methods: {
      logout() {
          firebase.auth().signOut()
          .then(() => {
              this.$router.replace('login')
          })
      }
  }
}
</script>

<style scoped>

</style>
