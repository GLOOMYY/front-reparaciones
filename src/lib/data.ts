import api from "@/lib/api"

export const fetchServices = async () => {
  try {
    const response = await api.get('/api/v1/services/service/list')
    return response.data
  } catch (error) {
    console.error('Error al hacer la peticion GET', error)
  }
}
  