import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlancaComponent } from './blanca.component';

describe('BlancaComponent', () => {
  let component: BlancaComponent;
  let fixture: ComponentFixture<BlancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
