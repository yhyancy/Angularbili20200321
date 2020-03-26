import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomleftbarComponent } from './domleftbar.component';

describe('DomleftbarComponent', () => {
  let component: DomleftbarComponent;
  let fixture: ComponentFixture<DomleftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomleftbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomleftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
