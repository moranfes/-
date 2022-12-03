import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     list:[],//购物车数据
     selectList:[]//选中的数据
  },
  getters: {
    isCheckedAll(state){
      return state.list.length == state.selectList.length
    },
    total(state){
      let total = {
        num: 0,
        price: 0
      }
      state.list.forEach(v=>{
        if(v.checked){
          total.num += v.goods_num;
          total.price += v.goods_price * v.goods_num;
        }
      })
      return total
    }
  },
  mutations: {
    cart(state,cartArr){
      state.list = cartArr
      state.selectList = cartArr
      console.log(state.selectList);
    },
    // 全选
    checkAll(state){
      state.selectList = state.list.map(v => {
        v.checked = true;
        return v.id
      });
      
      console.log(state.selectList);
    },
    // 全不选
    unCheckAll(state){
      state.list.forEach(v=>{
        v.checked = false
      })
      state.selectList = [];
      console.log(state.selectList);
    },
    // 单选
    checkItem(state,index){
      
      let id = state.list[index].id
      console.log(id);
      let i = state.selectList.indexOf(id);
      if(i>1){
        return state.selectList.splice(i,1)
      }
      state.selectList.push(id)
    }
  },
  actions: {
    checkAllFn({commit,getters}){
      getters.isCheckedAll ?  commit('unCheckAll') : commit('checkAll')
    }
  },
  modules: {
  }
})
