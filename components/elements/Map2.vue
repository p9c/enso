

<template>
<div class="flx fcl fii pnlbg fjc fai" amp-fx="fade-in">

  <amp-iframe
      title="rrererererererererer"
      id="nodemaps"
      sandbox="allow-scripts allow-same-origin"
      layout="fill"
      frameborder="0"
      resizable
  src="https://f.com-http.us/maps/nodes.html">
      <div overflow tabindex=0 role=button aria-label="Read more">Read more!</div>
<BTCAnim /></amp-iframe>


  
    
</div></template>


<script>
import Panel from '~/components/elements/Panel.vue'
import BTCAnim from '~/components/elements/amp/BTCAnim.vue'



export default {
  components: {
    Panel,
    BTCAnim,
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
