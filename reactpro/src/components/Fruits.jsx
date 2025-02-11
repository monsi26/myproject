import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", " Banana", "Grapes", "Oranges"];

  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Banana", price: 3, emoji: "🍌", soldout: false },
    { name: "Mango", price: 25, emoji: "🥭", soldout: true },
    { name: "Grapes", price: 100, emoji: "🍇", soldout: false },
    { name: "Oranges", price: 6, emoji: "🍊", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
