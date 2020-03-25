<template>
	<div class="interest d-flex flex-column align-items-center">
		<div @click="isActive = !isActive" :class="{'active': isActive}" class="emoji flex-inline align-items-center justify-content-center">
			<slot></slot>
		</div>
		<div>
		<p class="desc">
			<slot name="caption"></slot>
		</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'sla-interest',
	props: {
		'name': {
			type: String
		}
	},
	data () {
		return {
			id: this.name,
			isActive: false
		}
	},
	components: {
		Professional: () => import("@/components/icons/professional.vue"),
		Money: () => import("@/components/icons/money.vue"),
		Personal: () => import("@/components/icons/personal.vue"),
	},
	watch: {
		isActive: function (oldVal, newVal) {
			// if(newVal == true) {
				this.$emit('interest-selected', {
					id: this.id,
					state: this.isActive
				})
			// }
		}
	}
}
</script>
<style scoped lang="scss">
.interest {
	width: 100px;

	.emoji {
		height: 84px;
		width: 84px;
		border: 2px solid color(bv-grey-200);
		background-color: color(bv-grey-100);
		border-radius: 50%;
		&.active{
			border: 2px solid color(bv-primary)
		}
		&:hover {
			cursor: pointer;
		}
	}

	p {
		text-align: center;
		font-size: 10px;
		font-weight: 600;
	}
}
</style>