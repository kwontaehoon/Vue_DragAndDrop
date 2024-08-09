<script setup lang="tsx">
import { reactive, ref, watch, watchEffect } from 'vue';
import draggable from 'vuedraggable';
import Card from './Card.vue'
import { addModal } from '@/store';
import { Ref } from 'vue';

const dummy1 = reactive([
  'Hamburger',
  'Pizza',
  'Spaghetti',
  'Tacos',
  'Teriyaki Chicken',
])

const dummy2 = reactive([
  'Bat wing soup',
  'Spicy Octopus',
  'Anything from Taco Bell',
])

const dummy3 = reactive([
  'aaaaaaaaaa',
  'bbbbbbbbbbbbb',
  'cccccccccccc'
])

const test = ref(1)

const testFunc = () => {
  console.log('testFunc')
  test.value++
}

const obj = reactive({ count: 0})

const plus = (params:Ref<[]>, id: number) => {

  addModal.open = true
  addModal.id = id 
}

watch([addModal, testFunc()], (cur, prev) => { // 명시적으로 감시된 소스만 추적, 콜백이 실행되어야 하는 시기를 보다 정확하게 제어할 수 있음
  // 이 말은 즉슨 해당 소스가 감시되면 watchEffect처럼 모두 실행되지않고 나눌수있음
  console.log('watch')
  console.log(addModal.open, addModal.content)
  if(!addModal.open && addModal.content !== ''){
    console.log(11);
  }
})

// watch(obj.count, (count) => {
//   console.log(`count 값: ${count}`)
// })

watch(
  () => obj.count,
  (count) => {
    console.log(`count 값: ${count}`)
  }
)

watchEffect(()=> { // 의존성 추적과 사이드 이펙트를 하나의 단계로 결합하기 때문에 같은 scorp에 존재
  console.log('watchEffect')
  testFunc()
  addModal.content
})

</script>

<template>
  <div class="h-20 border flex items-center p-5 mb-5" @click="testFunc">Drag & Drop</div>
  <div class="flex items-start gap-5 bg-gray-100 px-5">

    <div class="flex-1 flex items-center flex-col">
      <draggable v-model="dummy1" tag="ul" group="meals" :animation="300" class="w-full h-full">
        <template #item="{ element: title }">
          <Card :title="title"/>
        </template>
      </draggable>
      <div class="my-4 bg-white rounded-full w-6 h-6 cursor-pointer shadow flex justify-center items-center" @click="plus(dummy2, 0)">+</div>
    </div>

    <div class="flex-1 flex items-center flex-col">
      <draggable v-model="dummy2" tag="ul" group="meals" :animation="300" class="w-full h-full">
        <template #item="{ element: title }">
          <Card :title="title"/>
        </template>
      </draggable>
      <div class="my-4 bg-white rounded-full w-6 h-6 cursor-pointer shadow flex justify-center items-center" @click="plus(dummy2, 1)">+</div>
    </div>

    <div class="flex-1 flex items-center flex-col">
      <draggable v-model="dummy3" tag="ul" group="meals" :animation="300" class="w-full h-full">
        <template #item="{ element: title }">
          <Card :title="title"/>
        </template>
      </draggable>
      <div class="my-4 bg-white rounded-full w-6 h-6 cursor-pointer shadow flex justify-center items-center" @click="plus(dummy2, 2)">+</div>
    </div>
  </div>
</template>
