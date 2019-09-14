import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])].map(
        (emptyArrayItem, index) => (
          <BurgerIngredient
            key={ingredientName + index}
            type={ingredientName}
          ></BurgerIngredient>
        )
      );
    })
    .reduce((arr, el) => {
      return [...arr, ...el];
    }, []);
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients.length > 0 ? (
        transformedIngredients
      ) : (
        <p className={styles["no-ingredient"]}>
          Please start adding ingredients:)
        </p>
      )}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
