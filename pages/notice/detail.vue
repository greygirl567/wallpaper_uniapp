<template>
	<view class="noticeLayout">
		<view class="title">
			<view class="tag">
				<uni-tag inverted text="置顶" type="error"></uni-tag>
			</view>
			<view class="font">版权公告</view>
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
			<p>所有图片均采集于互联网，在壁纸信息中，均设置了图片来源。
			   此壁纸项目，用于学习交流，非商业使用，图片来自于用户上传，
			   如果对您的图片造成了侵权，请联系作者QQ:513894357，
			   请提供侵权证据，以便管理员对侵权图片进行删除，
			   出于学习交流目的非商用，对您产生的损失请谅解。</p>`
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