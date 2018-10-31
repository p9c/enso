<template>
  <aside class="lyt asd">
 <News :slug="slug" :name="name" />
<Links :slug="slug" :name="name" />
<Txs :slug="slug"  />
     </aside>
</template>


<script>
import News from '@/components/amp/News.vue'
import Links from '@/components/amp/Links.vue'
import Txs from '@/components/amp/Txs.vue'
import AmpTemplate from '@/components/amp/AmpTemplate.js'


export default {
      components: {
AmpTemplate,
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