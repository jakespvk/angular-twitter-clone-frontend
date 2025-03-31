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
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
    title: 'Profile',
  },
  {
    path: 'post',
    component: PostComponent,
    title: 'Post',
  },
  {
    path: 'search',
    component: SearchComponent,
    title: 'Search',
  },
];
