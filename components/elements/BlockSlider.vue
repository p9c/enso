<template>
  <div class="scr fts fwh">
    <amp-state id="blockHeight" v-html='`{ "blockHeight": "`+ lastblock + `" }`'></amp-state>

<input type="range" :value="lastblock"  [value]="blockHeight"  min="0" :max="lastblock"  id="blockHeight-input" class="blockheight" on="input-throttled:AMP.setState({
                                blockHeight: event.value
                                })">      
                                
                                  </div>
</template>


<script>
export default {
       props: {
    slug:String,
    name:String,
    lastblock:Number
  },
}
</script>