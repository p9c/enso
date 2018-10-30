<template>
<div class="pnl "><h3>{{name}} Description</h3>
<div class="cnt " v-html="cdata.desc"></div>
</div>
</template>

        
  

<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
      name:String,
    cdata:Object
      }
}

</script>
