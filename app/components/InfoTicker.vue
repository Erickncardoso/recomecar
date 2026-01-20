<script setup lang="ts">
import Sparkles from 'lucide-vue-next/dist/esm/icons/sparkles.js';
import Leaf from 'lucide-vue-next/dist/esm/icons/leaf.js';
import Zap from 'lucide-vue-next/dist/esm/icons/zap.js';
import Trophy from 'lucide-vue-next/dist/esm/icons/trophy.js';
import Heart from 'lucide-vue-next/dist/esm/icons/heart.js';

const items = [
  { text: 'Desinchaço em 7 dias', icon: Leaf },
  { text: 'Sem passar fome', icon: Heart },
  { text: 'Mais energia e disposição', icon: Zap },
  { text: 'Cardápio prático e barato', icon: Sparkles },
  { text: 'Grupo de acompanhamento', icon: Trophy },
  { text: 'Estratégia comprovada', icon: Leaf },
  { text: '100% Online e Gratuito', icon: Zap },
];
</script>

<template>
  <div class="ticker-container">
    <div class="ticker-wrapper">
      <!-- Doubled list for seamless loop -->
      <div class="ticker-track">
        <div v-for="(item, index) in items" :key="`a-${index}`" class="ticker-item">
          <component :is="item.icon" :size="18" class="icon" />
          <span>{{ item.text }}</span>
        </div>
        <!-- Duplicated for infinite scroll effect -->
        <div v-for="(item, index) in items" :key="`b-${index}`" class="ticker-item">
          <component :is="item.icon" :size="18" class="icon" />
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ticker-container {
  width: 100%;
  overflow: hidden;
  padding: 0.5rem 0; // Reduzido para ficar mais compacto
  margin-bottom: 2rem;
  position: relative;
  
  // Borda superior estilo "laser/fade"
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 100%);
  }

  // Fade masks at edges
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);

  .ticker-wrapper {
    display: flex;
    width: 100%;
  }

  .ticker-track {
    display: flex;
    gap: 2rem;
    animation: scroll 40s linear infinite;
    white-space: nowrap;
    
    // Hover effect removed as per user request
  }

  .ticker-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: #374151; // Gray-700
    background: white;
    padding: 0.4rem 0.8rem; // Itens mais finos
    border-radius: 99px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border: 1px solid #f3f4f6;
    font-size: 0.95rem;

    .icon {
      color: #ec4899; // Pink-500 (Primary color)
    }
  }
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
