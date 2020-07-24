import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'toHome' } },
  { path: 'about', component: AboutComponent, data: { animation: 'toAbout' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'toProjects' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'toContact' }},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
