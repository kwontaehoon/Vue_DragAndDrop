<script setup lang="jsx">
import { reactive, ref, watch } from 'vue';
import draggable from 'vuedraggable';
import Card from './Card.vue'
import { addModal } from '@/store';

const dummy1 = ref([
  'Hamburger',
  'Pizza',
  'Spaghetti',
  'Tacos',
  'Teriyaki Chicken',
])

const dummy2 = ref([
  'Bat wing soup',
  'Spicy Octopus',
  'Anything from Taco Bell',
])

const dummy3 = ref([
  'aaaaaaaaaa',
  'bbbbbbbbbbbbb',
  'cccccccccccc'
])

const plus = (params, id) => {
  console.log('params: ', params[0])

  addModal.open = true
  addModal.id = id
  
}

watch(addModal, () => {
  console.log(addModal.open, addModal.content);
  if(!addModal.open && addModal.content !== ''){
    console.log(11);
  }
})

</script>

<template>
  <div class="h-20 border flex items-center p-5 mb-5">Drag & Drop</div>
  <div class="flex items-start gap-5 bg-gray-100 px-5">

    <div class="flex-1 flex items-center flex-col">
      <draggable v-model="dummy1" tag="ul" group="meals" :animation="300" class="w-full h-full">
        <template #item="{ element: title }">
          <Card :title="title"/>
        </template>
      </draggable>
      <div class="my-4 bg-white rounded-full px-2 py-1" @click="plus(dummy2, 0)">+</div>
    </div>

    <div class="flex-1 flex items-center flex-col">
      <draggable v-model="dummy2" tag="ul" group="meals" :animation="300" class="w-full h-full">
        <template #item="{ element: title }">
          <Card :title="title"/>
        </template>
      </draggable>
      <div class="my-4 bg-white rounded-full px-2 py-1" @click="plus(dummy2, 1)">+</div>
    </div>

    <div class="flex-1 flex items-center flex-col">
      <draggable v-model="dummy3" tag="ul" group="meals" :animation="300" class="w-full h-full">
        <template #item="{ element: title }">
          <Card :title="title"/>
        </template>
      </draggable>
      <div class="my-4 bg-white rounded-full px-2 py-1" @click="plus(dummy2, 2)">+</div>
    </div>
  </div>
</template>
