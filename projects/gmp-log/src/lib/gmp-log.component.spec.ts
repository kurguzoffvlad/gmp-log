import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpLogComponent } from './gmp-log.component';

describe('GmpLogComponent', () => {
  let component: GmpLogComponent;
  let fixture: ComponentFixture<GmpLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
