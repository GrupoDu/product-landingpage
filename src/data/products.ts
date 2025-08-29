import { Product } from "./types";

// Imagens
import CarroDeMao from "@/assets/produtos/Carro de mão.png";
import CarroJerica160 from "@/assets/produtos/Carro jerica 160L.png";

export const products: Product[] = [
  {
    id: 1,
    title: "Carro de mão",
    description: "Descrição do produto 1",
    category: "Carro de mão",
    images: [CarroDeMao],
    imagesAlt: ["carro de mao"],
  },
  {
    id: 2,
    title: "Carro Jerica 160L",
    description: "Descrição do produto 2",
    category: "Carro de mão",
    images: [CarroJerica160],
    imagesAlt: ["carro jerica 160L"],
  },
];
