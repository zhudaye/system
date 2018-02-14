<template>
    <div class="login">
        <div id="login_bg" ref="can"></div>
        <form action="form"  >
          <div class="containerLogin">
            <span  :class="{red:isUser}"><i class="iconfont icon-userpro"></i></span>
            <input type="text"  class="user"  :class="{red:isUser}"  v-model="loginUser" placeholder="请输入用户名" autocomplete="off" spellcheck="false"> 
          </div>
          <p class="warn">{{ userP}}</p>
          <div class="containerLogin" >
            <span :class="{red:isPassword}"><i class="iconfont icon-suo"></i></span>
            <input type="password"  class="password" :class="{red:isPassword}"  v-model="loginPassword" placeholder="请输入密码">
          </div>
          <p class="warn">{{ passwordP }}</p>
          <div class="containerLogin  yzm">
           <input type="text" class="yzm" :class="{red:isYzm}" v-model="loginYzm"  placeholder="请输入验证码">
            <b><img :src="img" @click='imgc()' alt=""></b>
          </div>
          <p class="warn">{{ yzmP }}</p>
          <div class="containerLogin">
            <div class="btn" id="btn" @click="loginDl()">登陆</div>
          </div>
        </form>
    </div>
    
</template>
<script>

export default {
  name: 'Login',
  data() {
    return{
      img:'',
      loginUser: '',
      loginPassword: '',
      loginYzm: '',
      userP: '',
      passwordP: '',
      yzmP: '',
      isUser:false,
      isPassword:false,
      isYzm:false

    }	
  },
  watch:{
    loginUser() {
      if( $(".user").focus() ) {
        this.userP = '';
        this.isUser=false;
      }
    },
      
    loginPassword(){
      if( $(".password").focus() ){
         this.passwordP = '';
         this.isPassword = false;
      } 
    } , 
    loginYzm(){
      if( $(".yzm").focus() ){
        this.yzmP = '';
        this.isYzm = false;
      } 
    },
  },
  methods: {
    imgc(){
     
      this.img ='http://192.168.2.239/bzadmin/public/index.php/verify.html?id='+ Date.parse(new Date())/1000;
    },
   
    loginDl(){
      var _this=this; 
     
       
        var phone=this.loginUser;
        var password=this.loginPassword; 
        var yzm = this.loginYzm;

        // alert("u"+phone+"p"+password+"y"+yzm)
        var data = {username:phone,password:password,verify:yzm};
        this.userP = "";
        this.passwordP="";
        this.yzmP ="";
             $.ajax({
              type:"POST",
              url: 'http://192.168.2.239/bzadmin/public/index.php/login.html',
              data: data,
              dataType: "json",
              success: function(msg){
               
                  console.log(msg);
                  if(msg.code=='200'){
                      _this.$router.push('/layout');    
                      var usertype= msg.msg.usertype;
                      window.sessionStorage.setItem("usertype", usertype);

                  }else{
                        var mm = msg.msg;
                        var sm=String(mm);
                        var yo="帐";
                        var mi="密";
                        var yan="验";
                        var huo="或";
                      if(sm.indexOf(huo)!=-1){
                           _this.passwordP=mm;
                         _this.isUser=true;
                         _this.isPassword=true;
                      }else  if( sm.indexOf(yo)!=-1 ){
                          _this.userP=mm;
                          _this.isUser=true;
                          
                      }else if( sm.indexOf(mi)!=-1 ){
                          _this.passwordP=mm;
                         _this.isPassword=true;
                      }else if( sm.indexOf(yan)!=-1 ){
                          _this.yzmP = mm; 
                         _this.isYzm=true;
                      }
                  }
              }
          });
        }, 
        
     
        
         
   
  },
 
  mounted(){
       this.img ='http://192.168.2.239/bzadmin/public/index.php/verify.html?id='+ Date.parse(new Date())/1000;
        document.onkeydown = function(e){
            if (!e) e = window.event;
            if ((e.keyCode || e.which) == 13) {
　　　　　　　　  document.getElementById("btn").click();
            }
        };
        
        var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

var container;
var camera, scene, renderer;
var particles, particle, count = 0;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

// animate();

function init() {

  

}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function onDocumentMouseMove( event ) {

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;

}

function onDocumentTouchStart( event ) {
  if ( event.touches.length === 1 ) {

    event.preventDefault();

    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;

  }

}

function onDocumentTouchMove( event ) {

  if ( event.touches.length === 1 ) {

    event.preventDefault();

    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;

  }

}

//

function animate() {

  requestAnimationFrame( animate );

  render();


}

function render() {

  camera.position.x += ( mouseX - camera.position.x ) * .05;
  camera.position.y += ( - mouseY - camera.position.y ) * .05;
  camera.lookAt( scene.position );

  var i = 0;

  for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

    for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

      particle = particles[ i++ ];
      particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
      particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

    }

  }

  renderer.render( scene, camera );

  count += 0.1;

} 
        var container = document.createElement( 'div' );
        this.$refs.can.appendChild( container );  
        var  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 2000;

        var scene = new THREE.Scene();

        var particles = new Array();

        var PI2 = Math.PI * 2;

        var i = 0;

        for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

          for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

            particle = particles[ i ++ ] = new THREE.Particle( new THREE.ParticleCanvasMaterial( {

            color: (() => {
              var rand = Math.random();
              if(rand < 0.2){
                return 0xff0000;
              }
              if(rand >=0.2 && rand < 0.4){
                return 0x00ff00;
              }
              if(rand >=0.4 && rand < 0.8){
                return 0x0000ff;
              }

              if(rand >=0.8){
                return 0xff00ff;
              }
            })(),
            program: function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 1, 0, PI2, true );
            context.fill();

          }

        } ) );
            particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
            particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
            scene.add( particle );

          }

        }
    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    window.addEventListener( 'resize', onWindowResize, false );
    animate();
  }
}
 
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .login{ 
    /* display: flex; */
    /* flex-direction: column; */
    min-height: 100vh;
    font-size: 12px;
    line-height: 1.5;
    background-color: #141a48;
    margin: 0px;
    overflow: hidden;
  }
  .login_bg{
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
  form{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin:120px auto;
    width: 400px;
    height:300px;
    padding: 35px 35px 15px 35px;
    
  }
  .containerLogin{
    position: relative;
    height: 47px;
    line-height: 47px;
    font-size: 12px;
    vertical-align: top;
    zoom: 1;
  }
  .warn{
    height: 24px;
    line-height: 24px;
  }
  .containerLogin span{
      display: block;
      float: left;
      width: 7.5%;
      height: 47px;
      line-height: 47px;
      background: white;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      
  }
  .containerLogin span i{
      display: block;
      min-height: 3px;
      min-width: 3px;
      width: 100%;
      font-size: 12px;
      text-align: center;
    
  }
  .containerLogin input{
      display: block;
      float: left;
      width: 92.5%;
      height: 47px;
      line-height: 47px;
      padding: 12px 15px;
      background: transparent;
      border: 1px solid #2d8cf0;
      color: white;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
  }
  .yzm input{
    width: 50%;
    border-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .yzm b{
    width: 40%;
    height: 47px;
    float:right;
  }
  .yzm b img{
   width: 100%;
   height: 100%;

  }
  .containerLogin .btn{
      width: 100%;
      height: 32px;
      line-height: 32px;
      text-align: center;
      background: #2d8cf0;
      color: white;
      font-size: 900;
      border-radius: 4px;
  }
  form p{
    color:red;
  }
  .red{border:1px solid  red !important;}
</style>