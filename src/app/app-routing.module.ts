import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  {
    path: "notifications",
    component: NotificationsComponent
  },
  {
    path: "search",
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
