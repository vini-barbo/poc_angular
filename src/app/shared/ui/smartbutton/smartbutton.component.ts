import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-smartbutton',
  standalone: true,
  imports: [],
  template: `
    <div>Value {{ counter() }}</div>
    <div [className]="'flex gap-3'">
      <button (click)="handleClickIncreaseValue()">Increase +</button>
      <button (click)="handleClickResetValue()">Reset</button>
      <button (click)="handleClickDecreaseValue()">Decrease -</button>
    </div>
  `,
  styleUrl: './smartbutton.component.css',
})
export class SmartbuttonComponent {
  counter = signal(1);

  @Input() buttontitle: string = 'xereca';

  handleClickIncreaseValue = () => {
    this.counter.update((value) => value + 1);
  };
  handleClickDecreaseValue = () => {
    this.counter.update((value) => value - 1);
  };
  handleClickResetValue = () => {
    this.counter.set(0);
  };
}
