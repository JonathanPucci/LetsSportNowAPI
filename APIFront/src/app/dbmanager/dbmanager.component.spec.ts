import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbmanagerComponent } from './dbmanager.component';

describe('DbmanagerComponent', () => {
  let component: DbmanagerComponent;
  let fixture: ComponentFixture<DbmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
