<template name="trailerStars"> 
<!-- 定义组件 trailerStars -->
	<view class="movie-score-wapper">
		<!-- <image src="../../static/star1.png" class="star-icon"></image>
		<image src="../../static/star1.png" class="star-icon"></image>
		<image src="../../static/star1.png" class="star-icon"></image>
		<image src="../../static/star1.png" class="star-icon"></image>
		<image src="../../static/star2.png" class="star-icon"></image>
		<view class="movie-score">9.1</view> -->
		<image 
		v-for="yello in yelloScore"
		src="/static/star1.png" 
		class="star-icon"
		></image>
		<image 
		v-for="gray in grayScore"
		src="/static/star2.png" 
		class="star-icon"
		></image>
		<view class="movie-score" v-if="showNum ==1">{{innerScore}}</view>
	</view>
</template>

<script>
	export default{
		name:"trailerStars",
		data(){
			return{
				
				yelloScore: 0,
				grayScore:0
			};
		},
		props:{
			//自定义一个变量,接受父组件
			innerScore:0,  //定义外部传入分数
			showNum:0      // 是否需要显示 1显示 0不显示
		},
		//生命周期,组件创建完成被调用
		created(){
			console.log("this.innerScore" + this.innerScore)
			var tempScore = 0
			if(this.innerScore != null& this.innerScore != undefined && this.innerScore !='') {
				tempScore =this.innerScore;
			}
			var yelloScore = parseInt(tempScore/2);
			var grayScore = 5-yelloScore;
			this.yelloScore=yelloScore;
			this.grayScore=grayScore;
			
		}
	}
</script>

<style>
	.txt{ color: aquamarine;}
	.movie-score-wapper{
		display: flex;
		flex-direction: row;
	}
	.star-icon{ width: 20upx;
	height: 20upx;
	margin-top: 8upx;
	}
	.movie-score{ font-size: 12px; color: gray; margin-top: 5upx;}
</style>
