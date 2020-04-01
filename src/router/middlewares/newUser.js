export default function ({store, next, router}){
	if(!store.state.user.data.business_location && !store.state.user.data.interests && store.state.user.auth.token) {
		router.replace({
			name: "info"
		})
	}

	next()
}