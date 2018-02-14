
<div :id="dc.id"  class='sells'  @click='altidFun' >下架</div>

<Modal class="myalert" width='240'   :id="altid"
v-model="xiajia"
@on-ok="ok"
@on-cancel="cancel">
	<p>你确定下架该作品吗？</p>		
</Modal>

// 弹窗
xiajia:false,
altid: '',


// 弹出窗功能
altidFun(event){
    this.altid = event.target.id;
    this.xiajia=true
},
ok(){
    var xd = this.altid;
    $("body").find("#"+xd).remove();
},
cancel(){

},