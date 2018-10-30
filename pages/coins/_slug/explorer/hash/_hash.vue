<template>
<section class="lyt block">
  <!-- <section class="block"><article class="pnl big"><h1>{{ name }} Block {{ block.hash}}</h1> -->
<Title
      :slug="slug"
      :name="name"
      :page="`Block Hash ` + hash"  />
<Block 
      :slug="slug"
      type="hash"
      :value="hash"  />

 <!-- <nuxt-link class="button" to="/">Coins</nuxt-link> -->
  </section>
</template>


<script>
import axios from '@/plugins/axios'
import Title from '@/components/amp/Title.vue'
import Block from '@/components/amp/Block.vue'
import AmpTemplate from '@/components/amp/AmpTemplate.js'


export default {
  name: 'height',
      components: {
AmpTemplate,
Title,
    Block
  },
      async asyncData ({ params, error }) {
   let { data } = await axios.get('http://com-http.us/json/coins/' + params.slug + '.json')
    var coin = data.coin
//console.log(params)

    return { coin:coin, name:coin.name, slug: params.slug, hash: params.hash }
  
  },
//     let { bdata } = await axios.get('http://' + slug + '.com-http.us/a/blockhash/' + params.hash)
//     var block = bdata.d
// return {block:block}
props: {
    //coin: Array,
    //slug:String,
//    height:String,

  },
  head () {
    return {
      title: `Coin: ${this.name} Block Hash: ${this.hash} `
    }
  }
}
</script>

