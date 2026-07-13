import { useState } from "react";
import useFoods from "./hooks/useFoods";
import FoodCard from "./components/FoodCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {

  const foods = useFoods();

  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>🍔 Food App</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredFoods.map((food) => (
        <FoodCard
          key={food.id}
          name={food.name}
        />
      ))}

    </div>
  );
}

export default App;