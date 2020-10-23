<template>
<!--  <virtual-scroller :items="options" item-height="40" content-tag="ul">-->
<!--    <template slot-scope="props">-->
<!--      <li :key="props.item.id">{{props.item.title}}</li>-->
<!--    </template>-->
<!--  </virtual-scroller>-->
  <RecycleScroller
      class="scroller"
      :items="options"
      :item-size="32"
      key-field="id"
      v-slot="{ item }"
  >
    <div class="user">
      {{ item.name }}
    </div>
  </RecycleScroller>
</template>

<script>

import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

export default {
  name: "NitsVirtualList",
  // props:['options'],
  data(){
    return{
      // options:['hello','hii','hello','hii','hello','hii','hello','hii','hello','hii','hello','hii','hello','hii','hello','hii'],
      options:[
          {id: 1 , name: 'rafm'},
          {id: 2 , name: 'raym'},
          {id: 3 , name: 'ruafm'},
          {id: 4 , name: 'rakm'},
          {id: 5 , name: 'rajm'},
          {id: 6 , name: 'rxam'},
          {id: 7 , name: 'ravm'},
          {id: 8 , name: 'ranm'},
          {id: 9 , name: 'rahgfim'},
          {id: 9 , name: 'ragim'},
          {id: 9 , name: 'raigdm'},
          {id: 9 , name: 'ragdfim'},
          {id: 9 , name: 'rafdim'},
          {id: 9 , name: 'ragim'},
          {id: 9 , name: 'ragim'},
          {id: 9 , name: 'ragdfim'},
      ]
    }
  }
}
</script>

<style scoped>
.scroller {
  height: 100%;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>