import React from "react";
import { StreamContainer, StreamSection } from "./StreamStyles";
import { useGlobalContext } from "../../context/context";
import { StreamCard } from "../StreamCard/StreamCard";
import { flatData, sortDate } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { Skeleton } from "../Loading/Skeleton";

const Stream = ({ type }) => {
  const {
    dataStream: data,
    isLoading,
    setNavBar,
    dataFilteredStream: dataStreams,
  } = useGlobalContext();

  if (isLoading || !data.live) {
    return <Skeleton type="stream" />;
  }

  const filterData = flatData(data, "cached");

  if (type === "full") {
    return (
      <StreamSection>
        <StreamCard data={dataStreams} margin="3em 0" />
      </StreamSection>
    );
  }

  return (
    <StreamSection>
      {filterData.map((item, index) => {
        const title = item[0];
        let videos = item[1];

        if (title !== "live") {
          videos = sortDate(videos, item[1][0].status);
          if (title === "upcoming") {
            videos = videos.slice(0, 6);
          } else {
            videos = videos.slice(0, 3);
          }
        }
        return (
          <StreamContainer key={index}>
            <div>
              <h2>{title}</h2>
              {title !== "live" && (
                <Link to="/lives" onClick={() => setNavBar("Streams")}>
                  More
                </Link>
              )}
            </div>
            <StreamCard data={videos} />
          </StreamContainer>
        );
      })}
    </StreamSection>
  );
};

export default Stream;
