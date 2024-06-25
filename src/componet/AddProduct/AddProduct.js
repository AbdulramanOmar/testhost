import { useEffect, useState } from "react";
import "./addProduct.css";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase-config";
import { useTranslation } from "react-i18next";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [step, setStep] = useState();
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [toogle, setToogle] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [steps, setSteps] = useState([]);
  const {t} = useTranslation()
  const collectionRef = collection(db, "programs");
  useEffect(() => {
    if (file) {
      const imageName = file.name;
      const imgRef = ref(storage, `images/${imageName}`);
      const uploadTask = uploadBytesResumable(imgRef, file);
      setToogle(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Upload error:", error);
          setError("Error uploading image: " + error.message);
          setToogle(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
            setToogle(false);
          });
        }
      );
    }
  }, [file]);

  useEffect(() => {
    setSteps(Array.from({ length: step }, () => ""));
  }, [step]);

  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("Please wait for the image to finish uploading.");
      return;
    }
    try {
      await addDoc(collectionRef, {
        name: name,
        price: price,
        step:step,
        steps: steps,
        text: text,
        image: url,
      });
      setName("");
      setPrice("");
      setStep(0);
      setText("");
      setFile(null);
      setUrl("");
      setProgress(0);
      setError("");
      setSteps([]);
    } catch (error) {
      console.error("Error adding document:", error);
      setError("Error adding product: " + error.message);
    }
  };

  return (
    <div className="add-product">
      <h1> {t("AddProgram")} </h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Program Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Step"
          value={step}
          required
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {steps.map((stepValue, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Step ${index + 1}`}
            value={stepValue}
            required
            onChange={(e) => handleStepChange(index, e.target.value)}
          />
        ))}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="Program Text"
        ></textarea>
        <input
          type="file"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        {toogle && <progress value={progress} max="100" />}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
