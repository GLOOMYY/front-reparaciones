// src/components/ClientForm.tsx
import React, { useEffect, useState } from 'react';
import { createClient, updateClient } from "@/lib/actions";
import { Dialog } from '@headlessui/react';
import { Button } from "@/components/ui/button";
import { Client } from '@/types/clients';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



interface ClientFormProps {
  isOpen: boolean;
  onClose: () => void;
  client?: Client; // Optional prop for editing
}


export const ClientForm: React.FC<ClientFormProps> = ({ isOpen, onClose, client }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(1);

  // Use effect para llenar el formulario en caso de edición
  useEffect(() => {
    if (client) {
      setName(client.name);
      setEmail(client.email);
      setAddress(client.address);
      setPhone(client.phone);
      setUser(client.user);
    } else {
      // Reiniciar valores si no hay cliente (modo creación)
      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setUser(1);
    }
  }, [client, isOpen]); // Se reinicia en cada apertura del modal

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clientData: Client = {
      id: client?.id, // Solo se agrega el id si existe
      name,
      email,
      address,
      phone,
      user,
    };

    try {
      if (client) {
        updateClient(clientData); // Si hay cliente, actualiza
      } else {
        createClient(clientData); // Si no hay cliente, crea
      }
      onClose(); // Cerrar el modal
    } catch (error) {
      alert('Hubo un error');
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
                  {client ? 'Update Client' : 'New Client'}
                </CardTitle>
                <CardDescription>
                  {client ? 'Edit the name of the Client' : 'Enter the name of the new Client'}
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
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Address</Label>
                        <Input
                            id="address"
                            type="text"
                            value={address}
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Phone</Label>
                        <Input
                            id="phone"
                            type="text"
                            value={phone}
                            placeholder="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end">
                    <Button type="submit">{client ? 'Update Client' : 'Create Client'}</Button>
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
