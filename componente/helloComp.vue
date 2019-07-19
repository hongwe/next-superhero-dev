<template name="helloComp"> 
<!-- 定义组件 helloComp-->
	<view>
		{{msg}}
		<view>
			<input type="text" :value="myval" class="txt"/>
		</view>
	</view>
</template>

<script>
	export default{
		name:"helloComp",
		data(){
			return{
				msg:"你好"
				
			};
		},
		props:{
			//自定义一个变量,接受父组件
			myval:{
				type:String
			}
		}
	}
</script>

<style>
	.txt{ color: aquamarine;}
</style>
