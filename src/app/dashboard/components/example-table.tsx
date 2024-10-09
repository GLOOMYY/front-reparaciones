'use client'

import { useState, useEffect } from 'react'
import { ClientForm } from "../../../../por borrar/client-form"
import { PaginationDemo } from "@/app/dashboard/components/pagination"

import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
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

export interface TableInfo {
    title: string;
    model: string;
    headers: string[];
}

export const ExampleTable = ({
    fetchData,
    fetchDataPages,
    query,
    currentPage,
    tableInfo,
}: {
    fetchData: () => string[];
    fetchDataPages: (query) => number;
    query: string;
    currentPage: number;
    tableInfo: TableInfo;
}) => {
    const [data, setData] = useState(null);
    const [totalPages, setTotalPages] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    
    // const totalPages = fetchClientsPages(query);

    const loadData = async () => {
        const data = await fetchData()
        const total = await fetchDataPages(query)
        setTotalPages(total)
        setData(data)
    };

    useEffect(() => {
        loadData()
    }, [])

    return (
        <Card
                className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
              >
                <CardHeader className="flex flex-row items-center">
                  <div className="grid gap-2">
                    <CardTitle>{tableInfo.title}</CardTitle>
                    <CardDescription>
                      Your {tableInfo.model} here.
                    </CardDescription>
                  </div>
                  <Button onClick={openModal} asChild size="sm" className="ml-auto gap-1">
                    <div>
                      Create {tableInfo.model}
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Button>
                  <ClientForm 
                    isOpen={isOpen}
                    onClose={() => {
                      closeModal();
                      loadData();
                    }} 
                  />
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                        <TableRow>
                        {
                            tableInfo.headers.map((header) => {
                                return (
                                    <TableHead>{header}</TableHead>
                                )
                            })
                        }
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data?.map((datum) => {
                                return (
                                    <TableRow key={client.id} >
                                        <TableCell>
                                        <div className="font-medium">{client.name}</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            {client.email}
                                        </div>
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                        Sale
                                        </TableCell>
                                        <TableCell className="hidden xl:table-column">
                                        <Badge className="text-xs" variant="outline">
                                            Approved
                                        </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                        2023-06-23
                                        </TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  {/* <PaginationDemo totalPages={totalPages}/> */}
                </CardFooter>
              </Card>
    )
};

export default ExampleTable;