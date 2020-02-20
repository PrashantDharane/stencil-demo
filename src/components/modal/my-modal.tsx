import { Component, h, Prop, State, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css'
})
export class MyModal {
  buttons  = ["Okay","Cancel"];
  
  @State() showOptions = false;
  @Prop() modaltitle : string;
  @Prop() info : string;

  @Event({
    eventName: 'toggleModal'
  }) 
  toggleModal: EventEmitter;
  
  toggleModalHandler(){
    this.toggleModal.emit();
  }

  @Method()
  showOptionsHandler(){
    this.showOptions = this.showOptions ? false : true;
  }

  render() {
    let options = null;
    if (this.showOptions) {
      options = (
        this.buttons.map(btn => {
          console.log(btn);
          if (btn == 'Cancel') {
            return <button onClick={this.toggleModalHandler.bind(this)}>{btn}</button> 
          } else{
            return <button>{btn}</button>
          }
        })
      )
    }
    return (
    <div> 
      <h1>{this.modaltitle}</h1>
      <p>{this.info}</p>
      <hr/>
      <button onClick={this.showOptionsHandler.bind(this)}>Show options</button>
      <hr/>
      {options}
    </div>
    );
  }

}
