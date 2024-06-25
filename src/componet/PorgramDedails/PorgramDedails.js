import { useParams } from "react-router-dom";
import "./PorgramDedails.css";
import { FaCheck } from "react-icons/fa6";
import { programData } from "../../store/programSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const PorgramDedails = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(programData());
  }, [dispatch]);
  const item = products.find((el) => el.id === id);
  return (
    <div className="details">
      <div className="details-content">
        <div className="details-img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="details-text">
          <h1> {item.name} </h1>
          <p>{item.text}</p>
          <div className="details-price">
            <div>
              <span> ${item.price}.00 </span>
              <button>Order Now</button>
            </div>
            <ul className="details-steps">
              {item.steps.map((el, i) => {
                return (
                  <li key={i}>
                    <FaCheck /> <span> {el} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorgramDedails;
