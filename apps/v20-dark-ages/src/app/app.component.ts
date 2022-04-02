import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { V20DaCharacterService } from '@timesink/feature-v20-character-display';
import { V20DaNpcService } from '@timesink/feature-v20-npc-display';
import { V20DaCharacter } from '@timesink/feature-v20-types';
import { MenuButton } from '@timesink/ui';
import { of } from 'rxjs';

@Component({
  selector: 'timesink-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'v20-dark-ages';

  characters: V20DaCharacter[];
  characterButton: MenuButton;
  journalButton: MenuButton;
  spotifyButton: MenuButton;
  expHistoryButton: MenuButton;
  npcs: V20DaCharacter[];
  npcButton: MenuButton;
  rulesInfoButton: MenuButton;
  impressumButton: MenuButton;
  profileButton: MenuButton;

  availableButtons: MenuButton[] = [];
  renderedMenuButtons: MenuButton[] = [];

  mobile = false;

  constructor(
    private charService: V20DaCharacterService,
    private npcService: V20DaNpcService,
    private authService: AuthService
  ) {
    this.characters = this.charService.getCharacters();
    this.npcs = this.npcService.getNPCs();

    this.characterButton = {
      label: 'Charaktere',
      entries: this.characters.map((character) => {
        return {
          label: `${character.name} ${
            character.surname === '-' ? '' : character.surname
          }`,
          route: '/character',
          params: [character.surname, character.name],
        };
      }),
      isRendered: of(true),
    };

    this.journalButton = {
      label: 'Journal',
      entries: [{ label: 'Tagebuch', route: '/journal' }],
      isRendered: of(true),
    };

    this.expHistoryButton = {
      label: 'Erfahrungspunkte',
      entries: [{ label: 'Erfahrungspunkte', route: '/exp-history' }],
      isRendered: of(true),
    };

    this.spotifyButton = {
      label: 'Spotify-Playlist',
      entries: [{ label: 'Spotify-Playlist', route: '/spotify-playlist' }],
      isRendered: of(true),
    };

    this.npcButton = {
      label: 'NPCs',
      entries: this.npcs.map((npc) => {
        return {
          label: `${npc.name} ${npc.surname === '-' ? '' : npc.surname}`,
          route: '/npc',
          params: [npc.surname, npc.name],
        };
      }),
      isRendered: of(true),
    };

    this.rulesInfoButton = {
      label: 'Regel Infos',
      entries: [
        {
          label: 'Würfeln & Schwierigkeiten',
          route: '/rules-info/dice-and-difficulties',
        },
        {
          label: 'Frenzy & Rötschreck',
          route: '/rules-info/frenzy-and-roetschreck',
        },
        {
          label: 'Roads & Degeneration',
          route: '/rules-info/roads-and-degeneration',
        },
      ],
    };

    this.impressumButton = {
      label: 'Impressum',
      entries: [{ label: 'Impressum', route: '/impressum' }],
      isRendered: of(true),
    };

    this.profileButton = {
      label: 'Profile',
      entries: [{ label: 'Profile', route: '/profile' }],
      isRendered: this.authService.isAuthenticated$,
    };

    this.availableButtons.push(
      this.characterButton,
      this.journalButton,
      this.expHistoryButton,
      this.spotifyButton,
      this.npcButton,
      this.rulesInfoButton,
      this.impressumButton,
      this.profileButton
    );
  }

  ngOnInit(): void {
    this.availableButtons.forEach((button) =>
      button.isRendered.subscribe((isRendered) => {
        if (isRendered) {
          this.renderedMenuButtons.push(button);
        }
      })
    );
  }
}
