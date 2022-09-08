import {
  NgModule,
  ComponentFactoryResolver,
  ComponentFactory,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LazyComponent } from './lazy.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';

@NgModule({
  declarations: [LazyComponent, LazyChildComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LazyModule {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveComponent(): ComponentFactory<LazyComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(LazyComponent);
  }
}
