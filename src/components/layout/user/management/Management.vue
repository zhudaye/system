<template>
	<div class="Management">
    <router-view/>
	</div>
</template>

<script>

export default {
    name: 'Management',
    data() {
        return {
            name:'Management'
        }
    }
}  
</script>
<style >
html{
	-webkit-text-size-adjust:none !important;
}
.sid:hover{
  background: 	#F0F8FF !important;
}
/* 选择宝贝分类 */
  .hy .checkactive{
		color:#5cadff !important;
		border-bottom: 2px solid #2b85e4 !important;
	}

	


	.hy .details-name{
		width: 100%;
		height: 54px;
		line-height: 54px;
		background: #f9f9f9;
		padding: 0 20px;
		font-size: 18px;
		font-weight: 900;
		
	}
	.hy .details-name span{
		color: #b83435;
	}
	.hy .details-check{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		padding: 0 20px;
	}
	.hy .details-check ul{
		width: 100%;
		margin: auto 0;
		border-bottom: 2px solid #e9e9e9;
		
	}
	.hy .details-check ul li{
		float: left;
		position: relative;
		bottom: -2px;
		width: 70px;
		padding-top: 5px;
		padding-bottom:5px;
		font-weight: 400;
		color: #495060;
		text-align: center;
		cursor: pointer;
	}
	.hy .details-check ul li:hover{
		color:#5cadff !important;
		border-bottom: 2px solid #2b85e4 !important;
	}


/** 输入框 **/
  .details .ivu-input{
    text-align:left !important;
  }
</style>
   
