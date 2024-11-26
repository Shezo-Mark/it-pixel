import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalMarketingComponent } from './legal-marketing.component';

describe('LegalMarketingComponent', () => {
  let component: LegalMarketingComponent;
  let fixture: ComponentFixture<LegalMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalMarketingComponent]
    });
    fixture = TestBed.createComponent(LegalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
