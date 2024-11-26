import { TestBed } from '@angular/core/testing';

import { ControleLivrosService } from './controle-livros.service';

describe('ControleLivrosService', () => {
  let service: ControleLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
