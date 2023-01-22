<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div class="sm:pt-6 sm:pb-10">
    <Html lang="en" />
    <Meta property="og:image" :content="cover" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-primary-50 dark:bg-primary-900;
}
</style>
