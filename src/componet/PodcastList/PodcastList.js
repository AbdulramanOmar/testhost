import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { db } from "../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPodcasts } from "../../store/podcastSlice";
import { useTranslation } from "react-i18next";

const headTable = [
  {
    title: "ID",
  },
  {
    title: "Audio",
  },
  {
    title: "Podcast",
  },
  {
    title: "Update",
  },
  {
    title: "Delete",
  },
];

const PodcastList = () => {
  const { podcasts, loading, error } = useSelector((state) => state.podcasts);
  const {t} = useTranslation()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPodcasts());
  }, [dispatch]);
  const deletePodcast = async (id) => {
    const itemDoc = doc(db, "podcasts", id);
    await deleteDoc(itemDoc);
    dispatch(fetchPodcasts());
  };
  return (
    <div className="product">
      <h1>  {t("AllPodcast")} </h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            {headTable.map((el, i) => (
              <td key={i}>{el.title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {podcasts.map((el, i) => (
            <tr key={i}>
              <td style={{ color: "#777" }}>{i + 1}</td>
              <td>
                <audio controls src={el.audio}>
                  متصفحك لا يدعم عنصر الصوت.
                </audio>
              </td>
              <td style={{ fontSize: "22px" }}>{el.name}</td>
              <td>
                <h4 onClick={() => deletePodcast(el.id)}>
                  <MdDelete />
                  <span>Delete</span>
                </h4>
              </td>
              <td>
                <Link to={`/admin/podcast/${el.id}`}>
                  <h3>
                    <FaPenToSquare />
                    Update
                  </h3>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PodcastList;
