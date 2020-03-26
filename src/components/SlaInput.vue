<template>
	<input @keyup="keyup($event)" :disabled="disable" @input="trigger($event)" @focus="focus" :type=type>
</template>
<script>
export default {
	props: {
		value: {},
		disable: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		}
	},
	methods: {
		keyup(e) {
			this.$emit('keyup', )
		},
		trigger(e) {
			this.$emit('input', e.target.value)
		},
		focus() {

		}
	}
}
</script>
<style scoped lang="scss">
input{
	height: 52px;
	border-radius: 5px;
	border-width: 1px;
	background-color: color(bv-grey-100);
	width: 100% !important;
	font-size: 16px;
	border-style: none;
	color: black;
	font-weight: bolder;
	font-family: fonts(bv-open-sans);
	line-height: 1.30;
	padding: 1rem
}

input:focus {
	// outline: 1px color(bv-primary) solid;
	outline: none;
	
}
</style>