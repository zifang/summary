<template>
  <div class="help-faq w1200">
    <p class="flag-title">
        常见问题
    </p>
    <ul class="faq-list">
        <li>
            <img :class="{'left-arrow':true,'rotate90':showToggle}" src="~/static/icon_tri.png" alt="">
            <p class="click-title" @click="showToggle=!showToggle">如何开通嘉银证券账户？</p>
            <transition name="fadeIn" enter-active-class="animated fadeIn">
                <div class="detail-content" v-show="showToggle">
                    <p class="detail-text">下载嘉银App，1张身份证+1张银行卡，3分钟即可完成开户。
                    </p>
                    <div class="detailList-content">
                        <p class="list-title">1. 准备工作</p>
                        <p class="list-item">
                            （1）下载嘉银App。
                            <br> （2）身份证：有效期内的本人大陆二代居民身份证原件（暂不支持大陆临时居民身份证、美国/香港/澳门等其他国家与地区身份证件）。
                            <br> （3）银行卡：有效期内的本人内地银行借记卡（用于实名认证）。
                            <br> （4）网络支持：流畅的网络环境（3G/4G/WiFi）。
                        </p>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">2. 开户步骤</p>
                        <img class="account-step" src="~/static/img_step.png" alt="">
                    </div>
                </div>
            </transition>
        </li>
        <li>
            <img :class="{'left-arrow':true,'rotate90':showToggle2}" src="~/static/icon_tri.png" alt="">
            <p class="click-title" @click="showToggle2 = !showToggle2">嘉银证券的入金门槛是多少？</p>
            <transition name="fadeIn" enter-active-class="animated fadeIn">
                <div class="detail-content" v-show="showToggle2">
                    <p class="detail-text">入金无门槛。无账户管理费。</p>
                </div>
            </transition>
        </li>
        <li>
            <img :class="{'left-arrow':true,'rotate90':showToggle3}" src="~/static/icon_tri.png" alt="">
            <p class="click-title" @click="showToggle3=!showToggle3">开户需要多久？如何知道开户成功？</p>
            <transition name="fadeIn" enter-active-class="animated fadeIn">
                <div class="detail-content" v-show="showToggle3">
                    <p class="detail-text">一般1~2个工作日开户成功。开户成功后，会发送短信和邮件提示您。</p>
                </div>
            </transition>
        </li>
        <li>
            <img :class="{'left-arrow':true,'rotate90':showToggle4}" src="~/static/icon_tri.png" alt="">
            <p class="click-title" @click="showToggle4=!showToggle4">如何存入资金至嘉银证券账户？</p>
            <transition name="fadeIn" enter-active-class="animated fadeIn">
                <div class="detail-content" v-show="showToggle4">
                    <p class="detail-text">
                        <span class="color7e">温馨提示：
                            <br> 1. 投资港股需存入港币。中国公民每人每年最多只有5万美元等值的外币购汇限额（约39万港币）。
                            <br> 2. 汇款银行账户姓名与证券账户姓名不一致、汇款信息不完整或填写错误、外汇额度不足等情况均可能导致汇款失败。
                            <br> 3. 银行间后台处理汇款申请需要一定时间，银行通知“已汇出”不等于嘉银证券已收到款项。银行和嘉银证券国内和香港节假日均不处理汇款业务，请预留好汇款处理时间。</span>
                        <br>
                        <br>嘉银证券支持大陆银行卡以及香港银行卡两种入金方式。您可以使用本人内地或香港银行卡，登录网上银行购汇并境外汇款。入金到账时间取决于银行汇款速度，通常1-4个工作日可以到账。
                    </p>
                    <img class="account-step" src="~/static/step1.png" alt="">
                    <div class="detailList-content">
                        <p class="list-title">1. 通过大陆银行卡存入</p>
                        <p>（1）大陆银行存入流程
                            <br> i. 登录嘉银app，依次点击选择「我的」）-「业务办理」）-「存入资金」，即可获取您的专属收款银行账户
                            <br> ii. 通过网银客户端购汇，将人民币兑换成港币
                            <br> iii. 汇款到收款银行账户（预计1-4个工作日到账）
                            <br> iv. 在嘉银APP上传汇款凭证，通知嘉银证券
                            <br>
                        </p>
                        <p>
                            （2）如您使用以下银行，请点击相应的银行查看指引：
                            <br>
                            <a class="account-link guide-link " href="./help.html?index=2&menuL=0">大陆建设银行</a>
                            <a class="account-link guide-link" href="./help.html?index=2&menuL=1">大陆工商银行</a>
                            <a class="account-link guide-link" href="./help.html?index=2&menuL=2">大陆中国银行</a>
                            <a class="account-link guide-link" href="./help.html?index=2&menuL=3">大陆民生银行</a>
                        </p>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">2. 通过香港银行卡存入</p>
                        <p>（1）香港银行存入流程
                            <br> i. 办理香港银行卡
                            <br> ii. 从大陆银行卡汇款到香港银行卡
                            <br> iii. 从香港银行卡汇款到收款银行账户（预计1-4个工作日到账 ）
                            <br> iv. 通知嘉银证券（登录嘉银APP，进入「我的」）-「业务办理」）-「存入资金」通知嘉银）
                            <br>
                        </p>
                        <p>
                            （2）如您办理以下银行卡，请点击相应的银行查看指引：
                            <a href="./help.html?index=2&menuL=4" class="account-link guide-link">香港永隆银行</a>
                            <a href="./help.html?index=2&menuL=5" class="account-link guide-link">香港汇丰银行</a>
                            <a href="./help.html?index=2&menuL=6" class="account-link guide-link">香港招商银行</a>
                            <a href="./help.html?index=2&menuL=7" class="account-link guide-link">香港民生银行</a>
                            <a href="./help.html?index=2&menuL=8" class="account-link guide-link">香港工银亚洲</a>
                            <a href="./help.html?index=2&menuL=9" class="account-link guide-link">中国银行（香港）</a>
                        </p>
                    </div>
                </div>
            </transition>
        </li>
        <li>
            <img :class="{'left-arrow':true,'rotate90':showToggle5}" src="~/static/icon_tri.png" alt="">
            <p class="click-title" @click="showToggle5=!showToggle5">如何提取资金到香港银行卡？</p>
            <transition name="fadeIn" enter-active-class="animated fadeIn">
                <div class="detail-content" v-show="showToggle5">
                    <p class="list-title">提取资金是指将已经结算的港币从嘉银证券账户提取到本人的香港银行账户。</p>
                    <p class="detail-text">温馨提示：节假日及休市期间，由于银行不上班，会影响提取资金的时间点，请等待节假日结束后银行处理。</p>
                    <div class="detailList-content">
                        <p class="list-title">1. 提示事项</p>
                        <p>（1）银行账户的开户人必须与证券账户同名，不支持提取到他人的银行账户。
                            <br> （2）取出资金的过程，嘉银证券不收取任何手续费。
                            <br> （3）提取的资金需要与交易所结算，港股结算时间为T+2，请到取出资金页面查询具体可提取金额。
                            <br> （4）嘉银处理提取资金请求的时间是工作日 9：00 - 15：30。</p>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">2. 到账时间</p>
                        <p>
                            预计1~2工作日到账，以银行实际处理时间为准。
                        </p>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">3. 操作步骤</p>
                        <p>（1）「我的」-「证券业务」）
                            <br>
                            <img class="account-step" src="~/static/wh_1.png" alt="">
                        </p>
                        <p>（2）选择“取出资金”
                            <br>
                            <img class="account-step" src="~/static/wh_2.png" alt="">
                        </p>
                        <p>（3）填写信息
                            <br>
                            <img class="account-step" src="~/static/wh_3.png" alt="">
                        </p>
                        <p>（4）申请提取后，可以在“资金记录”查询到提取状态。</p>
                        <p>登录嘉银APP，依次点击选择「我的」）-「证券业务」）-「资金记录」</p>
                    </div>
                </div>
            </transition>
        </li>
        <li>
            <img :class="{'left-arrow':true,'rotate90':showToggle6}" src="~/static/icon_tri.png" alt="">
            <p class="click-title" @click="showToggle6=!showToggle6">嘉银证券港股收费标准？</p>
            <transition name="fadeIn" enter-active-class="animated fadeIn">
                <div class="detail-content" v-show="showToggle6">
                    <p class="detail-title">港股收费标准 </p>
                    <p class="detail-text"></p>
                    <div class="detailList-content">
                        <p class="list-title">1.港股交易费用</p>
                        <p>买卖股票时，按每笔交易成交金额，产生如下费用：</p>
                        <table>
                            <tr class="thead-bg">
                                <th>类型</th>
                                <th>费用</th>
                                <th>收费方</th>
                            </tr>
                            <tr>
                                <td>佣金</td>
                                <td>0.04%，最低50.00港元</td>
                                <td>嘉银证券</td>
                            </tr>
                            <tr>
                                <td>交易费</td>
                                <td>0.005%</td>
                                <td>香港交易所</td>
                            </tr>
                            <tr>
                                <td>交易征费</td>
                                <td>0.0027%</td>
                                <td>香港证监会</td>
                            </tr>
                            <tr>
                                <td>交收费</td>
                                <td>0.005%（其中0.002%代香港结算所收取），最低收取5港元，最高收取200.00港元</td>
                                <td>香港结算所、嘉银证券</td>
                            </tr>
                            <tr>
                                <td>印花税</td>
                                <td>0.1%，不足1元作1元计。如2.01港元，实际收取3.00港元。买卖涡轮、牛熊证时不收此项费用。</td>
                                <td>香港政府</td>
                            </tr>
                        </table>
                        <p class="explain-text font-small color7e">*目前嘉银证券暂不支持交易港股窝轮、牛熊证；暂不支持融资。</p>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">2.港股新股认购费用</p>
                        <table>
                            <tr class="thead-bg">
                                <th>类型</th>
                                <th>费用</th>
                                <th>收费方</th>
                            </tr>
                            <tr>
                                <td>认购手续费</td>
                                <td>普通认购：50港元/笔； 融资认购：100港元/笔。 （无论是否中签，发起认购即收取）
                                </td>
                                <td>嘉银证券</td>
                            </tr>
                            <tr>
                                <td>经纪佣金</td>
                                <td>1%（中签才收）</td>
                                <td>经纪公司</td>
                            </tr>
                            <tr>
                                <td>交易费</td>
                                <td>0.005%（中签才收）</td>
                                <td>香港交易所</td>
                            </tr>
                            <tr>
                                <td>交易征费</td>
                                <td>0.0027%（中签才收）</td>
                                <td>香港证监会</td>
                            </tr>
                        </table>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">3.港股其他服务收费</p>
                        <table>
                            <tr class="thead-bg">
                                <th>收费类别</th>
                                <th>费用</th>
                            </tr>
                            <tr>
                                <td>提取实物股票</td>
                                <td>每支股票每手5港元（不足1手计一手），最低50港元 (不设上限)</td>
                            </tr>
                            <tr>
                                <td>转出股票 (S.I及I.S.I)
                                </td>
                                <td>每支股票每手5港元（不足1手计一手），最低100港元，最高500港元</td>
                            </tr>
                            <tr>
                                <td>代收股息</td>
                                <td>股息总额 0.5%，最低30港元。另加交易所收费。如股息不足30港元，則以实际派息全额扣除。</td>
                            </tr>
                            <tr>
                                <td>代收股权</td>
                                <td>手续费每手1港元（不足1手计1手），最低30港元。另加交易所收费</td>
                            </tr>
                            <tr>
                                <td>代收红股</td>
                                <td>手续费每手1港元（不足1手计1手），最低30港元。另加交易所收费</td>
                            </tr>
                            <tr>
                                <td>代处理公司行動</td>
                                <td>手续费每手1港元（不足1手计1手），最低30港元。另加交易所收费</td>
                            </tr>
                            <tr>
                                <td>退支票费用</td>
                                <td>200港元</td>
                            </tr>
                            <tr>
                                <td>邮寄账户日结单、月结单</td>
                                <td>每份50港元</td>
                            </tr>
                            <tr>
                                <td>追收股息</td>
                                <td>0.5%, 最低港币50元, 另手续费港币300元及香港结算收取港币200元手续费；另加过户处收费（如有）</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </transition>
        </li>
        <li>
            <img :class="{'left-arrow':true,'rotate90':showToggle7}" src="~/static/icon_tri.png" alt="">
            <p class="click-title" @click="showToggle7=!showToggle7">嘉银证券如何保障资金安全？</p>
            <transition name="fadeIn" enter-active-class="animated fadeIn">
                <div class="detail-content" v-show="showToggle7">
                    <div class="detailList-content">
                        <p class="list-title">1.客户资金隔离托管</p>
                        <p>
                            嘉银证券持有香港第1类（证券交易）、第4类（就证券提供意见）、第9类（提供资产管理）受规管活动牌照，受到证监会的严苛监管。您在嘉银开通的证券账户，无论公司或托管机构的经营状况如何，存入的资金或股票都能够通过提取或转仓的方式转移出来，与嘉银的经营状况无关，无需担心资金无法取回的问题。
                        </p>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">2.同名账户方可出入金</p>
                        <p>
                            客户资金的转入和转出均需要由客户的同名账户执行，客户每次出金嘉银证券都会进行一系列安全检查，如果不符合安全检查，则无法出金，从而完全避免了账户资金被盗用的风险。
                        </p>
                    </div>
                    <div class="detailList-content">
                        <p class="list-title">3.香港投资者赔偿基金</p>
                        <p>
                            嘉银证券用户的港股交易受香港政府为保障中小投资者的利益而成立的香港投资者赔偿基金的提供的15万港币保障。
                        </p>
                    </div>
                </div>
            </transition>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  data(){
    return {
      showToggle: false,
      showToggle2: false,
      showToggle3: false,
      showToggle4: false,
      showToggle5: false,
      showToggle6: false,
      showToggle7: false
    }
  }
}
</script>

