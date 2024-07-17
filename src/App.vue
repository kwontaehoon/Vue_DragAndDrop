<template>
  <div>main</div>
  <div><RouterLink to="/about">Go to About</RouterLink></div>
  <div><RouterLink to="/drag">Go to Drag</RouterLink></div>
  <!-- <div>{{ store.count }}</div>
  <div v-if="data">
      <div v-for="value in data">
          {{ value }}
      </div>
  </div> -->

  <RouterView />
</template>

<script setup lang="tsx">
import { store } from '@/store';
import { useQuery } from '@tanstack/vue-query';
import { getTestBoardList } from '@/service/Test';
import { RouterView, RouterLink } from 'vue-router'

const { isPending, isError, data, error, isLoading } = useQuery({
  queryKey: ['test'],
  queryFn: async () => await getTestBoardList(),
  staleTime: Infinity
})

</script>