<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <!-- propsdata는 부모데이터의 변수명과 연결 :자식변수명="부모변수명" -->
    <TodoList :propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter @clearTodo="clearTodo"></TodoFooter>
  </div>

</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default { 
    name: "app",
    data() {
      return {
        todoItems: []
      }
    },
    methods: {
      addTodo: function(value){
        this.todoItems.push(value);
      },
      removeTodo: function(idx){
        this.todoItems.splice(idx, 1);
      },
      clearTodo: function(){
        this.todoItems = [];
      }
    },
    components: {
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter
      }
    }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }

</style>
