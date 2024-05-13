<template>
    <nav class=" w-full max-w-5xl mx-auto fixed top-0 left-1/2 -translate-x-1/2">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
            <NuxtLink href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../assets/img/logo.svg" class=" h-16" alt="ridin Logo" />
            </NuxtLink>
            <div class="w-fit  md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col border  rounded-lg ">
                    <li>
                        <button class=" px-3 py-2 bg-primary rounded" aria-current="page">
                            Contacto
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>