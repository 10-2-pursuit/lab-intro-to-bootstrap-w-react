import React from "react";
import posts from "../data/posts.json";

const Aside = () => {
  const numOfPostsObj = posts.reduce((acc, cur) => {
    if (acc[cur.location]) {
      acc[cur.location] = acc[cur.location] + 1;
    } else {
      acc[cur.location] = 1;
    }
    return acc;
  }, {});

  return (
    <div>
      <h3>
        Posts by <span className="text-warning">location</span>
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(numOfPostsObj).map(([location, value]) => (
            <tr key={location}>
              <td>{location}</td>
              <td className="text-center">
                <span className="badge text-bg-secondary">{value}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Aside;
