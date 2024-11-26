import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDadosComponent } from './livro-dados.component';

describe('LivroDadosComponent', () => {
  let component: LivroDadosComponent;
  let fixture: ComponentFixture<LivroDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroDadosComponent]
    });
    fixture = TestBed.createComponent(LivroDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
