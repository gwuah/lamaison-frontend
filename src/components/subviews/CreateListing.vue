<template>
  <div class="create__listing">
    <div class="heading">[ CREATE LISTING ]</div>
      <br/>
    

    <label class="u-pull-left" for="name">Name of Apartment :</label>
    <text-input id="name"/>

    <label class="u-pull-left" for="name">Address :</label>
    <text-input/>

    <label class="u-pull-left" for="name">Coordinates :</label>
    <text-input/>

    <label class="u-pull-left" for="name">Average Cost :</label>
    <text-input/>

    <label class="u-pull-left" for="name">About : </label>
    <text-input/>

    <i-button/>
  </div>
</template>

<style scoped>
.heading {
  margin: 10px 10px;
  font-weight: bold;
  font-size: 17px;
  text-align: left
}
</style>

<script>
import TextInput from '@/components/input/TextInput';
import IButton from '@/components/input/IButton';

export default {
  components: {
    TextInput,
    IButton
  }
}
</script>
