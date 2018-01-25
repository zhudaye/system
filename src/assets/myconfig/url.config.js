import info from './url.myconfig.js';
let config = {};
if (process.env.NODE_ENV === 'development') {
  config = {
  	api: '/api',
  	imgurl1: '/imgurl1'
  }
} else {
  config = {
  	api: info.api,
  	imgurl1: info.imgurl1
  }
}

export default config