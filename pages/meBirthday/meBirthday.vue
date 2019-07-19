<template>
	<view class="page page-fill">
		<form @submit="formSubmitBrithday">
			<view class="page-block" style="margin-top: 20upx;">
				<picker mode="date" @change="dateChange">
					<view class="birthday">{{ birthday }}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			birthday: '',
			globalUser: {}
		};
	},
	onLoad() {
		var me = this;
		var globalUser = me.getGlobalUser('globalUser');
		me.globalUser = globalUser;
		me.birthday = globalUser.birthday;
	},
	methods: {
		dateChange(e) {
			this.birthday = e.detail.value;
		},
		formSubmitBrithday(){
			var me = this;
			var birthday =me.birthday;
			
			uni.request({
				url: me.serverUrl + '/user/modifyUserinfo?qq=', //仅为示例，并非真实接口地址。
				data:{
					"userId":me.globalUser.id,
					"birthday":birthday
				},
				header: {
					"headerUserId": me.globalUser.id,
					"headerUserToken": me.globalUser.userUniqueToken
				},
				method: 'POST',
				success(res) {
					// debugger;
					var resData = res.data;
					// console.log(typeof(resDataStr));
				
					if (resData.status == 200) {
						// 获得最新的用户数据
						var userInfo = resData.data;
						uni.setStorageSync("globalUser", userInfo);
						uni.navigateBack({
							delta: 1
						})
					} else if (resData.status == 502 || resData.status == 500) {
						uni.showToast({
							title: res.data.msg,
							image: "../../static/icos/error.png",
							duration: 2000
						})
					}
				},
			});
		}
	}
};
</script>

<style>
.page-fill {
	width: 100%;
	height: 100%;
	position: absolute;
}

.birth-input {
	background-color: white;
	height: 80upx;
	line-height: 40upx;
	padding-left: 20upx;
}
.submitBtn {
	width: 95%;
	margin-top: 40upx;
}

.brithday {
	background-color: white;
	height: 80upx;
	padding-left: 20upx;
	padding-top: 30upx;
}
</style>
