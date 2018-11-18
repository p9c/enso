<template>
<AppShell currentPage="hash" :slug="slug" :name="name" >
 <Block :slug="slug" :name="name" :height="height" :lastblock="lastblock" />
  </AppShell>
</template>
<script>
import axios from '@/plugins/axios'
import Block from '@/components/pages/Block.vue'
import AppShell from '@/components/AppShell.vue'
export default {
  name: 'block',
components: {
    Block,
    AppShell,
  },
  async asyncData({ query, params, error }) {
    let [cn, lb ] = await Promise.all([
    //let [cn, lb, nw] = await Promise.all([
      axios.get('https://com-http.us/json/coins/' + params.slug + '.json'),
      axios.get('https://' + params.slug  + '.com-http.us/a/b'),
      //axios.get('http://' + params.slug  + '.com-http.us/a/news')
    ])
    var coin = cn.data.coin
    var lastblock = lb.data.d
    var height = params.height
    // var news = nw.news 
return {
      slug: params.slug,
      name:coin.name,
      algo: coin.algo,
      symbol: coin.symbol,
      cdata: coin.cdata,
      lastblock:lastblock,
      height: height,
           // news:news,
    }
   },
  head () {
    return {
      title: `Coin: ${this.name} Block Height: ${this.height} `
    }
  }
}
</script>

