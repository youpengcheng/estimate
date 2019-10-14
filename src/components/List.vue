<template>
	<div class="container">

<div class="mian">

<!-- 
    <ul class="clearfix" id="J_service_container"> -->
<template v-for="(item,index) in quList">




	
<!-- {path:'/hi1',name:'hi1',component:Hi1},      :to="{name:xxx,params:{key:value}}"-->

<!-- `/fill/${item.id}${item.name}` -->

      <div  class="li"  :key="index">	<router-link  tag="span"  :to="{name:'Fill',params:{id:item.id,title:item.name}}"> <a href="">


        <div class="item-box">
        <h3>{{item.name}}</h3>
        <h4>拼搏出彩，出彩拼搏</h4>
        <h4>分享，务实</h4>
        <h4>2019/09/09</h4>
        <div class="overlay-start"></div>
        <div class="overlay-bottom"></div>
        <div class="overlay-left"></div>
        <div class="overlay-top"></div>
        <div class="overlay-right"></div>
        <div class="start-point"> <i class="circle"></i> </div>
      </div>
        <div class="mian-icon">
        <div class="circle"><span class="tt">+</span></div>
      </div>
	  
        </a> </router-link></div>

</template> 
<!-- 
    </ul> -->


</div>

		<div class="overlay" v-show="isShowPrompt">
			<div class="prompt-box">
				<header>
					<span>提示</span>
					<a href="javascript:;" @click="isShowPrompt = false">&times;</a>
				</header>
				<p>{{ promptText }}</p>
				<footer>
					<span @click="iterator.next(); isShowPrompt = false">确定</span>
					<span @click="isShowPrompt = false">取消</span>
				</footer>
			</div>
		</div>

	</div>
</template>

<script>
import Vue from 'vue'
import Store from '../store.js'
import data from '../data.js'

export default {
	name: 'List',
	data() {
		return {
			
			quList: [],
			iterator: {},
			isShowPrompt: false,
			promptText: ''
		}
	},

	created() {


      this.$api.getEst().then((res) => {
		  console.log(res);
		  
	this.quList=res;
        })



		// let curTime = Date.now();

		// this.quList = Store.fetch() || data.list;

		// this.quList.forEach((item) => {

		// 	if (item.state === 1) {
		// 		let itemTime = new Date(item.time.replace(/-/g, ','))*1;
		// 		if (itemTime < curTime) {
		// 			item.state = 2;
		// 			item.stateName = '已结束';
		// 		}
		// 	}

		// })
	},




	methods: {
		checkItem(item, flag = null) {

			if (typeof item.checked === 'undefined') {
				Vue.set(item, 'checked', true);
			}
			else if (flag !== null) {
				item.checked = !flag;
			}
			else {
				item.checked = !item.checked;
			}
		},

		checkAll(flag) {
			this.quList.forEach( item => {
				this.checkItem(item, flag)
			});
		},

		showPrompt(text) {
			console.log("checkout branchEST");
	console.log("checkout branch of feature1");
			this.promptText = text;
			this.isShowPrompt = true;
		},  

		*deleteItem(item) {
			yield this.showPrompt(`确认要删除《${item.title}》？`);
			let index = this.quList.indexOf(item);
			yield this.quList.splice(index, 1);
		},

		*deleteCheckedItems() {
			let checkedList = this.quList.filter( item => item.checked);
			if (!checkedList.length) {
				return;
			}
			yield this.showPrompt('确认要删除所选考评？');
			yield this.quList = this.quList.filter( item => !item.checked);
		},

		*editItem(item) {
			yield this.showPrompt(`确认要编辑《${item.title}》？`);
			yield this.$router.push({name: 'Edit', params: {id: item.id}});
		}
	},

	computed: {
		isCheckedAll() {
			return this.quList.every( item => item.checked);
		}
	},


	watch: {

		quList: {
			handler(list) {
				list.forEach((item, index) => item.id = index + 1);
				Store.save(list);
			},

			deep: true
		}

	}
}
</script>

