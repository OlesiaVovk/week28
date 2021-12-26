import "./App.scss";
import Card from "../app-card/card";

const tariffs = [
  {
    id: 1,
    header: "Безлимитный 300",
    price: "300",
    speed: "До 10 Мбит/сек",
    note: "Объем включенного трафика не ограничен",
    color: "#00CCCC",
  },
  {
    id: 2,
    header: "Безлимитный 450",
    price: "450",
    speed: "До 50 Мбит/сек",
    note: "Объем включенного трафика не ограничен",
    color: "#00CC66",
  },
  {
    id: 3,
    header: "Безлимитный 550",
    price: "550",
    speed: "До 100 Мбит/сек",
    note: "Объем включенного трафика не ограничен",
    isSelected: "true",
    color: "#FF6666",
  },
  {
    id: 4,
    header: "Безлимитный 1000",
    price: "1000",
    speed: "До 200 Мбит/сек",
    note: "Объем включенного трафика не ограничен",
    color: "#202020",
  },
];

function App() {
  return (
    <>
      {tariffs.map((tariff) => (
        <Card
          header={tariff.header}
          price={tariff.price}
          speed={tariff.speed}
          note={tariff.note}
          color={tariff.color}
        ></Card>
      ))}
    </>
  );
}

export default App;
