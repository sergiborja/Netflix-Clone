import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DEMOComponent } from './demo.component';

describe('DEMOComponent', () => {
  let component: DEMOComponent;
  let fixture: ComponentFixture<DEMOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEMOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEMOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
