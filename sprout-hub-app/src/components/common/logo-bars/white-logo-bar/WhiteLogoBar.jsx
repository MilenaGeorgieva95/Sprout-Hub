import styles from "./WhiteLogoBar.module.css";

export default function WhiteLogoBar() {
  return (
    <div
      className={"text-center mx-auto " + styles.containerW}
      data-wow-delay="0.1s"
    >
      <h1>Sprout Hub</h1>
      <div className={styles.moto}>
        The World's premier destination for gardening enthusiasts and
        unforgettable outdoor experiences. We offer a diverse range of gardening
        resources, tips, and forums to cater to all your horticultural needs.
      </div>
    </div>
  );
}
