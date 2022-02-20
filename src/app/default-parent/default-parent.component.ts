import {ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {getConsoleStyle} from "../consoleStyleFactory";

@Component({
  selector: 'app-default-parent',
  template: `
    <h3>Default Strategy</h3>
    <div>
      <button (click)="detect()">Detect Changes</button>
      <button (click)="mark()">Mark For Check</button>
      <button (click)="log()">console.log('Click!')</button>


      <button (click)="setValue()">Set value</button>
      <button (click)="setNewValue()">Set new value</button>
    </div>
    <div style="margin-top: 50px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <app-default-child1 [value]="obj"></app-default-child1>
      <app-default-child2></app-default-child2>
    </div>
  `
})
export class DefaultParentComponent implements OnInit, OnChanges, DoCheck {

  obj = { value: 0 };

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    // @ts-ignore
    changeDetectorRef.markForCheck_ = changeDetectorRef.markForCheck;
    changeDetectorRef.markForCheck = () => {
      console.log('%cDefaultParentComponent', getConsoleStyle('blue'), 'markForCheck called');
      // @ts-ignore
      return changeDetectorRef.markForCheck_();
    }
  }

  ngOnInit() {
    console.log('%cDefaultParentComponent', getConsoleStyle('blue'), 'ngOnInit');
  }

  ngDoCheck() {
    console.log('%cDefaultParentComponent', getConsoleStyle('blue'), 'ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cDefaultParentComponent', getConsoleStyle('blue'), 'ngOnChanges', changes);
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
