<template>
<article class="pnl dbl pnlbg"><h3>Address</h3>
<div class="cnt ">
  <amp-list width="600"  height="600" layout="responsive" :src="`//` + slug + `.com-http.us/a/addr/` + addr" items="d" single-item class="cgl" v-html='`<template type="amp-mustache">
    <h1>{{addr}}</h1>
    <ul>
      

      </ul>
    </template>`'></amp-list>
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
    name:String,
    addr:String
      },
  //   async asyncData ({ params, error }) {
  //  let { data } = await axios.get('https://com-http.us/json/coins/' + params.slug + '.json')
  //   var coin = data.coin
  // //console.log(params)

  //   return { coin:coin, name:coin.name, slug: params.slug, addr: params.addr }
  
  // },
}
</script>





