import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFooterComponent } from './d-footer.component';

describe('DFooterComponent', () => {
  let component: DFooterComponent;
  let fixture: ComponentFixture<DFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DFooterComponent]
    });
    fixture = TestBed.createComponent(DFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
