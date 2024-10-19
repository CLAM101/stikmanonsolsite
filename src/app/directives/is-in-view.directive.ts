import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appIsInView]',
  standalone: true,
})
export class IsInViewDirective implements AfterViewInit, OnDestroy {
  @Output() inView: EventEmitter<boolean> = new EventEmitter();
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.createObserver();
  }

  createObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.inView.emit(true);
          } else {
            this.inView.emit(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
