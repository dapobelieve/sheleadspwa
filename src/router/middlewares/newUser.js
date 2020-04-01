export default function ({store, next, router}){
	if(store.state.user.newUser) {
		router.replace({
			name: "password-create"
		})
	}

	next()
}