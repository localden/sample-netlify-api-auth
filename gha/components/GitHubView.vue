<!-- Please remove this file from your project -->
<template>
  <div>
    <p>{{ state }}</p>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: false,
    },
  }
}
</script>
