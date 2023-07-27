import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() testo!:string
  @Input() id!:number
  @Input() active!:boolean
  @Output() onRefresh = new EventEmitter();

  refresh(id:number){
    this.onRefresh.emit(id)
  }

}
