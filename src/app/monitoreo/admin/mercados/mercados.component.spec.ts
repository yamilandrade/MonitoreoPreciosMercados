import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosComponent } from './mercados.component';

describe('MercadosComponent', () => {
  let component: MercadosComponent;
  let fixture: ComponentFixture<MercadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
