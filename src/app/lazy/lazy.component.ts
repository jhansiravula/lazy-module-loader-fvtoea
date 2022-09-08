import {
  Component,
  OnInit,
  ChangeDetectorRef,
  HostBinding
} from "@angular/core";

@Component({
  selector: "lazy",
  templateUrl: "./lazy.component.html",
  styleUrls: ["./lazy.component.scss"]
})
export class LazyComponent implements OnInit {
  @HostBinding("class.boundclass") private active = false;

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit() {}

  public toggle() {
    this.active = !this.active;
    this.cdr.detectChanges();
  }
}
