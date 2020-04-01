<template>
    <div class="pass d-flex flex-column justify-content-between mx-24">
        <span class="heading text-align-center font-poppins">Reset Password</span>
        <sla-input v-model="form.email" class="input1" placeholder="Email Address" type="text"/>
        <sla-button @click="handleSubmit" class="mt-56" text="SEND RESET NOTIFICATION"></sla-button>
        <span class="text-align-center mt-32">Remembered your password? <router-link to="/reg/login" href="#">Click here</router-link></span>
    </div>
</template>
<script>
    import { mapActions } from "vuex"
    export default {
        data () {
            return {
                form: {
                    email: "",
                }
            }
        },
        components: {
            SlaInput: () => import("@/components/SlaInput"),
            SlaButton: () => import("@/components/SlaButton")
        },
        methods: {
            ...mapActions(["reset"]),
            async handleSubmit() {

                let res = await this.reset(this.form)
                console.log(res.data)
            }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .pass {
        margin-top: 120px;

        .heading {
            font-weight: normal;
            font-size: 18px !important;
        }

        .input1 {
            margin-top: 80px
        }

        a {
            text-decoration: none;
            color: color(bv-primary);
        }

    }
</style>
