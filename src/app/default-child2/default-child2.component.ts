import {ChangeDetectorRef, Component, OnInit, SimpleChanges} from '@angular/core';
import {getConsoleStyle} from "../consoleStyleFactory";

@Component({
  selector: 'app-default-child2',
  template: `
    <h4>
      Child 2
    </h4>
    <button (click)="detect()">Detect Changes</button>
    <button (click)="mark()">Mark For Check</button>
    <button (click)="log()">console.log('Click!')</button>
  `
})
export class DefaultChild2Component implements OnInit {

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('%cDefaultChild2Component', getConsoleStyle('blue'), 'ngOnInit');
  }

  ngDoCheck() {
    console.log('%cDefaultChild2Component', getConsoleStyle('blue'), 'ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cDefaultChild2Component', getConsoleStyle('blue'), 'ngOnChanges', changes);
  }

  mark() {
    this.changeDetectorRef.markForCheck();
  }

  detect() {
    this.changeDetectorRef.detectChanges();
  }

  log() {
    console.log('Click!');
  }

}
