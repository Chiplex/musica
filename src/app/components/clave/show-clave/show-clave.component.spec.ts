import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClaveComponent } from './show-clave.component';

describe('ShowClaveComponent', () => {
  let component: ShowClaveComponent;
  let fixture: ComponentFixture<ShowClaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowClaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
