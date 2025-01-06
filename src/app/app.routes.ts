import { Routes } from '@angular/router';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';

export const routes: Routes = [
    {
        path : "struct-dir",
        component : StructuralDirComponent
    },

    {
        path : "attri-dir",
        component : AttributeDirComponent
    }
];
