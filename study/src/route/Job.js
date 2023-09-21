import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { RouteContext } from "./contexts/RouteContext";
import { useSelector } from "react-redux";

const Job = () => {
  const { table } = useContext(RouteContext);
  const { title } = useParams();
  const jobs = useSelector((state) => state.jobs);

  return (
    <div>
      <Link to="/intro">소개 페이지로 이동</Link>
      {title ? (
        <table style={table}>
          <thead>
            <tr>
              <th>기술</th>
            </tr>
          </thead>
          <tbody>
            {jobs[title].skills.map((skill, i) => (
              <tr key={i}>
                <td>{skill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>존재하지 않는 직업입니다.</h1>
      )}
    </div>
  );
};

export default Job;
