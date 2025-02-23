import React from 'react';

import './style.css';

import { Card } from '../Card';
import { DetailsFetchResultInterface } from '../../types/types';
interface TablePropsInterface {
  tableData: DetailsFetchResultInterface[];
}

export const Cards: React.FC<TablePropsInterface> = ({ tableData }) => {
  return (
    <div className="cards-wrapper">
      {tableData?.length ? (
        tableData.map((people) => {
          return <Card people={people} key={people.name} />;
        })
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};
