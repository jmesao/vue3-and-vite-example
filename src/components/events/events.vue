<script>
import useEventCapacity from '../../uses/use-event-capacity';
import { delay } from "../../services/stubs";

export default {
  props: {
    msg: String,
  },

  async setup(props, context) {
    await delay(2000);

    return {
      ...useEventCapacity(),
    };
  }
}
</script>

<template>
  <div class="events">
    <h3>{{ msg }}</h3>

    <p>Capacity: {{ capacity }}</p>

    <button class="events__btn" type="button" @click="increaseCapacity()">Increase</button>
    <button class="events__btn" type="button" @click="decreaseCapacity()">Decrease</button>
    <button type="button" :disabled="isBookEventDisabled" @click="book()">Book</button>

    <p>Result: {{ bookEventDataSource.result.value }}</p>
    <p>Loading: {{ bookEventDataSource.loading.value }}</p>
    <p>Error: {{ bookEventDataSource.error.value }}</p>
  </div>
</template>

<style scoped>
.events__btn {
  margin-right: 8px;
}
</style>
