<template>
	<view class="page">
		<!-- <helloComp myval="Hello Next~~"></helloComp>
		<trailerStars innerScore="9.1" showNum="1"></trailerStars> -->
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<!-- <swiper-item><image src="../../static/img01.png" class="imgs1"></image></swiper-item>
			<swiper-item><image src="../../static/img02.png" class="imgs1"></image></swiper-item>
			<swiper-item><image src="../../static/img03.png" class="imgs1"></image></swiper-item> -->

			<swiper-item v-for="carousel in carouselList"><image :src="carousel.image" class="imgs1"></image></swiper-item>
		</swiper>
		<!-- 热门超英 -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icont1.png" class="hot-icon"></image>
				<view class="hot-title">热门超英</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page-block hot">
			<!-- <view><image src="../../static/img01.png" class="imgs2"></image></view> -->
			<!-- <view><image src="../../static/img02.png" class="imgs2"></image></view> -->
			<!-- <view><image src="../../static/img03.png" class="imgs2"></image></view> -->
			<!-- <view><image src="../../static/img01.png" class="imgs2"></image></view> -->

			<!-- <view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/img01.png" class="poster"></image>
					<view class="movie-name">蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠</view>
					<view class="movie-score-wapper">
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star2.png" class="star-icon"></image>
						<view class="movie-score">9.1</view>
					</view>
				</view>
			</view> -->

			<view class="single-poster" v-for="superhero in hotSuperheroList" :key="superhero.id">
				<view class="poster-wapper">
					<image :src="superhero.cover" class="poster"></image>
					<view class="movie-name">{{ superhero.name }}</view>
					<!-- <view class="movie-score-wapper">
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star1.png" class="star-icon"></image>
						<image src="../../static/star2.png" class="star-icon"></image>
						<view class="movie-score">{{superhero.score}}</view>
					</view> -->
					<trailerStars :innerScore="superhero.score" showNum="1"></trailerStars>
				</view>
			</view>
		</scroll-view>
		<!-- 热门预告 -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icont1.png" class="hot-icon"></image>
				<view class="hot-title">热门预告</view>
			</view>
		</view>
		<view class="hot-movie page-block">
			<video v-for="trailer in hotTrailerList" 
			:id="trailer.id" 
			:data-playingIndex = "trailer.id" 
			@play="meIsPlaying"
			:src="trailer.trailer" 
			:poster="trailer.poster" 
			class="hot-movie-single" 
			controls></video>
		</view>

		<!-- 猜你喜欢 -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icont1.png" class="hot-icon"></image>
				<view class="hot-title">猜你喜欢</view>
			</view>
		</view>
		<view class="page-block guess-u-like">
			<view class=" single-like-movie" v-for="(guess, gIndex) in guessULikeList">
				<image :src="guess.cover" class="like-movie"></image>
				<view class=" movie-desc">
					<view class=" movie-title">{{ guess.name }}</view>
					<trailerStars :innerScore="5" showNum="0"></trailerStars>
					<view class=" movie-info">{{ guess.basicInfo }}</view>
					<view class=" movie-info">{{ guess.releaseDate }}</view>
				</view>
				<view class=" movie-oper" :data-gIndex="gIndex" @click="praiseMe">
					<image src="../../static/iconb1.png" class="praise-ico"></image>
					<view class="praise-me">点赞</view>
					<view :animation="animationDataArr[gIndex]" class="praise-me animation-opacity">+1</view>
				</view>
			</view>

			<!-- <view class=" single-like-movie">
				<image src="../../static/img01.png" class="like-movie"></image>
				<view class=" movie-desc">
					<view class=" movie-title">蝙蝠侠</view>
					<trailerStars :innerScore="5" showNum="0"></trailerStars>
					<view class=" movie-info">2018 / 美国 / 科幻</view>
					<view class=" movie-info">演员 / 演员 / 演员 / 演员 / 演员 / 演员 / 演员</view>
				</view>
				<view class=" movie-oper" @click="praiseMe">
					<image src="../../static/iconb1.png" class="praise-ico"></image>
					<view class="praise-me">点赞</view>
					<view :animation="animationData" class="praise-me animation-opacity">+1</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
