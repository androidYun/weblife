import axios from "axios"
import qs from 'qs'

export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log("响应数据");
          if (response.status === 200 && response.data.code === 200) {
            resolve(response.data)
          } else {
            reject({
              code: 0,
              msg: response.data.msg,
              data: {}
            });
          }
        }, err => {
          console.log("响应数据" + err);
          reject({
            code: 0,
            msg: err,
            data: {}
          });
        })
    })
  },
  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url,
        params)
        .then(function (response) {
          console.log(response.status + "响应数据" + response.data.code);
          if (response.status === 200 && response.data.code === 200) {
            resolve(response.data)
          } else {
            reject({
              code: 0,
              msg: "",
              data: ""
            });
          }
        }, err => {
          reject({
            code: 0,
            msg: err,
            data: {}
          });
        }).catch((error) => {
        console.log("错误" + error);
      })
    })
  },
  /**
   * 获取当前时间
   * @return {*}
   */
  getThisTime() {
    return "吃饭了啊";
  },

}