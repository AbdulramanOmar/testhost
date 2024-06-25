import React, { useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./PodcastPlayer.css";
import { FaBackward, FaForward, FaInfoCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchPodcasts } from "../../store/podcastSlice";

const handleClickPrevious = (audio) => {
  audio.currentTime -= 15;
};

const handleClickNext = (audio) => {
  audio.currentTime += 30;
};

const PodcastPlayer = () => {
  const { podcasts } = useSelector((state) => state.podcasts);
  const [moreInfoIndex, setMoreInfoIndex] = useState(null); // Use null to track the index of the podcast with more info displayed
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPodcasts());
  }, [dispatch]);

  const toggleMoreInfo = (index) => {
    setMoreInfoIndex(moreInfoIndex === index ? null : index);
  };

  return (
    <div className="podcatss">
      <div className="container">
        <div className="podcast-content">
          {podcasts.map((el, i) => (
            <React.Fragment key={i}>
              <div className="podcast-player">
                <img
                  src={require("../Assent/meet.jpg")}
                  alt={el.name}
                  className="podcast-image"
                />
                <div className="podcast-details">
                  <h2>{el.name}</h2>
                  <p>FlipSide</p>
                  <AudioPlayer
                    src={el.audio}
                    showJumpControls={false}
                    customProgressBarSection={[
                      RHAP_UI.CURRENT_TIME,
                      RHAP_UI.PROGRESS_BAR,
                      RHAP_UI.DURATION,
                    ]}
                    customControlsSection={[
                      <button
                        onClick={(e) =>
                          handleClickPrevious(
                            e.target
                              .closest(".rhap_container")
                              .querySelector("audio")
                          )
                        }
                        className="rhap_button-clear"
                        aria-label="Rewind 15 seconds"
                        key="rewind"
                      >
                        <FaBackward />
                      </button>,
                      RHAP_UI.MAIN_CONTROLS,
                      <button
                        onClick={(e) =>
                          handleClickNext(
                            e.target
                              .closest(".rhap_container")
                              .querySelector("audio")
                          )
                        }
                        className="rhap_button-clear"
                        aria-label="Forward 30 seconds"
                        key="forward"
                      >
                        <FaForward />
                      </button>,
                      RHAP_UI.VOLUME_CONTROLS,
                      <button onClick={() => toggleMoreInfo(i)} key="more-info">
                        <FaInfoCircle />
                        <span>Info</span>
                      </button>,
                    ]}
                    autoPlayAfterSrcChange={false}
                  />
                </div>
              </div>
              {moreInfoIndex === i && <p>{el.text}</p>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
