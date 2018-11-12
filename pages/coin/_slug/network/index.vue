<template>
  <AppShell currentPage="network" :slug="slug" :name="name"> 

<AppNavContent selected option="network">
      <Network :slug="slug" :symbol="symbol" :name="name" :algo="algo" :lastblock="lastblock" :nodes="nodes"/>
</AppNavContent>

  </AppShell>

</template>


<script>
import axios from '~/plugins/axios'

import AppShell from '~/components/AppShell.vue'
import Network from '~/components/pages/Network.vue'
import AppNavContent from '~/components/elements/AppNavContent.vue'

export default {
  components: {
    AppShell,
    Network,
    AppNavContent,
  },
  async asyncData({ query, params, error }) {
    let [cn, lb, nd] = await Promise.all([
    //let [cn, lb, nw] = await Promise.all([
      axios.get('http://com-http.us/json/coins/' + params.slug + '.json'),
      axios.get('http://' + params.slug + '.com-http.us/a/b'),
      axios.get('http://' + params.slug + '.com-http.us/a/n'),
      //axios.get('http://' + params.slug + '.com-http.us/a/news')
    ])
    var coin = cn.data.coin
    var lastblock = lb.data.d
    var nodes = nd.data.nodes
    // var news = nw.news 
return {
      slug: params.slug,
      name:coin.name,
      algo: coin.algo,
      symbol: coin.symbol,
      cdata: coin.cdata,
      lastblock:lastblock,
    nodes:nodes,
    }
   }
}

</script>
