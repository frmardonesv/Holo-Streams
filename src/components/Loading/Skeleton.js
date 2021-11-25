import React from "react";
import {
  SkeletonCard,
  SkeletonContainer,
  SkeletonImage,
  SkeletonText,
  VtuberInfoCont,
} from "./SkeletonStyles";

const repeat = [1, 2, 3];

export const Skeleton = ({ type, variant }) => {
  const StreamSkeleton = () => {
    return (
      <>
        {repeat.map((item) => {
          return (
            <>
              <SkeletonText className="top" />
              <SkeletonContainer key={item}>
                <SkeletonCard>
                  <SkeletonImage className="animate" />
                  <div className="text">
                    <div className="title">
                      <div className="animate" />
                      <div className="animate" />
                      <div className="animate" />
                    </div>
                    <div className="info animate" />
                    <div className="status animate" />
                  </div>
                </SkeletonCard>
                <SkeletonCard>
                  <SkeletonImage className="animate" />
                  <div className="text">
                    <div className="title">
                      <div className="animate" />
                      <div className="animate" />
                    </div>
                    <div className="info animate" />
                    <div className="status animate" />
                  </div>
                </SkeletonCard>
                <SkeletonCard>
                  <SkeletonImage className="animate" />
                  <div className="text">
                    <div className="title">
                      <div className="animate" />
                      <div className="animate" />
                    </div>
                    <div className="info animate" />
                    <div className="status animate" />
                  </div>
                </SkeletonCard>
              </SkeletonContainer>
            </>
          );
        })}
      </>
    );
  };
  const TalentsHomeSkeleton = () => {
    return (
      <>
        <SkeletonText className={`top animate ${variant ? variant : null}`} />

        <SkeletonContainer home>
          <SkeletonCard home>
            <SkeletonImage className="animate home" />
            <SkeletonText className="paragraft animate" />
          </SkeletonCard>
          <SkeletonCard home>
            <SkeletonImage className="animate home" />
            <SkeletonText className="paragraft animate" />
          </SkeletonCard>
          <SkeletonCard home>
            <SkeletonImage className="animate home" />
            <SkeletonText className="paragraft animate" />
          </SkeletonCard>
          <SkeletonCard home>
            <SkeletonImage className="animate home" />
            <SkeletonText className="paragraft animate" />
          </SkeletonCard>
          <SkeletonCard home>
            <SkeletonImage className="animate home" />
            <SkeletonText className="paragraft animate" />
          </SkeletonCard>
          <SkeletonCard home>
            <SkeletonImage className="animate home" />
            <SkeletonText className="paragraft animate" />
          </SkeletonCard>
        </SkeletonContainer>
      </>
    );
  };

  const FiltersSkeleton = () => {
    return (
      <SkeletonContainer filters>
        <SkeletonText className="paragraft animate" />
        <SkeletonText className="paragraft animate" />
        <SkeletonText className="paragraft animate" />
        <SkeletonText className="paragraft animate" />
      </SkeletonContainer>
    );
  };

  const VtuberInfo = () => {
    return (
      <VtuberInfoCont>
        <div className="top">
          <div className="left">
            <SkeletonImage height="350px" width="70%" />
          </div>
          <div className="right">
            <SkeletonText width="50%" margin="0 auto 5em" />
            <SkeletonText width="30%" margin="0 auto 5em" />
            <div className="text">
              <SkeletonText width="80%" margin="0 auto 5em" />
              <SkeletonText width="80%" margin="0 auto 5em" />
              <SkeletonText width="80%" margin="0 auto 5em" />
            </div>

            <div className="socials">
              <SkeletonText width="130px" margin="0 auto 5em" />
              <SkeletonText width="130px" margin="0 auto 5em" />
            </div>

            <div className="gen">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <SkeletonText width="20%" margin="0 auto 5em" />
          <div className="videos">
            <SkeletonImage />
            <SkeletonImage />
            <SkeletonImage />
          </div>
        </div>
      </VtuberInfoCont>
    );
  };

  if (type === "stream") return <StreamSkeleton />;
  if (type === "homeTalent") return <TalentsHomeSkeleton />;
  if (type === "filters") return <FiltersSkeleton />;
  if (type === "vtuberInfo") return <VtuberInfo />;

  return <div></div>;
};
