import qs from 'qs'
export default {
  serializeDate(date) {
    //第一个参数为需要序列化的数据
//第二个参数为配置选项
    return qs.stringify(date, {
      serializeDate: (date) => {
        //用moment处理日期比较方便，自己写格式化方法也可以
        return moment(date).format('YYYY-MM-DD HH:mm:ss')
      }
    })
  }

}
