import Api from "@/utils/Api"

export default {
	state:  {
		newUser: true,
		auth: {
			isLoggedIn: false,
			token: null
		},
		data: {}
	},
	actions: {
		async login({commit}, payload) {
			let res = await Api.post("/user/login", payload)
			if(res.status === 200){
				console.log(res)
				commit("setToken", res.data.token)
				// commit("setUserData", res.data.user)
				return true
			}else {
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