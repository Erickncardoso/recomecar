<script setup lang="ts">
import { Calendar, Smartphone, Users, ArrowRight, Medal } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue'

const scrollText = ref<HTMLElement | null>(null)


const handleScroll = () => {
  if (!scrollText.value) return
  
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
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
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
      <div class="hero-bg-image"></div>
      <div class="hero-overlay-shape"></div>
      
      <div class="container">
        <div class="hero-content-wrapper">
          <h1 class="hero-title">RECOMEÇAR</h1>
          <p class="hero-subtitle">7 dias para desinchar, destravar o emagrecimento e começar o ano do jeito certo</p>
          
          <InfoTicker />
          
          <div class="hero-badges" style="display: none;"> <!-- Ocultado temporariamente em favor do Ticker -->
            <div class="badge"><Calendar :size="18" /> 19 a 25 de janeiro</div>
            <div class="badge"><Smartphone :size="18" /> Desafio gratuito</div>
            <div class="badge"><Users :size="18" /> Grupo exclusivo no WhatsApp</div>
          </div>

          <div class="hero-separator">⸻</div>

          <TicketButton text="Quero RECOMEÇAR dia 19/01" />
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
              <img src="/images/cards/detox.png" alt="Desinchaço" class="card-image" />
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
              <img src="/images/cards/weight.png" alt="Perda de Peso" class="card-image" />
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
              <img src="/images/cards/food.png" alt="Alimentação Saudável" class="card-image" />
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
              <img src="/images/cards/direction.png" alt="Direção e Foco" class="card-image" />
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

    <!-- Sessão 7 – Sessão Clareza AO VIVO -->
    <section class="sessao-clareza-section" id="ao-vivo">
      <div class="container">
        
        <!-- Left Column: Header -->
        <div class="header-block">
          <span class="badge-date">📅 25 de JANEIRO</span>
          <h2>Sessão Clareza<br>AO VIVO</h2>
          <div class="description">
            <p>No último dia, teremos um encontro ao vivo exclusivo. É hora de fechar o ciclo.</p>
          </div>
          
          <div style="margin-bottom: 4rem;">
            <TicketButton />
          </div>
          
          <div class="insight-box">
             <p>"Aqui muita mulher percebe que o problema nunca foi falta de disciplina."</p>
          </div>
        </div>

        <!-- Right Column: Timeline List -->
        <div class="timeline-list">
          <!-- Item 1 -->
          <div class="timeline-item">
            <div class="item-meta">
              ETAPA 1
            </div>
            <div class="item-content">
              <h3>Pesagem final</h3>
              <p>Vamos conferir os resultados reais de 7 dias de estratégia.</p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="timeline-item">
            <div class="item-meta">
              ETAPA 2
            </div>
            <div class="item-content">
              <h3>Diagnóstico coletivo</h3>
              <p>Análise profunda do que funcionou e o que precisa de ajuste.</p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="timeline-item">
            <div class="item-meta">
              ETAPA 3
            </div>
            <div class="item-content">
              <h3>Identificação de erros</h3>
              <p>Entenda os gatilhos que te impediram de ter consistência antes.</p>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="timeline-item">
            <div class="item-meta">
              ETAPA 4
            </div>
            <div class="item-content">
              <h3>Direcionamento claro</h3>
              <p>O próximo passo prático para manter a evolução em 2026.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Sessão Animated Marquee Hero -->
    <AnimatedMarqueeHero 
      tagline="VIDAS REAIS"
      title="Quem recomeça, transforma"
      description="Não é mágica, é estratégia. Veja quem já passou pelo desafio e mudou completamente sua relação com o corpo e a comida."
      ctaText="Quero minha transformação"
      :images="feedbackImages"
    />

    <!-- Sessão 8 – Premiações -->
    <section class="premios-section" id="premios">
      <div class="container">
        <h2>Premiações</h2>
        <div class="podium-grid">
          <!-- 2nd Place -->
          <div class="podium-card second-place">
            <div class="medal-icon">
              <Medal :size="48" color="#94a3b8" />
              <span class="rank">2</span>
            </div>
            <h3>2º lugar</h3>
            <p class="prize-desc">Ebook: Sessão de avaliação nutricional e comportamental</p>
          </div>

          <!-- 1st Place -->
          <div class="podium-card first-place">
            <div class="medal-icon">
              <Medal :size="64" color="#fbbf24" fill="#fbbf24" fill-opacity="0.2" />
              <span class="rank">1</span>
            </div>
            <h3>1º lugar</h3>
            <p class="prize-desc">Sessão de Rastreamento metabólico e Diagnóstico do perfil de emagrecimento</p>
          </div>

          <!-- 3rd Place -->
          <div class="podium-card third-place">
             <div class="medal-icon">
              <Medal :size="48" color="#b45309" />
              <span class="rank">3</span>
            </div>
            <h3>3º lugar</h3>
            <p class="prize-desc">Ebook: Receitas práticas de jantar que minhas pacientes AMAM</p>
          </div>
        </div>
      </div>
    </section>


          
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
          <TicketButton text="Quero RECOMEÇAR dia 19/01" />
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


