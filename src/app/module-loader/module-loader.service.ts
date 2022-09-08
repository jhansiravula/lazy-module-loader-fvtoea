import {
  Injectable,
  ViewContainerRef,
  createNgModuleRef,
  Injector,
  Type,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModuleLoaderService {
  constructor(private injector: Injector) {}

  async loadModule(
    module: Type<any>,
    container: ViewContainerRef,
    input: { inputName: string; inputData: any }
  ): Promise<any> {
    let ref;
    try {
      container.clear();
      const moduleRef = createNgModuleRef(module, this.injector);
      const componentFactory = moduleRef.instance.resolveComponent();
      ref = container.createComponent(
        componentFactory,
        undefined,
        moduleRef.injector
      );

      // console.log(input);
      // set component Input() property
      if (input && input.inputName) {
        ref.instance[input.inputName] = input;
      }

      // you have to manually call ngOnChanges
      // ref.instance.ngOnChanges(); // may be NA
    } catch (e) {
      console.error(e);
    }
    return ref;
  }
}
