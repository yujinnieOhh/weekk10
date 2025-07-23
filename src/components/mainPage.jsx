import { items } from "../items";
import "../index.css";

export const MainPage = () => {
  return (
    <div>
      {items.map((item) => {
        return (
          <ItemCard
          key={item.id}
            image={item.image}
            title={item.name}
            percent={item.percent}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

const ItemCard = ({ image, title, price, percent }) => {
  return (
    <div>
      <img src={image} className="h-[100px]" />
      <div className="flex items-center gap-2 mb-1">
        <p className="text-mainRed text-lg">{percent}</p>
        <p>{price}</p>
      </div>
      <p>{title}</p>
    </div>
  );
};
