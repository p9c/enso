<template>
<div class="flx frw fwr coins">

    
    <a v-for="(coin, slug) in coins" :key="slug" :name="coin.name" target="_blank" :href="'https://' + coin.slug +  '.com-http.us/'" class="flx fcl fooa coin" >
    <amp-img layout="fixed" :src="'data:image/png;base64, ' + coin.img"  width="32px" height="32px" :alt="coin.name"/>
    </a>
  
  </div>
</template>

<script>
import axios from '~/plugins/axios'
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
  },
  async asyncData () {
//    if (cachedData) return cachedData    
    let { data } = await axios.get('http://com-http.us/a/coinsimg')
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
        { rel: "canonical", href: "http://com-http.us/coins"},
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
