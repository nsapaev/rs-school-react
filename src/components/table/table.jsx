import React from 'react';
import S from './table.module.css';

export class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <table>
          <tr>
            <th>Name</th>
            <th>Birth year</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Hair color</th>
            <th>Eye color</th>
          </tr>

          {this.props.tableData.map((element, index) => {
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
        </table>
      </>
    );
  }
}
