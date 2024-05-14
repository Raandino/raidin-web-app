<template>
    <div class="flex flex-col justify-between  bg-[#1E293B] rounded-lg shadow p-3 gap-3 duration-300 ">
        <div class="flex gap-1">
            <img class="rounded-lg w-24  object-cover" src="../assets/img/suzuki switf demo.jpeg" alt="">

            <div>
                <main class="bg-[#0F172A] rounded-lg p-3">
                        <h3>suzuki</h3>
                        <p>Swift Gl 1.2 LS R</p>
                </main>
                <section class="flex gap-1 p-2">
                        <P class="p-2 bg-white text-black rounded-lg">2022</P>
                        <P class="p-2 bg-white text-black rounded-lg">1200KM</P>
                </section>
            </div>
        </div>

                <div class="flex items-center justify-between">
                    <button class="text-white w-full bg-[#E96D6D] hover:scale-105 duration-300 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        Me gusta este vehículo
                    </button>
                </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    id: String,
    brand: String,
    model: String,
    year: Number,
    price: Number,
    mileage:Number,
    image_url:String,
})


</script>

<style scoped>

</style>