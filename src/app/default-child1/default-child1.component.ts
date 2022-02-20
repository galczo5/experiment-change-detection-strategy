import {ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {getConsoleStyle} from "../consoleStyleFactory";

@Component({
  selector: 'app-default-child1',
  template: `
    <h4>Child 1</h4>
    <button (click)="detect()">Detect Changes</button>
    <button (click)="mark()">Mark For Check</button>
    <p>{{ value.value }}</p>
  `,
  styles: [
  ]
})
export class DefaultChild1Component implements OnInit, OnChanges, DoCheck {

  @Input()
  value = { value: 0 };

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('%cDefaultChild1Component', getConsoleStyle('blue'), 'ngOnInit');
  }

  ngDoCheck() {
    console.log('%cDefaultChild1Component', getConsoleStyle('blue'), 'ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cDefaultChild1Component', getConsoleStyle('blue'), 'ngOnChanges', changes);
  }

  mark() {
    this.changeDetectorRef.markForCheck();
  }

  detect() {
    this.changeDetectorRef.detectChanges();
  }

}
