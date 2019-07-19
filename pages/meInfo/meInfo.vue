<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom">
				<view class="info-words">头像</view>

				<view class="right-wapper">
					<image :src="globalUser.faceImage" class="face" @click="operator"></image>

					<view class="arrow-bolck"><image src="../../static/right.png" class="arrow-ico"></image></view>
				</view>
			</view>

			<view class="line-top"><view class="line"></view></view>

			<!-- 用户 -->
			<view class="item-wapper face-line-upbottom" @click="modifyNickname">
				<view class="info-words">昵称</view>

				<view class="right-wapper">
					<view class="gray-fields">{{ globalUser.nickname }}</view>

					<view class="arrow-bolck"><image src="../../static/right.png" class="arrow-ico"></image></view>
				</view>
			</view>

			<view class="line-top"><view class="line"></view></view>

			<!-- 生日 -->
			<view class="item-wapper face-line-upbottom" @click="modifyBirthday">
				<view class="info-words">生日</view>

				<view class="right-wapper">
					<view class="gray-fields">{{ globalUser.birthday }}</view>

					<view class="arrow-bolck"><image src="../../static/right.png" class="arrow-ico"></image></view>
				</view>
			</view>

			<view class="line-top"><view class="line"></view></view>

			<!-- 性别 -->
			<view class="item-wapper face-line-upbottom" @click="modifySex">
				<view class="info-words">性别</view>

				<view class="right-wapper">
					<view class="gray-fields">
						<view v-if="globalUser.sex == 1">男</view>
						<view v-else-if="globalUser.sex == 2">女</view>
						<view v-else>未知</view>
					</view>

					<view class="arrow-bolck"><image src="../../static/right.png" class="arrow-ico"></image></view>
				</view>
			</view>

			<view class="line-top"><view class="line"></view></view>
		</view>
		<view class="foot-wapper" style="margin-top: 10upx;">
			<view class="foot-words" @click="cleanStorage">清理缓存</view>
			<view class="foot-words" style="margin-top: 10upx;" @click="logout">退出登录</view>
		</view>
	</view>
</template>

<script>
import common from '../../common/common.js';
export default {
	data() {
		return {
			globalUser: {}
		};
	},
	onShow() {
		var me = this;
		var globalUser = me.getGlobalUser('globalUser');
		me.globalUser = globalUser;
		//debugger;
	},
	methods: {
		modifyNickname(){
			uni.navigateTo({
				url:"../meNickname/meNickname"
			})
		},
		
		modifyBirthday(){
			uni.navigateTo({
				url:"../meBirthday/meBirthday"
			})
		},
		modifySex(){
			uni.navigateTo({
				url:"../sex/sex"
			})
		},
		operator(){
			var me =this;
			var globalUser = me.getGlobalUser("globalUser");
			uni.showActionSheet({
				itemList:["查看我的头像","从相册上传"],
				success(res) {
					var index =res.tapIndex;
					if(index ==0){
						var faceArr =[]
						faceArr.push(globalUser.faceImage);
						uni.previewImage({
							urls:faceArr,
							current:faceArr[0]
							
							
						})
					}else if( index==1){
						uni.chooseImage({
							count:1,
							sizeType: ['original', 'compressed'],
							sourceType: ['album'],
							success(res){
								
								//获得临时路径
								var tempFilePaths = res.tempFilePaths[0];
								uni.navigateTo({
									url:"../meFace/meFace?tempFilePaths" + tempFilePaths
								})
							}
						})
						
						
					}
					;
					
				}
			})
			
		},
		
		
		
		
		
		cleanStorage() {
			uni.remoStorageSync();
			//uni.cleanStorageSync();
			uni.showToast({
				title: '清理缓存成功',
				mask: false,
				duration: 1500
			});
		},
		
		
		
		logout() {
		
			var serverUrl = common.serverUrl;
			var globalUser = this.getGlobalUser('globalUser');
			

			uni.request({
				url: serverUrl + '/user/logout?qq=&userId=' + globalUser.id, //仅为示例，并非真实接口地址。
				method: 'POST',
				success: res => {
					// console.log(res.data);
					//获取真实数据前,判断状态是否为200
					if (res.data.status == 200) {
						//debugger;
						uni.removeStorageSync('globalUser');
						uni.switchTab({
							url: '../me/me'
						});
					}
				}
			});
		}
	}
};
</script>

<style>
@import url('meInfo');
</style>
