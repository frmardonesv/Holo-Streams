import React from "react";
import { Link } from "react-router-dom";
import { GenSection } from "./GenStyles";

const GenMembers = ({ members }) => {
  return (
    <GenSection className={`grid-${members.length}`}>
      {members.map((member) => {
        const { avatar, nombre, _id: id } = member;
        return (
          <div key={id}>
            <Link to={`/vtuber/${id}`}>
              <img src={avatar} alt={nombre} />
            </Link>
          </div>
        );
      })}
    </GenSection>
  );
};

export default GenMembers;
