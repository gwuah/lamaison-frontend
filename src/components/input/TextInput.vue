<template>
  <div>
    <input 
      class="u-full-width" 
      type="text" 
      placeholder="Text" 
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: String,
    value: String,
    className: String
  }
}
</script>

