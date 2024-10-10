import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFilesComponent } from './web-files.component';

describe('WebFilesComponent', () => {
  let component: WebFilesComponent;
  let fixture: ComponentFixture<WebFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebFilesComponent]
    });
    fixture = TestBed.createComponent(WebFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
