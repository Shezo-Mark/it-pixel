import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBusinessComponent } from './local-business.component';

describe('LocalBusinessComponent', () => {
  let component: LocalBusinessComponent;
  let fixture: ComponentFixture<LocalBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalBusinessComponent]
    });
    fixture = TestBed.createComponent(LocalBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
