const BASE_URL = 'https://tea.qingnian8.com/api/bizhi';
export function request(config={}){
	let {
		url,
		data={},
		method="GET",
		header={}
	} = config
	
	url=BASE_URL+url
	header['access-key'] = 'zqh2648'
	header['token'] = '100086'
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			data,
			method,
			header,
			success:res=>{
				if(res.data.errCode===0){
					resolve(res.data)
				}else if(res.data.errCode===400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
				}
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}