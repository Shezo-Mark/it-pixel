import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationManagementComponent } from './reputation-management.component';

describe('ReputationManagementComponent', () => {
  let component: ReputationManagementComponent;
  let fixture: ComponentFixture<ReputationManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReputationManagementComponent]
    });
    fixture = TestBed.createComponent(ReputationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
