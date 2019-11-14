import React, { useContext } from "react";
import styles from "./card.module.css";
import ThemeContext from "../ThemeContext";

export default function Card(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? styles.card : styles.cardDark}>
      {props.children}
    </div>
  );
}
