import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSupportComponent } from './web-support.component';

describe('WebSupportComponent', () => {
  let component: WebSupportComponent;
  let fixture: ComponentFixture<WebSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebSupportComponent]
    });
    fixture = TestBed.createComponent(WebSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
