import api from "@/lib/api"
import type { Data } from "@/types/data"

export const fetchServices = async (query: string, page: number): Promise<Data> => {
  try {
    const response = await api.get(`/services/resume/service?page=${page}`)
    const data: Data = {
      results: response.data.results,
      count: response.data.count
    }
    return data
  } catch (error) {
    console.error('Error al hacer la peticion GET', error)
    throw new Error('Error al obtener los servicios');

  }
}

export const fetchServicesByClient = async (clientId: number): Promise<Data> => {
  try {
    const response = await api.get(`/services/resume/service?page=1&client=${clientId}`);
    const data: Data = {
      results: response.data.results,
      count: response.data.count
    }
    return data
  } catch (error) {
    console.error('Error al hacer la peticion GET', error)
    throw new Error('Error al obtener los servicios');

  }
}

export const fetchClients = async (query: string, page: number): Promise<Data> => {
  try {
    const response = await api.get(`/users/client/list?page=${page}`)
    const data: Data = {
      results: response.data.results,
      count: response.data.count
    }
    return data
  } catch (error) {
    console.error('Error al hacer la peticion GET', error)
    throw new Error('Error al obtener los clientes');
  }
}

export const fetchServiceType = async (query:string, page: number): Promise<Data> => {
  try {
    const response = await api.get(`/services/service-type/list?page=${page}`)
    const data: Data = {
      results: response.data.results,
      count: response.data.count
    }
    return data
  } catch (error) {
    console.error('Error al hacer la peticion GET', error)
    throw new Error('Error al obtener los tipos de servicio');
  }
}