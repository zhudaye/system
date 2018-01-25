<template>
	<div class="showBigImg" :style="{left: left + 200 + 'px'}" v-show="imginfo">
		<div class="imgbox" v-if="imginfo && imginfo.type == 1">
			<img :src="baseUrlCloth + imginfo.bigImg">
			<img :src="baseUrlCloth + imginfo.smallImg" class="smallimg">
			<img class="xuxian" src="/static/images/shoes/xuxian.png">
		</div>
		<div class="imgbox" v-if="imginfo && imginfo.type == 2">
			<img :src="baseUrlShoes + imginfo.screenin">
		</div>
	</div>
</template>
<script>
import config from '@/assets/myconfig/url.config.js'
	export default {
		name: 'showBigImg',
		props:['imginfo','left'],
		data() {
			return {
				baseUrlShoes: config.imgurl1,
				baseUrlCloth: config.imgurl1
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
	border-radius: 5px;
	border: 1px solid #ddd;
	overflow: hidden;
	-webkit-transform: translate(0, -50%);
	-moz-transform: translate(0, -50%);
	-ms-transform: translate(0, -50%);
	-o-transform: translate(0, -50%);
	transform: translate(0, -50%);
	background-color: #fff;
}

.imgbox{
	position: relative;
}

.imgbox>img{
	max-width: 600px;
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