<template>
  <article class="card mb-4">
    <div class="icon__container">
      <i :data-feather="`${statistic.icon}`"></i>
      <div class="a__text">{{statistic.stat}} {{statistic.text}}</div>
    </div>
  </article>
</template>

<style scoped>
.card {
  border-bottom: none !important;
}
  svg {
    height: 120px;
    width: 120px;
  }
  .icon__container {
    box-shadow: 0px 0px 1px;
    padding: 30px;
    border-radius: 6px;
  }

  .a__text {
    font-size: 20px;
    font-weight: bold;
    font-family: Mina 
  }

</style>

<script>
export default {
  name: 'Statistics',
  props: {
    statistic: Object
  }
}
</script>


