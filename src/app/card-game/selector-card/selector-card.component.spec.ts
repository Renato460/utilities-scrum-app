import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCardComponent } from './selector-card.component';

describe('SelectorCardComponent', () => {
  let component: SelectorCardComponent;
  let fixture: ComponentFixture<SelectorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorCardComponent]
    });
    fixture = TestBed.createComponent(SelectorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
