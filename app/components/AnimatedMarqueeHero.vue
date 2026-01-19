<script setup lang="ts">
import { computed } from 'vue';
import TicketButton from './TicketButton.vue';

interface Props {
  tagline?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  images?: string[];
}

const componentProps = withDefaults(defineProps<Props>(), {
  tagline: "Join over 100,000 happy creators",
  title: "Engage Audiences with Stunning Videos",
  description: "Boost Your Brand with High-Impact Short Videos from our expert content creators. Our team is ready to propel your business forward.",
  ctaText: "Get Started",
  images: () => [
    "https://images.unsplash.com/photo-1756312148347-611b60723c7a?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1757865579201-693dd2080c73?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1756786605218-28f7dd95a493?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1757519740947-eef07a74c4ab?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1757263005786-43d955f07fb1?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1757207445614-d1e12b8f753e?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1757269746970-dc477517268f?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1755119902709-a53513bcbedc?w=900&auto=format&fit=crop&q=60"
  ]
});

// Duplicate images to create seamless loop (6x to ensure coverage on wide screens)
const duplicatedImages = computed(() => [
  ...componentProps.images, 
  ...componentProps.images,
  ...componentProps.images, 
  ...componentProps.images,
  ...componentProps.images, 
  ...componentProps.images
]);
</script>

<template>
  <section class="animated-marquee-hero">
    <div class="hero-content">
      <!-- Tagline -->
      <div v-if="componentProps.tagline" class="tagline-badge">
        {{ componentProps.tagline }}
      </div>

      <!-- Title -->
      <h1>
        {{ componentProps.title }}
      </h1>

      <!-- Description -->
      <p class="description">
        {{ componentProps.description }}
      </p>

      <!-- CTA -->
      <div class="cta-wrapper">
        <TicketButton :text="componentProps.ctaText" />
      </div>
    </div>

    <!-- Marquee -->
    <div class="marquee-container">
      <div class="marquee-track">
        <div 
          v-for="(src, index) in duplicatedImages" 
          :key="index" 
          class="marquee-item"
          :style="{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '5deg'})` }"
        >
          <NuxtImg 
            :src="src" 
            :alt="`Showcase image ${index + 1}`" 
            sizes="250px"
            width="250"
            quality="80"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/css/_animated-marquee.scss';
</style>
