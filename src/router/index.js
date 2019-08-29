import Vue from 'vue'
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MainPage from "@/view/main/MainPage";
import UnitPage from "@/view/unit/UnitPage";
import ReservePage from "@/view/reserve/ReservePage";
import AddReservePage from "@/view/reserve/AddReservePage";
import ReserveOrderPage from "@/view/reserve/ReserveOrderPage";
import PersonSellPage from "@/view/sell/PersonSellPage";
import HomeServicePage from "@/view/service/HomeServicePage";
import LoginPage from "@/view/login/LoginPage";
import OperationHomeService from "@/view/service/OperationHomeService";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'unit',
          name: 'UnitPage',
          component: UnitPage
        }, {
          path: 'reserve',
          name: 'ReservePage',
          component: ReservePage
        }, {
          path: 'reserve/add',
          name: 'AddReservePage',
          component: AddReservePage
        }, {
          path: 'reserve/order',
          name: 'ReserveOrderPage',
          component: ReserveOrderPage
        }, {
          path: 'sell',
          name: 'PersonSellPage',
          component: PersonSellPage
        }, {
          path: 'home/service',
          name: 'HomeServicePage',
          component: HomeServicePage
        }, {
          path: 'home/operation',
          name: 'OperationHomeService',
          component: OperationHomeService
        }
      ]
    },
    {//登录
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
