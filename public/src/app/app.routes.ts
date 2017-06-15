import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TopicComponent} from './topic/topic.component';
import {TopicListComponent} from './topic/topic-list/topic-list.component';
import {TopicNewComponent} from './topic/topic-new/topic-new.component';
import {TopicShowComponent} from './topic/topic-show/topic-show.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'topics', component: TopicComponent, children: [
    {path: 'list', component: TopicListComponent},
    {path: 'new', component: TopicNewComponent},
    {path: 'show/:id', component: TopicShowComponent}

  ]}

];
export const routing = RouterModule.forRoot(APP_ROUTES);
