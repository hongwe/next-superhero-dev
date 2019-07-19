<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if="userIsLogin">
				<navigator url="../meInfo/meInfo"><image :src="userInfo.faceImage" class="face"></image></navigator>
			</view>
			<view v-else><image src="../../static/icond1.png" class="face"></image></view>
			<view class="info-wapper " v-if="userIsLogin">
				<view class="nickname">{{ userInfo.nickname }}</view>
				<view class="nav-info">ID:{{ userInfo.id }}</view>
			</view>
			<view class="info-wapper " v-else>
				<view class="nickname regist-login"><navigator url="../registLogin/registLogin">注册/登录</navigator></view>
			</view>

			<view class="set-wapper" v-if="userIsLogin"><image src="../../static/icont1.png" class="settings"></image></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userIsLogin: false,
			userInfo: {}
		};
	},
	onShow() {
		var me = this;
		//使用非挂载方法获取用户数据
		// var userInfo = uni.getStorageSync('globalUser');
		// if (userInfo != null && userInfo !="" && userInfo != undefined){
		// 	me.userIsLogin = true;
		// 	me.userInfo =userInfo;
		// } else{
		// 	me.userIsLogin = false;
		// 	me.userInfo ={};
		// }

		//使用挂载方法获取用户数据

		var userInfo = me.getGlobalUser('globalUser');
		if (userInfo != null) {
			me.userIsLogin = true;
			me.userInfo = userInfo;
		} else {
			me.userIsLogin = false;
			me.userInfo = {};
		}
	},
	methods: {}
};
</script>

<style>
@import url('me.css');
</style>
