<template><section class="smr fcl fii">
<div class="smc" >
<Trends :slug="slug" :name="name" />

 <Links :slug="slug" :name="name" />
 <Graphics :slug="slug" :name="name" />
</div>
<News :slug="slug" :name="name" :news="news" />

</section></template>


<script>
import News from '@/components/amp/News.vue'
import Trends from '@/components/amp/Trends.vue'
import Graphics from '@/components/amp/Graphics.vue'
import Links from '@/components/amp/Links.vue'

export default {
  name: 'right',
    components: {
    News,
    Trends,
    Graphics,
    Links,
      },
    props: {
    slug:String,
    algo:String,
    cdata:Object,
    name:String,
    news:Object
  }
}
</script>






