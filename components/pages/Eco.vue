<template>
  <section class="flx fcl fii">

     <Links :slug="slug" :name="name" />
 <Graphics :slug="slug" :name="name" />

<!-- <News :slug="slug" :name="name" :news="news" /> -->

</section></template>



<script>
// import News from '@/components/amp/News.vue'
import Trends from '@/components/amp/Trends.vue'
import Graphics from '@/components/amp/Graphics.vue'
import Links from '@/components/amp/Links.vue'



export default {
  components: {
    Trends,
    // News,
    Graphics,
    Links
  },
      props: {
    slug:String,
    algo:String,
    name:String,
    symbol:String,
  }
}
</script>

<style>




</style>
