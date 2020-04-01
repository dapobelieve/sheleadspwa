export default function({ store, next }) {
	console.log("auth middleware")
	next()
}