import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalCardComponent } from './goal-card/goal.card.component';
import {MaterialModule} from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GoalCategoriesComponent } from './goal-categories/goal.categories.component';
import { WorkspaceSelectorComponent } from './workspace-selector/workspace.selector.component';

const appRoutes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'goals', 
    component: GoalsComponent 
  },
  {
    path: '**',
    redirectTo: 'visit'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    GoalCardComponent,
    GoalCategoriesComponent,
    GoalsComponent,
    LoginComponent,
    RegisterComponent,
    WorkspaceSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
