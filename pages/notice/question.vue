<template>
	<view class="noticeLayout">
		<view class="title">
			<view class="tag">
				<uni-tag inverted text="置顶" type="error"></uni-tag>
			</view>
			<view class="font">常见问题，自行排查</view>
		</view>
		<view class="info">
			<view class="item">管理员</view>
			<view class="item">
				<uni-dateformat :date="Date.now()" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
			</view>
		</view>
		<view class="content">
			<mp-html :content="detail.content" />
		</view>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	const detail=ref({
		title: "系统公告",
		author: "管理员",
		publish_date: Date.now(),
		content: `
			<p><strong>一.壁纸是否可以免费下载使用？</strong></p>
			<p>所有图片均可免费下载，但是图片版权属于上传者或者图片来源作者，下载后仅可自己欣赏或个人使用，不能用作商业用途。</p><br>
			<p><strong>二.下载壁纸提示请求频繁？</strong></p>
			<p>同一张壁纸，不能重复下载，防止有些用户误操作，重复对一张图片下载而浪费你的存储空间，也是为了防止被恶意频繁请求。</p><br>
			<p><strong>三.进入图片预览后，大图无法展现？</strong></p>
			<p>有时壁纸会比较大，收到服务器带宽及你的网络环境影响，有时间加载会比较慢，需要用户耐心等待，或者返回上一层后重新进入再查看。</p><br>
			<p><strong>四.如果你觉得图片侵权了？</strong></p>
			<p>图片来自于网络，由用户自行上传，所有监管不能及时，如果被侵权了，请提供侵权证据，反馈给管理员QQ:513894357.进行删除。</p>
			`
	})
</script>

<style lang="scss" scoped>
.noticeLayout{
	padding:30rpx;
	.title{
		font-size: 40rpx;
		color:#111;
		line-height: 1.6em;
		padding-bottom:30rpx;
		display: flex;
		.tag{
			transform: scale(0.8);
			transform-origin: left center;
			flex-shrink: 0;	
		}
		.font{
			padding-left:6rpx;
		}
	}
	.info{
		display: flex;
		align-items: center;
		color:#999;
		font-size: 28rpx;
		.item{
			padding-right: 20rpx;
		}
	}
	.content{
		padding:50rpx 0;
	}
	.count{
		color:#999;
		font-size: 28rpx;
	}
}       
</style>