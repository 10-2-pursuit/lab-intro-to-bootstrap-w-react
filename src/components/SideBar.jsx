// Sidebar.js
import React from 'react';

const Sidebar = ({locationCounts}) => {
  return (
    <div className="sidebar">
      <h4>
        <span className="text-dark">Posts by </span>
        <span style={{ color: 'orange' }}>Location</span>
      </h4>
      <table className="table table-borderless"> {/* Use Bootstrap table classes */}
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
                <span style={{ fontWeight: 'bold' }}>{location}</span> {/* Add bold text decoration to location */}
              </td>
              <td>
                <div className="orange-box">{count}</div> {/* Add an orange filled box around the count */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
