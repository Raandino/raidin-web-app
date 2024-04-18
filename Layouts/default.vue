<template>
    <Header />
    <div class=" mt-16">
        <slot/>
    </div>
</template>

<script setup>
import  Header  from '../components/Header.vue'

</script>

<style>
    body{
       background-color: #FAFAFF;
       padding-inline: 14px;
    }
</style>
