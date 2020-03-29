<template>
	<select @change="emitChange($event)" class="sla-select width-100 text-bold text-grey">
		<option v-for="item in items" :value="item.value">{{item.text}}</option>
	</select>
</template>
<script>
export default {
	model: {
		prop: 'value',
		event: 'selected'
	},
	props: {
		value: {
			type: String
		},
		items: {
			type: Array,
			required: true,
			default: [
        {
          text: "Summer",
          value: "summer"
        },
        {
          text: "Winter",
          value: "winter"
        },
        {
          text: "Autum",
          value: "autum"
        },
        {
          text: "Spring",
          value: "spring"
        }
      ],
		}
	},
	data () {
		return {

		}
	},
	methods: {
		emitChange(e) {
			this.$emit('selected', e.target.value)
		}
	}
}

</script>
<style lang="scss" scoped>
.sla-select {
	height: 52px;
	font-size: 14px;
	background-color: color(bv-grey-100);
	border: 1px solid #E7E6E6;
	border-radius: 5px;
	padding: 0 1rem;

	&:focus {
		outline: none
	}
}
</style>