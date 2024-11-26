import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';

// Define routes

export const routes: Routes = [
    {
        path: '',
        component: StudentsComponent
    },
    {
        path: 'students',
        component: StudentsComponent
    }
];
