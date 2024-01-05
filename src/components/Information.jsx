import React from "react";

const Information = ({ character }) => {
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-card">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>: {character.name}</td>
              </tr>
              <tr>
                <td>Birthday</td>
                <td>: {character.dateOfBirth}</td>
              </tr>
              <tr>
                <td>House</td>
                <td>: {character.house}</td>
              </tr>
              <tr>
                <td>Ancestry</td>
                <td>: {character.ancestry}</td>
              </tr>
              <tr>
                <td>Species</td>
                <td>: {character.species}</td>
              </tr>
              <tr>
                <td>Patronus</td>
                <td>: {character.patronus}</td>
              </tr>
              <tr>
                <td>Actor</td>
                <td>: {character.actor}</td>
              </tr>
              <tr>
                <td>Alternate names</td>
                <td>: {character.alternate_names.join(", ") || "-"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Information;
