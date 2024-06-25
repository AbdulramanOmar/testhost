import { useEffect, useState } from "react";
import "./addPodcast.css";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase-config";
import { useTranslation } from "react-i18next";

const AddPodcast = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [toogle, setToogle] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const collectionRef = collection(db, "podcasts");
  const { t } = useTranslation();

  useEffect(() => {
    if (file) {
      const imageName = file.name;
      const imgRef = ref(storage, `podcasts/${imageName}`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("Please wait for the image to finish uploading.");
      return;
    }
    try {
      await addDoc(collectionRef, {
        name: name,
        text: text,
        audio: url,
      });
      setName("");
      setText("");
      setFile(null);
      setUrl("");
      setProgress(0);
      setError("");
    } catch (error) {
      console.error("Error adding document:", error);
      setError("Error adding product: " + error.message);
    }
  };

  return (
    <div className="add-product">
      <h1> {t("AddPodcast")} </h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Podcast Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="podcast Text"
        ></textarea>
        <input
          type="file"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        {toogle && <progress value={progress} max="100" />}
        <button type="submit">Add Podcast</button>
      </form>
    </div>
  );
};

export default AddPodcast;
