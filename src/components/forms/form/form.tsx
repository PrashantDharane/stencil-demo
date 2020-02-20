import { Component, h, EventEmitter, Event, State } from '@stencil/core';

@Component({
  tag: 'my-form',
  styleUrl: 'form.css'
})
export class Form {
  @State() fname : string = "";
  @State() lname : string = "";

  @Event({
    eventName: 'formSubmitEvent',
    bubbles:true
  }) formSubmitEvent : EventEmitter;
  
  submitForm(){
    let postData = {};
    postData['fname'] = this.fname;
    postData['lname'] = this.lname;
    this.formSubmitEvent.emit(postData)
    
  }
  handleChange(fieldName: string,event){
    console.log("handleChange");
    
    if(fieldName){
      this[fieldName] = event.target.value;
    }

  }

  render() {
    return (
      <div><label>First name:</label><br/>
      <input type="text" id="fname" name="fname" value={this.fname} onInput={(event) => this.handleChange('fname',event)}/><br/>
      <label>Last name:</label><br/>
      <input type="text" id="lname" name="lname" value={this.lname} onInput={(event) => this.handleChange('lname',event)}/><br/><br/>
      <button onClick={this.submitForm.bind(this)}> Submit </button></div>
    );
  }
}
