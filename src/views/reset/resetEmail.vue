<template>
    <div class="pass d-flex flex-column justify-content-between mx-24" v-if="!isSent" >
    <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
			<span @click="goBack">
				<icon size="lg" name="left"/>
			</span>
		</bar>
        <span class="heading text-align-center font-poppins">Reset Password</span>
        <sla-input v-model="form.email" class="input1" placeholder="Email Address" type="text"/>
        <sla-button @click="handleSubmit" class="mt-56" :disable="btn.loading" :text="btn.text"></sla-button>
        <span class="text-align-center mt-32">Remembered your password? <router-link to="/reg/login" href="#">Click here</router-link></span>
    </div>
    <div class="pass d-flex flex-column justify-content-between mx-24" v-else>
    <bar class="position-sticky top-0 bottom-0 z-index-1 bg-white">
			<span @click="goBack">
				<icon size="lg" name="left"/>
			</span>
		</bar>
        <div class=" text-align-center font-poppins">
            <icon size="lg"  style="width: 84px; height: 84px;"   class="mt-56" name="sla-email"/>
        </div>
        <span class="heading text-align-center font-poppins"> Instructions have been sent to your email for you to reset your password</span>

    </div>
</template>
<script>
    import { mapActions } from "vuex"
    export default {
        data () {
            return {
                isSent:false,
                btn: {
                    text: "Submit",
                    loading: false
                },
                form: {
                    email: "",
                }
            }
        },
        components: {
            SlaInput: () => import("@/components/SlaInput"),
            SlaButton: () => import("@/components/SlaButton"),
            Icon: () => import("@/components/SlaIcon"),
		    Bar: () => import("@/components/SlaBar"),

        },
        methods: {
            ...mapActions(["reset"]),
            goBack () {
			this.$router.go(-1)
		},
            async handleSubmit() {
                this.btn.loading = !this.btn.loading
                this.btn.text = "loading..."
                let res = await this.reset(this.form)
                if (res === true){
                    this.isSent=true
                }
                this.btn.loading = !this.btn.loading
                this.btn.text = "Submit"
                alert(res.data.message)
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
