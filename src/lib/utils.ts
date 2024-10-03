import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isoToDate = (isoDate: string) => {
  const date = new Date(isoDate);
  
  // Obtener el día, mes y año
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
  const year = date.getUTCFullYear();
  
  // Formatear la fecha como DD/MM/YYYY
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;

}