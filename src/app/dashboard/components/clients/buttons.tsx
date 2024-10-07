'use client'

import { useState, useEffect } from "react"
import {
  Pencil,
  Trash2,
  CircleEllipsis,
  TrashIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { deleteClientWithId } from "@/lib/actions"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const UpdateClient = ({id}: {id: string}) => {
    return (
        <Button size="sm" variant="outline" className="h-8 gap-1" >
            <Pencil className="h-4 w-4" />
        </Button>
)}


export const DeleteClient = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(false)
    const [deleted, setDeleted] = useState(false)
  
    const handleDelete = async (event: React.FormEvent) => {
      event.preventDefault()
      setLoading(true)
      try {
        await deleteClientWithId(id)
        console.log("Cliente eliminado con éxito")
        setDeleted(true) // Marca que se ha eliminado
      } catch (error) {
        console.error("Error al eliminar el cliente", error)
      } finally {
        setLoading(false)
      }
    }
  
    // Redirige después de que se haya eliminado el cliente
    useEffect(() => {
      if (deleted) {
        window.location.href = "/dashboard/clients" // Redirección
      }
    }, [deleted])
  
    return (
      <form onSubmit={handleDelete}>
        <Button
          size="sm"
          variant="outline"
          className="h-8 gap-1"
          disabled={loading}
        >
          {loading ? "Eliminando..." : <Trash2 className="h-4 w-4" />}
        </Button>
      </form>
    )
  }