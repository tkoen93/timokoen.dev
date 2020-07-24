import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatCardModule
    ],
    exports: [
        MatCardModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class MaterialModule { }