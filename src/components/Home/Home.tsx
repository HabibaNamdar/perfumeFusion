import { Link } from "react-router-dom";
import Card from "../Cards/Cards";
export interface CardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
function Home() {
  const cards: CardProps[] = [
    {
      name: "URAAN",
      description: "Ambery Vanilla Boost",
      price: 2140,
      imageUrl: "src/assets/images/perfume1.jpg",
    },
    {
      name:'HISAR',
      description:'Smoky Vanilla Pleasure',
      price:3190,
      imageUrl: "src/assets/images/perfume 2.jpg",
    },
    {name:'CATCH 22',
    description:'Our #1 Best Seller 🏆',
    price:1790,
    imageUrl: "src/assets/images/perfume3.jpg",
   },
   {name:'SAIFUL MALOOK',
   description:'Most Popular Aquatic Scent!',
   price:1350,
   imageUrl:"src/assets/images/perfume4.jpg"
   }
  ];

  return (
    <div className="container home">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-2 justify-content-center  ">
        {cards.map((card, index) => (
          <div key={index} className="col">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
