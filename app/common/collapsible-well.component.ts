import {Component,Input} from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <!--Title-->
            <!--select - just selector (class, id, tag, for us - attribute)-->
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <!--use ng-content to get content from template inside-->
        <!--Body-->
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
