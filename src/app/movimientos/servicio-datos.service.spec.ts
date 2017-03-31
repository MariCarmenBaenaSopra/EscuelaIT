import { TestBed, inject } from '@angular/core/testing';

import { ServicioDatosService } from './servicio-datos.service';

describe('ServicioDatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDatosService]
    });
  });

  it('should ...', inject([ServicioDatosService], (service: ServicioDatosService) => {
    expect(service).toBeTruthy();
  }));
});
