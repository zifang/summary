<template>
  <div class="help-faq w1200">
    <p class="flag-title">
        港股市场
    </p>
    <ul class="faq-list">
        <li>
            <img class="left-arrow" src="~/static/icon_tri.png" alt="">
            <p class="click-title">交易规则</p>
            <div class="detail-content">
                <p class="detail-title">港股市场交易规则 </p>

                <div class="detailList-content">
                    <p class="list-title">1.港股交易时间</p>
                    <p>周一到周五进行交易，交易时间如下：</p>
                    <ul>
                        <li>（1）早盘竞价时段：上午 09:00~09:20</li>
                        <li>（2）正常交易时段：上午9:30~12:00，下午13:00~16:00</li>
                        <li>（3）收市竞价阶段：16:00~16:10</li>
                    </ul>
                </div>

                <div class="detailList-content">
                    <p class="list-title">2.港股交易单位</p>
                    <p>港股最小交易单位为“1手”，每手所含的股票数量根据股票价格来决定，1手可能是100股、500股、1000股和2000股不等。不足一手的持仓数量即为“碎股”。比如，腾讯控股，一手要100股，如果手上有150股腾讯，那么50股就成了碎股。一般公司送红股或者供股的时候会产生碎股。</p>
                    <p class="padding-top">
                        嘉银APP不支持碎股交易，碎股的交易需要人工处理，为确保客户的交易能尽快处理，需提早在收市前15 分钟（早市：9:30-11:45 午市：13:00-15:45）联系客服发出碎股交易请求。
                    </p>
                </div>

                <div class="detailList-content">
                    <p class="list-title">3.港股报价单位</p>
                    <p>股价与交易的最小单位对应关系：</p>
                    <table>
                        <tr class="thead-bg">
                            <th>股价</th>
                            <th>最小报价单位</th>
                        </tr>
                        <tr>
                            <td>［0.01,0.25]</td>
                            <td>0.001</td>
                        </tr>
                        <tr>
                            <td>（0.25,0.5]</td>
                            <td>0.005</td>
                        </tr>
                        <tr>
                            <td>（0.5,10]</td>
                            <td>0.01</td>
                        </tr>
                        <tr>
                            <td>（10,20]</td>
                            <td>0.02</td>
                        </tr>
                        <tr>
                            <td>（20,100]</td>
                            <td>0.05</td>
                        </tr>
                        <tr>
                            <td>（100,200]</td>
                            <td>0.1</td>
                        </tr>
                        <tr>
                            <td>（200,500]</td>
                            <td>0.2</td>
                        </tr>
                        <tr>
                            <td>（500,1000]</td>
                            <td>0.5</td>
                        </tr>
                        <tr>
                            <td>（1000,2000]</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>（2000,5000]</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>（5000,9995]</td>
                            <td>5</td>
                        </tr>
                    </table>
                    <p>例如，一只股票的价格为80.00元港币，那么其价格变动单位为0.05元，买卖盘申报也需要以0.05元为单位，如80.05元，而不能申报80.04元这样的价格。</p>

                </div>

                <div class="detailList-content">
                    <p class="list-title">4.支持的港股订单类型</p>
                    <p>支持增强限价盘、竞价盘、竞价限价盘三种订单类型。</p>
                </div>
                <div class="detailList-content">
                    <p class="list-title">5.港股涨跌幅限制</p>
                    <p>香港股票市场没有10%的涨跌停制度。</p>
                </div>
                <div class="detailList-content">
                    <p class="list-title">6.港股结算和交收</p>
                    <p>港股实行 T+0 交易制度，当天买入的股票可以当天卖出。</p>
                    <p>港股实行 T+2 交割制度，即交易后第二个工作日完成清算交割。</p>
                </div>
                <div class="detailList-content">
                    <p class="list-title">7.港股融资融券</p>
                    <p>目前嘉银证券暂不支持港股融资融券业务</p>
                </div>
                <div class="detailList-content">
                    <p class="list-title">8.港股衍生品交易</p>
                    <p>嘉银证券暂不支持涡轮、牛熊证等港股衍生品交易。</p>
                </div>

                <div class="detailList-content">
                    <p class="list-title">9.市场波动调节机制</p>
                    <p>当股票或期货合约的价格达到触发价格范围内，港股市场波动调节机制(简称VCM)会被触发，启动5分钟的冷静期，令交易限于指定价格限制范围内进行，正常交易将于5分钟后重启。
                        <br> 【触发价格范围】
                        <br> 证券市场：参考价变动幅度超过±10%
                        <br> 衍生产品市场：参考价变动幅度超过±5%
                        <br> 参考价：5分钟前最后一次交易
                        <br> 【市场范围】

                        <br> 恒指及恒生国企指数成分股（现有81支）及相关指数期货合约（现有8支）。
                        <br> 【适用时段】

                        <br> 只适用于持续交易时段，不包括早市及午市前15分钟、午市最后15分钟。
                        <br> 【交易价格】

                        <br> 5分钟冷静期内，交易价格仅能在触发价格限制范围内，即参考价的±10%/±5%（根据不同市场区分）。
                    </p>
                </div>
            </div>
            <div class="detail-content">
                <p class="detail-title">港股公司行动介绍</p>
                <div class="detailList-content">
                    <p class="detail-text">上市公司行动指上市证券发行人发布的，将直接或间接影响该上市证券变动，从而影响该上市证券持股股东权益的事件。
                        <br>常见的公司行动有派息、送股、供股、配股、拆合股、私有化等。
                    </p>
                    <p class="list-title">1.派息</p>
                    <p class="detail-text">派息是指上市公司向股东派送利息，即现金。企业向股东支付的现金，一般来自企业的当期盈利或累计利润。
                        <br> 在除权日前一天结算后，如果客户持有上市公司的股票，则都会参与派息。
                        <br> 除权日当天，上市公司的股票价格会下跌，所以股东会在开盘前看到自己的盈亏是亏损状态。这部分亏损的金额会变换成利息现金派送到股东的账户中。
                        <br> 所以，简单讲，派息就是股东的持仓由全部正股，变成了全部正股（价格下跌）+ 现金利息（金额为正股下跌的部分）。现金会在派送日存入股东的账户。
                        <br> 特殊派息是派息的一种，只是派息的理由是某种特殊性，例如上市公司的某些投资赚钱，而不是主营业务赚钱，所以派发特殊股息。
                    </p>

                    <p class="list-title">2.送股</p>
                    <p class="detail-text">送股也叫红股，是上市公司以证券形式支付的股息和红利。
                        <br> 在除权日前一天结算后，如果客户持有上市公司的股票，则都会参与送股。
                        <br> 除权日当天，上市公司的股票价格会下跌，所以股东会在开盘前看到自己的盈亏是亏损状态。这部分亏损的金额会变换成红股派送到股东的持仓中。
                        <br> 所以，简单讲，送股就是股东的持仓由全部正股，变成了全部正股（价格下跌）+ 赠送的正股（价值为正股下跌的部分）。红股会在派送日存入股东的持仓。
                    </p>
                    <p class="list-title">3.供股</p>
                    <p class="detail-text">港股的供股与A股市场的配股类似。供股是上市公司集资的一种方式，指向现有证券持有人做出供股要约，使他们可按其现时持有证券的比例认购证券。当公司宣告供股时，现有股东会收到供股权。如股东不想供股，可通过在市场上沽售供股权放弃供股权利。
                    </p>
                    <p class="list-title">4.配股</p>
                    <p class="detail-text">港股中的配股与A股市场的“配股”不是一个概念，而更类似于非公开定向增发。配股分为“配旧”和“配新”两种，也可以混合使用。
                        <br> 配旧：大股东把自己手中的旧股拿来配股，对公司及其他股东来说，除了股价变动外，没有其它影响。
                        <br> 配新：由公司发行新股，也是最常见的配股方式。不过由于发行了新股，而新股又不会给现有股东认购，所以配股后也会出现摊薄效应。
                    </p>
                    <p class="list-title">5.拆/合股</p>
                    <p class="detail-text">拆股就是将股票进行切割，股数增多，股价降低，但总价值不变。拆股有利于扩大投资者基础，吸引更多投资者参与，增加交易量和流动性。例如，腾讯控股曾经在2014年5月15日由1股拆分为5股。
                        <br> 合股是拆股的相反过程。
                    </p>
                    <p class="list-title">6.私有化</p>
                    <p class="detail-text">私有化通常由控权股东提出，以现金或证券附有现金选择权的方式，向其他小股东全数买入股份。上市公司可以通过「收购」或「协议安排」的方式完成私有化。如私有化成功，上市公司会向联交所申请撤销上市地位。</p>
                </div>
            </div>
        </li>
        <li>
            <img class="left-arrow" src="~/static/icon_tri.png" alt="">
            <p class="click-title">新股认购</p>
            <div class="detail-content">
                <div class="detailList-content">
                    <p class="detail-title">新股认购流程指引 </p>
                    <p class="detail-title">Q: 新股认购流程指引</p>
                    <p class="list-title">（1）打开“交易”，点击“新股申购” <br>
                        <img class="account-step" src="~/static/xingu1.png" alt="">
                    </p>
                    <p class="list-title">（2）点击“申购” <br>
                        <img class="account-step" src="~/static/xingu2.png" alt="">
                    </p>
                    <p class="list-title">（3）选择申购类别“现金申购”，点击“申购”按钮<br>
                        <img class="account-step" src="~/static/xingu3.png" alt="">
                    </p>
                    <p class="list-title">（4）点击申购明细弹框上的“确定”按钮<br>
                        <img class="account-step" src="~/static/xingu4.png" alt="">
                    </p>
                    <p class="list-title">（5）IPO申购成功，点击“确定” <br>
                        <img class="account-step" src="~/static/xingu5.png" alt="">
                    </p>
                </div>
            </div>
            <div class="detail-content">
                <div class="detailList-content">
                    <p class="detail-title">Q: 新股认购注意事项 </p>
                    <p class="detail-text">您在新股认购时，需要注意以下问题：</p>

                    <p class="list-title">1. 认购时间</p>
                    <p class="detail-text">因需处理认购手续，嘉银的认购截至日期会早于交易所公布的截至日期，截止时间为提前1个交易日的16：00。 <br> 
                            申请认购的客户，需要在APP内公布的嘉银认购截止时间之前发起认购通知。晚于该时间点则会导致认购不成功。
                    </p>
                    <p class="list-title">2. 公布时间</p>
                    <p class="detail-text">认购结果将于新股上市日期之前1天公布，如中签，您可以在自己的持仓内看到认购成功的股票，同时会通过系统消息、短信、邮件的方式收到中签通知。</p>
                    <p class="list-title">3. 资金准备</p>
                    <p class="detail-text">（1）认购手续费：50港币。 无论是否中签，均需缴纳。<br>
                        （2）认购资金：以认购价格及数量为准及1.0077%的交易征费。</p>
                    <p class="list-title">4. 扣除时间</p>
                    <p class="detail-text">（1）认购手续费将在申请认购截止日当天扣除。</p>
                    <p class="list-title">5. 资金退回</p>
                    <p class="detail-text">如未中签，认购资金将在结果公布日期当天退回帐户，资金可用于股票交易或者货币兑换。</p>
                    <p class="list-title">6. 重要提示</p>
                    <p class="detail-text">（1）请确保账户内有足够资金，如资金不足，则会导致认购失败。<br>
                        （2）新股认购只能通过一家券商申请，若通过两个及以上券商提交认购请求，则所有请求都会被驳回，导致认购失败。<br>
                        （3）卖出股票后，资金需要完成结算交收才能进行新股认购。</p>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>
