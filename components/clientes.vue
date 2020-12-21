<template>
  <div>
    <h2>Tabla Clientes</h2>
    <div>
      <input
        placeholder="Nombre"
        type="text"
        v-model="nuevoCliente.nombre">
      <button @click="agregarCliente()">Agregar cliente</button>
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
        <tr v-for="cliente in getClientes" :key="cliente.id">
          <td>
            {{cliente.nombre}}
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
      nuevoCliente: {
        nombre: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPersonas'
    ])
  },
  mounted() {
    this.obtenerClientes()
  },
  methods: {
    ...mapActions([
      'llenarClientes'
    ]),
    async obtenerClientes() {
      this.$axios.get('/clientes').then(clientes => {
        this.llenarClientes(clientes)
      })
    },
    agregarCliente() {
      this.$axios.post('/clientes', this.nuevoCliente).then(() => {
        this.obtenerClientes()
      })
    }
  }
}
</script>
