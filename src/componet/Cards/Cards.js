import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { programData } from "../../store/programSlice";
import "./cards.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";
const Cards = () => {
  const { t } = useTranslation();
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(programData());
  }, [dispatch]);
  return (
    <div className="cards">
      <div className="container">
        <div className="cards-content">
          {products.map((el, i) => {
            return (
              <div className="catdsvaf" key={i}>
                <div className="cards-img">
                  <img src={el.image} alt={el.name} />
                </div>
                <div className="cards-text">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3>{el.name}</h3>
                    <p>${el.price}.00 </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #ddd",
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      display: "flex",

                      alignItems: "center",
                    }}
                  >
                    <FaListCheck />
                    <span style={{ margin: "0 10px" }}>
                      {el.step} {t("steps")}
                    </span>
                  </p>
                  <button>
                    <Link to={`/programs/${el.id}`}>{t("joinin")}</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
