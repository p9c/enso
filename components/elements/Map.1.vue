

<template>
<div class="flx fcl fii pnlbg fjc fai" amp-fx="fade-in">


  <amp-iframe 
      title="rrererererererererer"
      name="rrererererererererer"
      id="iframe"
      sandbox="allow-scripts allow-same-origin"
      layout="fill"
      frameborder="0"
      resizable
      srcdoc="<!DOCTYPE html><html><head><meta charset='utf-8'><title>Nodes</title>
      
    <script async defer src='https://maps.googleapis.com/maps/api/js'></script>
    <script src='http://f.com-http.us/maps/data.json'></script>
    <script type='text/javascript' src='http://f.com-http.us/maps/mc.js'></script>
    <script src='http://f.com-http.us/maps/nodes.js'></script>

    

    <script>
      google.maps.event.addDomListener(window, 'load', speedTest.init);
    </script>


        </head>

  <body>
    <div id='panel'>
      <h3>Nodes</h3>

      <div>
        <input type='checkbox' checked='checked' id='usegmm'/>
        <span>Use Nodes Clusterer</span>
      </div>

      <div>
        Nodes:
        <select id='nummarkers'>
          <option value='10'>10</option>
          <option value='50'>50</option>
          <option value='100' selected='selected'>100</option>
          <option value='500'>500</option>
          <option value='1000'>1000</option>
        </select>

                <span>Time used: <span id='timetaken'></span> ms</span>

      </div>

      <strong>Nodes List</strong>
      <div id='markerlist'>

      </div>
    </div>
    <div id='map-container'>
      <div id='map'></div>
    </div>
  </body>
</html>

 "
  >
      <div overflow tabindex=0 role=button aria-label="Read more">Read more!</div>

            <amp-img layout="fixed" 
                          width="128" 
                          height="128"
    :src="'http://i.com-http.us/' + slug + '/128'"
    placeholder></amp-img>


  </amp-iframe>

  
    
</div></template>


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




</style>
