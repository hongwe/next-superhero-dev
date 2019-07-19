<template>
	<view class="page">
		<view class="player"><video id="myTrailer" :src="trailerInfo.trailer" :poster="trailerInfo.poster" class="movie" controls></video></view>

		<view class="movie-info">
			<navigator :url="'../cover/cover?cover=' + trailerInfo.cover"><image :src="trailerInfo.cover" class="cover"></image></navigator>
			<view class="movie-desc">
				<view class="title">{{ trailerInfo.name }}</view>
				<view class="basic-info">{{ trailerInfo.basicInfo }}</view>
				<view class="basic-info">{{ trailerInfo.originalName }}</view>
				<view class="basic-info">{{ trailerInfo.totalTime }}</view>
				<view class="basic-info">{{ trailerInfo.releaseDate }}</view>

				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分:</view>
						<view class="movie-score">{{ trailerInfo.score }}</view>
					</view>
					<view class="score-star">
						<block v-if="trailerInfo.score >= 0"><trailerStars :innerScore="trailerInfo.score" showNum="0"></trailerStars></block>
						<view class="praise-counts">{{ trailerInfo.prisedCounts }}人点赞</view>
					</view>
				</view>
			</view>
		</view>

		<view class="line-wapper"><view class="line"></view></view>

		<!-- 剧情介绍 -->

		<view class="plots-block">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{ trailerInfo.plotDesc }}</view>
		</view>

		<!-- 演员 -->

		<view class="scroll-block">
			<view class="plots-title">剧照</view>
			<scroll-view scroll-x class="scroll-list">
				<view class="actor-wapper" v-for="director in directorArray">
					<image :src="director.photo" class="single-actor" mode="aspectFill"></image>
					<view class="actor-name">{{ director.name }}</view>
					<view class="actor-role">{{ director.actName }}</view>
				</view>
				<view class="actor-wapper" v-for="actor in actorArray">
					<image :src="actor.photo" class="single-actor" mode="aspectFill"></image>
					<view class="actor-name">{{ actor.name }}</view>
					<view class="actor-role">{{ actor.actName }}</view>
				</view>
			</scroll-view>
		</view>

		<!-- 剧照 -->

		<view class="scroll-block">
			<view class="plots-title">剧照</view>
			<scroll-view scroll-x class="scroll-list"><image v-for="img in plotPicsArray" :src="img" class="plot-image" mode="aspectFill"></image></scroll-view>
		</view>
	</view>
</template>

<script>
import common from '../../common/common.js';
import trailerStars from '../../componente/trailerStars.vue';
export default {
	data() {
		return {
			trailerInfo: {},
			plotPicsArray: [],
			directorArray: [],
			actorArray: []
		};
	},
	//页面
	onReady() {
		this.videoContext = uni.createVideoContext('myTrailer');
	},
	onHide() {
		this.videoContext.pause();
	},
	onShow() {
		
		if(this.videoContext){
			this.videoContext.play();
		}
		
	},
	onLoad(params) {
		var me = this;
		var trailerId = params.trailerId;
		var serverUrl = common.serverUrl;
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#000000'
		});
		//查询
		uni.request({
			url: serverUrl + '/search/trailer/' + trailerId + '?qq=', //仅为示例，并非真实接口地址。
			method: 'POST',
			success: res => {
				// console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if (res.data.status == 200) {
					//debugger;
					var trailerInfo = res.data.data;
					me.trailerInfo = trailerInfo;
					var plotPicsArray = JSON.parse(trailerInfo.plotPics);
					me.plotPicsArray = plotPicsArray;

					//debugger
				}
			}
		});

		//查询导演
		uni.request({
			url: serverUrl + '/search/staff/' + trailerId + '/1?qq=', //仅为示例，并非真实接口地址。
			method: 'POST',
			success: res => {
				// console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if (res.data.status == 200) {
					//debugger;

					me.directorArray = res.data.data;
					//debugger
				}
			}
		});
		//查询演员
		uni.request({
			url: serverUrl + '/search/staff/' + trailerId + '/2?qq=', //仅为示例，并非真实接口地址。
			method: 'POST',
			success: res => {
				// console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if (res.data.status == 200) {
					//debugger;

					me.actorArray = res.data.data;
					//debugger
				}
			}
		});
	},
	//此函数只支持小程序,分享到微信群或好友,不可以朋友圈
	onShareAppMessage(res) {
		var me = this;

		return {
			title: 'trailerInfo.name',
			path: '/pages/movie/movie?trailerId=' + me.trailerInfo.id
		};
	},
	//监听
	onNavigationBarButtonTap(e) {
		var index = e.index;
		console.log(index);
		var me =this;
		var trailerInfo = me.trailerInfo;
		var trailerId = trailerInfo.id;
		var trailerName = trailerInfo.name;
		var cover = trailerInfo.cover;
		var poster = trailerInfo.poster;
		if (index == 0) {
			uni.share({
				provider: 'weixin',
				scene: 'WXSceneSession',
				type: 0,
				href: 'https://www.imovietrailer.com/#/pages/movie/movie?trailerId=' + trailerId,
				title: 'next超英预告: <' + trailerName + '>',
				summary: 'next超英预告: <' + trailerName + '>',
				imageUrl: cover,
				success: function(res) {
					console.log('success:' + JSON.stringify(res));
				},
				fail: function(err) {
					console.log('fail:' + JSON.stringify(err));
				}
			});
		}
	},
	components: {
		trailerStars
	}
};
</script>

<style>
@import url('movie.css');
</style>
