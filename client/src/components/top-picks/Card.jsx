// import PillBtn from "../Buttons/PillBtn";
import styles from "./Card.module.css";

export default function Card({ title, text, btnTxt, imgSrc }) {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item position-relative rounded overflow-hidden">
        <div className={"overflow-hidden " + styles.img}>
          <img className="img-fluid " src={imgSrc} alt="" />
        </div>
        <div
          className={"team-text bg-light text-center p-4 " + styles.container}
        >
          <h5>{title}</h5>
          <p className={"text-primary " + styles.description}>{text}</p>
          <a className="btn btn-primary" href="#" role="button">
            Link
          </a>

          <div className="team-social text-center">
            <a className="btn btn-square" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square" href="">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
