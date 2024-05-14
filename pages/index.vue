<template>
     <Head>
        <Title>
           Raidin App
        </Title>
    </Head>

    <main class="flex flex-col lg:flex-row gap-4 h-full">
      <!-- Bot conversation -->
      <section class=" flex-auto rounded-lg bg-slate-600 grid place-content-center text-white">
          bot goes here
      </section>

      <!-- Car suggestions and filters -->
      <section class=" flex flex-col flex-auto rounded-lg gap-4 overflow-hidden text-white">
        <section class="bg-slate-600 flex-auto grid place-content-center rounded-lg gap-4">
          <Card />
        </section>
         <section class="bg-slate-600 flex-auto grid place-content-center rounded-lg">
          Other stuff
        </section>
      </section>
    </main>

</template>

<script setup >


</script>

<style>
</style>

