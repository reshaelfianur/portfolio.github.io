import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let elements = this.elementRef.nativeElement
      .querySelectorAll('.js-scroll-trigger, .nav');

    elements.forEach((elem: any) => {
      elem.addEventListener("click", () => {
        let el = this;

        this.onClick(el)
      });
    });
  }

  onClick(event: object) {
    this.elementRef.nativeElement
      .querySelector('.navbar-collapse').
      classList.toggle('.navbar-collapse');
  }
}
