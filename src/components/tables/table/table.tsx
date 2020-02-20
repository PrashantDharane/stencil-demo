import { Component, h, Listen, Prop, Watch} from '@stencil/core';

@Component({
  tag: 'my-table',
  styleUrl: 'table.css'
})
export class Table {

  @Prop({ mutable:true}) data = [];
  @Watch('data')
  watchHandler(newValue: any){
    this.data =newValue;
  }

  @Listen('formSubmitEvent',{target:'parent',capture:true})
  formSubmitHandler(event: CustomEvent){
      this.data = [...this.data,event.detail];
      console.log("Listening event", event);
  }

  render() {
    let rows = [];
    if (this.data){
      this.data.forEach(record => {
        rows.push(<tr>);
          rows.push(<td>{record.fname}</td>);
          rows.push(<td>{record.lname}</td>);
        rows.push(</tr>);
      })
    }
    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        {
          this.data.map(record => <table-row row = {record}></table-row>)
        }
      </table>
    );
  }

}
