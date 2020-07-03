import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOdcLayoutComponent } from './my-odc-layout.component';

describe('MyOdcLayoutComponent', () => {
  let component: MyOdcLayoutComponent;
  let fixture: ComponentFixture<MyOdcLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOdcLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOdcLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
