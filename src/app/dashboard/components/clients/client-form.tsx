// src/components/ModalPopup.tsx
import React, { useState } from 'react';
import { createClient } from "@/lib/actions"
import { Dialog } from '@headlessui/react';
import { Button } from "@/components/ui/button"
import { Client } from '@/types/clients';

interface ModalPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientForm: React.FC<ModalPopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [address, setaddress] = useState('')
  const [phone, setPhone] = useState('')
  const [user, setUser] = useState(1)
  const clientData: Client = {
    'name': name,
    'email': email,
    'address': address,
    'phone': phone,
    'user': user
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
        createClient(clientData)
        onClose(); // Cerrar el popup después de crear el usuario
    } catch (error) {
        alert('Hubo un error')
        console.error(error)
    }
    
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-md">
          <Dialog.Title className="text-lg font-medium">Crear Usuario</Dialog.Title>
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
                className='mt-1 p-2 border border-gray-300 rounded w-full'
                />
            </div>
            <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium">address</label>
                <input 
                type="text"
                id="address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                required
                className='mt-1 p-2 border border-gray-300 rounded w-full'
                />
            </div>
            <div className="mt-4">
                <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                <input 
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className='mt-1 p-2 border border-gray-300 rounded w-full'
                />
            </div>
            {/* <div className="mt-4">
                <label htmlFor="user" className="block text-sm font-medium">User</label>
                <input 
                type="text"
                id=""
                value={}
                onChange={(e) => set(e.target.value)}
                required
                className='mt-1 p-2 border border-gray-300 rounded w-full'
                />
            </div> */}
            <div className="mt-6 flex justify-end">
              <Button type="submit">Create User</Button>
              <Button type="button" onClick={onClose} className="ml-2">Cancel</Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

