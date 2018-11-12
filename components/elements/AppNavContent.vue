<template>
  <div role="tabpanel" class="flx fioa">
    <slot />
  </div>
</template>


<script>

export default {
  props: {
    option: String,
    selected: Boolean,
  },
}

</script>


<style>

.app-nav-content {
  width: 100%;
}

</style>
