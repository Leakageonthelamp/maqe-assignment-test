<template>
  <div class="page-wrapper">
    <div class="border-cube">
      <div class="outer-cube">
        <div class="inner-cube">
          <div v-for="(value, index) in alphabet" :key="index" class="item">
            <h1>{{ value }}</h1>
          </div>
          <div class="middle-cube"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const alphabet = ref(['M', 'A', 'Q', 'E'])

    return {alphabet}
  },
})
</script>

<style lang="scss" scoped>
.page-wrapper {
  @apply flex justify-center items-center;
  .border-cube {
    @apply w-10/12 aspect-square p-4 bg-primary;
    @apply flex justify-center items-center;
    box-shadow: 8px 8px 18px rgba($color: #000000, $alpha: 0.4);
    border-radius: 36px;
  }
  .outer-cube {
    @apply bg-white w-full h-full p-4;
    @apply rounded-3xl;
  }
  .inner-cube {
    @apply w-full h-full rounded-xl p-8 md:p-16 relative;
    @apply bg-gradient-to-b from-primary to-secondary;
    @apply grid grid-cols-2 gap-8 md:gap-16;
  }

  .middle-cube {
    @apply bg-white w-1/2 h-1/2 absolute;
    @apply top-1/4 left-1/4 opacity-30;
  }
  .item {
    @apply bg-white rounded-lg w-full h-full z-10;
    @apply flex items-center justify-center;
    box-shadow: inset 0px 0px 18px 4px rgba($color: #000000, $alpha: 0.4);

    h1 {
      @apply text-5xl md:text-9xl text-primary;
      text-shadow: 1px 1px black;
    }
  }
}
</style>
