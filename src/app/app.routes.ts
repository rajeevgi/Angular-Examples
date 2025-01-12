import { Routes } from '@angular/router';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
import { PipeComponent } from './pipe/pipe.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {
        path : "app-dir",
        component : AppComponent
    },

    {
        path : "struct-dir",
        component : StructuralDirComponent
    },

    {
        path : "attri-dir",
        component : AttributeDirComponent
    },

    {
        path : "pipe",
        component : PipeComponent
    }
];
