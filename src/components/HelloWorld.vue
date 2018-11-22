<template>
  <div>
    <div>
      <input class="item" v-model="inputValue">
      <button @click="handlerClick">提交</button>
    </div>
    <ul>
      <todo-item
        v-for="(item,index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete"
        :list="list"
      >
      </todo-item>
    </ul>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem.vue"
  export default{
    components: {
      'todo-item': TodoItem
    },
    data () {
      return {
        inputValue: '',
        list: []
      }
    },
    methods: {
      handlerClick () {
        this.list.push(this.inputValue);
        this.inputValue = '';
      },
      handleDelete (index){
        this.list.splice(index,1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
