<template>
  <div
    class="flex justify-center items-center bg-pattern bg-[#FFD600] lp-header"
  >
    <div class="text-center max-w-screen-md py-10 grid gap-5">
      <h1 class="font-bold text-3xl">IMPORTIR.COM</h1>
      <h1 class="text-[40px] font-semibold italic">
        <ContentSlot :use="$slots.headline" unwrap="p" />
      </h1>
      <slot name="subheadline" />
      <div>
        <button
          class="px-8 py-3 font-bold bg-red-600 rounded-md text-white/80 hover:bg-red-700"
        >
          <div>YUK Gabung Sekarang</div>
          <div class="text-xs font-light">KESEMPATAN TERBATAS!</div>
        </button>
      </div>
    </div>
  </div>
</template>
