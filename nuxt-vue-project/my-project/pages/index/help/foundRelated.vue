<template>
  <div class="help-faq w1200">
    <p class="flag-title">
        资金相关
    </p>
    <div class="found-relate">
        <div class="f-left">
            <ul class="found-list">
                <li class="help-select" @click="showItem('rujinGuide')" :class="{'help-select':selectFlag=='rujinGuide'}">
                    <img class="left-arrow" src="~/static/icon_tri.png" alt="">
                    <p> 入金指南</p>
                </li>
                <li>
                    <img class="left-arrow" src="~/static/icon_tri.png" alt="">
                    <p>大陆银行卡入金</p>
                    <ul class="innerlist">
                        <li @click="showItem('DLjsyh')" :class="{'help-select':selectFlag=='DLjsyh'}">
                            <p>大陆建设银行</p>
                        </li>
                        <li @click="showItem('DLgsyh')" :class="{'help-select':selectFlag=='DLgsyh'}">
                            <p>大陆工商银行</p>
                        </li>
                        <li @click="showItem('DLzgyh')" :class="{'help-select':selectFlag=='DLzgyh'}">
                            <p>大陆中国银行</p>
                        </li>
                        <li @click="showItem('DLmsyh')" :class="{'help-select':selectFlag=='DLmsyh'}">
                            <p>大陆民生银行</p>
                        </li>
                        <!--<li>
                            <p>支付宝</p>
                        </li>-->

                    </ul>
                </li>
                <li>
                    <img class="left-arrow" src="~/static/icon_tri.png" alt="">
                    <p>香港银行卡入金</p>
                    <ul class="innerlist">
                        <li @click="showItem('HKyonglong')" :class="{'help-select':selectFlag=='HKyonglong'}">
                            <p>香港永隆银行</p>
                        </li>
                        <li @click="showItem('HKhuifeng')" :class="{'help-select':selectFlag=='HKhuifeng'}">
                            <p>香港汇丰银行</p>
                        </li>
                        <li @click="showItem('HKzhaoshang')" :class="{'help-select':selectFlag=='HKzhaoshang'}">
                            <p>香港招商银行</p>
                        </li>
                        <li @click="showItem('HKminsheng')" :class="{'help-select':selectFlag=='HKminsheng'}">
                            <p>香港民生银行</p>
                        </li>
                        <li @click="showItem('HKgongyin')" :class="{'help-select':selectFlag=='HKgongyin'}">
                            <p>香港工银亚洲</p>
                        </li>
                        <li @click="showItem('HKzhongguoyh')" :class="{'help-select':selectFlag=='HKzhongguoyh'}">
                            <p>中国银行（香港）</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <img class="left-arrow" src="~/static/icon_tri.png" alt="">
                    <p>办理香港银行卡</p>
                    <ul class="innerlist">
                        <li @click="showItem('howHKcard')" :class="{'help-select':selectFlag=='howHKcard'}">
                            <p>如何办理香港银行卡</p>
                        </li>
                        <li @click="showItem('HKyonglongBank')" :class="{'help-select':selectFlag=='HKyonglongBank'}">
                            <p>香港永隆银行</p>
                        </li>
                        <li @click="showItem('HKhuifengBank')" :class="{'help-select':selectFlag=='HKhuifengBank'}">
                            <p>香港汇丰银行</p>
                        </li>
                        <li @click="showItem('HKzhaoshangBank')" :class="{'help-select':selectFlag=='HKzhaoshangBank'}">
                            <p>香港招商银行</p>
                        </li>
                        <li @click="showItem('HKminshengBank')" :class="{'help-select':selectFlag=='HKminshengBank'}">
                            <p>香港民生银行</p>
                        </li>
                        <li @click="showItem('HKgongyinBank')" :class="{'help-select':selectFlag=='HKgongyinBank'}">
                            <p>香港工亚银行</p>
                        </li>
                        <li @click="showItem('HKzhongguoyhBank')" :class="{'help-select':selectFlag=='HKzhongguoyhBank'}">
                            <p>中国银行（香港）</p>
                        </li>
                    </ul>
                </li>
                <li @click="showItem('chujinGuide')" :class="{'help-select':selectFlag=='chujinGuide'}">
                    <img class="left-arrow" src="~/static/icon_tri.png" alt="">
                    <p> 出金指南</p>
                </li>
            </ul>
        </div>
        <div class="f-right" id="right-content">
          <components :is="currentComponent"></components>
        </div>
    </div>
</div>
</template>
<script>
	import RujinGuide from '~/pages/index/help/rujinGuide.vue'
	export default {
		data(){
			return {
				currentComponent: RujinGuide,
                selectFlag: 'rujinGuide'
			}
		},
		methods: {
			showItem(param) {
                this.selectFlag = param
				if(param == 'rujinGuide'){
					this.currentComponent = RujinGuide
                }else if(param == 'DLjsyh'){
        					import('~/pages/index/help/rjBank/DLjsyh.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'DLgsyh'){
        					import('~/pages/index/help/rjBank/DLgsyh.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'DLzgyh'){
                  import('~/pages/index/help/rjBank/DLzgyh.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'DLmsyh'){
                  import('~/pages/index/help/rjBank/DLmsyh.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKyonglong'){
                  import('~/pages/index/help/rjCard/HKyonglong.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKhuifeng'){
                  import('~/pages/index/help/rjCard/HKhuifeng.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKzhaoshang'){
                  import('~/pages/index/help/rjCard/HKzhaoshang.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKminsheng'){
                  import('~/pages/index/help/rjCard/HKminsheng.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKgongyin'){
                  import('~/pages/index/help/rjCard/HKgongyin.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKzhongguoyh'){
                  import('~/pages/index/help/rjCard/HKzhongguoyh.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'howHKcard'){
                  import('~/pages/index/help/bankCard/howHKcard.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKyonglongBank'){
                  import('~/pages/index/help/bankCard/HKyonglong.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKhuifengBank'){
                  import('~/pages/index/help/bankCard/HKhuifeng.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKzhaoshangBank'){
                  import('~/pages/index/help/bankCard/HKzhaoshang.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKminshengBank'){
                  import('~/pages/index/help/bankCard/HKminsheng.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKgongyinBank'){
                  import('~/pages/index/help/bankCard/HKgongyin.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'HKzhongguoyhBank'){
                  import('~/pages/index/help/bankCard/HKzhongguoyh.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }else if(param == 'chujinGuide'){
                  import('~/pages/index/help/chujinGuide.vue').then(es6 => {
        						this.currentComponent = es6.default
        					})
                }
            }
         }
    }
</script>