<template>
<Coins :coins="coins" />
</template>

<script>

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import axios from '~/plugins/axios'

import Coins from '@/components/amp/Coins.vue'

// const LRU = require('lru-cache')

// const renderer = createRenderer({
//   cache: LRU({
//     max: 10000,
//     maxAge: 1111111
//   })
// })
//let cachedData = null
export default {
    name: 'coins',
// props: ['coins'],
//   serverCacheKey: props => props.coins.id,
//   render (h) {
//     return h('div', this.coins.id)
//   },
  components: {
    axios,
    Coins,
  },
  async asyncData () {
//    if (cachedData) return cachedData    
    let { data } = await axios.get('https://com-http.us/a/coinsimg')
 // cachedData = data
 return { coins: data }
  },
  head () {
    return {
      title: 'Coins'
    }
  },
  head: {
    title: 'Index',
      link: [
        { rel: "canonical", href: "https://com-http.us/coins"},
      ],
    script: [
//      { hid: "amp-bind", 'custom-element': "amp-bind", src: "https://cdn.ampproject.org/v0/amp-bind-0.1.js", async: '' },
  //    { hid: "amp-selector", 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: '' },
    //  { hid: "amp-list", 'custom-element': "amp-list", src: "https://cdn.ampproject.org/v0/amp-list-0.1.js", async: '' },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  }
}
</script>



<style>
.coins{
justify-content: center;
align-items: center;
}

.coin{
  width: 38px;
height: 38px;
margin: 3px;
padding: 3px;
background: #fff;
}
.coin:hover{
  background: #303030;
  box-shadow: 0 0 0 2px #30cf30;
}
</style>
