import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixDeveloperComponent } from './wix-developer.component';

describe('WixDeveloperComponent', () => {
  let component: WixDeveloperComponent;
  let fixture: ComponentFixture<WixDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WixDeveloperComponent]
    });
    fixture = TestBed.createComponent(WixDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
