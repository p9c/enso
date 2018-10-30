<template>
  <section class="lyt lrw">
    
<article v-for="(coin, slug) in bitnodes" :key="slug" class="pnl bitnode">
  <header>
    <figure><amp-img layout="fixed" :src="'//i.com-http.us/' +coin.slug+  '/64'" width="64" height="64" :alt="coin.name"/></figure>
      <h2>
        <nuxt-link :name="coin.name" :slug="coin.slug" :to="slug"  ><amp-fit-text height="64px" layout="flex-item" min-font-size="3.2vh">{{coin.name}}🚀</amp-fit-text></nuxt-link>
        </h2>
  </header>
  <amp-live-list :id="coin.slug+ '-live'" data-poll-interval="15000" data-max-items-per-page="20">
  <button update on="tap:amp-live-list-update.update" class="ampstart-btn caps">You have updates</button>
      <div items><div :id="coin.slug+ '-stat'" data-sort-time="1234567" data-update-time="20181021052854">
     <Mining :slug="coin.slug" /> 
        </div></div>
      </amp-live-list>
<footer>
  <a :href="'//'+coin.slug+ '.com-http.us/explorer'"><button class="btn">Explorer</button></a>
  <a  :href="'//'+coin.slug+ '.com-http.us/'"><button class="btn">Info</button></a>
  </footer>
  </article>
  </section>
</template>



<script>
// import Mining from '@/components/amp/Mining.js'
import AmpTemplate from '@/components/amp/AmpTemplate.js'

export default {
  components: {
    // Mining,
    AmpTemplate,
  },
    props: {
    bitnodes:Array
  }
}
</script>
