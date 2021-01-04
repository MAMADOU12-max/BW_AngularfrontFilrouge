import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './User/list-users/list-users.component';
import { AddUsersComponent } from './User/add-users/add-users.component';
import { EditUserComponent } from './User/edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailUserComponent } from './User/detail-user/detail-user.component';
import { ListProfilsComponent } from './Profil/list-profils/list-profils.component';
import { EditProfilComponent } from './Profil/edit-profil/edit-profil.component';
import { DetailProfilComponent } from './Profil/detail-profil/detail-profil.component';
import { ListProfilDeSortieComponent } from './Profil_de_sortie/list-profil-de-sortie/list-profil-de-sortie.component';
import { AddProfilDeSortieComponent } from './Profil_de_sortie/add-profil-de-sortie/add-profil-de-sortie.component';
import { ListCompetenceComponent } from './Competence/list-competence/list-competence.component';
import { DetailCompetenceComponent } from './Competence/detail-competence/detail-competence.component';
import { EditCompetenceComponent } from './Competence/edit-competence/edit-competence.component';
import { EditGrpeCompetenceComponent } from './Groupe_de_Competence/edit-grpe-competence/edit-grpe-competence.component';
import { AddGrpeCompetenceComponent } from './Groupe_de_Competence/add-grpe-competence/add-grpe-competence.component';
import { ListGrpeCompetenceComponent } from './Groupe_de_Competence/list-grpe-competence/list-grpe-competence.component';
import { AddCompetenceComponent } from './Competence/add-competence/add-competence.component';
import { ListReferentielComponent } from './Referentiel/list-referentiel/list-referentiel.component';
import { AddReferentielComponent } from './Referentiel/add-referentiel/add-referentiel.component';
import { EditReferentielComponent } from './Referentiel/edit-referentiel/edit-referentiel.component';
import { ListPromotionComponent } from './Promotion/list-promotion/list-promotion.component';
import { AddPromotionComponent } from './Promotion/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './Promotion/edit-promotion/edit-promotion.component';
import { ItemReferentielComponent } from './Referentiel/list-referentiel/item-referentiel/item-referentiel.component';
import { ItemPromotionComponent } from './Promotion/list-promotion/item-promotion/item-promotion.component';
import { ItemProfildesortieComponent } from './Profil_de_sortie/list-profil-de-sortie/item-profildesortie/item-profildesortie.component';
import { ItemProfilComponent } from './Profil/list-profils/item-profil/item-profil.component';
import { ItemGrpecompetenceComponent } from './Groupe_de_Competence/list-grpe-competence/item-grpecompetence/item-grpecompetence.component';
import { ItemCompetenceComponent } from './Competence/list-competence/item-competence/item-competence.component';
import { ErrorComponent } from './error/error.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InterceptorInterceptor } from 'src/InterCepteur/interceptor.interceptor';
import { DefaultimagePipe } from './defaultimage.pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUsersComponent,
    AddUsersComponent,
    EditUserComponent,
    HeaderComponent,
    SidebarComponent,
    DetailUserComponent,
    ListProfilsComponent,
    EditProfilComponent,
    DetailProfilComponent,
    ListProfilDeSortieComponent,
    AddProfilDeSortieComponent,
    ListCompetenceComponent,
    DetailCompetenceComponent,
    EditCompetenceComponent,
    EditGrpeCompetenceComponent,
    AddGrpeCompetenceComponent,
    ListGrpeCompetenceComponent,
    AddCompetenceComponent,
    ListReferentielComponent,
    AddReferentielComponent,
    EditReferentielComponent,
    ListPromotionComponent,
    AddPromotionComponent,
    EditPromotionComponent,
    ItemReferentielComponent,
    ItemPromotionComponent,
    ItemProfildesortieComponent,
    ItemProfilComponent,
    ItemGrpecompetenceComponent,
    ItemCompetenceComponent,
    ErrorComponent,
    DefaultimagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
