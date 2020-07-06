import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcHeaderComponent } from './odc-header.component';

describe('OdcHeaderComponent', () => {
  let component: OdcHeaderComponent;
  let fixture: ComponentFixture<OdcHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
