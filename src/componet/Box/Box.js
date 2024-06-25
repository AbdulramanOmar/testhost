import { useEffect, useState } from "react";
import "./Box.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

const Box = (props) => {
  const [base, setBase] = useState(0);
  console.log(base);
  useEffect(() => {
    const fetchSubcribes = async () => {
      try {
        const collectionRef = collection(db, props.data);
        const querySnapshot = await getDocs(collectionRef);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setBase(data.length);
      } catch (error) {
        throw error;
      }
    };
    return fetchSubcribes;
  }, []);
  return (
    <div className="box">
        <h2> {props.data} </h2>
      <span>{base} </span>
    </div>
  );
};

export default Box;
