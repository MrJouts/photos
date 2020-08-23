import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaCrearComponent } from './receta-crear.component';

describe('RecetaCrearComponent', () => {
  let component: RecetaCrearComponent;
  let fixture: ComponentFixture<RecetaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
