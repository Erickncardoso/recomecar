<script setup lang="ts">
import { Ticket } from 'lucide-vue-next';

defineProps({
  text: {
    type: String,
    default: 'Garantir ingresso'
  }
})
</script>

<template>
  <button class="ticket-btn">
    <span class="fill-layer"></span>
    <span class="icon-wrapper">
      <Ticket :size="20" />
    </span>
    <span class="label">{{ text }}</span>
  </button>
</template>

<style scoped lang="scss">
.ticket-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.35rem 0.35rem 0.35rem; 
  padding-right: 2rem;
  background-color: #000000; // Default Black
  border: 2px solid transparent; // Increased border width
  border-radius: 9999px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  color: #ffffff; // Text White
  isolation: isolate;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #000000; // Keep definition? Or transparent. White fill on White bg needs border or shadow.
    // Let's use Black border to define the white button.
    
    .fill-layer {
      width: 100%; 
    }
    
    .label {
      color: #000000; // Text turns Black
    }
    
    .icon-wrapper {
        background-color: transparent; 
        color: #000000; // Icon turns Black
    }
  }
}

.icon-wrapper {
  position: relative;
  z-index: 2;
  width: 42px; 
  height: 42px;
  background-color: #ffffff; // White Circle
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000; // Black Icon
  flex-shrink: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.fill-layer {
  position: absolute;
  left: 0; 
  top: 0;
  bottom: 0;
  width: 54px; 
  background-color: #ffffff; // White Fill
  border-radius: 9999px; 
  z-index: 1; 
  transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1); 
}

.label {
  position: relative;
  z-index: 2;
  margin-left: 1rem;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}
</style>
