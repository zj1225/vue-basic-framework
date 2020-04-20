import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		msg:'这是store里面的数据'
	},
	actions:{
        setMsg({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setMsg", name);
        }
    },
	mutations:{
		setMsg(state, name){
            state.msg = name;//将传参设置给state的city
        }
	},
	getters:{
		getMsg(state){
            return state.msg;
        }
	}
})

