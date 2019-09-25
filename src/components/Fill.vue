<template>

	<div class="container" >


<!-- @click="handleHide" -->

		<div class="qu-wrap">

			<header>
				<span @click="iterator = backBtn(); iterator.next()">&lt; 返回</span>
				<p>{{ quData.title }}</p>
			</header>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
			<div class="qu-content">
				<section class="qu-item" v-for="(item, index) in questions">
					<h3>{{ `Q${index + 1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${item.topic}` }}
						<span v-if="item.isMandatory"> *</span>
					</h3>

					<textarea rows="8"
						      cols="80"
					          v-if="item.type === 'textarea'"
					          v-model="item.answer"
					          :required="item.isMandatory">
					</textarea>


<!-- 
<template>
{{key}}:
<input type="text" @value="oldValue" @input="handleInput($event,key,oldValue)">
<script>
<script>
export default 
    data(){
        return{
            key:"hello",
            oldValue:"world",
            form:{
            
            }
        }
    },
    methods:{
        handleInput(newValue,key,oldValue){
            if(newValue != oldValue){
                this.form[key] = newValue
            }
        }
    }
}
</script> -->
					<ul v-else class="options-list">
						<li v-for="(option, optIndex) in item.options">
							<label>		
								
   <!-- <el-radio-group v-model="radio2">
    <el-radio :label="3"></el-radio>
	</el-radio-group> -->
  <!-- <el-radio  :label="index + 1"><span>{{ option.name }}</span></el-radio> 
								item.answer = optIndex -->		
 <!-- :v-model="item.id" -->

<template    v-if="item.type === 'radio'">
								<input
                            v-model="item.id"
									:value="option.value"
									:type="item.type"
									:name="index + 1"

									@change="checkRadioAnswer(index,option.value)"
								>

		{{option.name}}
</template>



<template    v-if="item.type === 'gap'">

	  <el-form-item :prop="optIndex+item.group" :rules="[{ required: true, message: '区域不能为空'}]">

  <el-popover
    placement="top"

   
    width="400"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
	v-model="isSelect[optIndex+item.group]"
	>


	<div style="width:400px;">
<el-row style="color: #303133;font-size: 16px;line-height: 1; margin-bottom: 12px;">
	  <el-button type="danger" @click="handleHide" icon="el-icon-delete" circle></el-button>
 扫码听音――――――――――➸➣➤♪

</el-row>


    <div style="float:right; clear: both;" align="center">
        <!-- <img src="images/bkjj.jpg" width="120" alt="" hspace="8"><br /> 图像标题 -->
	    <el-image
      style="width: 100px; height: 100px"
      src="https://file.yssxjy.cn/est/1.png"
      :fit="fit"></el-image>

    </div>
    这是一段描述内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
</div>



<div slot="reference"  style="display:inline-block">
	{{option.before}}
	<div slot="reference"  style="display:inline-block">
    <el-input @focus="changeSelect(optIndex,item.group)" v-model="ruleForm[optIndex+item.group]" placeholder="填写数量"></el-input>
	</div>
	{{option.after}}
</div>



 </el-popover>

  </el-form-item>

					
</template>




 <!-- :prop="optIndex+item.group" -->
<template   v-if="item.type === 'switch'"> 

  <!-- <span> {{option}} </span> -->
 
  <el-form-item :label="option"   :prop="optIndex+item.group" :rules="[{ required: true, message: '区域不能为空'}]">


   <el-popover
    placement="top"

   
    width="400"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
	v-model="isSelect[optIndex+item.group]"
	>


	<div style="width:400px;">
<el-row style="color: #303133;font-size: 16px;line-height: 1; margin-bottom: 12px;">
	  <el-button type="danger" @click="handleHide" icon="el-icon-delete" circle></el-button>
 扫码听音――――――――――➸➣➤♪

</el-row>


    <div style="float:right; clear: both;" align="center">
        <!-- <img src="images/bkjj.jpg" width="120" alt="" hspace="8"><br /> 图像标题 -->
	    <el-image
      style="width: 100px; height: 100px"
      src="https://file.yssxjy.cn/est/1.png"
      :fit="fit"></el-image>

    </div>
    这是一段描述内容xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
