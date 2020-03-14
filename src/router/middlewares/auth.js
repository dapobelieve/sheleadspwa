export default function({ next }) {
	console.log("auth middleware")
	next()
}