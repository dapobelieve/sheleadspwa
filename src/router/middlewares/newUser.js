export default function ({store, next, router}){
	if(!store.state.user.data.business_location) {
		router.replace({
			name: "info"
		})
	}else if(!store.state.user.data.intrests) {
		router.replace({
			name: "interests"
		})
	}else if(!store.state.user.data.industry) {
		router.replace({
			name: "industry"
		})
	}

	next()
}