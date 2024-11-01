import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorHubComponent } from './creator-hub.component';

describe('CreatorHubComponent', () => {
  let component: CreatorHubComponent;
  let fixture: ComponentFixture<CreatorHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
