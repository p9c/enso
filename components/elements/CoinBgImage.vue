<template>
  <div class="flx frw fii coinbg">
      <amp-img
        layout="flex-item"
        :src="'//i.com-http.us/' + slug + '/256'" 
        :alt="name + ' BackGround'" >
      </amp-img>

    <!-- <div class="hero-image__window">
      <amp-position-observer
        :on="`scroll:parallaxTransition-${id}.seekTo(percent=event.percent)`"
        intersection-ratios="0"
	      layout="nodisplay">
      </amp-position-observer>

      <amp-img
        :id="`parallaxImage-${id}`"
        :width="width"
        :height="height"
        layout="responsive"
        :src="src"
        :alt="alt">
      </amp-img>

      <div class="hero-image__title-panel">
        <div class="hero-image__title-background">
          
          
        </div>
      </div>

    </div> -->
    
    <!-- <amp-animation :id="'parallaxTransition-'+id" layout="nodisplay">
      <UnescapedScript type="application/json">
        {
          "duration": "1",
          "fill": "both",
          "direction": "reverse",
          "animations": [{
            "selector": "#parallaxImage-{{id}}",
            "keyframes": [{
              "transform": "translateY(-100%)"
            }]
          }]
        }
      </UnescapedScript>
    </amp-animation> -->

  </div>
</template>


<script>

import UnescapedScript from '~/components/UnescapedScript.js'

export default {
  components: {
    UnescapedScript
  },
  props: {
    slug:String,
    name: String
  },
  head () {
    return {
      script: [
        // { hid: "amp-animation", 'custom-element': "amp-animation", src: "https://cdn.ampproject.org/v0/amp-animation-0.1.js", async: '' },
        // { hid: "amp-position-observer", 'custom-element': "amp-position-observer", src: "https://cdn.ampproject.org/v0/amp-position-observer-0.1.js", async: '' },
      ],
      link: [
        { rel: "preload", href: this.src, as: "image" },
      ]
    }
  }
}

</script>


<style>


.coinbg{
    position:absolute;
    width: 100%;
    height:100%;
filter: blur(2px) opacity(0.24);
-webkit-filter:  blur(2px) opacity(0.24);
pointer-events:none;
  bottom:-1.62vh;
  left:-1.62vh;
transform: scale(4) translate(2vh, 0) skew(38deg, 0deg);
}



</style>
