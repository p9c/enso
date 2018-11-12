<template>
  <section class="flx fcl fii">
<Panel>

  <!-- ## Using Placeholders -->
  <!-- The 600px away from the top constraint can be avoided by adding a placeholder image. -->
  <amp-iframe width="500" title="Netflix House of Cards branding: The Stack"
                          height="281"
                          layout="responsive"
                          sandbox="allow-scripts allow-same-origin allow-popups"
                          allowfullscreen
                          frameborder="0"
                          src="http://127.0.0.1:3554/">
  </amp-iframe>


</Panel>

    
  </section>
</template>


<script>
import Panel from '~/components/elements/Panel.vue'



export default {
  components: {
    Panel,
  },
    props: {
    slug:String,
    name:String,
    symbol:String,
    algo:String,
    lastblock:Number,
     nodes:Array,
},
}
</script>

<style>




</style>
