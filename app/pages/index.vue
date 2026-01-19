<script setup lang="ts">
import { Calendar, Smartphone, Users, ArrowRight, Medal } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue'

const scrollText = ref<HTMLElement | null>(null)

let ticking = false

const updateScroll = () => {
  if (!scrollText.value) {
    ticking = false
    return
  }
  
  const element = scrollText.value // O container pai
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  // Start earlier to give more scrolling room
  const start = windowHeight * 0.9
  const end = windowHeight * 0.3
  
  // Master progress 0 to 1
  let rawProgress = (start - rect.top) / (start - end)
  rawProgress = Math.min(Math.max(rawProgress, 0), 1)
  
  // Split into 3 segments
  // 0.0 - 0.33 -> Item 1
  // 0.33 - 0.66 -> Item 2
  // 0.66 - 1.0 -> Item 3
  
  const p1 = Math.min(Math.max((rawProgress - 0) / 0.33, 0), 1) * 100
  const p2 = Math.min(Math.max((rawProgress - 0.33) / 0.33, 0), 1) * 100
  const p3 = Math.min(Math.max((rawProgress - 0.66) / 0.34, 0), 1) * 100 // 0.34 to cover remainder
  
  // Apply to the parent container which these children will read via var() inheritance
  // OR apply directly if we bound styles. simplest is variables on the wrapper
  element.style.setProperty('--prog-0', `${p1}%`)
  element.style.setProperty('--prog-1', `${p2}%`)
  element.style.setProperty('--prog-2', `${p3}%`)

  ticking = false
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScroll)
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial check (direct call to setup initial state)
  updateScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
import TicketButton from '../components/TicketButton.vue'
import AnimatedMarqueeHero from '../components/AnimatedMarqueeHero.vue'
import DetailsAccordion from '../components/DetailsAccordion.vue'

const feedbackImages = [
  '/feedbacks/whats2.webp',
  '/feedbacks/whats3.webp',
  '/feedbacks/whats4.webp',
  '/feedbacks/whats5.webp',
  '/feedbacks/whsta1.webp'
]
</script>

