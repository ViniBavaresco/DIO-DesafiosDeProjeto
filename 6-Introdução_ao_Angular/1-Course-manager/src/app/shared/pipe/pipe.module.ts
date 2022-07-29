import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from './replace.pipe';



@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
