<template>
    <div v-if="addModal.open" class="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center">
         <div class="bg-white rounded-xl overflow-hidden shadow">
            <Write />
         </div>
    </div>
</template>

<script setup lang="jsx">
 import Write from './write.vue'
 import { addModal } from '@/store';
    
</script>