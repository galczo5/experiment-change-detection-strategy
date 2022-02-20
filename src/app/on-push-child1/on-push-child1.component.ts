import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {getConsoleStyle} from "../consoleStyleFactory";

@Component({
  selector: 'app-on-push-child1',
  template: `
    <h4>Child 1</h4>
    <button (click)="detect()">Detect Changes</button>
    <button (click)="mark()">Mark For Check</button>
    <button (click)="log()">console.log('Click!')</button>

    <p>{{ value.value }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChild1Component implements OnInit, OnChanges, DoCheck {

  @Input()
  value = { value: 0 };

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('%cOnPushChild1Component', getConsoleStyle('green'), 'ngOnInit');
  }

  ngDoCheck() {
    console.log('%cOnPushChild1Component', getConsoleStyle('green'), 'ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cOnPushChild1Component', getConsoleStyle('green'), 'ngOnChanges', changes);
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
