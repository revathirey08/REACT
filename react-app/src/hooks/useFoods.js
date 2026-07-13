import { useState } from "react";

function useFoods() {

  const [foods] = useState([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Biryani" }
  ]);

  return foods;
}

export default useFoods;