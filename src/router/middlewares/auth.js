export default function({ router, store, next }) {
	if(!store.state.user.auth.token) {
		router.replace({
			name: "login"
		})
	}
	console.log("auth middleware")
	next()
}