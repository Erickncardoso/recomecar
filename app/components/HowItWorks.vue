<script setup lang="ts">
import { ref, computed } from 'vue';

const activeIndex = ref(0);

const steps = [
  {
    title: 'Desafio diário simples',
    description: 'Metas diárias alcançáveis para construir novos hábitos sem sobrecarga.',
    image: '/images/how-it-works/challenge.webp'
  },
  {
    title: 'Guia alimentar estratégico',
    description: 'Saiba exatamente o que priorizar no prato para desinflamar o corpo.',
    image: '/images/how-it-works/food-guide.webp'
  },
  {
    title: 'Escolhas inteligentes',
    description: 'Aprenda a fazer trocas inteligentes no mercado e na cozinha.',
    image: '/images/how-it-works/shopping.webp'
  },
  {
    title: 'Pontuação e progresso',
    description: 'Ganhe pontos ao completar desafios e verifique seu progresso diário.',
    image: '/images/how-it-works/score.webp'
  },
  {
    title: 'Suporte e comunidade',
    description: 'Receba suporte do nutricionista e tire dúvidas em tempo real.',
    image: '/images/how-it-works/community.webp'
  },
  {
    title: 'Ranking de motivação',
    description: 'Dispute saudavelmente com outras participantes e mantenha o foco.',
    image: '/images/how-it-works/ranking.webp'
  }
];

const currentStep = computed(() => steps[activeIndex.value]);

const setActive = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <section class="how-it-works-section">
    <div class="section-header">
      <span class="text-highlight">Passo a passo</span>
      <h2>Como funciona o <br> desafio na prática?</h2>
    </div>

    <div class="content-wrapper">
      <!-- Lista Interativa (Esquerda) - SÓ TÍTULOS -->
      <div class="steps-list">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="step-item"
          :class="{ active: activeIndex === index }"
          @mouseenter="setActive(index)"
          @click="setActive(index)"
        >
          <span class="step-number">00{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          
          <!-- MOBILE ONLY: Visual display inside the item -->
          <transition name="accordion">
            <div class="mobile-visual" v-show="activeIndex === index">
               <NuxtImg :src="step.image" :alt="step.title" class="mobile-image" sizes="100vw" quality="80" />
               <p class="mobile-description">{{ step.description }}</p>
            </div>
          </transition>
        </div>
      </div>

      <!-- Visualização (Direita) - ÍCONE + TÍTULO + DESCRIÇÃO -->
      <div class="visual-display" :class="{ 'shifted-down': activeIndex >= 3 }">
        <transition name="fade" mode="out-in">
          <div v-if="currentStep" :key="activeIndex" class="visual-content">
            <NuxtImg 
              :src="currentStep.image" 
              :alt="currentStep.title"
              class="active-image"
              sizes="100vw md:500px"
              quality="80"
            />
            <div class="visual-info">
              <p class="description-text">
                <span 
                  v-for="(word, wIndex) in currentStep.description.split(' ')" 
                  :key="wIndex"
                  :style="{ animationDelay: `${0.1 + (wIndex * 0.03)}s` }"
                  class="word"
                >
                  {{ word }}&nbsp;
                </span>
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
