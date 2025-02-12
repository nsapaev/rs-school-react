import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { DataListInterface } from '../../types/types';

interface TablePropsInterface {
  tableData: Array<DataListInterface>;
  // getDetails: (value: string) => void;
}

export const Table: React.FC<TablePropsInterface> = ({ tableData }) => {
  return (
    <>
      {tableData.length ? (
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
            {tableData.map((element) => {
              return (
                <Link key={element.name} to={'details/' + element.name}>
                  <tr>
                    <td>{element.name}</td>
                    <td>{element.birth_year}</td>
                    <td>{element.gender}</td>
                    <td>{element.height}</td>
                    <td>{element.hair_color}</td>
                    <td>{element.eye_color}</td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      ) : (
        <>no data</>
      )}
    </>
  );
};
