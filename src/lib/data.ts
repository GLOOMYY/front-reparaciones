export async function fetchServices() {
    try {
      const data = [
        {
          id: 1,
          user: {
            id: 1,
            username: "tecnico1",
            email: "tecnico1@example.com",
            first_name: "Juan",
            last_name: "Pérez",
            phone: "+57 3001234567",
          },
          client: {
            id: 1,
            name: "Empresa ABC",
            contact_person: "Carlos Gomez",
            email: "carlos.gomez@empresaabc.com",
            phone: "+57 3109876543",
            address: "Calle 123 #45-67, Bogotá, Colombia",
          },
          service_type: {
            id: 1,
            name: "Reparación de hardware",
            description: "Servicios relacionados con la reparación de piezas de hardware.",
          },
          description: "Reparación de la placa base y reemplazo de componentes dañados.",
          status: {
            id: 1,
            name: "En progreso",
            description: "El servicio está en proceso de completarse.",
          },
          cost: 250.00,
          created_at: "2024-09-29T10:00:00Z",
          updated_at: "2024-09-29T11:30:00Z",
        },
        {
          id: 2,
          user: {
            id: 2,
            username: "tecnico2",
            email: "tecnico2@example.com",
            first_name: "María",
            last_name: "Rodríguez",
            phone: "+57 3206543210",
          },
          client: {
            id: 2,
            name: "Comercial XYZ",
            contact_person: "Ana López",
            email: "ana.lopez@comercialxyz.com",
            phone: "+57 3157891234",
            address: "Carrera 10 #20-30, Medellín, Colombia",
          },
          service_type: {
            id: 2,
            name: "Instalación de software",
            description: "Servicios de instalación y configuración de software.",
          },
          description: "Instalación del sistema operativo Windows 11 y configuración de drivers.",
          status: {
            id: 2,
            name: "Completado",
            description: "El servicio ha sido completado exitosamente.",
          },
          cost: 120.00,
          created_at: "2024-09-28T08:00:00Z",
          updated_at: "2024-09-29T09:00:00Z",
        },
        {
          id: 3,
          user: {
            id: 1,
            username: "tecnico1",
            email: "tecnico1@example.com",
            first_name: "Juan",
            last_name: "Pérez",
            phone: "+57 3001234567",
          },
          client: {
            id: 3,
            name: "Tienda de Tecnología QWERTY",
            contact_person: "Luis Martínez",
            email: "luis.martinez@qwertytech.com",
            phone: "+57 3114567890",
            address: "Avenida 5 #67-89, Cali, Colombia",
          },
          service_type: {
            id: 3,
            name: "Mantenimiento general",
            description: "Servicios de mantenimiento preventivo de equipos.",
          },
          description: "Limpieza interna del equipo, cambio de pasta térmica, y revisión de conectores.",
          status: {
            id: 1,
            name: "En progreso",
            description: "El servicio está en proceso de completarse.",
          },
          cost: 180.00,
          created_at: "2024-09-27T14:00:00Z",
          updated_at: "2024-09-28T15:00:00Z",
        },
        {
            id: 1,
            user: {
              id: 1,
              username: "tecnico1",
              email: "tecnico1@example.com",
              first_name: "Juan",
              last_name: "Pérez",
              phone: "+57 3001234567",
            },
            client: {
              id: 1,
              name: "Empresa ABC",
              contact_person: "Carlos Gomez",
              email: "carlos.gomez@empresaabc.com",
              phone: "+57 3109876543",
              address: "Calle 123 #45-67, Bogotá, Colombia",
            },
            service_type: {
              id: 1,
              name: "Reparación de hardware",
              description: "Servicios relacionados con la reparación de piezas de hardware.",
            },
            description: "Reparación de la placa base y reemplazo de componentes dañados.",
            status: {
              id: 1,
              name: "En progreso",
              description: "El servicio está en proceso de completarse.",
            },
            cost: 250.00,
            created_at: "2024-09-29T10:00:00Z",
            updated_at: "2024-09-29T11:30:00Z",
          },
          {
            id: 2,
            user: {
              id: 2,
              username: "tecnico2",
              email: "tecnico2@example.com",
              first_name: "María",
              last_name: "Rodríguez",
              phone: "+57 3206543210",
            },
            client: {
              id: 2,
              name: "Comercial XYZ",
              contact_person: "Ana López",
              email: "ana.lopez@comercialxyz.com",
              phone: "+57 3157891234",
              address: "Carrera 10 #20-30, Medellín, Colombia",
            },
            service_type: {
              id: 2,
              name: "Instalación de software",
              description: "Servicios de instalación y configuración de software.",
            },
            description: "Instalación del sistema operativo Windows 11 y configuración de drivers.",
            status: {
              id: 2,
              name: "Completado",
              description: "El servicio ha sido completado exitosamente.",
            },
            cost: 120.00,
            created_at: "2024-09-28T08:00:00Z",
            updated_at: "2024-09-29T09:00:00Z",
          },
          {
            id: 3,
            user: {
              id: 1,
              username: "tecnico1",
              email: "tecnico1@example.com",
              first_name: "Juan",
              last_name: "Pérez",
              phone: "+57 3001234567",
            },
            client: {
              id: 3,
              name: "Tienda de Tecnología QWERTY",
              contact_person: "Luis Martínez",
              email: "luis.martinez@qwertytech.com",
              phone: "+57 3114567890",
              address: "Avenida 5 #67-89, Cali, Colombia",
            },
            service_type: {
              id: 3,
              name: "Mantenimiento general",
              description: "Servicios de mantenimiento preventivo de equipos.",
            },
            description: "Limpieza interna del equipo, cambio de pasta térmica, y revisión de conectores.",
            status: {
              id: 1,
              name: "En progreso",
              description: "El servicio está en proceso de completarse.",
            },
            cost: 180.00,
            created_at: "2024-09-27T14:00:00Z",
            updated_at: "2024-09-28T15:00:00Z",
          },
      ];
  
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to fetch the services.');
    }
  }
  