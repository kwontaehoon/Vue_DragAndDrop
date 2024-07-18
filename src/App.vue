<template>
  <!-- <div>main</div>
  <div><RouterLink to="/about">Go to About</RouterLink></div>
  <div><RouterLink to="/drag">Go to Drag</RouterLink></div>
  <div><RouterLink to="/drag2">Go to Drag2</RouterLink></div>
  <div><RouterLink to="/drag3">Go to Drag3</RouterLink></div>
  <div><RouterLink to="/draggable">Go to Draggable</RouterLink></div> -->
  <Draggable />

  <!-- <div>{{ store.count }}</div>
  <div v-if="data">
      <div v-for="value in data">
          {{ value }}
      </div>
  </div> -->

  <RouterView />
  <Modal />
</template>

<script setup lang="tsx">
import { store } from '@/store';
import { useQuery } from '@tanstack/vue-query';
import { getTestBoardList } from '@/service/Test';
import { RouterView, RouterLink } from 'vue-router'
import Draggable from '@/components/draggable/index.vue'
import Modal from '@/modal/index.vue'

const { isPending, isError, data, error, isLoading } = useQuery({
  queryKey: ['test'],
  queryFn: async () => await getTestBoardList(),
  staleTime: Infinity
})

</script>