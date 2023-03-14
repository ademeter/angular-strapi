import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImageComponent } from './ui-hero.component';

describe('UiHeroComponent', () => {
  let component: UiImageComponent;
  let fixture: ComponentFixture<UiImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UiImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
