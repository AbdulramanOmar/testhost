import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Update = () => {
  const navgiate = useNavigate();
  const { id } = useParams();
  const { products } = useSelector((state) => state.data);
  const item = products.find((item) => item.id === id);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [text, setText] = useState(item.text);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [toogle, setToogle] = useState(false);
  useEffect(() => {
    if (file) {
      const imageName = file.name;
      const imgRef = ref(storage, `images/${imageName}`);
      const uploadTask = uploadBytesResumable(imgRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setToogle(true);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Upload error:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        }
      );
    }
  }, [file]);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const itemDoc = doc(db, "programs", item.id);
    try {
      await updateDoc(itemDoc, {
        name: name,
        price: price,
        text: text,
        image: url || item.image,
      });
      navgiate("/admin/programs");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <div className="add-product">
      <h1>Update A Product</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder={`Price`}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="porgram Text"
        ></textarea>
        <input
          type="file"
          placeholder="Add Image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {toogle && <progress value={progress} max="100" />}

        <img
          src={url || item.image}
          alt=""
          style={{ width: "130px", marginBottom: "20px" }}
        />
        <button type="submit" style={{ marginTop: "20px" }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
