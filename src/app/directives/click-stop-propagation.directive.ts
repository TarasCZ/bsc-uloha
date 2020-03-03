import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[bscClickStopPropagation]'
})
export class ClickStopPropagationDirective {
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