</div>





	<!-- <input slot="reference" type="button" @click="visible = !visible" value="333"> -->
    <el-radio-group slot="reference"  v-model="ruleForm[optIndex+item.group]">

	  <el-radio @change="changeSelect(optIndex,item.group)" border="true" label="1">是</el-radio>

      <el-radio @change="changeSelect(optIndex,item.group)"  border="true" label="0">否</el-radio>

    </el-radio-group>
 </el-popover>
 


<!-- ruleForm[optIndex+item.group] -->
	  <!-- activeSpec(optIndex+item.group) -->



  </el-form-item>

<!-- <el-switch
  v-model="switchArray[index]"
  active-text="是"
  inactive-text="否"
  @change="changeSwith(index,optIndex)">
</el-switch> -->
</template>


<!-- @input="handleInput($event,key,oldValue)" -->
								<!-- <input v-else
									   :type="item.type"
									   :name="index + 1"
									   @change="checkboxAnswer($event, optIndex, option.value)">
<span>{{ option.name  +option.value+'##'+index}}</span> -->

							</label>

						</li>

					</ul>



				</section>


			</div>





    <footer style="text-align:center;height:70px;">
	 <div style="height:70px;    line-height:70px;width:150px" id="submitBtn" @click="submitForm('ruleForm')">提交考评</div>
				<!-- <span id="submitBtn" @click="iterator = submitBtn(); iterator.next()">提交考评</span> -->
	</footer>





</el-form>


		</div>


<!-- </form> -->

		<div class="overlay" v-show="isShowPrompt">
			<div class="prompt-box">
				<header>
					<span>提示</span>
					<a href="javascript:;" @click="isShowPrompt = false">&times;</a>
				</header>
				<p>{{ promptText }}</p>
				<footer>
					<span @click="isShowPrompt = false; iterator && iterator.next()">确定</span>
					<span @click="isShowPrompt = false">取消</span>
				</footer>
			</div>
		</div>



	</div>

</template>

<script>
import Store from '../store.js';

import rule from '../rule.js';

import { log } from 'util';
import { longStackSupport } from 'q';

