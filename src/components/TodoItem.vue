<template>
  <li @click="handleDelete" class="item">{{content}}</li>
</template>

<script>
  export default{
    props: ['content', 'index', 'list'],
    methods: {
      handleDelete (){
        this.$emit('delete', this.index);
      }
    }
  }
</script>

<style scoped>
  .item {
    color: red;
  }
</style>
