import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Change Detection Strategy Experiment</h1>
    <h2 *ngIf="noop"
        style="color: red;">
      Noop Zone Provided
    </h2>
    <div>
      <button (click)="switchZones()">
        Toggle NgZone
      </button>
      <button (click)="clear()">
        Clear console
      </button>
      <button (click)="log()">console.log('Click!')</button>
    </div>
    <div style="margin-top: 50px; display: grid; grid-template-columns: 1fr 1fr; gap: 50px;">
      <app-default-parent style="border: 1px solid lightgray; padding: 10px;"></app-default-parent>
      <app-on-push-parent style="border: 1px solid lightgray; padding: 10px;"></app-on-push-parent>
    </div>
  `
})
export class AppComponent {

  readonly noop: boolean;

  constructor(
    private readonly ngZone: NgZone
  ) {
    this.noop = !(ngZone instanceof NgZone);
  }

  switchZones() {
    const key = 'ngzone';
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, 'true');
    }

    window.location.reload();
  }

  clear() {
    console.clear();
  }

  log() {
    console.log('Click!');
  }
}
