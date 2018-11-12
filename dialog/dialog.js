// component/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'提示'
    },
    content:{
      type:String,
      value:'这是内容'
    },
    confirmText:{
      type:String,
      value:'确定'
    },
    cancelText:{
      type:String,
      value:'取消'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideDialog(){
      this.setData({
        isShow:false
      })
    },
    showDialog(){
      this.setData({
        isShow:true
      })
    },
    confirmEvent(){
      this.triggerEvent('confirmEvent');
    },
    cancelEvent(){
      this.triggerEvent('cancelEvent');
    },
    bindGetUserInfo(){
      this.triggerEvent('bindGetUserInfo');
    }



  }
})
