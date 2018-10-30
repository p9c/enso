import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
        bitnodes: []
    },
    getters: {
      bitnodes: state => state.bitnodes
    },
    actions: {
        loadBitnodesList: function ({ commit }) {
            axios.get('http://com-http.us/json/index/bitnodes.json').then((response) => {
              commit('SET_BITNODES_LIST', { list: response.data.coins })
            }, (err) => {
              console.log(err)
            })
          }
    },
    mutations: {
        SET_BITNODES_LIST: (state, { list }) => {
            state.bitnodes = list
          }
    }
    
  })
  console.log(bitnodes)

}
export default store