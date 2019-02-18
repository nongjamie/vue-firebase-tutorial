<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" placeholder="Email" v-model="email">
        <br>
        <input type="password" placeholder="Password" v-model="password">
        <br>
        <button @click="login">Connection</button>
        <p>You don't have an account ? <router-link to="/sign-up">You can create one</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    alert('Well done! You are now connected.')
                    this.$router.replace('home')
                    console.log(user)
                }, 
                (error) => {
                    alert('Hey! ' + error.message)
                }
            )
        }
    }
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }

    input {
        margin: 10px 0px;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>