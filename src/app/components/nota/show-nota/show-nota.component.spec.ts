import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNotaComponent } from './show-nota.component';

describe('ShowNotaComponent', () => {
  let component: ShowNotaComponent;
  let fixture: ComponentFixture<ShowNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
