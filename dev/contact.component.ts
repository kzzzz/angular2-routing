import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: './dev/contact.component.html'
})
export class ContactComponent implements CanDeactivate{
    routerCanDeactivate(next, previous):any {
        // if(this.form.dirty) model-driven form
        return confirm("Are you sure?");
    }

    constructor(private  _router: Router){
    }

    onSubmit(form){
        // imperative navigation (programmatic redirect to a link
        console.log(form);
        this._router.navigate(["Albums"]);
    }
}