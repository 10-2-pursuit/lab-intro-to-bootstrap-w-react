import React from 'react';
import '../index.css'; // Import the CSS file

const Sidebar = ({ locationCounts }) => {
  return (
    <div className="sidebar">
      <h4>
        <span className="text-dark">Posts by </span>
        <span className="text-orange">Location</span>
      </h4>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Location</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(locationCounts).map(([location, count]) => (
            <tr key={location}>
              <td>
                <span className="location-item">{location}</span>
              </td>
              <td>
                <div className="orange-box">{count}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
