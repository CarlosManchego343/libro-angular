import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraportadaComponent } from './contraportada.component';

describe('ContraportadaComponent', () => {
  let component: ContraportadaComponent;
  let fixture: ComponentFixture<ContraportadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContraportadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraportadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
