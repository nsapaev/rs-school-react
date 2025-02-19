import React from 'react';

import { Card } from '../Card';

import './style.css';
import { PeopleInterface } from '../../api/people-api-slice';

interface TablePropsInterface {
  tableData: PeopleInterface[];
}

export const Cards: React.FC<TablePropsInterface> = ({ tableData }) => {
  return (
    <div className="cards-wrapper">
      {tableData?.length ? (
        tableData.map((people) => {
          return (
            <Card
              gender={people.gender}
              mass={people.mass}
              name={people.name}
              key={people.name}
            />
          );
        })
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};
