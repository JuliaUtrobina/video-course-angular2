import {Component,Input} from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4 class="well-title">{{title}}</h4>
        <!--use ng-content to get content from template inside-->
        <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    @Input() title:string;
    visible:boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}