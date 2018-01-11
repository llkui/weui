import { RouterModule, Routes }        from '@angular/router';
import { NgModule }                    from '@angular/core';


import { SelectivePreloadingStrategy } from './selective-preloading-strategy'

const pageRoutes: Routes = [
	{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
		data: {preload: true},
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
		data: {preload: true},
    },
	{
		path: 'login',
		loadChildren: './login/login.module#LoginModule',
	}
]

@NgModule({
    imports: [
        RouterModule.forRoot(pageRoutes, {preloadingStrategy: SelectivePreloadingStrategy}),
    ],
    exports: [
        RouterModule
    ]
})

export class PageRoutingModule{

}
