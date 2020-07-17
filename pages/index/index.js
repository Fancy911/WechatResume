// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name:'李知微',
    spell:'Li Zhiwei',
    job:'WEB前端工程师',
    exp:'1年实习经验',
    tel:'156xxxx9657',
    sex:'女',
    age:23,
    minzu:'汉',
    zzMianMao:'积极分子',
    email:'4946XXX44@qq.com',
    address:'河南省焦作市解放区XXX街道XXX小区',
    skill:[
      {name:"HTML/CSS",percent:55},
      {name:"JavaScript",percent:75},
      {name:"VUE框架",percent:95},
      {name:"Python",percent:85},
      {name:"数据分析",percent:75},
    ],
    education:[
      {
        school:"电子科技大学",
        major:"软件工程 硕士",
        year:"2019-2021",
        desc:"主修课程:随机过程与排队论、算法分析、高级计算机结构"
      },
      {
        school:"海南大学",
        major:"计算机科学与技术 本科",
        year:"2015-2019",
        desc:"主修课程:C++语音程序设计、Java 语言程序设计、数据结构、操作系统、计算机网络"
      }
    ],
    projectExp:[
      {
        name:"学生实验行为分析系统",
        job:"Layui框架前端开发",
        date:"2019.09-2020.01",
        major:"项目职责： 实现前端页面，进行简单的 UI 排版和图表设计"
      },
      {
        name:"QT舆情分析",
        job:"VUE框架前端开发",
        date:"2020.04-2020.08",
        major:"项目职责：与前端负责人一同完成UI设计,使用VUE框架实现前端页面，用Echarts进行图表的展示,与后端一起梳理业务逻辑,完成前后端对接"
      },
      {
        name:"电商后台管理系统",
        job:"VUE框架前端开发",
        date:"2020.05-2020.08",
        major:"项目职责：使用ElementUI库完成系统的UI设计,根据接口文档实现每个板块的功能逻辑,使用VUEX进行状态管理,使用版本控制工具Git对每个模块进行分支管理,每完成一个模块就会上传至码云并与主分支合并.完成后部署上线"
      },
      {
        name:"微信小程序XXX",
        job:"微信小程序开发",
        date:"2020.07-2020.08",
        major:"项目职责：使用微信小程序adfhakhdfhXXXXXXXXXXXakhgahf巴拉巴拉巴拉巴拉巴拉"
      }
    ],
    language:"CET4(474)",
    otherSkill:"驾驶证(C1)",
    hobby:"唱歌,吉他",
    introduction:" 本人对编程很感兴趣，动手能力强，熟悉 Java 语言，对Linux 操作系统熟练使用。能够熟练使用 Eclipse、Visual Studio、WebStorm等专业软件。在项目中对前端开发练习较多，使用并熟悉 Layui 框架和Vue 框架。 对人工智能领域下的深度学习稍有了解。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    /* 动态计算页面的高度 */
    var height = wx.getSystemInfoSync().windowHeight
    var width = wx.getSystemInfoSync().windowWidth
    // 保存到模型层
    this.setData({
      height:height,
      width:width
    })
    console.log(height)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})