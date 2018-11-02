<template>
<div class="scs">
  <Header
  :page="coin.name + ` Transaction` + txid"
      :slug="coin.slug"      
      :name="coin.name" />
 <main class="scr lyt lrw tx main ">
  <!-- <section class="block"><article class="pnl big"><h1>{{ name }} Block {{ block.hash}}</h1> -->
<amp-img :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128px" height="128px" layout="fixed"  class="pbg"><noscript><img  :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128" height="128"></noscript></amp-img>
 <Tx 
      :slug="slug"
      :txid="txid"  /> 
 <!-- <nuxt-link class="button" to="/">Coins</nuxt-link> -->

<Aside :slug="slug" :name="name" />
    
     </main>
  <Footer /></div>
</template>


<script>
import axios from '@/plugins/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Aside from '@/components/Aside.vue'
import Tx from '@/components/amp/Tx.vue'
import AmpTemplate from '@/components/amp/AmpTemplate.js'


export default {
  name: 'tx',
      components: {
AmpTemplate,
Header,
Footer,
Aside,
    Tx
  },
      async asyncData ({ params, error }) {
   let { data } = await axios.get('http://com-http.us/json/coins/' + params.slug + '.json')
    var coin = data.coin
  //console.log(params)

    return { name:coin.name, slug: params.slug, txid: params.txid }
  
  },
props: {
    //coin: Array,
    //slug:String,
//    height:String,

  },
  head () {
    return {
      title: `${this.name} Transaction: ${this.txid} `
    }
  }
}
</script>

