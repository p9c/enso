<!--
Display a thin header bar at the top of the page.
At present this displays the logged in user's name, or a login link.
-->

<template>
  <div class="flx fcl fii">
          <Title
      :slug="slug"      
      :name="name" />


    
      <!-- <div class="site-title-bar__login-button" amp-access="NOT access" amp-access-hide> -->
         <!-- <a on="tap:amp-access.login-sign-in">Login</a> -->
      <!-- </div> -->
      <!-- <div class="site-title-bar__hello" amp-access="access" amp-access-hide -->
        <!-- v-html=' `<template amp-access-template type="amp-mustache"><span>Hi {{ name }}</span></template>` '> -->
	<!-- We cannot use "<template>" here because it gets processed by Vue,
	     so we use v-html to inject raw HTML. -->
      <!-- </div> -->
     </div> 
    
</template>


<script>
import Title from '@/components/amp/Title.vue'

export default {
  components:{
    Title,
  },
      props: {
      page:String,
    slug:String,
    name:String
  },
  head: {
    script: [
   //   { hid: "amp-access", 'custom-element': "amp-access", src: "https://cdn.ampproject.org/v0/amp-access-0.1.js", async: '' },
      { hid: "amp-analytics", 'custom-element': "amp-analytics", src: "https://cdn.ampproject.org/v0/amp-analytics-0.1.js", async: '' },
      { hid: "amp-mustache", 'custom-template': "amp-mustache", src: "https://cdn.ampproject.org/v0/amp-mustache-0.2.js", async: '' },
      { hid: "amp-live-list", 'custom-element': "amp-live-list", src: "https://cdn.ampproject.org/v0/amp-live-list-0.1.js", async: '' },
      { hid: "amp-list", 'custom-element': "amp-list", src: "https://cdn.ampproject.org/v0/amp-list-0.1.js", async: '' },
      { hid: "amp-fit-text", 'custom-element': "amp-fit-text", src: "https://cdn.ampproject.org/v0/amp-fit-text-0.1.js", async: '' },
       { hid: "amp-iframe", 'custom-element': "amp-iframe", src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js", async: '' },
       { hid: "amp-form", 'custom-element': "amp-form", src: "https://cdn.ampproject.org/v0/amp-form-0.1.js", async: '' },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  }
}
</script>


<style>

.site-title-bar__fixed {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  clear: both;
  background: white;
  border-bottom: 1px solid #ccc;
}

.site-title-bar__spacer {
  height: 3rem;
}

.site-title-bar__title {
  float: left;
}

.site-title-bar__login-button {
  float: right;
}

.site-title-bar__hello {
  float: right;
}

</style>
