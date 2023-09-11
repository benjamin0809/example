const goPccQuestionDetailUrl = (pccUrl, params) => {
    if(!pccUrl) {
      if(process.env.NODE_ENV === 'development') {
        console.warn('pccUrl is not defined');
      }
      return
    }
    let url = `/pcc/#/${pccUrl}`
    for (const key in params) {
      const prefix = url.includes('?') ? '&' : '?'
      url += `${prefix}${key}=${params[key]}`
    }
    return url
    window.history.pushState({}, 'title', url)
  }

  console.log(goPccQuestionDetailUrl('configureOrder/businessTest/handelProblem', { status: 'psProblemDetails', problemId: 555, allProblem: 1 }));


  console.log(goPccQuestionDetailUrl('', { status: 'psProblemDetails', problemId: 555, allProblem: 1 }));

// &uniqueId=be50fafece0abcb2&ticket=jMyCxsdh0Y9gafbkgZgNHFQQiJuHYOdEqF7IBmZGtCrgoxvHwI0MQa6fe1Ztz5rPCJVc5bxiwZv8HtBMwtn8-Q
const str = decodeURIComponent('%2Fcpcc%2F%23%2FconfigureOrder%2FaddCommodityOrderDetail%3Fstatus%3Ddetail%26orderId%3D2309040011146307%26taskId%3D2309040011182227%26instanceId%3D2309040011155305%26operatorType%3D1%26orderTypeCode%3D1%26orderHistoryEdition%3D%26flowKey%3DcpccConfigureOrder%26taskKey%3DbusinessSupportConfirmSign')
console.log(str)
http://10.1.203.51:8899/cpcc/#/configureOrder/addCommodityOrderDetail?status=detail&orderId=230807000065116394&taskId=230904000211057556&instanceId=230807000065118076&operatorType=1&orderTypeCode=1&orderHistoryEdition=&flowKey=cpccConfigureOrder&taskKey=businessSupportConfirmSign
const str2 = 'http://10.1.203.51:8899?status=detail&orderId=230807000065116394&taskId=230904000211057556&instanceId=230807000065118076&operatorType=1&orderTypeCode=1&orderHistoryEdition=&flowKey=cpccConfigureOrder&taskKey=businessSupportConfirmSign&sf_taskId=230904000211057556&sf_instanceId=230807000065118076&sf_bpmStatus=dealBpm_cpccConfigureOrder'
const str1 = 'http://10.1.203.51:8899?status=detail&orderId=2309040011146307&taskId=2309040011182227&instanceId=2309040011155305&operatorType=1&orderTypeCode=1&orderHistoryEdition=&flowKey=cpccConfigureOrder&taskKey=businessSupportConfirmSign'
const sre1p = new URL(str1).searchParams
const sre2p = new URL(str2).searchParams
const map1 = {}
const map2 = {}
for (const [key, value] of sre1p.entries()) {
  map1[key] = value
}
for (const [key, value] of sre2p.entries()) {
  map2[key] = value
}

console.log(map1, map2)