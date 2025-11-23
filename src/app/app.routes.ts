import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Birdy,',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Birdy, > Tweet Details',
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    title: 'Birdy, > Profile',
  },
  {
    path: 'post',
    component: PostComponent,
    title: 'Birdy, > Post',
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Birdy, > Search',
  },
];
