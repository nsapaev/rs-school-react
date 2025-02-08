import React, { Component } from 'react';
import './style.css';

import { Pagination } from '../Pagination';

interface TablePropsInterface {
  tableData: Array<{
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    hair_color: string;
    eye_color: string;
  }>;
  pageCount: number;
  currentPage: number;
  setCurrentPage: (selectedPage: number) => void;
}

export const Table: React.FC<TablePropsInterface> = ({
  tableData,
  pageCount,
  currentPage,
  setCurrentPage,
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
                key={element.name}
                style={{
                  backgroundColor: index % 2 === 0 ? 'white' : '#F6F7F8',
                }}
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
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
