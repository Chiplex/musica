import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedondaComponent } from './redonda.component';

describe('RedondaComponent', () => {
  let component: RedondaComponent;
  let fixture: ComponentFixture<RedondaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedondaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