<template>
  <div class="landing-page">
    <!-- Sessão 1 – Hero principal -->
    <section class="hero-section" id="hero">
      <NuxtImg src="/isahero.webp" alt="Hero Background" class="hero-bg-image" fetchpriority="high" sizes="100vw md:65vw" quality="80" format="webp" />
      <div class="hero-overlay-shape"></div>
      
      <div class="container">
        <div class="hero-content-wrapper">
          <img src="/logo.svg" alt="Recomeçar Logo" class="hero-logo" />
          <h1 class="hero-title">RECOMEÇAR</h1>
          <p class="hero-subtitle">7 dias para desinchar, destravar o emagrecimento e começar o ano do jeito certo</p>
          
          <InfoTicker />
          
          <div class="hero-badges" style="display: none;"> <!-- Ocultado temporariamente em favor do Ticker -->
            <div class="badge"><Calendar :size="18" /> 26 de janeiro a 01 de fevereiro</div>
            <div class="badge"><Smartphone :size="18" /> Desafio gratuito</div>
            <div class="badge"><Users :size="18" /> Grupo exclusivo no WhatsApp</div>
          </div>

          <div class="hero-separator">⸻</div>

          <TicketButton text="Quero RECOMEÇAR dia 26/01" />
        </div>
      </div>
    </section>

    <!-- Sessão 2 – Problema/Empatia -->
    <section class="problema-section" id="problema">
      <div class="container">
        <div class="glass-card">
          <p class="section-label">Ano novo começou…</p>
          <div class="text-wrapper" ref="scrollText">
            <div style="margin-bottom: 2rem;">
              <p class="highlight scroll-fill-item" style="--fill-progress: var(--prog-0, 0%)">
                mas seu corpo, sua alimentação e sua motivação ficaram no ano passado?
              </p>
            </div>
            <p class="scroll-fill-item" style="--fill-progress: var(--prog-1, 0%)">
              Janeiro chega com promessa de recomeço, mas pra muita mulher ele vem junto com: inchaço, culpa, cansaço e aquela sensação de “já estraguei tudo de novo”.
            </p>
            <p class="scroll-fill-item" style="--fill-progress: var(--prog-2, 0%)">
              Se você está se sentindo assim, respira. O problema não é você. É como você está tentando recomeçar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sessão 3 – O que é o RECOMEÇAR? -->
    <section class="o-que-e-section" id="o-que-e">
      <div class="container">
        <div class="section-header">
          <h2>O que é o RECOMEÇAR?</h2>
          <p class="text-highlight">O RECOMEÇAR é um desafio gratuito de 7 dias, criado para mulheres que querem:</p>
        </div>

        <div class="feature-cards-stack">
          <!-- Card 1 -->
          <div class="feature-card-item">
            <div class="card-content">
              <span class="card-label">OBJETIVO 1 | DESINCHAÇO</span>
              <h3>Desinchar depois dos excessos</h3>
              <p>Elimine a retenção de líquidos acumulada nas festas e sinta seu corpo mais leve já nos primeiros dias.</p>
            </div>
            <div class="card-visual">
              <NuxtImg src="/images/cards/detox.webp" alt="Desinchaço" class="card-image" sizes="100vw sm:500px" quality="80" />
            </div>
          </div>

          <!-- Card 2 -->
          <div class="feature-card-item">
            <div class="card-content">
              <span class="card-label">OBJETIVO 2 | PERDA REAL</span>
              <h3>Perder peso de forma real</h3>
              <p>Nada de perder só água. Aprenda a estratégia para queimar gordura de verdade sem passar fome.</p>
            </div>
            <div class="card-visual">
              <NuxtImg src="/images/cards/weight.webp" alt="Perda de Peso" class="card-image" sizes="100vw sm:500px" quality="80" />
            </div>
          </div>

          <!-- Card 3 -->
          <div class="feature-card-item">
            <div class="card-content">
              <span class="card-label">OBJETIVO 3 | ROTINA</span>
              <h3>Organizar a alimentação</h3>
              <p>Sem dieta maluca. Um método simples para retomar a rotina e fazer escolhas melhores automaticamente.</p>
            </div>
            <div class="card-visual">
              <NuxtImg src="/images/cards/food.webp" alt="Alimentação Saudável" class="card-image" sizes="100vw sm:500px" quality="80" />
            </div>
          </div>

          <!-- Card 4 -->
          <div class="feature-card-item">
            <div class="card-content">
              <span class="card-label">OBJETIVO 4 | MINDSET</span>
              <h3>Começar o ano com direção</h3>
              <p>Troque a culpa por ação. Saiba exatamente o que fazer para ter resultados consistentes em 2026.</p>
            </div>
            <div class="card-visual">
              <NuxtImg src="/images/cards/direction.webp" alt="Direção e Foco" class="card-image" sizes="100vw sm:500px" quality="80" />
            </div>
          </div>
        </div>

        <div class="negatives">
          <p>Nada de cardápio impossível.</p>
          <p>Nada de contar calorias.</p>
          <p>Nada de começar a semana já se sentindo derrotada.</p>
        </div>
      </div>
    </section>

    <!-- Seção Interativa: Como Funciona -->
    <HowItWorks />



    <!-- Sessão 6 – O que você vai aprender nesses 7 dias? -->
    <!-- Sessão 6 – O que você vai aprender nesses 7 dias? -->
    <LearningSection />


    <!-- Sessão Animated Marquee Hero -->
    <AnimatedMarqueeHero 
      tagline="VIDAS REAIS"
      title="Quem recomeça, transforma"
      description="Não é mágica, é estratégia. Veja quem já passou pelo desafio e mudou completamente sua relação com o corpo e a comida."
      ctaText="Quero minha transformação"
      :images="feedbackImages"
    />



          
    <!-- Sessão Unificada: Detalhes Finais (Accordion Component) -->
    <DetailsAccordion />


    <!-- Sessão 11 – CTA final / Fechamento -->
    <section class="cta-final-section" id="cta-final">
      <div class="container">
        <div class="final-message">
          <p>Se você quer que 2026 seja diferente,</p>
          <p>o recomeço precisa ser diferente também.</p>
          <p>O RECOMEÇAR é o primeiro passo para transformar janeiro em ponto de virada, não em mais uma tentativa frustrada.</p>
        </div>
        <div class="cta-wrapper">
          <p>Clique no botão abaixo e garanta sua vaga gratuita</p>
          <TicketButton text="Quero RECOMEÇAR dia 26/01" />
        </div>
      </div>
    </section>



    <!-- Overlay de Blur no rodapé da página toda -->
    <div class="scroll-bottom-fade"></div>
  </div>
</template>

<style scoped>
.scroll-bottom-fade {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px; /* Mais alto para uma transição mais longa */
  
  /* Gradiente quase transparente (só um brilho) para deixar o BLUR aparecer */
  background: linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%);
  
  /* Blur intenso estilo "Frosted Glass" */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  /* Máscara para suavizar o topo do blur */
  mask-image: linear-gradient(to bottom, transparent 0%, black 60%, black 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 60%, black 100%);
  
  pointer-events: none;
  z-index: 9999;
}
</style>


