import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHostingComponent } from './website-hosting.component';

describe('WebsiteHostingComponent', () => {
  let component: WebsiteHostingComponent;
  let fixture: ComponentFixture<WebsiteHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteHostingComponent]
    });
    fixture = TestBed.createComponent(WebsiteHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
