import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAsideComponent } from './d-aside.component';

describe('DAsideComponent', () => {
  let component: DAsideComponent;
  let fixture: ComponentFixture<DAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DAsideComponent]
    });
    fixture = TestBed.createComponent(DAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
