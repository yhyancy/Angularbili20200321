import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerxjsComponent } from './homerxjs.component';

describe('HomerxjsComponent', () => {
  let component: HomerxjsComponent;
  let fixture: ComponentFixture<HomerxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
