<template>
<div class="scs flx frw coins">

    
    <nuxt-link v-for="(coin, slug) in coins" :key="slug"  :name="coin.name" :to="'https://' +coin.slug+  '.com-http.us/'"  class="flx fcl fooa coin" >
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
let cachedData = null
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
    if (cachedData) return cachedData    
    let { data } = await axios.get('http://com-http.us/a/coinsimg')
  cachedData = data
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
      // { hid: "amp-install-serviceworker", 'custom-install-serviceworker': "amp-access", src: "https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js", async: '' },
      { hid: "amp-live-list", 'custom-element': "amp-live-list", src: "https://cdn.ampproject.org/v0/amp-live-list-0.1.js", async: '' },
      { hid: "amp-lightbox", 'custom-element': "amp-lightbox", src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js", async: '' },
      // { hid: "amp-sidebar", 'custom-element': "amp-sidebar", src: "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js", async: '' },
      { hid: "amp-bind", 'custom-element': "amp-bind", src: "https://cdn.ampproject.org/v0/amp-bind-0.1.js", async: '' },
      // { hid: "amp-lightbox", 'custom-element': "amp-lightbox", src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js", async: '' },
      { hid: "amp-selector", 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: '' },
      // { hid: "amp-access", 'custom-element': "amp-access", src: "https://cdn.ampproject.org/v0/amp-access-0.1.js", async: '' },
      { hid: "amp-analytics", 'custom-element': "amp-analytics", src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js", async: '' },
      { hid: "amp-list", 'custom-element': "amp-list", src: "https://cdn.ampproject.org/v0/amp-list-0.1.js", async: '' },
      { hid: "amp-form", 'custom-element': "amp-form", src: "https://cdn.ampproject.org/v0/amp-form-0.1.js", async: '' },
      { hid: "amp-mustache", 'custom-template': "amp-mustache", src: "https://cdn.ampproject.org/v0/amp-mustache-0.2.js", async: '' },  
      { hid: "amp-fit-text", 'custom-element': "amp-fit-text", src: "https://cdn.ampproject.org/v0/amp-fit-text-0.1.js", async: '' },  
      { hid: "amp-iframe", 'custom-element': "amp-iframe", src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js", async: '' },  
      { hid: "amp-accordion", 'custom-element': "amp-accordion", src: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js", async: '' },  
    ],
    __dangerouslyDisableSanitizers: ['script'],
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
