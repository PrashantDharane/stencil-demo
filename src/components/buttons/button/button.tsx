import { Component, Event,EventEmitter,Method, h } from '@stencil/core';

@Component({
  tag: 'modal-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Event({
    eventName: 'toggleModal',
    bubbles: true,
    cancelable: true,
    composed: true
  }) 
  toggleModal: EventEmitter;
  
  toggleModalHandler({}){
    console.log("event emitted")
    this.toggleModal.emit();
  }

  @Method()
  openModal(){
    this.toggleModalHandler({});
  }


  render() {
    return (
      <button  onClick={this.openModal.bind(this)}>Open modal</button>
    );
  }

}
