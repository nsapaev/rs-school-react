import { Component } from 'react';
import './styles.css';

interface TablePropsInterface {
  tableData: Array<{
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    hair_color: string;
    eye_color: string;
  }>;
}

export class Table extends Component<TablePropsInterface, unknown> {
  render() {
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
          </tbody>
        </table>
      </>
    );
  }
}
