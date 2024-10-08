'use client'
 
import { useState, useEffect } from 'react'
import { fetchServiceType } from "@/lib/data"
import { ServiceType } from "@/types/services"
import { PaginationDemo } from "@/app/dashboard/components/pagination"
import { ServiceTypeForm } from "@/app/dashboard/components/settings/services-type/create"
import { ServiceTypeEdit } from "@/app/dashboard/components/settings/services-type/edit"
import { ServiceTypeDelete } from "@/app/dashboard/components/settings/services-type/delete"

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
  Pencil,
  Trash2,
  CircleEllipsis,
  TrashIcon,
  UserRoundPlus,
  BadgePlus,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { useRouter } from 'next/navigation';

const itemsPage = 10;

export const ServicesTypeTable = ({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) => {
    const [serviceTypes, setServiceType] = useState<ServiceType[] | null>(null);
    const [totalPages, setTotalPages] = useState<number | null>(null);
  
    // Create Form
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const openModalCreate = () => setIsOpenCreate(true);
    const closeModalCreate = () => setIsOpenCreate(false);
  
    // Edit Form - almacena el serviceType que se está editando
    const [serviceTypeToEdit, setServiceTypeToEdit] = useState<ServiceType | null>(null);
    const openModalEdit = (serviceType: ServiceType) => setServiceTypeToEdit(serviceType);
    const closeModalEdit = () => setServiceTypeToEdit(null);
  
    const loadServiceType = async () => {
      const data = await fetchServiceType(query, currentPage);
      const total = Math.ceil(data.count / itemsPage);
      const servicesType = data.results;
      setTotalPages(total);
      setServiceType(servicesType);
    };
  
    useEffect(() => {
      loadServiceType();
    }, [query, currentPage]);
  
    return (
      <Tabs defaultValue="week">
        <TabsContent value="week">
          <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
              <CardTitle>Services Types</CardTitle>
              <CardDescription>
                Type of Services you currently offer
              </CardDescription>
              <Button onClick={openModalCreate} asChild size="sm" className="ml-auto gap-1">
                <div>
                  New Service Type
                  <BadgePlus className="h-4 w-4" />
                </div>
              </Button>
              <ServiceTypeForm
                isOpen={isOpenCreate}
                onClose={() => {
                  closeModalCreate();
                  window.location.reload();
                }}
              />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceTypes?.map((serviceType: ServiceType) => (
                    <TableRow key={serviceType.id} className="bg-accent">
                      <TableCell>
                        <div className="font-medium">{serviceType.name}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {serviceType.id}
                        </div>
                      </TableCell>
                      <TableCell className="flex ml-auto">
                        <div className="ml-auto flex gap-1">
                            <Button
                            size="sm"
                            variant="outline"
                            className="h-8 gap-1"
                            onClick={() => openModalEdit(serviceType)}
                            >
                                <Pencil className="h-4 w-4" />
                            </Button>
                            {/* <Button size="sm" variant="outline" className="h-8 gap-1">
                            <Trash2 className="h-4 w-4" />
                            </Button> */}
                            <ServiceTypeDelete id={serviceType.id} />
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
  
          {/* Modal de edición */}
          {serviceTypeToEdit && (
            <ServiceTypeEdit
              serviceType={serviceTypeToEdit}
              isOpen={!!serviceTypeToEdit}
              onClose={() => {
                closeModalEdit();
                window.location.reload();
              }}
            />
          )}
        </TabsContent>
      </Tabs>
    );
  };
  
  

  
