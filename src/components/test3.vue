<template>
    <div>
        <button @click="count++">Add 1</button>
        <p>Count is: {{ count }}</p>
        <!-- `greet` is the name of the method defined above -->
        <button @click="greet">Greet</button>

        <!-- using $event special variable -->
        <button @click="warn('Form cannot be submitted yet.', $event)">
            Submit
        </button>

        <!-- using inline arrow function -->
        <button @click="(event) => warn('Form cannot be submitted yet.', event)">
            Submit
        </button>

        <!-- the click event's propagation will be stopped -->
        <a @click.stop="doThis">11</a>

        <!-- the submit event will no longer reload the page -->
        <form @submit.prevent="onSubmit"></form>

        <!-- modifiers can be chained -->
        <a @click.stop.prevent="doThat"></a>

        <!-- just the modifier -->
        <form @submit.prevent></form>

        <!-- only trigger handler if event.target is the element itself -->
        <!-- i.e. not from a child element -->
        <div @click.self="doThat">...</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const name = ref('Vue.js')

function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` is the native DOM event
    if (event) {
        alert(event.target.tagName)
    }
}

function warn(message, event) {
    // now we have access to the native event
    if (event) {
        event.preventDefault()
    }
    alert(message)
}

</script>

<style lang="scss" scoped></style>