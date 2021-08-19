import { HomeSection } from "../components/home-section";
import { LatestNews } from "../components/latest-news";
import { Product } from "../models/product";

export default function Home() {
  const gifts: Product[] = [
    {
      title: "Guía de regalos navideños: Marvel Pins",
      category: "ENGRANAJE",
      image: "/assets/images/gift-1.png",
    },
    {
      title: "Guía de regalos navideños: para aquellos que aman 3000",
      category: "ENGRANAJE",
      image: "/assets/images/gift-2.png",
    },
    {
      title: "Guía de regalos navideños: funko Pops",
      category: "ENGRANAJE",
      image: "/assets/images/gift-3.png",
    },
    {
      title: "Guía de regalos navideños: Cozy and Comfy Longewear",
      category: "ENGRANAJE",
      image: "/assets/images/gift-4.png",
    },
  ];
  return (
    <div>
      <HomeSection
        title="GUÍA DE REGALOS NAVIDEÑOS 2020"
        description="Los regalos perfectos para todos los fanáticos de Marvel"
        callToAction="ver ahora"
        imageUrl="/assets/images/toys.png"
        products={gifts}
      />
      <HomeSection
        title="NUEVO EN MARVEL UNLIMITED"
        description="¡Lea estos 28,000 cómics digitales por$ 9.99 al mes!"
        callToAction="OBTÉN MARVEL UNLIMITED"
        imageUrl="/assets/images/marvel-unlimited.png"
        tag="DISPONIBLE AHORA"
      />
      <LatestNews />
    </div>
  );
}
