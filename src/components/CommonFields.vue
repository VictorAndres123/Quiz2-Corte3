<template>
    <div>
      <p>Código: {{ item.code }}</p>
      <p>Nombre: {{ item.name }}</p>
      <p>Descripción: {{ item.description }}</p>
      <p>Estado: {{ item.status }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object // Objeto que contiene los datos comunes
    }
  }
  </script>
  
  