<style scoped lang="scss">

.container{
// display: flex;
// flex-direction:row;
// flex-wrap: wrap;
// justify-content:center;
//  align-content:flex-start;
// width: 100%;
// height: 100%;
}

.mian{
	width: 100%;
height: 100%;
display: flex;
flex-direction:row;
flex-wrap: wrap;
justify-content:center;
 align-content:center;
}

.mian ul{
// 	width: 100%;
// height: 100%;
// display: flex;
// flex-direction:row;
// flex-wrap: wrap;
// justify-content:center;
//  align-content:center;

}

ol,ul{list-style:none}
table{border-collapse:collapse;border-spacing:0}
caption,td,th{text-align:left;font-weight:400;vertical-align:middle}
blockquote,q{quotes:none}
blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}
a img{border:none}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary{display:block}
*{box-sizing:border-box}
body,html{position:relative;width:100%;height:100%;line-height:1.5;font-family:'hiragino sans gb w3','hiragino sans gb','Microsoft YaHei',arial,helvetica,simsun,Tahoma,sans-serif;font-size:14px;font-style:normal;font-variant-caps:normal;font-weight:400;color:#666;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
a{text-decoration:none}
img{max-width:100%;vertical-align:middle}
.clearfix:after,.clearfix:before{content:" ";display:table}
.clearfix:after{clear:both}


.mian{position:relative;background-color:#fff;zoom:1}



// .mian .mian-list{position:relative;width:1218px;height:432px;margin:0 auto;overflow:hidden;zoom:1}




.mian ul{position:absolute;left:0;top:0;padding-top:5px;transition:left .8s ease-in-out}

.mian .li{float:left;width:406px;height:216px}

.mian .li a{position:relative;display:block;width:100%;height:216px;padding:10px 0 0 92px;zoom:1}

.mian .item-box{position:relative;width:274px;height:186px;padding:20px 0 0 60px;background:url(/static/images/tb10tanjpxxxxblxpxxxxxxxxxx-274-186.png) 0 0 no-repeat;color:#00a0ff;zoom:1}


.mian .overlay-start{position:absolute;bottom:-2px;right:-2px;width:34px;height:10px;background-color:#fff}

.mian .overlay-bottom{position:absolute;left:-2px;bottom:-2px;width:295px;height:15px;background-color:#fff}

.mian .overlay-left{position:absolute;left:-2px;top:-2px;width:15px;height:189px;background-color:#fff}

.mian .overlay-top{position:absolute;right:-2px;top:-2px;width:295px;height:15px;background-color:#fff}

.mian .overlay-right{position:absolute;right:-2px;bottom:-2px;width:15px;height:189px;background-color:#fff}

.mian .mian-icon{position:absolute;left:53px;top:35px;width:100px;height:110px;padding-top:12px;background-color:#fff;z-index:11}

.mian .mian-icon .circle{width:80px;height:80px;line-height:80px;background:url(/static/images/tb1.fjxivxxxxbqxvxxxxxxxxxx-80-80.png) 0 0 no-repeat;text-align:center; color:#359EFB; font-size:28px;}

.mian .mian-icon .iconfont{font-size:32px;color:#00a0ff}

.mian .start-point{position:absolute;right:-8px;bottom:-3px;width:0;height:16px;background-color:#fff;overflow:hidden}

.mian .start-point .circle{float:right;width:16px;height:16px;background:url(/static/images/tb15pjohvxxxxcaxpxxxxxxxxxx-16-16.png) 0 0 no-repeat}

.tt{color: red;font-size: 48px;font-weight: bold}

.mian h3{line-height:52px;font-size:24px;color:#666}
.mian h4{line-height:27px;font-size:14px;color:#666}
.mian a:hover h3,.mian a:hover h4{color:#00a0ff}



.mian a:hover .overlay-bottom{
	animation:borderslideBottom .15s linear 0s 1;
	-moz-animation:borderslideBottom .15s linear 0s 1;
	-webkit-animation:borderslideBottom .15s linear 0s 1;
	
	animation-fill-mode:forwards;
	-moz-animation-fill-mode:forwards;
	-webkit-animation-fill-mode:forwards;
}



.mian a:hover .overlay-left{
	animation:bordersildeLeft .2s linear .15s 1;
	-moz-animation:bordersildeLeft .2s linear .15s 1;
	-webkit-animation:bordersildeLeft .2s linear .15s 1;
	
	animation-fill-mode:forwards;
	-moz-animation-fill-mode:forwards;
	-webkit-animation-fill-mode:forwards;
}
.mian a:hover .overlay-top{
	animation:bordersildeTop .15s linear .35s 1;
	-moz-animation:bordersildeTop .15s linear .35s 1;
	-webkit-animation:bordersildeTop .15s linear .35s 1;
	
	animation-fill-mode:forwards;
	-moz-animation-fill-mode:forwards;
	-webkit-animation-fill-mode:forwards;
}
.mian a:hover .overlay-right{
	animation:bordersildeRight .2s linear .5s 1;
	-moz-animation:bordersildeRight .2s linear .5s 1;
	-webkit-animation:bordersildeRight .2s linear .5s 1;
	
	animation-fill-mode:forwards;
	-moz-animation-fill-mode:forwards;
	-webkit-animation-fill-mode:forwards;
}
.mian a:hover .start-point{
	animation:bordersildeEnd .1s linear .7s 1;
	-moz-animation:bordersildeEnd .1s linear .7s 1;
	-webkit-animation:bordersildeEnd .1s linear .7s 1;
	
	animation-fill-mode:forwards;
	-moz-animation-fill-mode:forwards;
	-webkit-animation-fill-mode:forwards;
}

.mian .arrow{top:357px}
.case{position:relative;padding-top:10px;background-color:#fff;zoom:1}
.case .arrow{top:183px}
@-moz-keyframes slogan{0%{opacity:0;margin-top:0}
100%{opacity:1;margin-top:-30px}
}
@-webkit-keyframes slogan{0%{opacity:0;margin-top:0}
100%{opacity:1;margin-top:-30px}
}
@keyframes slogan{0%{opacity:0;margin-top:0}
100%{opacity:1;margin-top:-30px}
}
@-moz-keyframes clickme{0%{opacity:.2;transform:translate3d(0,-5px,0)}
100%{opacity:.8;transform:translate3d(0,5px,0)}
}
@-webkit-keyframes clickme{0%{opacity:.2;transform:translate3d(0,-5px,0)}
100%{opacity:.8;transform:translate3d(0,5px,0)}
}
@keyframes clickme{0%{opacity:.2;transform:translate3d(0,-5px,0)}
100%{opacity:.8;transform:translate3d(0,5px,0)}
}
@-moz-keyframes borderslideBottom{from{width:295px}
to{width:0}
}
@-webkit-keyframes borderslideBottom{from{width:295px}
to{width:0}
}
@keyframes borderslideBottom{from{width:295px}
to{width:0}
}
@-moz-keyframes bordersildeLeft{from{height:189px}
to{height:0}
}
@-webkit-keyframes bordersildeLeft{from{height:189px}
to{height:0}
}
@keyframes bordersildeLeft{from{height:189px}
to{height:0}
}
@-moz-keyframes bordersildeTop{from{width:295px}
to{width:0}
}
@-webkit-keyframes bordersildeTop{from{width:295px}
to{width:0}
}
@keyframes bordersildeTop{from{width:295px}
to{width:0}
}
@-moz-keyframes bordersildeRight{from{height:189px}
to{height:0}
}
@-webkit-keyframes bordersildeRight{from{height:189px}
to{height:0}
}
@keyframes bordersildeRight{from{height:189px}
to{height:0}
}
@-moz-keyframes bordersildeEnd{from{width:0}
to{width:34px}
}
@-webkit-keyframes bordersildeEnd{from{width:0}
to{width:34px}
}
@keyframes bordersildeEnd{from{width:0}
to{width:34px}
}

</style>
