import { Observable } from 'rxjs';

export interface MenuButton {
  entries: MenuButtonEntry[];
  label: string;
  type?: 'primary' | 'accent' | 'warn';
  isRendered: Observable<boolean>;
}

export interface MenuButtonEntry {
  label: string;
  route?: string;
  params?: string[];
}
