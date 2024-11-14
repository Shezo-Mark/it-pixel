import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineOptComponent } from './search-engine-opt.component';

describe('SearchEngineOptComponent', () => {
  let component: SearchEngineOptComponent;
  let fixture: ComponentFixture<SearchEngineOptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEngineOptComponent]
    });
    fixture = TestBed.createComponent(SearchEngineOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
