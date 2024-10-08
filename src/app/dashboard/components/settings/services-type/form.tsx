import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createServiceType, updateServiceType } from "@/lib/actions";
import { ServiceType } from '@/types/services';

interface ServiceTypeFormProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: ServiceType;  // Optional: if provided, the form will be in "edit" mode.
}

export const ServiceTypeForm: React.FC<ServiceTypeFormProps> = ({ isOpen, onClose, serviceType }) => {
  const [name, setName] = useState(serviceType?.name || '');

  useEffect(() => {
    if (serviceType) {
      setName(serviceType.name);
    } else {
      setName('');
    }
  }, [serviceType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceTypeData: ServiceType = {
      id: serviceType?.id, // Solo enviamos el id si estamos editando
      name,
    };

    try {
      if (serviceType) {
        // Si el serviceType existe, estamos en modo edición
        await updateServiceType(serviceTypeData);
      } else {
        // Si no, estamos creando un nuevo serviceType
        await createServiceType(serviceTypeData);
      }
      onClose(); // Cerrar el diálogo tras la acción
    } catch (error) {
      alert('There was an error');
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel>
          <form onSubmit={handleSubmit} className="mt-4">
            <Card className="mx-auto max-w-sm">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {serviceType ? 'Update Service Type' : 'New Service Type'}
                </CardTitle>
                <CardDescription>
                  {serviceType ? 'Edit the name of the service type' : 'Enter the name of the new service type'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      placeholder="Service Type Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mt-2 flex justify-end">
                    <Button type="submit">{serviceType ? 'Update Service Type' : 'Create Service Type'}</Button>
                    <Button type="button" onClick={onClose} className="ml-2">Cancel</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
