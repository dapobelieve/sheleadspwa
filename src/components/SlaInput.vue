<template>
	<input class="width-100 text-bold" @keyup="keyup($event)" :placeholder="placeholder" :disabled="disable" @input="trigger($event)" @focus="focus" :type=type>
</template>
<script>
export default {
	props: {
		value: {},
		disable: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: 'Placeholder'
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
	font-size: 14px;
	border: 1px solid #E7E6E6;
	color: #999999;
	font-family: fonts(bv-open-sans);
	line-height: 1.30;
	padding: 1rem
}

input:focus {
	// outline: 1px color(bv-primary) solid;
	outline: none;
	
}
</style>