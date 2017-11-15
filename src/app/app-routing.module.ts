import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from 'app/product-create/product-create.component';
import { ProductListComponent } from 'app/product-list/product-list.component';
import { EditComponent } from 'app/edit/edit.component';

const routes: Routes = [
  {path:'create', component:ProductCreateComponent},
  {path:'list', component:ProductListComponent},
  {path:'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
