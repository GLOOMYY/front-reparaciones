export async function fetchServices() {
    try {
      const token = "tu_token_aqui"; // Reemplaza con tu token real

      const data = await fetch("http://localhost:8000/api/tu_endpoint/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Incluye el token aquí
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Aquí manejarás los datos que recibas
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
  
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to fetch the services.');
    }
  }
  