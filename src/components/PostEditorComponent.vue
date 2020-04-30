<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea v-model="text" cols="30" rows="10" class="form-input"></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true,
    },
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    save() {
      const postId = `greatPost${Math.random()}`;
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'Miej9zSGMRZKDvMXzfxjVOyv3RF3',
        '.key': postId,
      };
      this.text = '';
      this.$emit('save', { post });
    },
  },
};
</script>
