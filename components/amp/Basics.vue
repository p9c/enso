<template>
<div class="flx fcl pnlbg fjc fai basics" amp-fx="fade-in">
  <figure class="padd">
  <amp-img :src="'//i.com-http.us/' + slug + '/128'" :alt="name"  width="128px" height="128px" layout="fixed"  class="nic">
  <noscript><img :src="'//i.com-http.us/' +slug+ '/128'" width="128" height="128" :alt="name"></noscript></amp-img></figure>
<h1 class="flx fii fcl fjc fai"><amp-fit-text height="66px" width="280px" layout="flex-item" min-font-size="32"> <a :href="'https://' + slug+ '.com-http.us/'">{{name}}</a></amp-fit-text></h1>
<div class="mard desc" v-html="cdata.desc"></div>

<ul class="flx fii sts">
  <li><button :on="'tap:AMP.navigateTo(url=\'//' + slug + '.com-http.us/explorer\')'" class="orange">Blocks</button></li>
  <li class="stm"><button  :on="'tap:AMP.navigateTo(url=\'//' + slug + '.com-http.us/network\')'" class="green">Network</button></li>
  <li><button :on="'tap:AMP.navigateTo(url=\'//' + slug + '.com-http.us/price\')'" class="red">Price</button></li>
  </ul>

</div></template>

<script>

export default {

    props: {
      slug:String,
    name:String,
     symbol:String,
    cdata:Object
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
main .pnl .basics{
  flex: 1;
  padding-top: 30px;
  align-items: center;
  text-align: center;
}
main .pnl .basics h1{
min-height:62px;
margin: 20px 0 0;
     font-size:24px;
      width:  100%;
      text-align: center;
}


</style>