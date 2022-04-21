<template>
  <div class="job-list">
    <p class="mb-2 text-lg font-bold">Ordered by {{ order }}</p>
    <ul>
      <li v-for="(job, index) in orderedJobs" :key="`job-${index}`">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} Bath</p>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cum
            ipsam reprehenderit quasi, optio saepe porro quis, minus culpa
            consequatur, dignissimos voluptas hic neque omnis! Inventore
            recusandae tempore animi dolores?
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Job from '@/types/Job'
import OrderTerm from '@/types/OrderTerm'
import {computed, defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })

    return {orderedJobs}
  },
})
</script>

<style lang="scss" scoped>
.job-list {
  li {
    @apply shadow-lg px-4 py-6 mb-8 rounded-lg;
    @apply border border-gray-300;
    h2 {
      @apply text-3xl font-bold;
    }
    .salary {
      @apply text-green-500 text-lg font-bold my-4;
    }
    .description {
      @apply text-lg;
    }
  }
}
</style>
