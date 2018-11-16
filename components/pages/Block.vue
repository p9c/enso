<template>
  <section class="flx fcl fii">
<Panel class="flx fii">
<Block :slug="slug" :name="name"  :lastblock="lastblock" :height="height"  /> 
</Panel>
  </section>
</template>



<script>
import Block from '@/components/amp/Block.vue'
import Panel from '~/components/elements/Panel.vue'




export default {
  components: {
        Panel,
    Block,

  },
      props: {
    slug:String,
    name:String,
    lastblock:Number,
    height:String,
  },
  head: {
          // title: `Coin: ${this.name}`,
    script: [
      // { hid: "amp-install-serviceworker", 'custom-install-serviceworker': "amp-access", src: "https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js", async: '' },
      { hid: "amp-live-list", 'custom-element': "amp-live-list", src: "https://cdn.ampproject.org/v0/amp-live-list-0.1.js", async: '' },
      // { hid: "amp-sidebar", 'custom-element': "amp-sidebar", src: "https://cdn.ampproject.org/v0/amp-sidebar-0.1.js", async: '' },
      { hid: "amp-bind", 'custom-element': "amp-bind", src: "https://cdn.ampproject.org/v0/amp-bind-0.1.js", async: '' },
      // { hid: "amp-lightbox", 'custom-element': "amp-lightbox", src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js", async: '' },
      { hid: "amp-selector", 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: '' },
      // { hid: "amp-access", 'custom-element': "amp-access", src: "https://cdn.ampproject.org/v0/amp-access-0.1.js", async: '' },
      { hid: "amp-analytics", 'custom-element': "amp-analytics", src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js", async: '' },
      { hid: "amp-list", 'custom-element': "amp-list", src: "https://cdn.ampproject.org/v0/amp-list-0.1.js", async: '' },
      { hid: "amp-form", 'custom-element': "amp-form", src: "https://cdn.ampproject.org/v0/amp-form-0.1.js", async: '' },
      { hid: "amp-mustache", 'custom-template': "amp-mustache", src: "https://cdn.ampproject.org/v0/amp-mustache-0.2.js", async: '' },  
      { hid: "amp-fit-text", 'custom-element': "amp-fit-text", src: "https://cdn.ampproject.org/v0/amp-fit-text-0.1.js", async: '' },  
      { hid: "amp-iframe", 'custom-element': "amp-iframe", src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js", async: '' },  
      { hid: "amp-accordion", 'custom-element': "amp-accordion", src: "https://cdn.ampproject.org/v0/amp-accordion-0.1.js", async: '' },  
      { hid: "amp-fx-collection", 'custom-element': "amp-fx-collection", src: "https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js", async: '' },  

    ],
    __dangerouslyDisableSanitizers: ['script'],
  }
}
</script>

<style>




</style>
