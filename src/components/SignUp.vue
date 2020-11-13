<template>
    <div class="signup">
        <h2 class="pt-5">Welcome to Cipher Chat</h2>
        <form class="detail-box mt-5">
            <div class="form-group my-5">
                <h4>Signup to Chat</h4>
                <input type="text" class="form-control my-4" placeholder="Enter your name..." />
                <input type="text" class="form-control" placeholder="Enter your email..." />
                <input type="password" class="form-control my-4" placeholder="Enter your password..." />

                <router-link :to="{ path: '/' }">
                    <h6 class="mb-3" style="font-weight: 600">Back to login</h6>
                </router-link>

                <button style="font-weight: 600" type="button" class="btn btn-primary">Signup</button>
            </div>
        </form>
    </div>
</template>


<script>
    export default {
        name: 'SignUp'
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