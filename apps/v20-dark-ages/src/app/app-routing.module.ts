import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from '@timesink/feature-profile-page';
import { V20DaCharacterComponent } from '@timesink/feature-v20-character-display';
import { V20DaExpHistoryComponent } from '@timesink/feature-v20-exp-history';
import { V20DaHomeComponent } from '@timesink/feature-v20-home';
import { V20DaImpressumComponent } from '@timesink/feature-v20-impressum';
import { V20DaJournalComponent } from '@timesink/feature-v20-journal';
import { V20DaNpcComponent } from '@timesink/feature-v20-npc-display';
import { V20DaRuleInfoComponent } from '@timesink/feature-v20-rule-info';
import { V20DaSpotifyPlaylistComponent } from '@timesink/feature-v20-spotify-playlist';
import { LoginActivateGuard } from './../../login-activate.guard';

const routes: Routes = [
  {
    path: 'character/:surname/:name',
    component: V20DaCharacterComponent,
  },
  {
    path: 'npc/:surname/:name',
    component: V20DaNpcComponent,
  },
  { path: 'journal', component: V20DaJournalComponent },
  { path: 'exp-history', component: V20DaExpHistoryComponent },
  { path: 'spotify-playlist', component: V20DaSpotifyPlaylistComponent },
  { path: 'rules-info', component: V20DaRuleInfoComponent },
  {
    path: 'impressum',
    component: V20DaImpressumComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [LoginActivateGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: V20DaHomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
