<template>
    <div>
      <common-component :item="role"></common-component>
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
        role: {
          code: 'R001',
          name: 'Rol 1',
          description: 'Descripción del rol 1',
          status: 'Activo'
        }
      }
    }
  }
  </script>
  