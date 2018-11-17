<template>
<div class="flx fii pnl ">
  <div class="flx fii">
<amp-list :id="slug+ '-list'" height="150px" width="auto"  layout="flex-item" :src="'//' + slug +'.com-http.us/a/m'" items="d" single-item class="cgl" v-html='`<template type="amp-mustache"><table class="table table-hover"><tbody><tr><td>Blocks:</td><td>{{ blocks }}</td></tr><tr><td>Difficulty:</td><td>{{difficulty}}</td></tr><tr><td>MemPool Tx:</td><td>{{pooledtx}}</td></tr></tbody></table></template>`'></amp-list>
</div></div>
</template>
<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    slug:String
  }
}
</script>






