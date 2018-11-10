<!--
Application wide navigation button bar for bottom of page.
This component takes a series of alternating <AppNavButton> and <AppNavContent>
children representing the different buttons in the navigation bar.
-->

<template>
  <div v-if="explorer" class="mainnav">
    <amp-state id="appNav" v-html='`{ "option": "" }`'></amp-state>
    <amp-selector role="tablist" layout="container" class="flx frw app-nav-bar__container" on="select:AMP.setState({appNav: {option: event.targetOption}})">
      <slot></slot>
    </amp-selector>
  </div>
  <div v-else class="app-nav-bar app-nav-bar__container">
    <slot></slot>
  </div>
</template>


<script>

import UnescapedScript from '~/components/UnescapedScript.js'

export default {
  components: {
    UnescapedScript
  },
  props: {
    explorer: Boolean,
  },
  head: {
    script: [
      { hid: "amp-selector", 'custom-element': "amp-selector", src: "https://cdn.ampproject.org/v0/amp-selector-0.1.js", async: '' },
      { hid: "amp-bind", 'custom-element': "amp-bind", src: "https://cdn.ampproject.org/v0/amp-bind-0.1.js", async: '' },
    ]
  }
}

</script>


<style>

.app-nav-bar__container {


}

.mainnav{

}

</style>
