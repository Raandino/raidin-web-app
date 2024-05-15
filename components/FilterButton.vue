<template>
  <div>
    <h2 class="mb-4">Filtra por tipo de vehículo</h2>
    <div class="card-buttons flex justify-center space-x-4">
      <button :class="buttonClass" @click="$emit('Filter','Comerciales')">
        <ArrowUpRightIcon :class="iconClass" />
        Comerciales
      </button>
      <button :class="buttonClass" @click="$emit('Filter','Pasajeros')">
        <ArrowUpRightIcon :class="iconClass" />
        Pasajeros
      </button>
      <button :class="buttonClass" @click="$emit('Filter','SUV')">
        <ArrowUpRightIcon :class="iconClass" />
        SUV
      </button>
      <button :class="buttonClass" @click="$emit('Filter','Camioneta')">
        <ArrowUpRightIcon :class="iconClass" />
        Camionetas
      </button>
    </div>
  </div>
</template>

<script setup>



import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'
const selectedCategory = ref('');
const filteredCars = ref([]);


const filterBy = async (category) => {
  selectedCategory.value = category;
  filteredCars.value = cars.value.filter(car => car.fields.categoria === selectedCategory.value);
  console.log('Filtered cars:', filteredCars.value);
};


const buttonClass = "btn btn-primary flex items-center rounded-full border-none bg-[#2563EB] text-white"
const iconClass = "h-4 w-4 text-white-500"
</script>
