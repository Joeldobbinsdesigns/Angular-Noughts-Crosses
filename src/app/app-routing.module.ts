import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BoardComponent } from './board/board.component';
import { NestedComponent } from './nested/nested.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'home/:id', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'nested',
        component: NestedComponent,
      },
    ],
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
