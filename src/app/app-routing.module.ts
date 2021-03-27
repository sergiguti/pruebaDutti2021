import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutePaths} from './shared/constants/route-paths';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: RoutePaths.INIT,
    loadChildren: () => import(`src/app/main/main.module`).then(m => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: RoutePaths.LOGIN,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: RoutePaths.REGISTER,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: RoutePaths.SHIPS,
    loadChildren: () => import('./ships/ships.module').then(m => m.ShipsModule),
    canActivate: [AuthGuard]
  },
  {
    path: RoutePaths.PAGEONE,
    loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule),
    canActivate: [AuthGuard]
  },
  {
    path: RoutePaths.PAGETWO,
    loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
