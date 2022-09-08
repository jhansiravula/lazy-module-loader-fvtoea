import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
  ChangeDetectorRef
} from "@angular/core";

import { ModuleLoaderService } from "./module-loader.service";

@Component({
  selector: "module-loader",
  templateUrl: "./module-loader.component.html",
  styleUrls: ["./module-loader.component.scss"]
})
export class ModuleLoaderComponent implements OnInit, OnDestroy {
  @ViewChild("postArea", { read: ViewContainerRef }) postArea: ViewContainerRef;
  @Input() data: any; // optional input data to pass to the module's component
  @Input()
  set selector(value) {
    if (!value) {
      return;
    }
    this._selector = value;
    this.postArea && this.postArea.clear();
    this.loadModules(value);
  }

  get selector() {
    return this._selector;
  }

  private _selector: string;
  private _ref: any;

  constructor(
    private loaderService: ModuleLoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {}

  async loadModules(cpt: string): Promise<any> {
    let ref;
    if (cpt === "lazy") {
      ref = await this.loaderService.loadModule(
        await import("../lazy/lazy.module").then(m => m.LazyModule),
        this.postArea,
        this.data
      );
    } else if (cpt === "lazy2") {
      ref = await this.loaderService.loadModule(
        await import("../lazy2/lazy2.module").then(m => m.Lazy2Module),
        this.postArea,
        this.data
      );
    }

    this._ref = ref;
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this._ref && this._ref.destroy();
  }
}
