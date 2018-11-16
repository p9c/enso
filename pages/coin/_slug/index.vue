<template>
  <AppShell currentPage="info" :slug="slug" :name="name"> 



<AppNavContent selected option="info">
        <Info :slug="slug" :name="name" :symbol="symbol" :algo="algo" :cdata="cdata" />
</AppNavContent>

<!-- <AppNavContent option="explorer">
      <Explorer :slug="slug" :symbol="symbol" :name="name" :algo="algo"  :lastblock="lastblock" />
</AppNavContent> -->

<!-- <AppNavContent option="network">
      <Network :slug="slug" :name="name" />
</AppNavContent>

<AppNavContent option="eco">
      <Eco :slug="slug" :name="name" />
</AppNavContent> -->




  </AppShell>

</template>

<script>
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import AppNavContent from '~/components/elements/AppNavContent.vue'

import axios from '~/plugins/axios'
import AppShell from '@/components/AppShell.vue'
import Info from '@/components/pages/Info.vue'



export default {
    name: 'coin',
  components: {
    AppNavContent,
      AppShell,
Info,
      },
  async asyncData({ query, params, error }) {
    let [cn, lb] = await Promise.all([
    //let [cn, lb, nw] = await Promise.all([
      axios.get('http://com-http.us/json/coins/' + params.slug + '.json'),
      axios.get('http://' + params.slug  + '.com-http.us/a/b'),
      //axios.get('http://' + params.slug  + '.com-http.us/a/news')

    ])
    var coin = cn.data.coin
    var lastblock = lb.data.d

  
  
    // var news = nw.news 
return {
      slug: params.slug,
      name:coin.name,
      algo: coin.algo,
      symbol: coin.symbol,
      cdata: coin.cdata,
      lastblock:lastblock
           // news:news,
    }
   },
  head: {
    title: 'Index',
      link: [
        { rel: "canonical", href: "http://com-http.us/"},
      ],
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
            { hid: "amp-fx-collection", 'custom-element': "amp-fx-collection", src: "https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js", async: '' },  
    ],
    __dangerouslyDisableSanitizers: ['script'],
  }
}
</script>
<style>

body {
  font-family: Helvetica, sans-serif;
  border: 0;
  margin: 0;
  padding: 0;
}

p + p {
  margin-top: .5rem;
}

.svg-icon-size {
  width: 24px;
  height: 24px;
}

.home-page {
  z-index: 0;
}

main {
  /*max-width: 600px;*/
  margin: auto;
}

.app__anchor-to-bottom {
  position: fixed;
  bottom: 90px;
  width: 100%;
  z-index: 0;
}

</style>
