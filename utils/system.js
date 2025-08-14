	const SYSTEM_INFO = uni.getSystemInfoSync();
	export const getStatusBarHeight = ()=> SYSTEM_INFO.statusBarHeight || 15;
	
	export const getTitleBarHeight = ()=>{
		if(uni.getMenuButtonBoundingClientRect){
			let {top,height} = uni.getMenuButtonBoundingClientRect()
			// let titleBarHeight=height+(top-getStatusBarHeight())*2
			return height+(top-getStatusBarHeight())*2
		}else{
			return 40;
		}
	}
	
	export const getNavBarHeight = ()=> getStatusBarHeight()+getTitleBarHeight()
	
	export const getLeftIconLeft = ()=>{
		// if(tt.getCustomButtonBoundingClientRect){
		// 	let {leftIcon:{left,width}} = tt.getCustomButtonBoundingClientRect()
		// 	return left+parseInt(width)+5
		// }else{
		// 	return 0
		// }
		
		// #ifdef MP-TOUTIAO
			let {leftIcon:{left,width}} = tt.getCustomButtonBoundingClientRect()
			return left+parseInt(width)
		// #endif
		
		// #ifdef MP-TOUTIAO
			return 0
		// #endif
	}