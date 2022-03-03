import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  declarations: [ProfilePageComponent],
})
export class FeatureProfilePageModule {}
