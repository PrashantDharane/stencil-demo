import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'table-row',
  styleUrl: 'row.css'
})
export class Row {

  @Prop() row : any;
  render() {
    return (
      <tbody>
      <tr>
        {
          Object.keys(this.row).map( (_key: string | number) => <td>{this.row[_key]}</td>)
        }
      </tr>
      </tbody>
    );
  }

}
