import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasListaComponent } from './tareas-lista.component';

describe('TareasListaComponent', () => {
  let component: TareasListaComponent;
  let fixture: ComponentFixture<TareasListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasListaComponent]
    });
    fixture = TestBed.createComponent(TareasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
