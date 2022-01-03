import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from '../user/user.module';

const routes: Routes = [
  // { path: '', loadChildren: '../user/user.module#UserModule' },
  { path: '', loadChildren: () => UserModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
