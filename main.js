import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.serverUrl ="https://www.imovietrailer.com/superhero"
App.mpType = 'app'


Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}


const app = new Vue({
	...App
})
app.$mount()
