import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { HomePage } from '../home/home';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	formula = HomePage;
	history = HistoryPage;
}
