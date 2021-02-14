import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListUsersComponent} from './User/list-users/list-users.component';
import {AddUsersComponent} from './User/add-users/add-users.component';
import {EditUserComponent} from './User/edit-user/edit-user.component';
import {DetailUserComponent} from './User/detail-user/detail-user.component';
import {ListProfilsComponent} from './Profil/list-profils/list-profils.component';
import {ListProfilDeSortieComponent} from './Profil_de_sortie/list-profil-de-sortie/list-profil-de-sortie.component';
import {AddProfilDeSortieComponent} from './Profil_de_sortie/add-profil-de-sortie/add-profil-de-sortie.component';
import {ListGrpeCompetenceComponent} from './Groupe_de_Competence/list-grpe-competence/list-grpe-competence.component';
import {AddGrpeCompetenceComponent} from './Groupe_de_Competence/add-grpe-competence/add-grpe-competence.component';
import {EditGrpeCompetenceComponent} from './Groupe_de_Competence/edit-grpe-competence/edit-grpe-competence.component';
import {AddCompetenceComponent} from './Competence/add-competence/add-competence.component';
import {ListCompetenceComponent} from './Competence/list-competence/list-competence.component';
import {ListReferentielComponent} from './Referentiel/list-referentiel/list-referentiel.component';
import {AddReferentielComponent} from './Referentiel/add-referentiel/add-referentiel.component';
import {EditReferentielComponent} from './Referentiel/edit-referentiel/edit-referentiel.component';
import {ListPromotionComponent} from './Promotion/list-promotion/list-promotion.component';
import {AddPromotionComponent} from './Promotion/add-promotion/add-promotion.component';
import {EditPromotionComponent} from './Promotion/edit-promotion/edit-promotion.component';
import {EditProfilComponent} from './Profil/edit-profil/edit-profil.component';
import {ErrorComponent} from './error/error.component';
import {LoginRoute} from './login/login.route';
import {DetailProfilComponent} from './Profil/detail-profil/detail-profil.component';
import {UnSavedChangesGuard} from '../Guards/un-saved-changes.guard';
import {UnSavedAddGrpeCompetenceGuard} from '../Guards/un-saved-add-grpe-competence.guard';
import {DetailGrpeCompetenceComponent} from './Groupe_de_Competence/detail-grpe-competence/detail-grpe-competence.component';
import {AuthGuardServiceGuard} from "../Guards/auth-guard-service.guard";
import {SettingsComponent} from "./settings/settings.component";
import {EditCompetenceComponent} from "./Competence/edit-competence/edit-competence.component";

const routes: Routes = [
    LoginRoute,
    {path: '', redirectTo: 'login', pathMatch: 'full'} ,
    {path: 'login', component: LoginComponent},
    {path: 'listUsers', canActivate: [AuthGuardServiceGuard], component: ListUsersComponent},
        {path: 'listUsers/:id/detail', canActivate: [AuthGuardServiceGuard], component: DetailUserComponent},
    {path: 'addUser', component: AddUsersComponent , canActivate: [AuthGuardServiceGuard], canDeactivate: [UnSavedChangesGuard]},
    {path: 'editUser/:id' , canActivate: [AuthGuardServiceGuard], component: EditUserComponent},
    {path: 'listProfil', canActivate: [AuthGuardServiceGuard], component: ListProfilsComponent, children: [
        {path: ':id/edit',canActivate: [AuthGuardServiceGuard], component: EditProfilComponent},
        {path: ':value/:id',canActivate: [AuthGuardServiceGuard], component: DetailProfilComponent}
      ]},
    {path: 'listprofildeSortie',canActivate: [AuthGuardServiceGuard], component: ListProfilDeSortieComponent},
    {path: 'addprofildeSortie',canActivate: [AuthGuardServiceGuard], component: AddProfilDeSortieComponent},
    {path: 'listGrpeCompetence',canActivate: [AuthGuardServiceGuard], component: ListGrpeCompetenceComponent},
    {path: 'addGrpeCompetence',canActivate: [AuthGuardServiceGuard], component: AddGrpeCompetenceComponent, canDeactivate: [UnSavedAddGrpeCompetenceGuard]},
    {path: 'editGrpeCompetence/:id',canActivate: [AuthGuardServiceGuard], component: EditGrpeCompetenceComponent},
    {path: 'detailGrpeCompetence/:id', canActivate: [AuthGuardServiceGuard], component: DetailGrpeCompetenceComponent},
    {path: 'listCompetence', canActivate: [AuthGuardServiceGuard], component: ListCompetenceComponent},
    {path: 'addCompetence', canActivate: [AuthGuardServiceGuard], component: AddCompetenceComponent},
    {path: 'editCompetence/:id',component: EditCompetenceComponent},
    {path: 'listReferentiel', canActivate: [AuthGuardServiceGuard], component: ListReferentielComponent},
    {path: 'addReferentiel', canActivate: [AuthGuardServiceGuard], component: AddReferentielComponent},
    {path: 'editReferentiel/:id', canActivate: [AuthGuardServiceGuard], component: EditReferentielComponent},
    {path: 'listPromotion', canActivate: [AuthGuardServiceGuard], component: ListPromotionComponent},
    {path: 'addPromotion', canActivate: [AuthGuardServiceGuard], component: AddPromotionComponent},
    {path: 'editPromotion', canActivate: [AuthGuardServiceGuard], component: EditPromotionComponent} ,
    {path: 'settings', canActivate: [AuthGuardServiceGuard], component: SettingsComponent} ,
    {path: 'not-found', component: ErrorComponent} ,
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
