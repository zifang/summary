<template>
  <div class="dynamic-load">
    <div class="detail-content">
        <p class="detail-title">如何办理香港银行卡？</p>
        <div class="detailList-content">
            <p class="list-title">1. 使用香港银行卡的优势</p>
            <p>
                （1）存入资金手续费低，提取资金不需手续费。
                <br> （2）存入/提取资金速度快。
            </p>
        </div>
        <div class="detailList-content">
            <p class="list-title">2. 支持大陆居民办理香港银行卡的银行</p>
            <table>
                <tr class="thead-bg">
                    <th>银行</th>
                    <th>资产条件</th>
                </tr>
                <tr>
                    <td>
                        <a class="account-link bank-iink" href="javascript:;" @click="showBank('HKyonglongBank')">香港永隆银行</a>
                    </td>
                    <td>无资产要求（支持大陆/香港地区开户）</td>
                </tr>
                <tr>
                    <td>
                        <a class="account-link bank-iink" href="javascript:;" @click="showBank('HKhuifengBank')">香港汇丰银行</a>
                    </td>
                    <td>需存入2000港币</td>
                </tr>
                <tr>
                    <td>
                        <a class="account-link bank-iink" href="javascript:;" @click="showBank('HKzhaoshangBank')">香港招商银行</a>
                    </td>
                    <td>1）若亲临香港分行办理，无开户资金要求
                        <br> 2）若在大陆见证网点办理，需持有私人银行卡或钻石卡，且连续三个月日均资产总额达500万人民币以上（支持大陆/香港地区开户）
                    </td>
                </tr>
                <tr>
                    <td>
                        <a class="account-link bank-iink" href="javascript:;" @click="showBank('HKminshengBank')">香港民生银行</a>
                    </td>
                    <td>5万人民币资产（支持大陆/香港地区开户，该香港账户为电子账户，无实体卡）</td>
                </tr>
                <tr>
                    <td>
                        <a class="account-link bank-iink" href="javascript:;" @click="showBank('HKgongyinBank')">香港工银亚洲</a>
                    </td>
                    <td>具体资产要求可咨询银行网点（支持大陆/香港地区开户）</td>
                </tr>
                <tr>
                    <td>
                        <a class="account-link bank-iink" href="javascript:;" @click="showBank('HKzhongguoyhBank')">中国银行（香港）</a>
                    </td>
                    <td>具体资产要求可咨询银行网点</td>
                </tr>
            </table>
            <strong>温馨提示：</strong>
            <br> 1. 失败风险：即便是资料和证件齐备，基于具体网点的自主裁量，仍然存在开户失败的风险，建议开户前咨询具体客户经理。
            <br> 2. 账户类型：银行可能设立不同档次的银行账户，并要求客户适用于某具体类别，需于具体开设时咨询及确认，届时请留意有关服务及费用情况。
            <br> 3. 权限开通：办理香港银行卡时，建议要求对方开通账户的第三方转账权限，并提高转账的限额，以便日后使用（此功能往往默认不开通），视需要可考虑同时开通网上理财功能。
            <br> 4. 必备资料：开立香港银行卡，以下资料为必备项：
            <br> （1）内地居民身份证
            <br> （2）港澳通行证或护照：有效期三个月或半年以上，各家银行要求不一。*注意：因港澳通行证和护照均有有效期限，即便日后证件更新，请仍保存申请时使用证件，以备银行查验。
            <br> （3）住址证明：申请人最近三个月内收到的可证明住址的单据，可为公共事业单位所发账单（如水、电、煤气、网络、电话等账单）、银行信用卡账单、其他金融或公用机构发出的加盖业务章的单据。需为纸质文件，收信人姓名与申请人一致，地址为个人住宅地址而非公司地址。
            <br> 5. 防止冻结：请咨询开户行是否有账户冻结条例。在新卡开立以及后期使用中，均可能有冻结条例。以下案例供参考：某银行卡在设立并激活后2个月内，需有同名账户存入一笔资金，不限金额，且每两月必须有交易发生，否则账户被冻结。则客户需要在特定时间，通过本人其它银行卡汇入，或亲临香港银行柜台人工汇入资金防止冻结。
            <br> 6. 账户管理费：香港银行有最低存款要求，低于一定的存款额会引起收取账户管理费用，请留意咨询开户行有关条例，予以应对。
            <br>
            <strong>免责声明：</strong>
            <br> 以上办理香港银行卡指引所载的一切信息仅供参考。如信息内有任何错误或遗漏，本公司不承担责任。在法律容许的最大范围内，对于任何因该等指引内所载的信息或透过该等指引内的链接所接触的内容而导致的任何损失、损害、伤害或其他后果，本公司不对此负（不论是直接或间接的）任何责任。
        </div>
    </div>
</div>
</template>
<script>
    export default {
        methods: {
            showBank(param){
                this.$parent.showItem(param)
            }
        }
    }
</script>