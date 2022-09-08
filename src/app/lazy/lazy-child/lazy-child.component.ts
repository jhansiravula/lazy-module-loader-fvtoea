import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent implements OnInit {
  @HostBinding("class.boundclass") private active = false;

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit() {}

  public toggle() {
    this.active = !this.active;
    // this.cdr.detectChanges();
  }
}