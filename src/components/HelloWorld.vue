<template>
  <div>
    <div :key="thread.key" v-for="thread in threads" class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <div class="post-list">
        <div class="post">
          <div class="user-info">
            <a href="#" class="user-name">Joseph Kerr</a>
            <a href="#">
              <img class="avatar-large" src="https://www.sideshowtoy.com/photo_9030371_thumb.jpg" alt />
            </a>
            <p class="desktop-only text-small">116 posts</p>
          </div>
          <div class="post-content">
            <div>
              <blockquote class="small">
                <div class="author">
                  <a href="/user/robin" class>robin</a>
                  <span class="time">a month ago</span>
                  <i class="fa fa-caret-down"></i>
                </div>
                <div class="quote">
                <p>
                  Is horseradish and Wasabi the same thing? I've heard so many different things.
                </p>
                </div>
              </blockquote>
              <p>They're not the same!</p>
            </div>
          </div>
          <div class="post-date text-faded">6 hours ago</div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <h1>Welcome to the forum</h1>
    <div :key="thread.key" v-for="thread in threads">
      <h2>{{ thread.title }}</h2>
      <div :key="postId" v-for="postId in thread.posts">
        <p>{{ users[posts[postId].userId].name }}</p>
        <p>{{ posts[postId].text }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
import { threads, posts, users } from '@/data';

export default {
  name: 'HelloWorld',
  data() {
    return {
      threads,
      posts,
      users,
    };
  },
};
</script>
