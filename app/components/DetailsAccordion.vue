<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, AlertTriangle, Check, HelpCircle } from 'lucide-vue-next'

const activeItem = ref<string | null>('importante')

const toggle = (val: string) => {
  activeItem.value = activeItem.value === val ? null : val
}
</script>

<template>
  <section class="details-accordion-section" id="details">
    <div class="container">
      <div class="layout-grid">
        
        <!-- Left Column: Sticky Heading -->
        <div class="left-col">
          <h2>Dúvidas sobre o formato?</h2>
          <p class="subtitle">
            Entenda exatamente como funciona a estratégia e se ela é o momento ideal para você.
          </p>
          <div class="support-link">
             <HelpCircle :size="20" />
             <span>Ainda com dúvida? <a href="#">Chame a nutri</a></span>
          </div>
        </div>

        <!-- Right Column: Accordion List -->
        <div class="right-col">
          
          <!-- Item 1: General (Importante) -->
          <div class="accordion-group">
            <h3>O que NÃO É</h3>
            <div class="accordion-item" :class="{ 'is-open': activeItem === 'importante' }">
              <button class="accordion-trigger" @click="toggle('importante')">
                <span>Importante você saber</span>
                 <ChevronDown :size="20" class="chevron" />
              </button>
              <div class="accordion-content">
                <div class="inner-content">
                  <div class="warning-list">
                    <div class="w-item"><span class="cross">✕</span> Não é milagre</div>
                    <div class="w-item"><span class="cross">✕</span> Não é dieta restritiva</div>
                    <div class="w-item"><span class="cross">✕</span> Não é sofrimento</div>
                  </div>
                  <p class="highlight">É estratégia.</p>
                  <p class="desc">Quando a estratégia muda, o resultado muda.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Item 2: Target (Para Quem) -->
          <div class="accordion-group">
            <h3>Para quem É</h3>
            <div class="accordion-item" :class="{ 'is-open': activeItem === 'quem' }">
              <button class="accordion-trigger" @click="toggle('quem')">
                <span>Para quem é o RECOMEÇAR?</span>
                <ChevronDown :size="20" class="chevron" />
              </button>
              <div class="accordion-content">
                <div class="inner-content">
                  <ul class="target-list">
                    <li><Check :size="16" class="check" /> Mulheres que querem emagrecer</li>
                    <li><Check :size="16" class="check" /> Cansadas de errar sozinhas</li>
                    <li><Check :size="16" class="check" /> Querem começar o ano certo</li>
                    <li><Check :size="16" class="check" /> Precisam de clareza</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  </section>
</template>
