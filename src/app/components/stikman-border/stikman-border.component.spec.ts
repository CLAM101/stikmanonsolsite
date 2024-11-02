import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StikmanBorderComponent } from './stikman-border.component';

describe('StikmanBorderComponent', () => {
  let component: StikmanBorderComponent;
  let fixture: ComponentFixture<StikmanBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StikmanBorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StikmanBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
