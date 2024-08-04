Descripción del Proyecto
Nombre del Proyecto: [En proceso....]

Descripcion: Crear una red social para conectar a dueños de mascotas, permitiendo que se relacionen y organicen actividades basadas en la compatibilidad de sus mascotas.

Funcionalidades Clave

 - Perfiles de usuarios y mascotas.
 - Sistema de coincidencias basado en intereses y características de las mascotas.
 - Organización de eventos y actividades.
 - Foro y mensajería para la comunicación entre usuarios.
 - Sistema de recomendaciones de lugares pet-friendly.
 ...

API DESIGN

POST /pet/ -> Crea perfil mascota
GET /pets/ -> Obtiene tus mascotas
GET /match -> Obtiene mascotas en la zona, a través de unos filtros seleccionados
GET / -> Página principal, creación de eventos: paseos grupales, reuniones en parques, entrenamientos conjuntos, etc. Calendario de actividades con recordatorios.
POST /profile -> Crea tu perfil
DELETE /pet -> Borra perfil mascota
DELETE /profile -> Borra tu perfil
PUT /pet -> Actualiza perfil mascota
PUT /profile -> Actualiza tu perfil

...

Esquema de Base de Datos

pets
  id: integer
  nombre: varchar
  especie: varchar
  raza: varchar
  características: varchar
  sexo: varchar
  tamaño: varchar
  edad: number
  actividad: varchar

users
  nombre: varchar
  email: varchar
  contraseña: varchar
  ubicación: varchar
  bio: varchar
  preferencias: varchar
