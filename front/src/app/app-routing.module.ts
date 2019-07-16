import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DateComponent } from './date/date.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import { TicketComponent } from './ticket/ticket.component';
import { HistoryComponent } from './history/history.component';



const routes: Routes = [
{path: 'home-page', component: HomePageComponent, pathMatch: 'full'},
{path: '', redirectTo: '/home-page', pathMatch: 'full'},
{path: 'navbar', component: NavbarComponent, pathMatch: 'full'},
{path: 'footer', component: FooterComponent, pathMatch: 'full'},
{path: 'date', component: DateComponent, pathMatch: 'full'},
{path: 'spectacle', component: SpectacleComponent, pathMatch: 'full'},
{path: 'ticket', component: TicketComponent, pathMatch: 'full'},
{path: 'fhistory', component: HistoryComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
