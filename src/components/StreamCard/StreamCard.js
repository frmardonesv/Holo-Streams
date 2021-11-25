import moment from "moment";
import React, { useEffect, useState } from "react";
import { StreamCardContainer } from "./StreamCardStyles";

export const StreamCard = ({ data, margin }) => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <StreamCardContainer margin={margin}>
      {data.map((item) => {
        const {
          id,
          title,
          yt_video_key: url,
          live_viewers: viewers,
          status,
          live_end: endedLive,
          live_schedule,
        } = item;

        let { live_start: startedAt } = item;

        startedAt = moment(startedAt).fromNow();
        let timeAprox;

        status === "past"
          ? (timeAprox = moment(endedLive).fromNow())
          : (timeAprox = moment(live_schedule).fromNow());

        const urlImage = `https://i.ytimg.com/vi/${url}`;
        const urlLink = `https://www.youtube.com/watch?v=${url}`;

        return (
          <a href={urlLink} key={id}>
            <article>
              <div className="image">
                <img src={`${urlImage}/mqdefault.jpg`} alt={title} />
              </div>
              <div>
                <h3 className={status}>
                  {size >= 550 ? title : `${title.substring(0, 40)} ...`}
                </h3>

                {status === "live" ? (
                  <div className="live-data">
                    <p className="viewers">{viewers} Viewers</p>
                    <p className="viewers">Started {startedAt} </p>
                  </div>
                ) : (
                  <p className={`viewers ${status}`}>
                    {status === "past" ? "Ended" : "Starts"} {timeAprox}
                  </p>
                )}

                <div className="status">
                  <button className={status}>
                    {status !== "past" ? status : "Ended"}
                  </button>
                </div>
              </div>
            </article>
          </a>
        );
      })}
    </StreamCardContainer>
  );
};
