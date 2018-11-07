<template>
<h3 class="pnlh pnlbg">
  <!-- <amp-state id="blockHeight" v-html='`{ "blockHeight": "`+ lastblock + `" }`'></amp-state> -->

  <!-- Block Height  {{lastblock}}<span [text]="blockHeight"></span> -->
<!-- <amp-state id="blockHeight" v-html='`{ "blockHeight": "`+ lastblock + `" }`'></amp-state> -->

                              <!-- <input id="blockHeight-input" type="number" :placeholder="lastblock"  [value]="blockHeight" on="input-throttled:AMP.setState({
                                blockHeight: event.value
                                })">
                                 -->
                                sakazo</h3> 
</template>

<script>


export default {
  components: {
  },

    props: {
    slug:String,
    lastblock:Number
     }
}
</script>







