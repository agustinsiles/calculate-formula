import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

const SIEMENS = 'siemens';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	hasCalculated: boolean = false;
	paramA: any;
	paramB: any;
	type: string = '';
	result: number = 0;

	constructor(private navParams: NavParams) {
		this.type = this.navParams.data;
	}

	calculate() {
		this.result = this.type === SIEMENS ? 
			+(this.paramA - this.paramB + (0.015)).toFixed(3) : +(5.060 - this.paramA).toFixed(3);
		this._addToHistory();
		this.hasCalculated = true;
	}

	private _addToHistory() {
		const history = JSON.parse(localStorage.getItem('history')) || [];

		history.push({
			type: this.type,
			paramA: this.paramA,
			paramB: this.type === SIEMENS ? this.paramB : null,
			result: this.result,
			date: new Date()
		});

		localStorage.setItem('history', JSON.stringify(history));
	}
}
