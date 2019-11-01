<template>
  <div id="app">
    <ul>
      <li v-for="(post, index) in posts" :key="index">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      // eslint-disable-next-line
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.posts = res.data;
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      });
  },
};
</script>
