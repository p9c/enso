<template>
  <section class="lyt">
    <div class="pnl cnt ">

  <amp-lightbox id="coins" layout="nodisplay">
        <article class="lightbox pnl pnlbg coins" on="tap:coins.close" role="button" tabindex="0">
      <amp-list  id="coins-data"  layout="flex-item" src="//com-http.us/json/index/coins.json" items= "coins" v-html='`<div placeholder>
        <amp-img layout="flex-item" src="https://gophercises.com/img/gophercises_lifting.gif"></amp-img></div>
        <div fallback>Failed to load data.</div>
        <template type="amp-mustache"  id="coins-data"><a class="coin" href="//{{slug}}.com-http.us">
        <amp-img width="32" height="32" alt="{{name}}" src="http://i.com-http.us/{{slug}}/32"></amp-img></a></template>`'></amp-list>
    </article>
  </amp-lightbox>
   <button class="btn btn-pri caps m2" on="tap:coins" role="button" tabindex="0">
    All Coins Madness!!
  </button>
    </div>
</section>
</template>




<script>
import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate
  }
}
</script>

