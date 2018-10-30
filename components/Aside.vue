<template>
  <aside class="lyt asd">
 <News :slug="slug" :name="name" />
<amp-img :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128px" height="128px" layout="fixed"  class="pbg"><noscript><img  :src="'//i.com-http.us/' +slug+ '/128'" :alt="'128x128 '+slug+ '  logo image'"  width="128" height="128"></noscript></amp-img>
<Links :slug="slug" :name="name" />
<Txs :slug="slug"  />
 <nuxt-link class="button" to="/">Coins</nuxt-link>
     </aside>
</template>


<script>
import Title from '@/components/amp/Title.vue'
import News from '@/components/amp/News.vue'
import Txs from '@/components/amp/Txs.vue'
import Links from '@/components/amp/Links.vue'
import AmpTemplate from '@/components/amp/AmpTemplate.js'


export default {
      components: {
AmpTemplate,
  Title,
    News,
    Txs,
    Links
  },
    props: {
    slug:String,
    name:String
  }
}
</script>