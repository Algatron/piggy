import { NgModule } from "@angular/core";
import { 
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
} from "@angular/material";

const MODULES = [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
];

@NgModule({
    imports: [ MODULES ],
    exports: [ MODULES ]
})
export class MaterialModule {

}