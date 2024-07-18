<script lang="jsx" setup>
import Dustbin from './Dustbin.vue'
import Box from './Box.vue'
import { DndProvider } from 'vue3-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

</script>

<template>
    <DndProvider :backend="HTML5Backend">
        <div>
            <div :style="{ overflow: 'hidden', clear: 'both' }">
                <Dustbin />
            </div>
            <div :style="{ overflow: 'hidden', clear: 'both' }">
                <Box name="Glass" />
                <Box name="Banana" />
                <Box name="Paper" />
            </div>
        </div>
    </DndProvider>
</template>