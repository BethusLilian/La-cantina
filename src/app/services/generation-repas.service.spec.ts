import { TestBed } from '@angular/core/testing';

import { GenerationRepasService } from './generation-repas.service';

describe('GenerationRepasService', () => {
  let service: GenerationRepasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerationRepasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create meal object', ()=>{
    expect(service.generateOneMeal()).toBeDefined()
  })
});
