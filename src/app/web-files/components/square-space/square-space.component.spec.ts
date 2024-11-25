import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareSpaceComponent } from './square-space.component';

describe('SquareSpaceComponent', () => {
  let component: SquareSpaceComponent;
  let fixture: ComponentFixture<SquareSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquareSpaceComponent]
    });
    fixture = TestBed.createComponent(SquareSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
