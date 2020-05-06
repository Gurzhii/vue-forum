<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea v-model="text" cols="30" rows="10" class="form-input"></textarea>
    </div>
    <div class="form-actions">
      <button v-if="isUpdate" class="btn btn-ghost" @click.prevent="cancel">
        Cancel
      </button>
      <button class="btn-blue">{{ isUpdate ? 'Update' : 'Submit post' }}</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      required: false,
    },
    post: {
      type: Object,
      validator: (obj) => {
        const keyIsValid = typeof obj['.key'] === 'string';
        const textIsValid = typeof obj.text === 'string';
        return keyIsValid && textIsValid;
      },
    },
  },
  data() {
    return {
      text: this.post ? this.post.text : '',
    };
  },
  computed: {
    isUpdate() {
      return !!this.post;
    },
  },
  methods: {
    save() {
      this.presist().then((post) => {
        this.$emit('save', { post });
      });
    },
    presist() {
      return this.isUpdate ? this.update() : this.create();
    },
    create() {
      const post = {
        text: this.text,
        threadId: this.threadId,
      };
      this.text = '';
      return this.$store.dispatch('createPost', post);
    },
    update() {
      const payload = {
        id: this.post['.key'],
        text: this.text,
      };
      return this.$store.dispatch('updatePost', payload);
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>
