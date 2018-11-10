<template>
  <AppShell currentPage="explorer" :slug="slug" :name="name"> 

<AppNavContent selected option="explorer">
      <Explorer :slug="slug" :symbol="symbol" :name="name" :algo="algo" :lastblock="lastblock" />
</AppNavContent>

  </AppShell>

</template>


<script>
import axios from '~/plugins/axios'

import AppShell from '~/components/AppShell.vue'
import Explorer from '~/components/pages/Explorer.vue'
import AppNavContent from '~/components/elements/AppNavContent.vue'

export default {
  components: {
    AppShell,
    Explorer,
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
      lastblock:lastblock
           // news:news,
    }
   },
}

</script>
