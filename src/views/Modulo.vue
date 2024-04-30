<template>
    <div>
      <common-component :item="module"></common-component>
      <p>Ruta: {{ module.route }}</p>
    </div>
  </template>
  
  <script>
  import CommonComponent from './CommonComponent.vue';
  
  export default {
    components: {
      CommonComponent
    },
    data() {
      return {
        module: {
          code: 'M001',
          name: 'Módulo 1',
          description: 'Descripción del módulo 1',
          status: 'Activo',
          route: '/ruta-del-modulo-1'
        }
      }
    }
  }
  </script>
  