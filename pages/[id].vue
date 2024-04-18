<template>
    <Head>
        <Title>
            {{ id }}
        </Title>
    </Head>
    <Header />
    <section class="flex justify-center">
        <img :src="carToDisplay[0].image_url" class=" w-52  md:w-80" alt="">
        <div class="flex flex-col gap-4  self-center">
            <span class=" text-xl font-bold text-gray-900 ">
                {{ carToDisplay[0].brand }} {{ carToDisplay[0].model }}
            </span>
            
            <span class=" text-xl font-bold text-gray-900 ">
                {{ carToDisplay[0].price }} CLP
            </span>
            <span class=" text-xl font-bold text-gray-900 ">
                {{ carToDisplay[0].mileage }} KM
            </span>
        </div>
    </section>
    
    <!-- <section class=" max-w-5xl mx-auto mt-5">
        <Card 
            :key="carToDisplay[0].id"
            :brand="carToDisplay[0].brand"
            :model="carToDisplay[0].model"
            :year="carToDisplay[0].year"
            :mileage="carToDisplay[0].mileage"
            :price="carToDisplay[0].price"
            :image_url="carToDisplay[0].image_url"
        />
    </section> -->
    <section class="">  
        <div class="relative overflow-x-auto max-w-5xl shadow-md sm:rounded-lg  mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                           Vehiculo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Marketplace
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                        <td class="p-4">
                            <img :src="carToDisplay[0].image_url" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch">
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900">
                            Mercado Libre
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900">
                            {{carToDisplay[0].price  }} CLP
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-primary hover:underline">Comprar</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                        <td class="p-4">
                            <img :src="carToDisplay[0].image_url" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch">
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900">
                            Chile Auto
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900">
                            {{carToDisplay[0].price  }} CLP
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-primary hover:underline">Comprar</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                        <td class="p-4">
                            <img :src="carToDisplay[0].image_url" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch">
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900">
                            AutosUsados.cl
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900">
                            {{carToDisplay[0].price  }} CLP
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-primary hover:underline">Comprar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </section>
</template>

<script setup >
    import cars from '../mockApi/cars.json'
    import Card from '../components/Card.vue';
    import  Header  from '../components/Header.vue'



    
    const {id} = useRoute().params
    const carToDisplay= cars.filter((car)=>{
        return car.id === id
    })

    //fetch to scraper based on the id
</script>

<style scoped>

</style>