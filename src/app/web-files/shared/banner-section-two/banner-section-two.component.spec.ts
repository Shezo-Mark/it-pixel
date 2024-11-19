import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSectionTwoComponent } from './banner-section-two.component';

describe('BannerSectionTwoComponent', () => {
  let component: BannerSectionTwoComponent;
  let fixture: ComponentFixture<BannerSectionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerSectionTwoComponent]
    });
    fixture = TestBed.createComponent(BannerSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
