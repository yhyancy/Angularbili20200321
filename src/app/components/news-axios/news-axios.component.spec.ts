import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAxiosComponent } from './news-axios.component';

describe('NewsAxiosComponent', () => {
  let component: NewsAxiosComponent;
  let fixture: ComponentFixture<NewsAxiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAxiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAxiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
