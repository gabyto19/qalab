import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootModalsComponent } from './foot-modals.component';

describe('FootModalsComponent', () => {
  let component: FootModalsComponent;
  let fixture: ComponentFixture<FootModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
