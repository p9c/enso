<!--
Button for use under <AppNavBar>.
Takes an icon image URL and label text as properties.
Each button must also be manually allocated a unique id.
Exactly one button should be selected to have initial content displayed.

If buttons are different pages ("spa=false"), you should specify the 'src' attribute.
-->

<template>
  <div class="app-nav-button flx fcl fii ">
    <a class="flx fcl fii app-nav-button__link" :href="src">
      <slot />
    </a>
  </div>
</template>


<script>

export default {
  props: {
    option: String,
    selected: Boolean,
    src: String,
  }
}

</script>


<style>
 

.app-nav-button {
  flex-basis: 100%;
  align-items: stretch;
  list-style: none;
  text-align: center;
  cursor: pointer;
  /* padding: 4px; */
  text-decoration: none;
background: rgba(255,255,255,.5);
  /* fill: #888; */
  outline: none;

  box-shadow: inset 0 0 3px 1px rgba(48,48,48,.62);

          transition: all 333ms ease-in;

}
.app-nav-button:hover {
  
background: rgba(255,255,255,.8);
 box-shadow: inset 0 0 3px 1px rgba(48,48,48,.38);
        transition: all 162ms ease;

}
.app-nav-button[selected] {
  color: #fff;
  fill: #fff;
}

.app-nav-button__link {
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.app-nav-button__link:visited {
    fill: inherit;
    color: inherit;
}

amp-selector [option][selected] {
  outline: none;
} 


</style>
