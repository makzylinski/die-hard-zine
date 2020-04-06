import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
    { path: '__admin', component: AdminPanelComponent, children: [
        { path: ':name', component: ArticlesListComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}
