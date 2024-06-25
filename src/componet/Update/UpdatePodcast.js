import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const UpdatePodcast = () => {
  const navgiate = useNavigate();
  const { id } = useParams();
  const { podcasts } = useSelector((state) => state.podcasts);
  const item = podcasts.find((item) => item.id === id);
  const [name, setName] = useState(item.name);
  const [time, setTime] = useState(item.time);
  const [text, setText] = useState(item.text);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [toogle, setToogle] = useState(false);
  useEffect(() => {
    if (file) {
      const imageName = file.name;
      const imgRef = ref(storage, `podcasts/${imageName}`);
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
    const itemDoc = doc(db, "podcasts", item.id);
    try {
      await updateDoc(itemDoc, {
        name: name,
        time: time,
        text: text,
        audio: url || item.audio,
      });
      navgiate("/admin/podcasts");
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
          placeholder="Podcast Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder={`Price`}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="podcast Text"
        ></textarea>
        <input
          type="file"
          placeholder="Add Image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {toogle && <progress value={progress} max="100" />}

        <audio controls src={url || item.audio}>
          متصفحك لا يدعم عنصر الصوت.
        </audio>
        <button type="submit" style={{ marginTop: "20px" }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePodcast;
