<template>
  <footer class="scr fts flx fcl ">


    <AppNavBar :explorer="true" class="flx frw fjc fsa fii appnav">

      <AppNavButton src="/" class="animbg">
        <svg class="flx fcl fii svg-icon-size" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <polygon fill="#c0c0c0" points="39.4,23 38.6,19 26,21.6 26,8 22,8 22,20.3 8.1,11.3 5.9,14.7 21.1,24.5 9.4,39.8 12.6,42.2 23.9,27.4 32.3,40.1 35.7,37.9 27.3,25.4"/>
    <circle fill="#3075cf" cx="24" cy="24" r="7"/>
    <g fill="#30a5cf">
        <circle cx="24" cy="8" r="5"/>
        <circle cx="39" cy="21" r="5"/>
        <circle cx="7" cy="13" r="5"/>
        <circle cx="11" cy="41" r="5"/>
        <circle cx="34" cy="39" r="5"/>
    </g>
</svg>

        <span>Info</span>
      </AppNavButton>

      <AppNavButton  src="/explorer"  class="animbg">
        
        <svg class="flx fcl fii svg-icon-size" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <g fill="#cf75cf">
        <path d="M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"/>
        <path d="M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"/>
        <path d="M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"/>
    </g>
</svg>
        <span>Block Explorer</span>
      </AppNavButton>

      <AppNavButton src="/network"  class="animbg">


        <svg class="flx fcl fii svg-icon-size" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <path fill="#00BCD4" d="M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18c5.2,0,9.9-2.2,13.1-5.7L24,24V6z"/>
    <path fill="#448AFF" d="M42,24c0-9.9-8.1-18-18-18v18H42z"/>
    <path fill="#3F51B5" d="M24,24l13.1,12.3c3-3.2,4.9-7.5,4.9-12.3H24z"/>
</svg>


        <span>Network</span>
      </AppNavButton>

      <AppNavButton src="/price" class="animbg">
        <svg class="flx fcl fii svg-icon-size" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <path fill="#ff7500" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
    <path fill="#ffd500" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
</svg>
         <span>Price</span>
      </AppNavButton>

      <AppNavButton src="/ecosystem" class="animbg">
        <svg class="flx fcl fii svg-icon-size" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <path fill="#ff7500" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
    <path fill="#ffd500" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
</svg>
        <span>EcoSystem</span>
      </AppNavButton>

    </AppNavBar>

   
                                
                                  </footer>
</template>


<script>

import AppNavBar from '~/components/elements/AppNavBar.vue'
import AppNavButton from '~/components/elements/AppNavButton.vue'
//import HeroImage from '~/components/HeroImage.vue'
// import DescriptionPanel from '~/components/elements/DescriptionPanel.vue'




export default {
    name: 'appnav',
  components: {
    AppNavBar,
    AppNavButton,
  },
       props: {
    // slug:String,
    // name:String,
    // lastblock:Number
  },
}
</script>