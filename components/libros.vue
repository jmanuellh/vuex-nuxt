<template>
  <div>
    <h2>Tabla libros vendidos</h2>
    <div>
      <input
        placeholder="Nombre"
        type="text"
        v-model="nuevoLibro.nombre">
      <input
        placeholder="clienteId"
        type="number"
        v-model.number="nuevoLibro.clienteId">
      <button @click="agregarLibro()">Agregar libro vendido</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>
            Id
          </th>
          <th>
            Nombre
          </th>
          <th>
            Cliente
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in getLibros" :key="libro.id">
          <td>
            {{libro.id}}
          </td>
          <td>
            {{libro.nombre}}
          </td>
          <td>
            {{libro.cliente.nombre}}
          </td>
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
        nombre: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getLibros'
    ])
  },
  mounted() {
    this.obtenerLibros()
  },
  methods:{
    ...mapActions([
      'llenarLibros'
    ]),
    agregarLibro() {
      this.$axios.post('/libros', this.nuevoLibro).then(() => {
        this.obtenerLibros()
      })
    },
    obtenerLibros() {
      this.$axios.get('/libros').then(response => {
        this.llenarLibros(response.data)
      })
    }
  }
}
</script>