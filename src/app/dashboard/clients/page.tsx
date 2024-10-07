'use client'
import { ClientsTable } from "@/app/dashboard/components/clients/clients-table";
import { Detail } from "@/app/dashboard/components/clients/detail";
import { Resume } from "@/app/dashboard/components/clients/resume";
import { useState } from "react";

export const Page = ({ searchParams }: { searchParams?: { query?: string; page?: string } }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  // Estado para el cliente seleccionado
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Resume />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <ClientsTable
            query={query}
            currentPage={currentPage}
            onSelectClient={setSelectedClient} // Pasamos la función para seleccionar cliente
          />
          {/* Mostrar el detalle solo si hay un cliente seleccionado */}
          {selectedClient && <Detail client={selectedClient} />}
        </div>
      </main>
    </div>
  );
};

export default Page;
