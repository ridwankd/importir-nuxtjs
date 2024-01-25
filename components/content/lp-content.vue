<template>
  <div class="flex justify-center items-center lp-content">
    <div class="max-w-5xl py-10 grid gap-2">
      <h1 class="font-bold text-3xl text-center mb-3">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <slot />
    </div>
  </div>
</template>
