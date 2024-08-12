<template>
    <div v-if="addModal.open" class="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center">
         <div class="bg-white rounded-xl overflow-hidden shadow">
            <div >
                <Write />
            </div>
         </div>
    </div>
    <div v-if="deleteModal.open" class="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center">
         <div class="bg-white rounded-xl overflow-hidden shadow">
            <div >
                <Delete />
            </div>
         </div>
    </div>
    <div v-if="updateModal.open" class="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center">
         <div class="bg-white rounded-xl overflow-hidden shadow">
            <div >
                <Update />
            </div>
         </div>
    </div>
</template>

<script setup lang="tsx">
 import Write from './write.vue'
 import Delete from './delete.vue'
 import Update from './update.vue'
 import { addModal, deleteModal, updateModal } from '@/store'

</script>