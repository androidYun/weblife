const base_url = "http://localhost:8084/api/";
export default {
  head_url: base_url + "uploads/headshot/",
  add_unit: base_url + "unit/add",//添加单位
  unit_list: base_url + "unit/list",//单位列表
  delete_unit: base_url + "unit/delete",//单位列表
  reserve_good_list: base_url + "reserve/list",//预购商品列表
  reserve_add: base_url + "reserve/add",//添加预购
  reserve_update: base_url + "reserve/update",//添加预购
  reserve_delete: base_url + "reserve/delete/",//添加预购
  reserve_detail: base_url + "reserve/",//获取预购信息
  reserve_order_detail: base_url + "reserve/order/detail",//订单列表详情
  /*权限登录*/
  role_login: base_url + "role/login",//登录
  single_update_file: base_url + "file/singleImageUpdate",//单图片上传
  /*家政服务*/
  home_service_list: base_url + "service/list",//家政服务列表
  home_service_add: base_url + "service/add",//添加家政服务
  home_service_detail: base_url + "service",//添加家政服务
  home_service_update: base_url + "service/update",//更新家政服务
  home_service_delete: base_url + "service/delete",//删除家政服务
  /*社区添加*/
  community_list: base_url + "community/list",//社区列表
  community_add: base_url + "community/add",//添加社区
  community_delete: base_url + "community/delete",//删除社区
  /*楼宇*/
  build_number_list: base_url + "build/list",//社区列表
  build_number_add: base_url + "build/add",//添加社区
  build_number_delete: base_url + "build/delete",//删除社区
  build_number_detail: base_url + "build/detail",//获取详情
  build_number_update: base_url + "build/update",//更新
}
