<template>
  <div class="login">
    <h2 class="pt-5">Welcome to Cipher Chat</h2>
    <form class="detail-box mt-5">
      <div class="form-group my-5">
        <h4>Login to Chat</h4>
        <input type="text" class="form-control mt-4" v-model="email" placeholder="Enter your email..." />
        <input type="password" class="form-control my-4" v-model="password" v-on:keyup.enter="login"
          placeholder="Enter your password..." />

        <router-link :to="{ path: 'signup' }">
          <h6 class="mb-3" style="font-weight: 600">Create an account</h6>
        </router-link>

        <button style="font-weight: 600" v-on:click="login" type="button" class="btn btn-primary">Login</button>
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
    name: 'Login',

    data() {
      return {
        email: null,
        password: null
      }
    },
    
    methods: {
      login() {
        fb.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(async (user) => {
            console.log(user.user.uid);
            if (user.user) {
              await db.collection("users").where('id', '==', user.user.uid).get()
                .then(querySnapshot => {
                  console.log(querySnapshot);
                  querySnapshot.forEach(doc => {

                    localStorage.setItem("id", doc.data().id);
                    localStorage.setItem("name", doc.data().name);
                    localStorage.setItem("email", doc.data().email);
                    // localStorage.setItem("password", this.password);
                    localStorage.setItem("photoURL", doc.data().photoURL);
                    localStorage.setItem("description", doc.data().description);
                    localStorage.setItem("FirebaseDocumentId", doc.id);

                  })
                })
              this.$router.push('/chat')
              Toast.fire({
                icon: 'success',
                title: 'Logged In Successfully'
              })
            }
          })
      }
    },
    
    created() {
      
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

  .login {
    margin-top: 75px;
    padding: 10px;
  }

  button {
    width: 40%;
  }
</style>