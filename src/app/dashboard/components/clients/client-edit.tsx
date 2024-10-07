import React, { useState, useEffect } from 'react';
import { updateClient } from "@/lib/actions";
import { Dialog } from '@headlessui/react';
import { Button } from "@/components/ui/button";
import { Client } from '@/types/clients';

interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  client: Client;
}

export const ClientEdit: React.FC<ModalPopupProps> = ({ isOpen, onClose, client }) => {
    const [id, setId] = useState(client.id);
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [address, setAddress] = useState(client.address);
  const [phone, setPhone] = useState(client.phone);
  const [user, setUser] = useState(client.user);

  // Use useEffect to update the state when the client prop changes
  useEffect(() => {
    setId(client.id)
    setName(client.name);
    setEmail(client.email);
    setAddress(client.address);
    setPhone(client.phone);
    setUser(client.user);
  }, [client]); // This effect runs every time the `client` prop changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clientData: Client = {
      id: client.id,
      name,
      email,
      address,
      phone,
      user,
    };

    try {
      updateClient(clientData);
      onClose(); // Close the modal after updating the client
    } catch (error) {
      alert('There was an error');
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-md">
          <Dialog.Title className="text-lg font-medium">Update Client</Dialog.Title>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mt-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="block text-sm font-medium">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mt-6 flex justify-end">
              <Button type="submit">Update User</Button>
              <Button type="button" onClick={onClose} className="ml-2">Cancel</Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
