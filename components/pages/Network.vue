<template>
  <section class="flx fcl fii">
<Panel>
  <NodesMap  :slug="slug" :name="name"  /></Panel>


    
  </section>
</template>


<script>
import Panel from '~/components/elements/Panel.vue'
import NodesMap from '~/components/amp/NodesMap.vue'



export default {
  components: {
    Panel,
    NodesMap,
  },
    props: {
    slug:String,
    name:String,
    symbol:String,
    algo:String,
    lastblock:Number,
     nodes:Array,
},
  head () {
    return {
    script: [
      { hid: "amp-fit-text", 'custom-element': "amp-fit-text", src: "https://cdn.ampproject.org/v0/amp-fit-text-0.1.js", async: '' },
      { hid: "amp-iframe", 'custom-element': "amp-iframe", src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js", async: '' },
    ],
    link: [
      { rel: "preload", href: this.src, as: "image" },
    ]
    }
  }
}
</script>

<style>




</style>
