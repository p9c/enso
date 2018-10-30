<template>
<div class="scs">
  <Header 
      page=""      
      :slug="coin.slug"      
      :name="coin.name" />

 <main class="scr main">
<section class="lyt coin">
 
 <nuxt-child keep-alive :keep-alive-props="{ name }" />


    <Basics 
      :name="coin.name"      
      :cdata="coin.cdata"  />
    <Specs 
      :slug="coin.slug"      
      :name="coin.name"  />
      <Description 
:cdata="coin.cdata"
:name="coin.name"  />
          <News 
      :slug="coin.slug"      
:name="coin.name"  />
          <Trends 
      :slug="coin.slug"      
      :name="coin.name" />
    <Graphics 
      :slug="coin.slug"      
      :name="coin.name" />



<Links 
      :slug="coin.slug"      
      :name="coin.name" />
<Txs 
      :slug="coin.slug"  />

<amp-img :src="'//i.com-http.us/' +coin.slug+ '/128'" :alt="'128x128 '+coin.slug+ '  logo image'"  width="128px" height="128px" layout="fixed"  class="pbg"><noscript><img  :src="'//i.com-http.us/' +coin.slug+ '/128'" :alt="'128x128 '+coin.slug+ '  logo image'"  width="128" height="128"></noscript></amp-img>



 <nuxt-link class="button" to="explorer">
      Explorer
    </nuxt-link>

 <nuxt-link class="button" to="/">
      Coins
    </nuxt-link>
  
     </section>
     </main>
  <Footer /></div>
</template>


<script>
import axios from '~/plugins/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Title from '@/components/amp/Title.vue'
import Basics from '@/components/amp/Basics.vue'
import Specs from '@/components/amp/Specs.vue'
import Description from '@/components/amp/Description.vue'
import News from '@/components/amp/News.vue'
import Trends from '@/components/amp/Trends.vue'
import Graphics from '@/components/amp/Graphics.vue'
import Txs from '@/components/amp/Txs.vue'
import Links from '@/components/amp/Links.vue'

export default {
  name: 'coin',
    components: {
      Header,
    Footer,
    Title,
    Basics,
    Specs,
    Description,
    News,
    Trends,
    Graphics,
    Txs,
    Links
  },
      async asyncData ({ params, error }) {
   let { data } = await axios.get('http://com-http.us/json/coins/' + params.slug + '.json')
    var coin = data.coin
    //console.log(data)
return { coin:coin, name:coin.name, algo: coin.algo, cdata: coin.cdata, slug: params.slug }  
  },
  head () {
    return {
      title: `Coin: ${this.coin.name}`
    }
  }
}
</script>






