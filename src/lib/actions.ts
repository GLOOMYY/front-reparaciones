import api from "@/lib/api"
import { Client } from "@/types/clients";
import { ServiceType } from "@/types/services";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

// Routes
const clientRoute = "/users/client"
const serviceTypeRoute = "/services/service-type"


// Client Actions

export const createClient = async (clientData: Client) => {
    try {
      const response = await api.post(`${clientRoute}/create`, clientData);
      console.log("Cliente creado:", response.data);
      return response.data; // Devuelve los datos del cliente creado
    } catch (error) {
      console.error("Error al crear el cliente:", error.response ? error.response.data : error.message);
      throw new Error("Error al crear el cliente")
    }
  };

export const updateClient = async (clientData : Client) => {
  try {
    const response = await api.put(`${clientRoute}/update/${clientData.id}`, clientData);
    return response.data; // Devuelve los datos del cliente creado
  } catch (error) {
    console.error("Error al crear el cliente:", error.response ? error.response.data : error.message);
    throw new Error("Error al crear el cliente")
  }
};
  

export const deleteClientWithId = async (clientId: string|number) => {
  try {
    const response = await api.delete(`${clientRoute}/destroy/${clientId}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error al eliminar el cliente", error.response ? error.response.data : error.message)
    throw new Error("Error al eliminar el cliente")
  }
};



// Service Type Actions

export const createServiceType = async (serviceTypeData: ServiceType) => {
  try {
    const response = await api.post(`${serviceTypeRoute}/create`, serviceTypeData)
    console.log("Tipo de servicio creado:", response.data)
    return response.data
  } catch (error) {
    console.error("Error al crear el tipo de servicio:", error.response ? error.response.data : error.message);
    throw new Error("Error al crear el tipo de servicio")
  }
};

export const updateServiceType = async (ServiceTypeData: ServiceType) => {
  try {
    const response = await api.put(`${serviceTypeRoute}/update/${ServiceTypeData.id}`, ServiceTypeData)
    return response.data
  } catch (error) {
    console.error("Error al actualizar el tipo de servicio:", error.response ? error.response.data : error.message);
    throw new Error("Error al actualizar el tipo de servicio")
  }
};

export const DeleteServiceTypeWithId = async (ServiceTypeId: string|number) => {
  try {
    const response = await api.delete(`${serviceTypeRoute}/destroy/${ServiceTypeId}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error al eliminar el tipo de servicio:", error.response ? error.response.data : error.message);
    throw new Error("Error al eliminar el tipo de servicio")
  }
};