import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingbarComponent } from './trakingbar.component';

describe('TrakingbarComponent', () => {
  let component: TrakingbarComponent;
  let fixture: ComponentFixture<TrakingbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrakingbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrakingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