export default {
	name: 'Fill',
	data() {
		return {
			typeId:1,
			isSelect:[],
			visible:false,
			ruleForm:[],
			switchArray:[],
			value1:false,
			form:[],
			radio:'1',
			quData: {},
			questions: [],
			answers: {},
			promptText: '',
			isShowPrompt: false,
			activeSpecTemp:[],
			  rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择答案', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
		}
		
	},
computed: {

      activeSpec : {
		  get(){

			  return  1
		  },

       set (val){

console.log(val);

  return  1
	   }
        //   let arr =  this.questions.map(spec => { return {[spec.specid]: -1 } })
        //   this.$set(this.activeSpecTemp, 'activeSpecTemp', arr)
       
      }
	},

	beforeRouterEnter(to, from, next) {
		let id = to.params.id;
		let item = {};
		if (id !== 0) {
			let length = Store.fetch().length;
			if (id < 0 || id > length) {
				alert('非法路由');
				next('');
			}
			else {
				item = Store.fetch()[id - 1];
			}

			if (item.state === 0) {
				next();
			}
			else {
				alert('非法路由');
				next('/');
			}
		}
		else {
			next();
		}
	},

	created() {
		this.getData();
	},

	methods: {
handleHide(){

	let that=this;

for (const key in that.isSelect) {


that.isSelect[key]=false



}

},



changeSelect(a,b){
	let that=this;

	console.log("sb");
	
for (const key in that.isSelect) {

if(key!=a+b){

that.isSelect[key]=false

 }else{

	 that.isSelect[key]=true
 }

}

},




   submitForm(formName) {
let that=this;

that.handleHide();


    console.log(that.ruleForm);
	console.log(that.ruleForm.length);
		 
		let sumScore=0;
for (const key in that.ruleForm) {
	if (that.ruleForm.hasOwnProperty(key)) {
		const element = that.ruleForm[key];
		console.log(element);
		sumScore+=parseInt(element);
	}
}

console.log("zong",sumScore);

// 	   for (let index = 0; index < that.ruleForm.length; index++) {
// 		   const element = that.ruleForm[index];
// 		   console.log(element);
// 	   }

// for (const iterator of that.ruleForm) {
// 	console.log(iterator);
// }
//检测
        this.$refs[formName].validate((valid) => {
          if (valid) {

    // if(sumScore<=10){
    //         return  this.showPrompt(`1-10个是：投资人对校区的管控亟待加强，建议立刻找御书思学进行校区评估`);
            
    //         }else if(10<sumScore&&sumScore<=20){
            
    //         this.showPrompt(`11-20个是：投资人对校区的管控还有很大的提升空间，建议立刻找御书思学进行校区评估`);
            
    //         }else if(20<sumScore&&sumScore<=28){
            
    //         this.showPrompt(`21-28个是：投资人对校区的管控比较到位，如果想继续提升业绩请找御书思学进行校区评估`);
            
    //         }else if(28<sumScore&&sumScore<=35){
            
    //         this.showPrompt(`29-35个是：投资人对校区的管控很到位，如果想继续提升业绩请找御书思学进行校区评估`);
    //         }

	let  estString=	rule.outputComment(that.typeId,valid);



this.showPrompt(estString);

			// alert('submit!');
//1-10个是：投资人对校区的管控亟待加强，建议立刻找御书思学进行校区评估

// 11-20个是：投资人对校区的管控还有很大的提升空间，建议立刻找御书思学进行校区评估

// 21-28个是：投资人对校区的管控比较到位，如果想继续提升业绩请找御书思学进行校区评估

// 29-35个是：投资人对校区的管控很到位，如果想继续提升业绩请找御书思学进行校区评估

			// this.showPrompt(`您的评分是${sumScore}`);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

     changeSwith(index,optIndex){

console.log(this.switchArray[index][optIndex]?true:false);

 this.switchArray[index][optIndex]=this.switchArray[index][optIndex]?true:false;

	 },


		getData() {

			let id = this.$route.params.id;

this.typeId=this.$route.params.id;
			this.quData = Store.fetch()[id - 1];
	console.log(this.quData);

			this.questions = this.quData.questions;

			this.questions.forEach((item) => {

				if (item.type === 'checkbox') {
					item.answer = [];
				}
				else {
					item.answer = '';
				}
			});


		},

		showPrompt(text) {
			this.promptText = text;
			this.isShowPrompt = true;
		},


submitBtn2(e){

console.log("SSSSSS");

// let sumScore=0;
// let arrayLength=this.questions.length;
// let array=this.form;
// // console.log(array.length);
// for (let index = 0; index <= array.length-1; index++) {

// console.log(parseInt(array[index])&&arrayLength);

// 	if(!isNaN(array[index])&&arrayLength==array.length){ 

// 	sumScore += parseInt(array[index]) ;

//  this.showPrompt(`您的评分是${sumScore}`);
// 	}else{

//  this.showPrompt("必须全部输入");

// 	}
	
// }
//  console.log(sumScore);


},


checkRadioAnswer(index, value) {
this.form[index]=value;
 console.log(value);
},

		checkboxAnswer(event, index, answer) {

 console.log("ssssssss");
			console.log(event.target.checked);

			if (event.target.checked) {
				answer.push(index);
			}
			else {
				answer.splice(answer.indexOf(index), 1);
			}

		},


		requireValidate() {

			let textareas = document.querySelectorAll('textarea');

			return [].every.call(textareas, item => {
				if (item.hasAttribute('required') && item.value.trim() === '') {
					return false;
				}
				return true;
			})

		},

		getAnswer() {
			this.questions.forEach((item, index) => {
				this.answers[`Q${index + 1}answer`] = item.answer;
			})
		},

		sendAnswer() {
			this.getAnswer();
			this.$router.push({path: '/'});
			console.log('非正式项目，无需发送用户回答数据，打印出来看看就好');
			console.log(this.answers);
		},

		*submitBtn() {
			let text = ``;
			if (this.quData.state === 0) {
				text = `考评尚未发布，无法提交！`;
				this.iterator = null;
			}
			else if 
			
			(!this.requireValidate()) {
				text = `有必填项未填写，无法提交！`;
				this.iterator = null;
			}
			else {
				text = `确认提交考评吗？`
			}


			yield this.showPrompt(text);

			yield this.sendAnswer();
		},

		*backBtn() {
			yield this.showPrompt(`放弃答题回到主页吗？`);
			yield this.$router.push({path: '/'});
		},
	},
}
</script>

<style scoped lang="scss">
@import '../style/_Fill.scss';
</style>
