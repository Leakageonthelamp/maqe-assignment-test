<template>
  <div class="home">
    <button @click="handleClick('title')">order by title</button>
    <button @click="handleClick('salary')">order by salary</button>
    <button @click="handleClick('location')">order by location</button>
    <job-list class="mt-6" :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import JobList from '@/components/JobsList.vue'
import Job from '@/types/Job'
import OrderTerm from '@/types/OrderTerm'
import {defineComponent, reactive, ref, toRefs} from 'vue'

export default defineComponent({
  components: {JobList},
  setup() {
    const state = reactive({
      book: 'Harry Potter',
      price: 100 as string | number,
    })

    const jobs = ref<Job[]>([
      {
        title: 'Programmer',
        location: 'New York',
        salary: 30000,
        id: 1,
      },
      {
        title: 'Designer',
        location: 'London',
        salary: 50000,
        id: 2,
      },
      {
        title: 'Lawyer',
        location: 'Thailand',
        salary: 25000,
        id: 2,
      },
    ])

    const order = ref<OrderTerm>('title')
    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return {...toRefs(state), jobs, order, handleClick}
  },

  methods: {
    changeBook(bookName: string, newPrice: number) {
      this.book = bookName
      this.price = newPrice
    },
  },
})
</script>

<style lang="scss" scoped></style>
