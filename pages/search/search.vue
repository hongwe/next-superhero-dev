<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/iconc2.png" class="search-ico"></image>
			</view>
			<input placeholder="搜索预告" maxlength="10" type="text" class="search-text" confirm-type="search" @confirm="searchMe" />
		</view>

		<view class=" movie-list page-block">
			<!-- <view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view>
			<view class=" movie-wapper"><image src="../../static/img01.png" class="poster"></image></view> -->

			<view class="movie-wapper" v-for="trailer in trailerList">
				<image :src="trailer.cover" :data-trailerId="trailer.id" @click="showTrailer" class="poster"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import common from '../../common/common.js';
	export default {
		data() {
			return {
				trailerList: [],
				keywords: "",
				page: 1, //搜索的关键字
				totalPage: 1 //总页数

			};
		},
		onLoad() {
			var me = this;
			uni.showLoading({
				mask: true,
				title: '请稍后...'
			});
			uni.showNavigationBarLoading();
			var serverUrl = common.serverUrl;
			//查询
			uni.request({
				url: serverUrl + '/search/list?keywords=&qq=&page=&pageSize=', //仅为示例，并非真实接口地址。
				method: 'POST',
				success: res => {
					// console.log(res.data);
					//获取真实数据前,判断状态是否为200
					if (res.data.status == 200) {
						//debugger;
						var trailerList = res.data.data.rows;
						me.trailerList = trailerList;
					}
				},
				complete: () => {
					uni.hideLoading();
					uni.hideNavigationBarLoading();
				}
			});
		},
		onReachBottom() {
			var me = this;
			var page = me.page + 1; //当前页数+1
			var keywords = me.keywords;
			var totalPage = me.totalPage; //获取总页数
			if (page > totalPage) {
				return

			}
			me.pageTrailerList(keywords, page, 15);
		},
		methods: {
			showTrailer(e) {
				var trailerId = e.currentTarget.dataset.trailerid;

				//页面跳转接口api

				/* uni.redirectTo({
					url:"../movie/movie?trailerId=" + trailerId
				});不可返回 */


				// uni.switchTab({
				// 	
				// })
				uni.navigateTo({
					url:"../movie/movie?trailerId=" + trailerId
				})
			},


			pageTrailerList(keywords, page, pageSize) {
				var me = this;
				uni.showLoading({
					mask: true,
					title: '请稍后...'
				});
				uni.showNavigationBarLoading();
				var serverUrl = common.serverUrl;
				//查询
				uni.request({
					url: serverUrl + '/search/list?qq=&keywords=' + keywords +
						'&page=' + page +
						'&pageSize=' + pageSize, //仅为示例，并非真实接口地址。
					method: 'POST',
					success: res => {
						// console.log(res.data);
						//获取真实数据前,判断状态是否为200
						if (res.data.status == 200) {
							//debugger;
							var tempList = res.data.data.rows;
							me.trailerList = me.trailerList.concat(tempList);
							me.totalPage = res.data.data.total;
							me.page = page;
						}
					},
					complete: () => {
						uni.hideLoading();
						uni.hideNavigationBarLoading();
					}
				});
			},


			searchMe(e) {
				var me = this;
				var value = e.detail.value;
				me.keywords = value;
				me.trailerList = [];
				me.pageTrailerList(value, 1, 15)


			}
		}
	};
</script>

<style>
	@import url('search.css');
</style>
