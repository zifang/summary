  tapVoiceButton: function (event) {
    var that = this
    var start = this.data.voiceButtonName == '语音识别';
    this.setData({
      voiceButtonName: start ? '结束录音' : '语音识别'
    })
    if (start) {
      wx.startRecord({
        success: function (res) {
          wx.showToast({
            title: '语音识别中',
            icon: 'loading',
            duration: 10000,
            mask: true
          })
          wx.uploadFile({
            url: 'https://ihealth-wx.s1.natapp.cc/upload',
            filePath: res.tempFilePath,
            name: 'file',
            formData: {
              'msg': 'voice'
            }, // HTTP 请求中其他额外的 form data
            success: function (res) {
              // success
              console.log('begin');
              console.log(res.data);
              var json = JSON.parse(res.data);
              console.log(json.msg);
              var jsonMsg = JSON.parse(json.msg);
              console.log(jsonMsg.result);
              wx.hideToast()
            },
            fail: function (err) {
              // fail
              console.log(err);
            },
            complete: function () {
              // complete
            }
          })
        },
        fail: function (res) {
          alert('录音失败' + JSON.stringify(res));
        }
      })
      setTimeout(function () {
        //结束录音  
        wx.stopRecord()
      }, 60000)
    } else {
      wx.stopRecord()
    }
  },