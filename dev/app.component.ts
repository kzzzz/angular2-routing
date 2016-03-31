import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
// import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

import {AlbumComponent} from './album.component';
import {AlbumsComponent} from './albums.component';
import {ContactComponent} from './contact.component';

// at least 3 properties
@RouteConfig([
        {path: '/albums', name: 'Albums', component: AlbumsComponent, useAsDefault: true},
        {path: '/album/:id', name: 'Album', component: AlbumComponent},
        {path: '/contact', name: 'Contact', component: ContactComponent},
        {path: '*other', name: 'other', redirectTo: ['Albums']}
    ]
)

@Component({
    selector: 'my-app',
    templateUrl: './dev/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {

}
