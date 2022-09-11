import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';
import { BlogPostComponent } from './containers/blog-post/blog-post.component';
import { BlogComponent } from './containers/blog/blog.component';
import { ContactMeComponent } from './containers/contact-me/contact-me.component';
import { HomeComponent } from './containers/home/home.component';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
