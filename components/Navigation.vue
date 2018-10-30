<template>
      <nav class="pnl lyt">
      <div class="title">
        <nuxt-link to="/link1">Link1</nuxt-link>
        <nuxt-link to="/link2">Link2</nuxt-link>
        <nuxt-link to="/link3">Link3</nuxt-link>
      </div>
    </nav>
</template>


<script>
export default {
    props: {
    slug:String,
    name:String
  }
}
</script>