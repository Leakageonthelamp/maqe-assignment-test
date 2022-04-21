<template>
  <div class="posts-list-wrapper">
    <div v-for="(post, index) in posts" :key="index" class="post-card">
      <div class="card-header">
        <div class="avatar">
          <img :src="post.author?.avatar_url" :alt="`avatar-${post.id}}`" />
        </div>
        <div class="author">
          {{ post.author?.name }}
          <span>posted on {{ formatDatetime(post.created_at) }}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="w-full cover-img">
          <img
            class="object-fill w-full"
            :src="post.image_url"
            :alt="`cover-${post.id}}`"
          />
        </div>
        <div class="body-description">
          <h1>{{ post.title }}</h1>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {IMergePost} from '@/types/Post'
import dayjs from 'dayjs'
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    posts: {
      type: Array as PropType<IMergePost[]>,
      required: true,
    },
  },
  setup() {
    const formatDatetime = (datetime: string) => {
      return dayjs(datetime).format('dddd, MMM D, YYYY, HH:mm')
    }

    return {formatDatetime}
  },
})
</script>

<style lang="scss" scoped>
.posts-list-wrapper {
  .post-card {
    @apply mb-6 border border-gray-200;
    @apply shadow-lg rounded-2xl even:bg-gray-300;

    .card-header {
      @apply px-4 py-2 border-b;
      @apply flex items-center;
      .avatar {
        @apply mr-2;
        img {
          @apply w-8 h-8 rounded-full;
        }
      }
      .author {
        @apply text-orange-500 font-bold text-sm;
        span {
          @apply text-gray-400 font-normal;
        }
      }
    }

    .card-body {
      @apply p-4 grid grid-cols-1 md:grid-cols-3;
      .cover-image {
        @apply md:col-start-1 md:col-end-2;
      }
      .body-description {
        @apply md:col-start-2 md:col-end-4 mt-4 md:ml-4;
        h1 {
          @apply font-bold text-xl mb-4;
        }
      }
    }
  }
}
</style>
