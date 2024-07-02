import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

export const loginregguardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthServiceService);
  const router = inject(Router);

  if(auth.credSet().islogged){
    console.log(auth.credSet())
    return router.parseUrl('/home')
  }
  return true;

};
