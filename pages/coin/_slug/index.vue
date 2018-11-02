<template>
<div class="scs">
  <Header 
      page="Resource"
      :slug="slug"      
      :name="name" />

 <main class="scr fwr fjs main">
 <amp-img :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128px" height="128px" layout="fixed"  class="pbg">
 <noscript><img  :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128" height="128"></noscript></amp-img>

<div class="msm">
<MainLeft :slug="slug" :name="name"  :algo="algo"  :symbol="symbol"  :cdata="cdata"  />
<Main :slug="slug" :name="name" :cdata="cdata" :algo="algo" :lastblock="lastblock" />
</div>
<div class="mss foi dbl">
<MainRight :slug="slug" :name="name" :news="news"/>
</div>
     </main>
  <Footer :slug="slug" :name="name"  :lastblock="lastblock" />
  </div>
</template>


<script>
import axios from '~/plugins/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import Main from '@/components/main/Main.vue'
import MainLeft from '@/components/main/MainLeft.vue'
import MainRight from '@/components/main/MainRight.vue'



export default {
  name: 'coin',
    components: {
      Header,
    Footer,
    Main,
    MainLeft,
    MainRight
      },
  async asyncData({ query, params, error }) {
    let [cn, lb, nw] = await Promise.all([
      axios.get('http://com-http.us/json/coins/' + params.slug + '.json'),
      axios.get('http://' + params.slug + '.com-http.us/a/b'),
      axios.get('http://' + params.slug + '.com-http.us/a/news')

    ])
    var coin = cn.data.coin
    var lastblock = lb.data.d
    var news = nw.news 
return {
      slug: params.slug,
      name:coin.name,
      algo: coin.algo,
      symbol: coin.symbol,
      cdata: coin.cdata,
      imgs: coin.imgs,
      lastblock:lastblock,
      news:news,
    }
   },

  head () {
    return {
      title: `Coin: ${this.name}`
    }
  }
}
</script>






