<template>
    <div class="sign-up">
        <h3>Let's create a new account</h3>
        <input type="text" placeholder="Email" v-model="email">
        <br>
        <input type="password" placeholder="Password" v-model="password">
        <br>
        <button @click="signUp">Sign up</button>
        <span>or go back to <router-link to="/login">login.</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    alert('Your account has been created.')
                    this.$router.replace('home')
                    console.log(user)
                },
                (err) => {
                    alert('Hey! ' + err.message)
                }
            )
        }
    }
}
</script>

<style scoped>
    .sign-up {
        margin-top: 40px;
    }

    input {
        margin: 10px 0px;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }

    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>
