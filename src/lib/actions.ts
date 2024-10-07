import api from "@/lib/api"
import { Client } from "@/types/clients";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export const createClient = async (clientData: Client) => {
    try {
      const response = await api.post('/users/client/create', clientData);
      console.log('Cliente creado:', response.data);
      return response.data; // Devuelve los datos del cliente creado
    } catch (error) {
      console.error('Error al crear el cliente:', error.response ? error.response.data : error.message);
      throw new Error("Error al crear el cliente")
    }
  };

export const deleteClientWithId = async (clientId: string) => {
  try {
    const response = await api.delete(`/users/client/destroy/${clientId}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error al eliminar el cliente', error.response ? error.response.data : error.message)
    throw new Error("Error al eliminar el cliente")
  }
}

export const updateClient = async (clientData : Client) => {
  try {
    const response = await api.put(`/users/client/update/${clientData.id}`, clientData);
    console.log('Cliente creado:', response.data);
    return response.data; // Devuelve los datos del cliente creado
  } catch (error) {
    console.error('Error al crear el cliente:', error.response ? error.response.data : error.message);
    throw new Error("Error al crear el cliente")
  }
}