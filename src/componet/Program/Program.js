import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { db } from "../../firebase-config";
import "./program.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { programData } from "../../store/programSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const headTable = [
  {
    title: "id",
  },
  {
    title: "Image",
  },
  {
    title: "program",
  },
  {
    title: "Price",
  },
  {
    title: "Update",
  },
  {
    title: "Delete",
  },
];
const Program = () => {
  const { products, loading } = useSelector((state) => state.data);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(programData());
  }, [dispatch]);
  const deleteProduct = async (id) => {
    const itemDoc = doc(db, "programs", id);
    await deleteDoc(itemDoc);
  };
  return (
    <div className="product">
      <h1> {t("AllPrograms")} </h1>
      {loading && <p>Loading...</p>}
      <table>
        <thead>
          <tr>
            {headTable.map((el, i) => {
              return <td key={i}>{el.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {products.map((el, i) => {
            return (
              <tr key={i}>
                <td style={{ color: "#777" }}>{i}</td>
                <td>
                  <img src={el.image} style={{ width: "100px" }} alt="" />
                </td>
                <td style={{ fontSize: "22px" }}>{el.name}</td>
                <td>{el.price}</td>
                <td>
                  <h4 onClick={() => deleteProduct(el.id)}>
                    <MdDelete />
                    <span>Delete</span>
                  </h4>
                </td>
                <td>
                  <Link to={`/admin/program/${el.id}`}>
                    <h3>
                      <FaPenToSquare />
                      Update
                    </h3>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Program;
