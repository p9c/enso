<template>
<div class="scs">
  1111111111111
  <Header
      :page="name + `Block Height`"
      :slug="slug"      
      :name="name" />
 <main class="scr lyt lrw block main"><amp-state id="blockHeight" v-html='`{ "blockHeight": "`+ evalue + `" }`'></amp-state>
222222222222
  <!-- <section class="block"><article class="pnl big"><h1>{{ name }} Block {{ block.hash}}</h1> -->
<amp-img :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128px" height="128px" layout="fixed"  class="pbg"><noscript><img  :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128" height="128"></noscript></amp-img>
 <Block 
      :slug="slug"
      type="block"
      :value="evalue"  /> 


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
import Block from '@/components/amp/Block.vue'


export default {
  name: 'height',
      components: {
Header,
Footer,
Aside,
    Block
  },
props: {
   coin: String,
   slug:String,
    evalue:String,

  },
  head () {
    return {
      title: `Coin: ${this.name} Block Height: ${this.evalue} `
    }
  }
}
</script>

