import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AirlineComponent } from '../../airline/airline.component';
import {AirportComponent} from '../../airport/airport.component';
import {FlightComponent} from '../../flight/flight.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard/:airport',      component: DashboardComponent },
    { path: 'dashboard',               component: DashboardComponent },
    { path: 'airline',                 component: AirlineComponent },
    { path: 'airport',                 component: AirportComponent },
    { path: 'flight',                  component: FlightComponent },
    { path: 'user-profile',            component: UserProfileComponent },
    { path: 'notifications',           component: NotificationsComponent },
];
