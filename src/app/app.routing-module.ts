import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'PATHNAME', component: SomeComponent },
    // { path: 'PATHNAME', loadChildren: './feature/feature.module#FeatureModule' }, // lazy
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }