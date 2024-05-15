<template>

  <Head>
    <Title>
      Raidin App
    </Title>
  </Head>

  <main class="flex flex-col lg:flex-row gap-4 h-full">
    <!-- Bot conversation -->
    <section class=" flex-auto rounded-lg flex text-white">
      <iframe src="https://bot-web-app-raidin.tiiny.site/" frameborder="0" class="w-full h-full rounded-lg"></iframe>

    </section>

    <!-- Car suggestions and filters -->
    <section class=" flex flex-col flex-auto max-w-[50%] rounded-lg gap-4 overflow-hidden text-white">
      <section class=" flex-auto flex flex-wrap gap-2 place-content-center rounded-lg overflow-y-scroll max-w-5xl self-center">
        <Card 
          v-for="(car, index) in filteredData" :key="index" 
          :brand="car.fields.brand"
          :model="car.fields.model"
          :year="car.fields.year"
          :mileage="car.fields.km" 
          />
      </section>
      <section class=" flex-auto grid place-content-center rounded-lg">
        <!-- Filters -->
        <CardButtons  @filter="(e)=>{selectedCategory = e}"/>
      </section>
    </section>
  </main>

</template>

<script setup>
import CardButtons from '../components/FilterButton.vue';


import axios from 'axios';

const AIRTABLE_API_KEY = 'patrbm8O5EdqEBFa0.4c5fbb596c481b31cc95c82ec7e7b66c985d9ae9c9c00339ff26c0fd0a3c3b0e';
const BASE_URL = 'https://api.airtable.com/v0/appFagPjq59GjWwb2/detalle_pasajero';

const cars = ref([]);


const fetchData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`
      }
    });
    cars.value.push(...response.data.records);
    console.log('All cars:', cars.value);

  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
  }
};

fetchData()

const selectedCategory = ref('Pasajeros')


const filteredData = computed(() => {
  const filteredItems = cars.value.filter(item => item.fields.categoria === selectedCategory.value);
  return filteredItems.slice(0, 6); // Return only the first 6 elements
});

</script>

<style></style>
