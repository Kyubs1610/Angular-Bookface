
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KyubsFaceListComponent } from './kyubs-face-list/kyubs-face-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleKyubsFaceComponent } from './single-kyubs-face/single-kyubs-face.component';

const routes: Routes = [
    {path: 'kyubsface', component: KyubsFaceListComponent},
    {path: 'kyubsface/:id', component : SingleKyubsFaceComponent},
    {path: '', component: LandingPageComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
}

)

export class AppRoutingModule {

}
