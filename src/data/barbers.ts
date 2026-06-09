export interface Barber {
  slug: string;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;
  experience: number;
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
  },
  {
    slug: "barbero-dos",
    firstName: "Nombre",
    lastName: "Apellido",
    photo: "/barber1.jpg",
    role: "Barbero",
    experience: 2,
  },
  {
    slug: "barbero-tres",
    firstName: "Nombre",
    lastName: "Apellido",
    photo: "/barber1.jpg",
    role: "Barbero",
    experience: 3,
  },
];
