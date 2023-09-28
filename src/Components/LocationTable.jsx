import React from 'react';

const LocationTable = ({ locations }) => {
  return (
    <section className="location-table">
      <h3>Posts by Location</h3>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.name}>
              <td>{location.name}</td>
              <td>{location.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default LocationTable;