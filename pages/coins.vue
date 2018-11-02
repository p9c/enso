<template>
 <main class="coins">
<a v-for="(coin, slug) in coins" :key="slug" class="pnl pnlbg coin" :href="'//' + coin.slug +  '.com-http.us/'">
{{coin.name}}
<amp-img layout="fixed" :src="'//i.com-http.us/' +coin.slug+  '/16'" width="16px" height="16px" :alt="coin.name"/>
</a>
  </main>


</template>


<script>
import axios from '~/plugins/axios'

export default {
    name: 'coins',
  components: {
    axios
  },
  async asyncData () {
    let { data } = await axios.get('http://com-http.us/json/index/coins.json')
  return { coins: data.coins }
  },
  head () {
    return {
      title: 'Coins'
    }
  }
}
</script>