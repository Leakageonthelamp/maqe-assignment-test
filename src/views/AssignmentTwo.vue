<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1 class="text-4xl font-bold">MAQE Forum</h1>
      <p class="my-2">Your current timezone is: Asia/Bangkok</p>
    </div>
    <PostsList :posts="mergeData" />
  </div>
</template>

<script lang="ts">
import authorsData from '@/assets/authors.json'
import postsData from '@/assets/posts.json'
import PostsList from '@/components/PostsList.vue'
import {IAuthor, IMergePost, IPost} from '@/types/Post'
import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
  components: {PostsList},
  setup() {
    const authors: IAuthor[] = authorsData
    const posts: IPost[] = postsData
    let mergeData = ref<IMergePost[]>([])

    onMounted(() => {
      mergeData.value = posts.map(post => {
        const findAuthor = authors.find(author => author.id === post.author_id)
        return {
          ...post,
          author: findAuthor ?? null,
        }
      })
    })

    return {mergeData}
  },
})
</script>

<style lang="scss" scoped></style>
