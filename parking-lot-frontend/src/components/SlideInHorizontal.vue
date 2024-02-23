<template>
    <Transition :name="animationName">
      <div :style="style" v-show="show">
        <slot></slot>
      </div>
    </Transition>
  </template>
  
  <script>
  export default {
    props: {
      animationName: {
        type: String,
        default: 'slide-in-horizontal'
      },
      duration: {
        type: Number,
        default: 300
      },
      delay: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        show: false,
        style: {}
      }
    },
    mounted() {
      this.show = true;
      this.style = {
        transition: `all ${this.duration}ms ${this.delay}ms ease-in-out`,
        transform: 'translateX(100%)'
      };
      setTimeout(() => {
        this.style.transform = 'translateX(0)';
      }, 10);
    }
  }
  </script>
  
  <style>
  .slide-in-horizontal-enter-active {
    animation: slide-in-horizontal 0.3s ease-in-out forwards;
  }
  
  .slide-in-horizontal-leave-active {
    animation: slide-in-horizontal 0.3s ease-in-out reverse forwards;
  }
  
  @keyframes slide-in-horizontal {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  </style>