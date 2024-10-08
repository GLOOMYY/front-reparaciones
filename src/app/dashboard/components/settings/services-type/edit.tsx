import React, { useState, useEffect } from 'react';
import { updateServiceType } from "@/lib/actions";
import { Dialog } from '@headlessui/react';
import { Button } from "@/components/ui/button";
import { ServiceType } from '@/types/services';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: ServiceType;
}

export const ServiceTypeEdit: React.FC<ModalPopupProps> = ({ isOpen, onClose, serviceType }) => {
  const [id, setId] = useState(serviceType.id);
  const [name, setName] = useState(serviceType.name);

  // Use useEffect to update the state when the client prop changes
  useEffect(() => {
    setId(serviceType.id)
    setName(serviceType.name);
  }, [serviceType]); // This effect runs every time the `client` prop changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceTypeData: ServiceType = {
      id: serviceType.id,
      name,
    };

    try {
      updateServiceType(serviceTypeData);
      onClose();
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
            <Card className="mx-auto max-w-sm" >
              <CardHeader>
                <CardTitle className="text-2xl">
                  Update Service Type
                </CardTitle>
                <CardDescription>
                  Enter the name of the new service type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">
                      Name
                    </Label>
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
                    <Button type="submit">Update Service Type</Button>
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
