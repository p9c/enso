<template>
<div class="scs flx frw coins">

    
    <nuxt-link v-for="(coin, slug) in coins" :key="slug"  :name="coin.name" :to="'//' +coin.slug+  '.com-http.us/'"  class="flx fcl fooa coin" >
    <amp-img layout="fixed" :src="'data:image/png;base64, ' + coin.img"  width="32px" height="32px" :alt="coin.name"/>
    </nuxt-link>
  
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
    let { data } = await axios.get('http://com-http.us/a/coinsimg')
  return { coins: data }
  },
  head () {
    return {
      title: 'Coins'
    }
  }
}


</script>



<style>
.coins{
flex-wrap: wrap;
justify-content: flex-start;
align-items: flex-start;
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
