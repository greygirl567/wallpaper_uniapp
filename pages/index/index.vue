<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay circular>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<navigator v-if="item.target=='minProgram'" target="miniProgram" :url="item.url" :app-id="item.appId" class="link">
						<image :src="item.picurl" mode="aspectFill"></image>
					</navigator>
					<navigator v-else :url="`/pages/classlist/classlist?${item.url}`" class="link">
						<image :src="item.picurl" mode="aspectFill"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator :url="'/pages/notice/detail?id='+item._id">版权公告
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16"></uni-icons>
			</view>	
		</view>
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview(item._id)">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="/pages/classify/classify" open-type="reLaunch" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in classifyList" 
				:key="item._id"
				:item="item"
				></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
	import {apiGetBanner,apiGetDayRandom,apiGetNotice,apiGetClassify} from '@/api/apis.js'
	const bannerList=ref([])
	const randomList=ref([])
	const noticeList=ref([])
	const classifyList=ref([])
	
	const getBanner = async ()=>{
		// let res = await uni.request({
		// 	url:"https://tea.qingnian8.com/api/bizhi/homeBanner",
		// 	header:{
		// 		"access-key":"zqh2648"
		// 	}
		// })
		// if(res.data.errCode===0){
		// 	bannerList.value=res.data.data
		// }
		
		let res = await apiGetBanner();
		bannerList.value=res.data
	}	
	getBanner();
	
	const getDayRandom = async ()=>{
		// let res = await uni.request({
		// 	url:"https://tea.qingnian8.com/api/bizhi/randomWall",
		// 	header:{
		// 		"access-key":"zqh2648"
		// 	}
		// })
		// if(res.data.errCode===0){
		// 	randomList.value=res.data.data
		// }
		// console.log(res)
		let res = await apiGetDayRandom();
		randomList.value=res.data
	}
	getDayRandom();
	
	const getNotice = async ()=>{
		let res=await apiGetNotice({select:true});
		noticeList.value=res.data
		// console.log(res)
		
		// let res = await uni.request({
		// 	url:"https://tea.qingnian8.com/api/bizhi/wallNewsList",
		// 	header:{
		// 		"access-key":"zqh2648"
		// 	},
		// 	data:{
		// 		select:true
		// 	}
		// })
		// if(res.data.errCode===0){
		// 	noticeList.value=res.data.data
		// }
		// console.log(res)
	}
	getNotice();
	
	const getClassify = async ()=>{
		let res = await apiGetClassify({
			select:true
		});
		classifyList.value = res.data
		console.log(res);
	}
	getClassify();
	
	// 跳转到预览页面
	const goPreview=(id)=>{
		uni.setStorageSync("storgClassList",randomList.value);
		uni.navigateTo({
			url:"/pages/preview/preview?id="+id
		})
	}
	
	// 分享给好友
	onShareAppMessage((e)=>{
		// console.log(e);
		return{
			title:"壁纸",
			path:"/pages/index/index"
		}
	})
	// 分享朋友圈
	onShareTimeline(()=>{
		return{
			title:"壁纸",
			imageUrl:'/static/images/zaoqihuier.jpg'
		}
	})
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			swiper{
				width: 750rpx;
				height: 340rpx;
				&-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					.link{
						width: 100%;
						height: 100%;
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
				}
			}
		}
		.notice{
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: $text-font-color-4;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important;
					}
				}
				.text{
					color: $brand-theme-color;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex: 1;
				swiper{
					height: 100%;
					swiper-item{
						height: 100%;
						font-size: 30rpx;
						color: $text-font-color-2;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				:deep(){
					.uni-icons{
						color: $text-font-color-1 !important;
					}
				}
			}
		}
		.select{
			padding-top: 50rpx;
			.date{
				color:$brand-theme-color;
				display: flex;
				align-items: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important;
					}
				}
				.text{
					margin-left: 5rpx;
				}
			}
			.content{
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap;
					.box{
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
					.box:last-child{
						margin-right: 30rpx;
					}
				}
			}
		}
		.theme{
			padding: 50rpx 0;
			.more{
				font-size: 32rpx;
				color: #676767;
			}
			.content{
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3,1fr);
			}
		}
	}
</style>
