<template>
  <div>
    <h2 class="mb-4">Filtra por tipo de vehículo</h2>
    <div class="card-buttons flex justify-center space-x-4">
      <button :class="buttonClass" @click="filterBy('Comerciales')">
        <ArrowUpRightIcon :class="iconClass" />
        Comerciales
      </button>
      <button :class="buttonClass" @click="filterBy('Pasajeros')">
        <ArrowUpRightIcon :class="iconClass" />
        Pasajeros
      </button>
      <button :class="buttonClass" @click="filterBy('SUV')">
        <ArrowUpRightIcon :class="iconClass" />
        SUV
      </button>
      <button :class="buttonClass" @click="filterBy('Camioneta')">
        <ArrowUpRightIcon :class="iconClass" />
        Camionetas
      </button>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue';
import axios from 'axios';

const AIRTABLE_API_KEY = 'patrbm8O5EdqEBFa0.4c5fbb596c481b31cc95c82ec7e7b66c985d9ae9c9c00339ff26c0fd0a3c3b0e';
const BASE_URL = 'https://api.airtable.com/v0/appFagPjq59GjWwb2/detalle_pasajero';

const cars = ref([]);
const selectedCategory = ref('');
const filteredCars = ref([]);

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

const filterBy = async (category) => {
  selectedCategory.value = category;
  filteredCars.value = cars.value.filter(car => car.fields.categoria === selectedCategory.value);
  console.log('Filtered cars:', filteredCars.value);
};

onBeforeMount(async() => {
  fetchData();
});

const buttonClass = "btn btn-primary flex items-center rounded-full border-none bg-[#2563EB] text-white"
const iconClass = "h-4 w-4 text-white-500"
</script>
