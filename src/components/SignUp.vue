<template>
    <div class="signup">
        <h2 class="pt-5">Welcome to Cipher Chat</h2>
        <form class="detail-box mt-5">
            <div class="form-group my-5">
                <h4>Signup to Chat</h4>

                <input type="text" v-model="name" class="form-control my-4" placeholder="Enter your name..." />
                <input type="text" v-model="email" class="form-control" placeholder="Enter your email..." />
                <input type="password" v-model="password" class="form-control my-4"
                    placeholder="Enter your password..." />

                <router-link :to="{ path: '/' }">
                    <h6 class="mb-3" style="font-weight: 600">Back to login</h6>
                </router-link>

                <button style="font-weight: 600" v-on:click="signup" type="button"
                    class="btn btn-primary">Signup</button>
            </div>
        </form>
    </div>
</template>


<script>
    import Swal from 'sweetalert2'

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    })

    import {
        fb,
        db
    } from '../firebase'

    export default {
        name: 'SignUp',
        data() {
            return {
                name: null,
                email: null,
                password: null
            }
        },
        methods: {
            signup() {
                fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(async (user) => {
                        console.log(user.user.uid);
                        await db.collection("users").doc(user.user.uid).set({
                                name: this.name,
                                // id: user.user.id,
                                email: this.email,
                                // password: this.password,
                                description: '',
                                URL: ''
                            })
                            .then(() => {
                                console.log("Document successfully written!");

                                // localStorage.setItem("id", user.user.uid);
                                // localStorage.setItem("name", this.name);
                                // localStorage.setItem("email", this.email);
                                // // localStorage.setItem("password", this.password);
                                // localStorage.setItem("photoURL", "");
                                // localStorage.setItem("description", "");
                                // // localStorage.setItem("FirebaseDocumentId", ref.id);

                                this.$router.push('/chat')
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Signed In Successfully'
                                })

                            })
                            .catch(err => console.log(err));
                    })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    input[type="text"],
    input[type="password"] {
        margin: auto;
        width: 90%;
    }

    .detail-box {
        padding: 5px;
        border: 1px solid lightgrey;
        max-width: 400px;
        min-height: 250px;
        margin: auto;
    }

    h2,
    h4 {
        font-weight: 600;
    }

    .signup {
        margin-top: 75px;
        padding: 10px;
    }

    button {
        width: 40%;
    }
</style>