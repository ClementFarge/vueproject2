<template>
  <div id="app">
    <div>
      <ul>
        <li>{{ name }}</li>
        <li>{{ weather }}</li>
        <li>{{ temperature }} °C</li>
        <li>{{ updatedAt }}</li>
        <li>{{ transformDate }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
import {format} from 'timeago.js';

export default {
  name: 'My-city',
  props: {
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: Date
  },
  computed: {
    transformDate: function () {
      return format(this.updatedAt)
    }
  }
}
</script>
