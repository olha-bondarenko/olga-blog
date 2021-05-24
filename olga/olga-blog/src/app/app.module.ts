import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogComponent } from './components/blog/blog.component';
import { BooksComponent } from './components/books/books.component';
import { ContactComponent } from './components/contact/contact.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { NgxsModule } from '@ngxs/store';
import { PostState } from './state/app.state';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LayoutComponent,
    HomeComponent,
    AboutMeComponent,
    BlogComponent,
    BooksComponent,
    ContactComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxsModule.forRoot([PostState], {developmentMode: !environment.production})
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
