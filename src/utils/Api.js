const base_url = "http://localhost:8080/";
export default {
  head_url: base_url + "uploads/headshot/",
  add_unit: base_url + "unit/add",//添加单位
  unit_list: base_url + "unit/list",//单位列表
  delete_unit: base_url + "unit/delete",//单位列表
  reserve_good_list:base_url+"reserve/list",//预购商品列表
  reserve_add:base_url+"reserve/add",//添加预购
  reserve_order_detail:base_url+"reserve/order/detail",//订单列表详情
}
