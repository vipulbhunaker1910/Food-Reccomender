import { useState } from "react";
import "./styles.css";
var foodrecommedations = {
  Biryanis: [
    {
      Dish: "Chicken Dum Biryani",
      Rating: "5/5",
      Avg_Price: 150
    },
    {
      Dish: "Special Chicken Biryani",
      Rating: "4/5",
      Avg_Price: 170
    },
    {
      Dish: "Panner Biryani",
      Rating: "3.5/5",
      Avg_Price: 200
    }
  ],
  Starters: [
    {
      Dish: "Chicken Drumsticks",
      Rating: "3.5/5",
      Avg_Price: 190
    },
    {
      Dish: "Chicken 65",
      Rating: "4/5",
      Avg_Price: 170
    },
    {
      Dish: "Panner 65",
      Rating: "4/5",
      Avg_Price: 200
    },
    {
      Dish: "Gobi 65",
      Rating: "3.5/5",
      Avg_Price: 150
    }
  ],
  Desserts: [
    {
      Dish: "Apricot Delight",
      Rating: "4/5",
      Avg_Price: 120
    },
    {
      Dish: "Khubani ka Meeta",
      Rating: "3.5/5",
      Avg_Price: 90
    },
    {
      Dish: "Ice Cream",
      Rating: "3.5/5",
      Avg_Price: 150
    }
  ]
};
export default function App() {
  var [foodreccm, setfoddrecc] = useState("Biryanis");
  function foodreccomender(genre) {
    setfoddrecc(genre);
  }
  var foodrecc = Object.keys(foodrecommedations);
  return (
    <div className="App">
      <div className="navigation">
        <div className="app-heading">Food Reccomendations</div>
        <br />
        <br />
        <div className="app-button-container">
          {foodrecc.map((dish) => (
            <button
              key={dish}
              className="btn-primary"
              onClick={() => foodreccomender(dish)}
            >
              {dish}
            </button>
          ))}
        </div>
      </div>
      <div className="food-recommend">
        {foodrecommedations[foodreccm].map((Dish1) => (
          <div key={Dish1.Dish} className="food">
            <p className="food-heading">
              {Dish1.Dish} - <span>{Dish1.Rating}</span>
            </p>
            <p className="food-rating">{Dish1.Avg_Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
