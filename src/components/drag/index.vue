<template>
    <div class="flex m-10">
      <draggable class="dragArea list-group w-full border h-[500px]" :list="list" @change="log">
        <div
          class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>

      <draggable class="dragArea list-group w-full border h-[500px]" :list="list" @change="log">
        <div
          class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
      
    </div>
  </template>
  <script>
    import { defineComponent } from 'vue'
    import { VueDraggableNext } from 'vue-draggable-next'
    export default defineComponent({
      components: {
        draggable: VueDraggableNext,
      },
      data() {
        return {
          enabled: true,
          list: [
            { name: 'John', id: 1 },
            { name: 'Joao', id: 2 },
            { name: 'Jean', id: 3 },
            { name: 'Gerard', id: 4 },
          ],
          dragging: false,
        }
      },
      methods: {
        log(event) {
        },
      },
    })
  </script>