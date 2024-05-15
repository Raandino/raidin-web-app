<template>

  <Head>
    <Title>
      Raidin App
    </Title>
  </Head>

  <main class="flex flex-col lg:flex-row gap-4 h-full">
    <!-- Bot conversation -->
    <section class="flex-auto rounded-lg bg-slate-600 flex relative text-black">
      <div class="absolute top-0 left-0 w-full p-6 bg-white text-center z-10" style="border-radius: 10px 10px 0 0;">
        <div class="flex items-center justify-center">
          <div class="rounded-full h-12 w-12 flex items-center justify-center bg-gray-300 mr-2">
            <img src="https://res.cloudinary.com/dhicmjsel/image/upload/v1714524931/fapl7n7xtfouekgtidat.jpg"
              alt="Avatar" class="rounded-full h-full w-full object-cover" />
          </div>
          <p>Raidin Bot</p>
        </div>
      </div>
      <iframe src="https://botsito.tiiny.site/" frameborder="0" class="w-full h-full rounded-lg"></iframe>
    </section>

    <!-- Car suggestions and filters -->
    <section class=" flex flex-col flex-auto rounded-lg gap-4 overflow-hidden text-white">
      <section class="bg-slate-600 flex-auto grid place-content-center rounded-lg">
        Other stuff
      </section>
      <section class="bg-slate-600 flex-auto grid place-content-center rounded-lg">
        Other stuff
      </section>
    </section>
  </main>

</template>

<script setup>


</script>

<style></style>
