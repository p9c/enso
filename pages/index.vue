<template>
<div class="scs flx fcl">
    <Header page="Beyond BlockChain" />
 <main class="scr fwh flx fcl fii main">
   <section class="flx fcl fii index">
<Bitnodes  :bitnodes="bitnodes"  />
<Coins  />
     </section></main>
  <Footer /></div>
</template>

<script>
//import DescriptionPanel from '~/components/elements/DescriptionPanel.vue'
// import TabList from '~/components/TabList.vue'
// import TabButton from '~/components/TabButton.vue'
// import TabContent from '~/components/TabContent.vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Bitnodes from '@/components/Bitnodes.vue'
import Coins from '@/components/Coins.vue'
import axios from '~/plugins/axios'



export default {
    name: 'index',
  components: {
//    DescriptionPanel,
    
    axios,
    Header,
    Footer,
    Bitnodes,
    Coins
  },
  async asyncData () {
    let { data } = await axios.get('http://com-http.us/a/bitnodes')
  return { bitnodes: data }
  },
  head () {
    return {
      title: 'Index'
    }
  },
  head: {
    title: 'Index',
    script: [
      // { hid: "amp-install-serviceworker", 'custom-install-serviceworker': "amp-access", src: "https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js", async: '' },
      { hid: "amp-live-list", 'custom-element': "amp-live-list", src: "https://cdn.ampproject.org/v0/amp-live-list-0.1.js", async: '' },
      { hid: "amp-lightbox", 'custom-element': "amp-lightbox", src: "https://cdn.ampproject.org/v0/amp-lightbox-0.1.js", async: '' },
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
    ],
    __dangerouslyDisableSanitizers: ['script'],
  }
}
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
}

main {
  
  

}

p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
