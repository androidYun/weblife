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
            if (response.data.code === 70002) {
              this.$router.push({
                path: "/login"
              })
            }
            reject({
              code: 0,
              msg: response.data.message,
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
        .then(response => {
          console.log(response.status + "响应数据" + response.data.code);
          if (response.status === 200 && response.data.code === 200) {
            resolve(response.data)
          } else {
            reject({
              code: 0,
              msg: response.data.message,
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
  updateFile(url, file) {
    let param = new FormData();
    param.append("uploadFile", file);
    return new Promise((resolve, reject) => {
      axios.post(url, param,
        {
          headers: {"Content-Type": "multipart/form-data"}
        }
      )
        .then(function (response) {
          console.log(response.status + "响应数据" + response.data.code);
          if (response.status === 200 && response.data.code === 200) {
            resolve(response.data)
          } else {
            reject({
              code: 0,
              msg: response.data.message,
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
