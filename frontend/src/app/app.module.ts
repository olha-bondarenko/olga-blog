import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { ContactMeComponent } from './containers/contact-me/contact-me.component';
import { BlogComponent } from './containers/blog/blog.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { IconDefinition } from '@ant-design/icons-angular';
import { MenuOutline } from '@ant-design/icons-angular/icons';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { TitleComponent } from './components/title/title.component';
import { BlogPostComponent } from './containers/blog-post/blog-post.component';

const icons: IconDefinition[] = [ MenuOutline ];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactMeComponent,
    BlogComponent,
    LayoutComponent,
    NavBarComponent,
    BasicButtonComponent,
    TitleComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,
    NzCarouselModule,
    NzDropDownModule,
    NzCollapseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons)
  ],
  exports: [
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,
    NzDropDownModule,
    NzCarouselModule,
    NzCollapseModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
