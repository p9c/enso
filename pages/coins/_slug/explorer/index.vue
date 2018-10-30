<template>
<div class="scs">
  <Header
      page="BlockChain Explorer"
      :slug="coin.slug"      
      :name="coin.name" />
 <main class="scr main">

  <section class="lyt explorer">
<Blocks :slug="slug"  />

     </section>
<Aside :slug="slug" :name="name" />
     
     </main>
  <Footer /></div>
</template>

<script>
import axios from '~/plugins/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Aside from '@/components/Aside.vue'
import Blocks from '@/components/amp/Blocks.vue'

import AmpTemplate from '@/components/amp/AmpTemplate.js'

export default {
  name: 'explorer',
      components: {
AmpTemplate,
Header,
    Footer,
    Aside,
        Blocks
  },
    props: {
    //coin: Array,
    // slug:String,
    // name:String
  },
      async asyncData ({ params, error }) {
   let { data } = await axios.get('http://com-http.us/json/coins/' + params.slug + '.json')
    var coin = data.coin
    return { coin:coin, name: coin.name,  slug: params.slug }  
  },
  head () {
    return {
      title: `${this.coin.name} BlockChain Explorer`
    }
  }
}
</script>

