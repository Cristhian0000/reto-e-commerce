<template>
    <v-form ref="form">
        <v-container class="my-12">
            <v-row no-gutters>
                <v-col cols="12">
                    <h1 class="text-center mb-2">Omni</h1>
                </v-col>
                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-divider class="mb-12"></v-divider>
                </v-col>

                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-text-field dense class="text-xs-center mb-3" outlined label="username" v-model="form.username"
                        placeholder="username" required hide-details="auto">
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-text-field dense class="text-xs-center mb-1" v-model="form.password" outlined label="password"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword" required hide-details="auto">
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-input v-show="showError" error class="text-center">Sorry, your password or email was incorrect.
                        Please double-check .</v-input>
                    <a href="#" class="text-center" text>Forgot your password?</a>
                    <v-btn id="custom-disabled" block color="lime" dark @click="sendLogin()"
                        class="text-xs-center mb-4 mt-5" :disabled="!formIsValid">
                        Log In
                    </v-btn>
                </v-col>
                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-divider class="mb-4"></v-divider>
                </v-col>
                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-btn color="blue darken-2" dark block  class="text-xs-center mb-4">
                        <v-icon class="hidden-xs-only" left dark>
                            mdi-facebook
                        </v-icon>Log in with Facebook
                    </v-btn>
                </v-col>
                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-btn block outlined class="text-xs-center mb-4">
                        <v-icon class="hidden-xs-only" left dark>
                            mdi-google
                        </v-icon>Log in with Google
                    </v-btn>
                </v-col>
                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-divider class="mb-4"></v-divider>
                </v-col>
                <v-col cols="12">
                    <h3 class="text-center mb-2 hidden-xs-only">Forgot password?
                        Don't have an account?</h3>
                        <h5 class="text-center mb-2 hidden-sm-and-up">Forgot password?
                        Don't have an account?</h5>

                </v-col>
                
                <v-col cols="12" md="6" offset-md="3" sm="6" offset-sm="3">
                    <v-btn block outlined class="text-xs-center mb-4 mx-auto">
                    Sign up
                    </v-btn>
                </v-col>

            </v-row>

        </v-container>
    </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    name: "loginComponent",
    data() {

        const defaultForm = Object.freeze({
            username: '',
            password: ''
        })
        return {

            showPassword: false,
            form: Object.assign({}, defaultForm),
            showError: false
        }
    },
    computed: {
        ...mapGetters('auth', ['loggedIn']),
        formIsValid() {
            return (
                this.form.username &&
                this.form.password

            )
        },

    },

    methods: {
        sendLogin() {

            this.$store.dispatch('auth/sendCredentials', { user: this.form }).then(() => {
                if (this.loggedIn === true) {
                    this.$store.commit('auth/setIsSubscribed')
                    this.$router.push({ name: 'products' })
                }

                else {
                    this.showError = true

                }

            }

            )


        }

    }
}
</script>

<style>
#custom-disabled.v-btn--disabled {
    background-color: #CDDC39 !important;
    opacity: 0.3;
    color: white !important
}

a {
    color: black !important;
    text-decoration: none
}

a:hover {
    text-decoration: underline;

}
</style>