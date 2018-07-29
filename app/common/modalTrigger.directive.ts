import {Directive, OnInit, Inject, ElementRef} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
    // Use attribute
    selector: '[modal-trigger]',
})

export class ModalTriggerDirective implements OnInit {
    private el:HTMLElement;

    constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $:any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        // Add click handler to the html element for which this directive is added
        this.el.addEventListener('click', e=> {
            this.$('#simple-modal').modal({});
        });
    }
}