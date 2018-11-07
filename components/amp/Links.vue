<template>
<div class="pnl fcl pnlbg">
  <h3>{{name}} EcoSystem</h3>
  <div class="cnt ">
  <form method="get" target="_blank" :action="'https://isthiscoinascam.com/check/' + slug">
  <button class="btn btn-primary btn-lg h3" type="submit" >Is {{name}} Scam?</button></form>
  <a :href="'//'+slug+ '.com-http.us/explorer'"><button class="btn btn-primary btn-lg h3">{{name}} Blockchain Explorer</button></a>
  </div></div>
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
  },
    async asyncData () {
    
  }
}

</script>

