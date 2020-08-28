import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavListChildrenComponent } from './fav-list-children.component';

describe('FavListChildrenComponent', () => {
  let component: FavListChildrenComponent;
  let fixture: ComponentFixture<FavListChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavListChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavListChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
