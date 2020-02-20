import { Component, h, State,Method,Listen,Element } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'home.css'
})
export class Home {
  @State() showModal = false;

  @Element() element : HTMLElement;
  modalEle : any = null;
  backdropEle : any = null;
    
  init(){
    this.modalEle = this.element.querySelector('my-modal');
    this.backdropEle = this.element.querySelector('my-backdrop');
  }

  @Method()
  open(){
    this.init()
    this.backdropEle.style.display = 'block';
    this.modalEle.style.display = 'block';
  }
  @Method()
  close(){
    this.init();
    this.modalEle.style.display = 'none';
    this.backdropEle.style.display = 'none';
  }

  @Listen('toggleModal')
  toggleModalHandler(){
    this.showModal = this.showModal ? false : true;
    this.showModal ? this.open() : this.close();
  }


  render() {
    return (
      <div>
        <modal-button></modal-button>
        <my-backdrop></my-backdrop>
        <my-modal modaltitle="Titlewa" info="Infhormationwa!"></my-modal>
        <my-form></my-form>
        <my-table></my-table>
      </div>
    );
  }

}
