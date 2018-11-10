<template>
  <AppShell currentPage="tx" :slug="slug" :name="name" >
<AppNavContent selected option="explorer">
<Tx  :slug="slug" :name="name"  :txid="txid"  /> 
</AppNavContent>
  </AppShell>
</template>
<script>
import axios from '@/plugins/axios'
import AppNavContent from '@/components/elements/AppNavContent.vue'
import Tx from '@/components/pages/Tx.vue'
import AppShell from '@/components/AppShell.vue'
export default {
    name: 'tx',
components: {
    Tx,
    AppShell,
    AppNavContent,
  },
  async asyncData({ query, params, error }) {
    let [cn, lb] = await Promise.all([
    //let [cn, lb, nw] = await Promise.all([
      axios.get('http://com-http.us/json/coins/' + params.slug + '.json'),
      axios.get('http://' + params.slug + '.com-http.us/a/b'),
      //axios.get('http://' + params.slug + '.com-http.us/a/news')
    ])
    var coin = cn.data.coin
    var lastblock = lb.data.d
    // var news = nw.news 
return {
      slug: params.slug,
      name:coin.name,
      algo: coin.algo,
      symbol: coin.symbol,
      cdata: coin.cdata,
      lastblock:lastblock,
       txid: params.txid,
           // news:news,
    }
   },
  head () {
    return {
      title: `${this.name} Transaction: ${this.txid} `
    }
  }
}

</script>
