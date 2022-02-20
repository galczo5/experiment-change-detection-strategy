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
  selector: 'app-on-push-child2',
  template: `
    <h4>
      Child 2
    </h4>
    <button (click)="detect()">Detect Changes</button>
    <button (click)="mark()">Mark For Check</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChild2Component implements OnInit, OnChanges, DoCheck {

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('%cOnPushChild2Component', getConsoleStyle('green'), 'ngOnInit');
  }

  ngDoCheck() {
    console.log('%cOnPushChild2Component', getConsoleStyle('green'), 'ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cOnPushChild2Component', getConsoleStyle('green'), 'ngOnChanges', changes);
  }

  mark() {
    this.changeDetectorRef.markForCheck();
  }

  detect() {
    this.changeDetectorRef.detectChanges();
  }

}
