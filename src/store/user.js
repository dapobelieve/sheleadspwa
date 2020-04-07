import Api from "@/utils/Api"

export default {
    state: {
        auth: {
            token: null
        },
        data: {}
    },
    actions: {
        async login({ commit }, payload) {
            let res = await Api.post("/user/login", payload)
            if (res.status === 200) {
                commit("setToken", res.data.token)
                commit("setUserData", res.data.user)
                return true
            } else {
                return res
            }

        },
        async reset({ commit }, payload) {
            let res = await Api.post("/user/password/reset", payload)
            if (res.status === 200) {
                return true
            } else {
                return res
            }
        },
        async getUser({ commit }, header) {
            let res = await Api.get("/user/", header)
            if (res.status === 200) {
                return res
            } else {
                return res
            }
        },
        async updateProfile({ commit }, payload) {
            let res = await Api.post("/user/profile/update", payload, true)

            if (res.status === 200) {
                commit("setUserData", res.data.user)
                return true
            } else {
                return res
            }
        }

    },
    mutations: {
        setUserData(state, data) {
            state.data = data
        },
        setToken(state, data) {
            state.auth.token = data
        }
    },
    getters: {}
}