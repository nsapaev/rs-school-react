import React from 'react';
import './style.css';

interface TablePropsInterface {
  tableData: Array<{
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    hair_color: string;
    eye_color: string;
  }>;
  getDetails: (value: string) => void;
}

export const Table: React.FC<TablePropsInterface> = ({
  tableData,
  getDetails,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth year</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Hair color</th>
            <th>Eye color</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((element, index) => {
            return (
              <tr
                onClick={() => {
                  getDetails(element.name);
                }}
                key={element.name}
              >
                <td>{element.name}</td>
                <td>{element.birth_year}</td>
                <td>{element.gender}</td>
                <td>{element.height}</td>
                <td>{element.hair_color}</td>
                <td>{element.eye_color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
