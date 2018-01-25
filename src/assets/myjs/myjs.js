export default {
	loadImg(url) {
	  return new Promise (function(resolve, reject) {
	  	let img = new Image();
	  	img.src = url;
	  	img.onload = function(result){
	      resolve(result.target);
	  	}
	  	img.onerror = function(){
	      reject(false);
	  	}
	  })
	}
}