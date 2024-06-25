import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { useTranslation } from "react-i18next";
const headTable = [
  {
    title: "id",
  },
  {
    title: "Email",
  },
];
const Sub = () => {
  const { t } = useTranslation();
  const [base, setBase] = useState([]);
  useEffect(() => {
    const fetchSubcribes = async () => {
      try {
        const collectionRef = collection(db, "subcribes");
        const querySnapshot = await getDocs(collectionRef);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setBase(data);
      } catch (error) {
        throw error;
      }
    };
    return fetchSubcribes;
  }, []);
  return (
    <div style={{ background:"white" , borderRadius:"20px" }} className="product">
      <h1 style={{ borderBottom: "1px solid black" , paddingBottom:"10px" }}> {t("sub")} </h1>
      <table style={{paddingTop:"0px"}} >
        <thead>
          <tr>
            {headTable.map((el, i) => {
              return <td style={{paddingBottom:"5px"}} key={i}>{el.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {base.map((el, i) => {
            return (
              <tr key={i}>
                <td style={{ color: "#777" }}>{i}</td>
                <td style={{ fontSize: "22px" }}> {el.email} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sub;
