<template>
    <div class="flex flex-col w-80 justify-between  bg-[#1E293B] rounded-lg shadow p-3 gap-3 duration-300 ">
        <div class="flex gap-1 justify-between">
            <img class="rounded-lg w-28  object-cover" src="../assets/img/suzuki switf demo.jpeg" alt="">

            <div>
                <main class="bg-[#0F172A] rounded-lg p-3">
                        <h3>{{brand}}</h3>
                        <p>{{ brand }} {{ model }}</p>
                </main>
                <section class="flex gap-1 p-2">
                        <P class="p-2 bg-white text-black rounded-lg">{{ year }}</P>
                        <P class="p-2 bg-white text-black rounded-lg">{{mileage}}Km</P>
                </section>
            </div>
        </div>


                    <button class="btn bg-[#E96D6D] text-white">
                       <HeartIcon class=" h-4" /> Me gusta este vehículo
                    </button>

    </div>
</template>

<script setup >

const props = defineProps({
    id: String,
    brand: String,
    model: String,
    year: String,
    price: String,
    mileage:String,
    image_url:String,
})

import { HeartIcon } from '@heroicons/vue/24/solid'


</script>

<style scoped>

</style>