import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvaDevLibComponent } from './rva-dev-lib.component';

describe('RvaDevLibComponent', () => {
  let component: RvaDevLibComponent;
  let fixture: ComponentFixture<RvaDevLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvaDevLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvaDevLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
