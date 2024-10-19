import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEmbedComponent } from './game-embed.component';

describe('GameEmbedComponent', () => {
  let component: GameEmbedComponent;
  let fixture: ComponentFixture<GameEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameEmbedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
