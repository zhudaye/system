<template>
	<div class="showBigImg" :style="{left: left + 200 + 'px'}" v-show="imginfo">
		<div class="imgbox" v-if="imginfo && imginfo.type == 'clothes'">
			<img :src="imginfo.bigImg">
			<img :src="imginfo.smallImg" class="smallimg">
			<img class="xuxian" src="static/images/ceshi/xuxian.png">
		</div>
	</div>
</template>
<script>
	export default {
		name: 'showBigImg',
		props:['imginfo','left'],
		data() {
			return {
			}
		}
	}
</script>
<style scoped>
.showBigImg{
	position: fixed;
	left: 0;
	top: 50%;
	z-index: 9999;
	-webkit-transform: translate(0, -50%);
	-moz-transform: translate(0, -50%);
	-ms-transform: translate(0, -50%);
	-o-transform: translate(0, -50%);
	transform: translate(0, -50%);
}

.imgbox{
	position: relative;
}

.imgbox>img{
	display: block;
}

.smallimg,.xuxian{
	position: absolute;
	left: 50%;
	top: 20%;
	-webkit-transform: translate(-50%, 0);
	-moz-transform: translate(-50%, 0);
	-ms-transform: translate(-50%, 0);
	-o-transform: translate(-50%, 0);
	transform: translate(-50%, 0);
}

.smallimg{
	width: 44.5%;
}

.xuxian{
	top: 0;
}
</style>