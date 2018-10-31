<template>
      <nav class="pnl lyt">
      <div class="title">
        <a href="http://com-http.us/">HOME</a>
        <nuxt-link to="/">Link1</nuxt-link>
        <nuxt-link to="http://com-http.us/">Link2</nuxt-link>
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