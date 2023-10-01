// Sidebar.js
import React from 'react';

const Sidebar = ({ locationCounts }) => {
  return (
    <div className="sidebar">
      <h2>Posts by Location</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(locationCounts).map(([location, count]) => (
            <tr key={location}>
              <td>{location}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
