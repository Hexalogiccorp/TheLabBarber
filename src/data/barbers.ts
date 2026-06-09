export interface Barber {
  slug: string;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;
  experience: number;
  whatsapp: string;
  calUrl?: string;
}

export const barbers: Barber[] = [
  {
    slug: "osvaldo-ortiz",
    firstName: "Osvaldo",
    lastName: "Ortíz",
    photo: "/barber1.jpg",
    role: "Fundador & Barbero",
    experience: 4,
    whatsapp: "https://wa.me/50600000000",
  },
  {
    slug: "barbero-dos",
    firstName: "Nombre",
    lastName: "Apellido",
    photo: "/barber1.jpg",
    role: "Barbero",
    experience: 2,
    whatsapp: "https://wa.me/50600000000",
  },
  {
    slug: "barbero-tres",
    firstName: "Nombre",
    lastName: "Apellido",
    photo: "/barber1.jpg",
    role: "Barbero",
    experience: 3,
    whatsapp: "https://wa.me/50600000000",
  },
];
