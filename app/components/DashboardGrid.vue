<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, User, MessageSquare, BarChart2, CheckCircle, Clock } from 'lucide-vue-next'

const cards = ref([
  {
    title: 'Resumo de Hoje',
    description: 'Acompanhe suas métricas diárias em tempo real.',
    icon: BarChart2,
    color: '#3b82f6', // blue
    mockContent: 'graph'
  },
  {
    title: 'Próximas Reuniões',
    description: 'Gestão visual de sua agenda e compromissos.',
    icon: Calendar,
    color: '#a855f7', // purple
    mockContent: 'calendar'
  },
  {
    title: 'Análise de Documentos',
    description: 'Revisão automática e riscos jurídicos detectados.',
    icon: CheckCircle,
    color: '#10b981', // green
    mockContent: 'text'
  },
  {
    title: 'Chat com IA',
    description: 'Assistente jurídico disponível 24/7 para dúvidas.',
    icon: MessageSquare,
    color: '#f59e0b', // amber
    mockContent: 'chat'
  },
  {
    title: 'Gestão de Clientes',
    description: 'CRM completo integrado ao seu fluxo de trabalho.',
    icon: User,
    color: '#ef4444', // red
    mockContent: 'list'
  },
  {
    title: 'Histórico de Atividades',
    description: 'Timeline detalhada de todas as interações.',
    icon: Clock,
    color: '#6366f1', // indigo
    mockContent: 'timeline'
  }
])
</script>

<template>
  <section class="dashboard-grid-section">
    <div class="container">
      <div class="cards-grid">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="dashboard-card"
        >
          <!-- Mock Window Header -->
          <div class="card-header">
            <div class="window-controls">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
          </div>
          
          <!-- Card Content -->
          <div class="card-body">
            <div class="icon-box" :style="{ backgroundColor: card.color + '20', color: card.color }">
              <component :is="card.icon" :size="24" />
            </div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
            
            <!-- Visual Mock Element (Abstract representation of dashboard UI) -->
            <div class="mock-ui-element" :class="card.mockContent">
              <div v-if="card.mockContent === 'graph'" class="mock-graph">
                 <div class="bar" style="height: 40%"></div>
                 <div class="bar" style="height: 70%"></div>
                 <div class="bar" style="height: 50%"></div>
                 <div class="bar" style="height: 85%"></div>
              </div>
              <div v-if="card.mockContent === 'calendar'" class="mock-calendar">
                 <div class="cal-header"></div>
                 <div class="cal-grid"></div>
              </div>
              <div v-if="card.mockContent === 'text'" class="mock-text">
                 <div class="line w-75"></div>
                 <div class="line w-50"></div>
                 <div class="line w-90"></div>
              </div>
              <div v-if="card.mockContent === 'chat'" class="mock-chat">
                 <div class="msg left"></div>
                 <div class="msg right"></div>
              </div>
               <div v-if="card.mockContent === 'list'" class="mock-list">
                 <div class="list-item"></div>
                 <div class="list-item"></div>
                 <div class="list-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scoped styles mainly for specific mock UI internal structure, global layout in scss file */
.mock-ui-element {
  margin-top: 1.5rem;
  background: #111827;
  border-radius: 8px;
  height: 100px;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center; 
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #1f2937;
}

/* Mock Graphics */
.mock-graph { display: flex; align-items: flex-end; gap: 8px; height: 100%; width: 100%; justify-content: space-around; }
.mock-graph .bar { width: 12px; background: #3b82f6; border-radius: 2px 2px 0 0; opacity: 0.8; }

.mock-calendar { width: 100%; height: 100%; display: flex; flex-direction: column; gap: 4px; }
.cal-header { height: 12px; background: #a855f7; border-radius: 2px; width: 40%; }
.cal-grid { flex: 1; background: radial-gradient(#374151 1px, transparent 1px); background-size: 8px 8px; }

.mock-text { width: 100%; display: flex; flex-direction: column; gap: 8px; }
.mock-text .line { height: 6px; background: #10b981; border-radius: 4px; opacity: 0.6; }
.w-75 { width: 75%; } .w-50 { width: 50%; } .w-90 { width: 90%; }

.mock-chat { width: 100%; display: flex; flex-direction: column; gap: 8px; }
.msg { height: 16px; width: 60%; border-radius: 8px; }
.msg.left { background: #374151; align-self: flex-start; border-bottom-left-radius: 2px; }
.msg.right { background: #f59e0b; align-self: flex-end; border-bottom-right-radius: 2px; opacity: 0.8; }

.mock-list { width: 100%; display: flex; flex-direction: column; gap: 8px; }
.list-item { height: 12px; width: 100%; background: #374151; border-radius: 4px; }
</style>
