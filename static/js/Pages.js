
		$(".zxf_pagediv").createPage({
			pageNum: 20,//总页码
			current: 1,//当前页
			shownum: 7,//每页显示个数
//			activepage: "",//当前页选中样式
//			activepaf: "",//下一页选中样式
			backfun: function(e) {
//				console.log(e);//回调
			}
		});
