import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTajetaComponent } from './heroe-tajeta.component';

describe('HeroeTajetaComponent', () => {
  let component: HeroeTajetaComponent;
  let fixture: ComponentFixture<HeroeTajetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTajetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTajetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
