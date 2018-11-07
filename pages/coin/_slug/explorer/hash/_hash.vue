<template>
<div class="scs">
  <Header
  :page="name + `Block Hash` + evalue"
      :slug="slug"      
      :name="name" />
 <main class="scr lyt lrw block main ">
  <!-- <section class="block"><article class="pnl big"><h1>{{ name }} Block {{ block.hash}}</h1> -->
<amp-img :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128px" height="128px" layout="fixed"  class="pbg"><noscript><img  :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128" height="128"></noscript></amp-img>
 <Block 
      :slug="slug"
      type="hash"
      :value="evalue"  /> 


 <!-- <nuxt-link class="button" to="/">Coins</nuxt-link> -->


     
<!-- <Aside :slug="slug" :name="name" /> -->
     
     </main>
  <Footer /></div>
</template>


<script>
import axios from '@/plugins/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import Aside from '@/components/Aside.vue'
import Block from '@/components/amp/Block.vue'



export default {
  name: 'hash',
      components: {
Header,
Footer,
// Aside,
    Block
  },
  //     async asyncData ({ params, error }) {
  //  let { data } = await axios.get('http://com-http.us/json/coins/' + params.slug + '.json')
  //   var coin = data.coin
  //   return {  name:coin.name, slug: params.slug, hash: params.hash }
  //   },
props: {
    //coin: Array,
   slug:String,
   name:String,
   evalue:String,
   height:String,

  },
  head () {
    return {
      title: `${this.name} Block Hash: ${this.evalue} `
    }
  }
}
</script>

