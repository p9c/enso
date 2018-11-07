<template>
      <main class="flx fcl fii">
    <slot     
    :slug="slug"
    :name="name"
    :lastblock="lastblock" />
      </main>
</template>


<script>

export default {
  components: {
    
  },
    props: {
    slug:String,
    name:String,
    lastblock:Number
  }
}
</script>

<style>




</style>