import common from '../../common/common.js';
import helloComp from '../../componente/helloComp.vue';
import trailerStars from '../../componente/trailerStars.vue';
export default {
	data() {
		return {
			carouselList: [],
			hotSuperheroList: [],
			hotTrailerList: [],
			guessULikeList: [],
			animationData: {},
			animationDataArr: [{}, {}, {}, {}, {}]
		};
	},
	
	
	onHide() {
		
		if(this.videoContext){
			this.videoContext.pause();
		}
		
	},
	onShow() {
		
		if(this.videoContext){
			this.videoContext.play();
		}
		
	},
	
	
	onUnload() {
		this.animationData = {};
		this.animationDataArr = [{}, {}, {}, {}, {}]
	},
	onPullDownRefresh(){
		this.refresh();
	},
	onLoad() {
		var me = this;
		//#ifdef APP-PLUS || MP-WEIXIN 
		this.animation = uni.createAnimation();
		//#endif
		//请求轮播图
		var serverUrl = common.serverUrl;

		uni.request({
			url: serverUrl + '/index/carousel/list?qq=123', //仅为示例，并非真实接口地址。
			method: 'POST',
			success: res => {
				// console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if (res.data.status == 200) {
					var carouselList = res.data.data;
					me.carouselList = carouselList;
				}
			}

			/* var me =this;
			success: function () {
				
			
				console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if( res.data.status == 200)
				var carouselList = res.data.data;
				me.carouselList =carouselList
				
			} */
		});

		//查询热门超英
		uni.request({
			url: serverUrl + '/index/movie/hot?type=superhero&qq=123', //仅为示例，并非真实接口地址。
			method: 'POST',
			success: res => {
				// console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if (res.data.status == 200) {
					var hotSuperheroList = res.data.data;
					me.hotSuperheroList = hotSuperheroList;
				}
			}
		});

		//查询热门预览
		uni.request({
			url: serverUrl + '/index/movie/hot?type=trailer&qq=123', //仅为示例，并非真实接口地址。
			method: 'POST',
			success: res => {
				// console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if (res.data.status == 200) {
					var hotTrailerList = res.data.data;
					me.hotTrailerList = hotTrailerList;
				}
			}
		});

		//猜你喜欢
		uni.request({
			url: serverUrl + '/index/guessULike?qq=123', //仅为示例，并非真实接口地址。
			method: 'POST',
			success: res => {
				// console.log(res.data);
				//获取真实数据前,判断状态是否为200
				if (res.data.status == 200) {
					var guessULikeList = res.data.data;
					me.guessULikeList = guessULikeList;
				}
			}
		});
		
		me.refresh()
	},
	methods: {
		meIsPlaying(e){
			var me =this;
			var trailerId = "";
			//debugger
			if (e){
				trailerId =e.currentTarget.dataset.playingindex;
				me.videoContext = uni.createVideoContext(trailerId);
				
				
			}
			var hotTrailerList =me.hotTrailerList;
			for(var i=0;i<hotTrailerList.length;i++){
				var tempId = hotTrailerList[i].id;
				if (tempId != trailerId){
					uni.createVideoContext(tempId).pause();
				}
			}
		},
		
		
		
		
		refresh(){
			var me = this;
		
			var serverUrl = common.serverUrl;
			uni.showLoading({
				mask:true
			});
			uni.showNavigationBarLoading()
			//猜你喜欢
			uni.request({
				url: serverUrl + '/index/guessULike?qq=123', //仅为示例，并非真实接口地址。
				method: 'POST',
				success: res => {
					// console.log(res.data);
					//获取真实数据前,判断状态是否为200
					if (res.data.status == 200) {
						var guessULikeList = res.data.data;
						me.guessULikeList = guessULikeList;
					}
				},
				complete: () => {
					uni.hideLoading();
					uni.stopPullDownRefresh();
					uni.hideNavigationBarLoading()
					
				}
			});
		},
		
		praiseMe(e) {
			//#ifdef APP-PLUS || MP-WEIXIN
			var gIndex = e.currentTarget.dataset.gindex;
			//console.log(gIndex);
			//return;
			this.animation
				.translateY(-60)
				.opacity(1)
				.step({
					duration: 400
				});
			//this.animationData = this.animation.export();
			this.animationData = this.animation;
			this.animationDataArr[gIndex] = this.animationData.export();

			setTimeout(
				function() {
					this.animation
						.translateY(0)
						.opacity(0)
						.step({
							duration: 0
						});
					//this.animationData = this.animation.export();
					this.animationData = this.animation;
					this.animationDataArr[gIndex] = this.animationData.export();
				}.bind(this),
				500
			);
			//#endif
		}
	},
	components: {
		helloComp,
		trailerStars
	}
};
</script>

<style>
@import url('index.css');
</style>
