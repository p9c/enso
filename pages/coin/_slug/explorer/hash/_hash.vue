<template>
<AppShell currentPage="hash" :slug="slug" :name="name" >
<AppNavContent selected option="explorer">
 <Hash :slug="slug" :name="name" :hash="hash" :height="height" :lastblock="lastblock" />
</AppNavContent>
  </AppShell>
</template>
<script>
import axios from '@/plugins/axios'
import AppNavContent from '@/components/elements/AppNavContent.vue'
import Hash from '@/components/pages/Hash.vue'
import AppShell from '@/components/AppShell.vue'
export default {
  name: 'hash',
components: {
    Hash,
    AppShell,
    AppNavContent,
  },
  async asyncData({ query, params, error }) {
    let [cn, lb, bh] = await Promise.all([
    //let [cn, lb, nw] = await Promise.all([
      axios.get('https://com-http.us/json/coins/' + params.slug + '.json'),
      axios.get('https://' + params.slug + '.com-http.us/a/b'),
      axios.get('http://localhost:9998/a/e/' + params.slug +'/hash/' + params.hash),

      //axios.get('https://' + params.slug + '.com-http.us/a/news')
    ])
    var coin = cn.data.coin
    var lastblock = lb.data.d
    var height = bh.height
    // var news = nw.news 
return {
      slug: params.slug,
      name:coin.name,
      algo: coin.algo,
      symbol: coin.symbol,
      cdata: coin.cdata,
      lastblock:lastblock,
      height: height,
       hash: params.hash,
           // news:news,
    }
   },
  head () {
    return {
      title: `${this.name} Block Hash: ${this.hash} `
    }
  }
}

</script>
