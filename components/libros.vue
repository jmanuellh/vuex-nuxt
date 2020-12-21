<template>
  <div>
    <h2>Tabla libros vendidos</h2>
    <div>
      <input
        placeholder="Nombre"
        type="text"
        v-model="nuevoLibro.nombre">
      <input
        placeholder="Nombre cliente"
        type="text"
        v-model="nuevoLibro.nombreCliente">
      <button @click="agregarLibro()">Agregar libro vendido</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>
            Nombre
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in getLibros" :key="libro.id">
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      nuevoLibro: {
        nombre: '',
        nombrePersona: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getLibros'
    ])
  },
  methods:{
    ...mapActions([
      'llenarLibros'
    ]),
    agregarLibro() {
      this.$axios.post('/libros', this.nuevoLibro).then(libros => {
        this.llenarLibros(libros)
      })
    }
  }
}
</script>