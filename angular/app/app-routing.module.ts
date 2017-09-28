import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent, LinkComponent, NotFoundComponent } from 'app/core';

const routes: Routes = [
  {path: '', loadChildren: './homepage/homepage.module#HomepageModule', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: 'about', component: AboutComponent},
  {path: 'link', component: LinkComponent},
  {path: 'tag', loadChildren: './tag/tag.module#TagModule'},
  {path: 'post', loadChildren: './post/post.module#PostModule'},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
