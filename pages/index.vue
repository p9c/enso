<template>
<div class="scs">
    <Header
      page="Beyond BlockChain" />
 <main class="scr main">
   <section class="lyt lrw index">
<Bitnodes  :bitnodes="bitnodes"  />
<Coins  />
     </section>
     </main>
  <Footer /></div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Bitnodes from '@/components/Bitnodes.vue'
import Coins from '@/components/Coins.vue'
import axios from '~/plugins/axios'

export default {
    name: 'index',
  components: {
    axios,
    Header,
    Footer,
    Bitnodes,
    Coins
  },
  async asyncData () {
    let { data } = await axios.get('http://com-http.us/json/index/bitnodes.json')
  return { bitnodes: data.coins }
  },
  head () {
    return {
      title: 'Index'
    }
  }
}
</script>