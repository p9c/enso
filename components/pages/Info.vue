<template>
<section class="iflx frw fwr fii">
<Panel  ><Basics  :slug="slug" :name="name"  :symbol="symbol" :cdata="cdata" /></Panel>
<Panel  ><Specs  :slug="slug" :name="name" :algo="algo" :symbol="symbol" :cdata="cdata" /></Panel>
<Panel class="dbl" ><Trends  :slug="slug" :name="name"  /></Panel>
<Panel  ><Price  :slug="slug" :name="name" /></Panel>

<!-- <Panel><News  :slug="slug" :name="name" /></Panel> -->
</section>
</template>

<script>
import Panel from '~/components/elements/Panel.vue'
import Basics from '~/components/amp/Basics.vue'
import Specs from '~/components/amp/Specs.vue'
import Trends from '~/components/amp/Trends.vue'
import Price from '~/components/amp/Price.vue'

// import News from '~/components/amp/News.vue'

export default {
  components: {
    Panel,
    Basics,
    Specs,
    Trends,
    Price,
    // News,
    
  },
    props: {
    slug:String,
    algo:String,
    name:String,
    symbol:String,
        cdata:Object
  }
}
</script>

<style>




</style>
