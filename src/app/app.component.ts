import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public post: string;

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {}

  public changePT(postType: string) {
    if (this.post === postType) {
      return;
    }
    this.post = postType;
    this.cdr.detectChanges();
  }
}
