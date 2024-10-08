'use client'

import { DeleteServiceTypeWithId } from "@/lib/actions"

import { useState, useEffect } from "react"
import {
  Pencil,
  Trash2,
  CircleEllipsis,
  TrashIcon,
  UserRoundPlus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const ServiceTypeDelete = ({ id }: { id: string|number }) => {
    const [loading, setLoading] = useState(false)
    const [deleted, setDeleted] = useState(false)
  
    const handleDelete = async (event: React.FormEvent) => {
      event.preventDefault()
      setLoading(true)
      try {
        await DeleteServiceTypeWithId(id)
        console.log("Tipo de servicio eliminado con éxito")
        setDeleted(true) // Marca que se ha eliminado
      } catch (error) {
        console.error("Error al eliminar el Tipo de servicio", error)
      } finally {
        setLoading(false)
      }
    }
  
    // Redirige después de que se haya eliminado el cliente
    useEffect(() => {
      if (deleted) {
        window.location.reload();
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