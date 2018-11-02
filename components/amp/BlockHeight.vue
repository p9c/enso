<template>
<h3>Block Height <span [text]="blockHeight"></span>
<amp-state id="blockHeight" v-html='`{ "blockHeight": "`+ lastblock + `" }`'></amp-state>
                              <input id="blockHeight-input" type="number" :placeholder="lastblock"  [value]="blockHeight" on="input-throttled:AMP.setState({
                                blockHeight: event.value
                                })"></h3>
</template>

<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    slug:String,
    lastblock:Number
     }
}
</script>







