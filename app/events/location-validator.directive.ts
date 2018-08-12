import {Directive} from '@angular/core';
import {FormGroup, Validator, NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{
        // LocationValidator will be added to list of services NG_VALIDATORS (for this used multi)
        provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true
    }]
})

export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        const addressControl = formGroup.controls['address'];
        const cityControl = formGroup.controls['city'];
        const countryControl = formGroup.controls['country'];
        const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            // null means no problems
            return null;
        } else {
            // Return error object
            return {validateLocation: false};
        }
    }
}
