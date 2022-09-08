import {
  NgModule,
  ComponentFactoryResolver,
  ComponentFactory,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Lazy2Component } from './lazy2.component';

@NgModule({
  declarations: [Lazy2Component],
  imports: [CommonModule, ReactiveFormsModule],
})
export class Lazy2Module {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveComponent(): ComponentFactory<Lazy2Component> {
    return this.componentFactoryResolver.resolveComponentFactory(
      Lazy2Component
    );
  }
}
