import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<input type="text" [(ngModel)] = "name"><h2>Hello {{name}}!</h2>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
