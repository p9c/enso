<template>
<div class="flx fcl fooa pnlbg" amp-fx="fade-in">
  <h3 class="pnlhd pnlh">{{name}} World Nodes</h3>
<div>
<amp-iframe :title="name +' World Nodes'"  :src="'http://' + slug + '.com-http.us/frames/nodes'" height="800px" width="auto" layout="fixed-height"  frameborder="0"  sandbox="allow-scripts">
<div class="plhd" placeholder><amp-img :src="'http://i.com-http.us/' +slug+  '/128'" width="128px" height="128px" layout="fixed"></amp-img></div></amp-iframe>
</div></div>
</template>
      
    


<script>

export default {
  components: {

},

    props: {
    slug:String,
    name:String
  }
}
</script>


