<script setup lang="ts">
const learningTopics = [
  {
    day: 'Dia 1',
    title: 'O que comer para desinchar',
    description: 'Descubra os alimentos que combatem a inflamação e eliminam a retensão de líquidos logo nos primeiros dias.',
    icon: '🥗',
    image: '/images/cards/card_learning_day1_detox.webp'
  },
  {
    day: 'Dia 2',
    title: 'Como montar um prato que emagrece',
    description: 'Aprenda a proporção ideal de nutrientes para ter saciedade e queimar gordura naturalmente.',
    icon: '🍽️',
    image: '/images/cards/card_learning_day2_plate.webp'
  },
  {
    day: 'Dia 3',
    title: 'Escolhas inteligentes fora de casa',
    description: 'Saiba o que pedir em restaurantes e eventos para manter o foco sem deixar de socializar.',
    icon: '🍷',
    image: '/images/cards/card_learning_day3_social.webp'
  },
  {
    day: 'Dia 4',
    title: 'Como parar de beliscar',
    description: 'Estratégias para controlar os gatilhos mentais e eliminar o hábito de comer sem fome.',
    icon: '🥜',
    image: '/images/cards/card_learning_day4_snack.webp'
  },
  {
    day: 'Dia 5',
    title: 'Domine a fome emocional',
    description: 'Entenda a diferença entre fome física e emocional e recupere o controle sobre suas decisões.',
    icon: '🧠',
    image: '/images/cards/card_learning_day5_emotional.webp'
  },
  {
    day: 'Dia 6',
    title: 'Movimento a seu favor',
    description: 'Como integrar atividades simples na rotina que potencializam o seu resultado.',
    icon: '🏃‍♀️',
    image: '/images/cards/card_learning_day6_movement.webp'
  },
  {
    day: 'Dia 7',
    title: 'O fim do efeito sanfona',
    description: 'Entenda por que você emagrece e volta a engordar e como quebrar esse ciclo definitivamente.',
    icon: '🔄',
    image: '/images/cards/card_learning_day7_yoyo.webp'
  }
];
</script>

<template>
  <section class="learning-section" id="aprender">
    <div class="content-wrapper">
      <!-- Coluna Esquerda: Título Sticky -->
      <div class="sticky-column">
        <span class="section-label">Conteúdo do Desafio</span>
        <h2>O que você vai aprender <br> nesses <span class="highlight">7 dias?</span></h2>
      </div>

      <!-- Coluna Direita: Cards Scroll -->
      <div class="cards-column">
        <div v-for="(topic, index) in learningTopics" :key="index" class="learning-card">
          <div class="card-content">
            <h3>{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <div class="card-image-container">
              <img :src="topic.image" :alt="topic.title" loading="lazy" />
            </div>
          </div>
          <span class="card-number">0{{ index + 1 }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
