import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultParentComponent } from './default-parent/default-parent.component';
import { DefaultChild1Component } from './default-child1/default-child1.component';
import { DefaultChild2Component } from './default-child2/default-child2.component';
import { OnPushParentComponent } from './on-push-parent/on-push-parent.component';
import { OnPushChild1Component } from './on-push-child1/on-push-child1.component';
import { OnPushChild2Component } from './on-push-child2/on-push-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultParentComponent,
    DefaultChild1Component,
    DefaultChild2Component,
    OnPushParentComponent,
    OnPushChild1Component,
    OnPushChild2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
