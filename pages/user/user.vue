<template>
	<view class="userLayout pageBg" v-if="userinfo">
		<view :style="{height:getNavBarHeight()+'px'}"></view>
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/zaoqihuier.jpg" mode="aspectFill"></image>
			</view>
			<view class="ip">{{userinfo.IP}}</view>
			<view class="address">来自于：{{userinfo.address.city||userinfo.address.province||userinfo.address.country}}</view>
		</view>	
		<view class="section">
			<view class="list">
				<navigator url="/pages/classlist/classlist?name=我的下载&type=download">
					<view class="row">
						<view class="left">
							<uni-icons type="download-filled" size="20"></uni-icons>
							<view class="text">我的下载</view>
						</view>
						<view class="right">
							<view class="text">{{userinfo.downloadSize}}</view>
							<uni-icons type="right" size="15"></uni-icons>
						</view>
					</view>
				</navigator>
				<navigator url="/pages/classlist/classlist?name=我的评分&type=score">
				<view class="row">
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">
						<view class="text">{{userinfo.scoreSize}}</view>
						<uni-icons type="right" size="15"></uni-icons>
					</view>
				</view></navigator>
				<navigator url="/pages/notice/question?id=6536358ce0ec19c8d67fbe82">
					<view class="row">
						<view class="left">
							<uni-icons type="flag-filled" size="20"></uni-icons>
							<view class="text">常见问题</view>
						</view>
						<view class="right">
							<uni-icons type="right" size="15"></uni-icons>
						</view>
					</view>
				</navigator>
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20"></uni-icons>
						<view class="text">联系客服</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="15"></uni-icons>
					</view>
					
					<!-- #ifdef MP -->
					<button open-type="contact">联系客服</button>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<button @click="clickContact">拨打电话</button>
					<!-- #endif -->
					
				</view>
			</view>
		</view>
	</view>
	<view class="loadingLayout" v-else>
		<view :style="{height:getNavBarHeight()+'px'}"></view>
		<uni-load-more status="loading"></uni-load-more>
	</view>
</template>

<script setup>
	import {getNavBarHeight} from "@/utils/system.js"
	import {apiUserInfo} from "@/api/apis.js"
	import {ref} from "vue"
	
	const userinfo=ref(null)
	
	const clickContact=()=>{
		uni.makePhoneCall({
			phoneNumber:"18346392648"
		})
	}
	
	const getUserInfo=()=>{
		apiUserInfo().then(res=>{
			console.log(res);
			userinfo.value=res.data
		})
	}
	getUserInfo()
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 44rpx;
			color: $text-font-color-1;
			padding: 20rpx 0 5rpx;
		}
		.address{
			font-size: 28rpx;
			color: $text-font-color-3;
		}
	}
	.section{
		width: 690rpx;
		margin: 50rpx auto;
		border: 1px solid $text-font-color-4;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1px solid $text-font-color-4;
				position: relative;
				background: #fff;
				&:last-child{border-bottom: 0;}
				.left{
					display: flex;
					align-items: center;
					:deep(){
						.uni-icons{
							color:$brand-theme-color !important;
						}
					}
					.text{
						padding-left: 20rpx;
						color: $text-font-color-2;
					}
				}
				.right{
					display: flex;
					align-items: center;
					:deep(){
						.uni-icons{
							color: $text-font-color-3;
						}
					}
					.text{
						font-size: 28rpx;
						color: $text-font-color-3;
					}
				}
				button{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100rpx;
					opacity: 0;
				}
			}
		}
	}
}	       
</style>
