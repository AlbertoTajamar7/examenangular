import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaComponentComponent } from './marca-component.component';

describe('MarcaComponentComponent', () => {
  let component: MarcaComponentComponent;
  let fixture: ComponentFixture<MarcaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
