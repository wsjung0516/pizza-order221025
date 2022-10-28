import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import("./components/pizza.module").then( m=> m.PizzaModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
