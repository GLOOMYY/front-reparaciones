'use client'

import { useState, useEffect } from 'react'
import { fetchClients } from "@/lib/data"
import type { Client } from "@/types/clients"
import type { Data } from "@/types/data"
import { ClientForm } from "@/app/dashboard/components/clients/client-form"
import { PaginationDemo } from "@/app/dashboard/components/pagination"
import { CreateClient, RetrieveClient, UpdateClient, DeleteClient } from "@/app/dashboard/components/clients/buttons"

import Link from "next/link"
import {
  UserRoundPlus,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const itemsPage = 10;

export const ClientsTable = ({
  query,
  currentPage,
  onSelectClient,
}: {
  query: string;
  currentPage: number;
  onSelectClient: (client: Client) => void;
}) => {
  const [clients, setClients] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const loadClients = async () => {
    const data: Data = await fetchClients(query, currentPage);
    const total = Math.ceil(data.count / itemsPage);
    const clients = data.results;
    setTotalPages(total);
    setClients(clients);
  };

  useEffect(() => {
    loadClients();
  }, [query, currentPage]);

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Clients</CardTitle>
          <CardDescription>Your clients here.</CardDescription>
        </div>
        <Button onClick={openModal} asChild size="sm" className="ml-auto gap-1">
          <div>
            Create Client
            <UserRoundPlus className="h-4 w-4" />
          </div>
        </Button>
        <ClientForm
          isOpen={isOpen}
          onClose={() => {
            closeModal();
            loadClients();
          }}
        />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead className="hidden xl:table-column">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients?.map((client: Client) => (
              <TableRow key={client.id}>
                <TableCell>
                  <div className="font-medium">{client.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">{client.email}</div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    {/* Llamamos a onSelectClient al hacer clic */}
                    <Button onClick={() => onSelectClient(client)}>View Details</Button>
                    {/* <Link
                      href={`/dashboard/clients/${id}/edit`}
                      className="rounded-md border p-2 hover:bg-gray-100"
                    >
                      <CircleEllipsis className="w-5" />
                    </Link> */}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <PaginationDemo totalPages={totalPages} />
      </CardFooter>
    </Card>
  );
};

