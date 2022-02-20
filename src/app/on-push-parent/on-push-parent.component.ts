import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {getConsoleStyle} from "../consoleStyleFactory";

@Component({
  selector: 'app-on-push-parent',
  template: `
    <h3>OnPush Strategy</h3>
    <div>
      <button (click)="detect()">Detect Changes</button>
      <button (click)="mark()">Mark For Check</button>
      <button (click)="log()">console.log('Click!')</button>

      <button (click)="setValue()">Set value</button>
      <button (click)="setNewValue()">Set new value</button>
    </div>
    <div style="margin-top: 50px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <app-on-push-child1 [value]="obj"></app-on-push-child1>
      <app-on-push-child2></app-on-push-child2>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushParentComponent implements OnInit, OnChanges, DoCheck {

  obj = { value: 0 };

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    // @ts-ignore
    changeDetectorRef.markForCheck_ = changeDetectorRef.markForCheck;
    changeDetectorRef.markForCheck = () => {
      console.log('%cOnPushParentComponent', getConsoleStyle('green'), 'markForCheck called');
      // @ts-ignore
      return changeDetectorRef.markForCheck_();
    }
  }

  ngOnInit() {
    console.log('%cOnPushParentComponent', getConsoleStyle('green'), 'ngOnInit');
  }

  ngDoCheck() {
    console.log('%cOnPushParentComponent', getConsoleStyle('green'), 'ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cOnPushParentComponent', getConsoleStyle('green'), 'ngOnChanges', changes);
  }

  detect() {
    this.changeDetectorRef.detectChanges();
  }

  setValue() {
    this.obj.value = new Date().getTime();
  }

  setNewValue() {
    this.obj = { value: new Date().getTime() };
  }

  mark() {
    this.changeDetectorRef.markForCheck();
  }

  log() {
    console.log('Click!');
  }
}
