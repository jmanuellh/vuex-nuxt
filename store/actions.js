export default {
  llenarClientes({commit}, clientes) {
    commit('LLENAR_CLIENTES', clientes)
  },
  llenarLibros({commit}, libros) {
    commit('LLENAR_LIBROS', libros)
  },
}
