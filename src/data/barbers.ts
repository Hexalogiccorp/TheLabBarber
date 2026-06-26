export interface Barber {
  slug: string;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;
  experience: number;
  whatsapp: string;
  calUrl?: string;
  calEmail?: string;
}

export const barbers: Barber[] = [
  {
    slug: "osvaldo-ortiz",
    firstName: "Osvaldo",
    lastName: "Ortíz",
    photo: "/barber1.webp",
    role: "Fundador & Barbero",
    experience: 4,
    whatsapp: "https://wa.me/50600000000",
    calUrl: "https://cal.com/diego-duarte-fernandez-mwqk4a/diego",
    calEmail: "diegoduarte8343@gmail.com",
  }
];
