<template>
<article class="pnl dbl pnlbg"><h3>Address</h3>
<div class="cnt ">
  <amp-list width="600"  height="600" layout="responsive" :src="`//` + slug + `.com-http.us/a/addr/` + addr" items="d" single-item class="cgl" v-html='`<template type="amp-mustache"><h1>{{.}}</h1></template>`'></amp-list>
</div></article>
</template>


<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },
    props: {
    slug:String,
    name:String
      }
}
</script>





