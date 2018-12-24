import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-history',
	templateUrl: 'history.html'
})
export class HistoryPage implements OnInit {
	private _history: Array<any> = [];
	constructor(private alertCtrl: AlertController) {}

	ngOnInit(): void{
		const tmp = JSON.parse(localStorage.getItem('history')) || [];
		this.history = tmp.reverse();
	}
	
	get history() {
		const tmp = JSON.parse(localStorage.getItem('history')) || [];
		return tmp.reverse();
	}

	set history(h) {
		this._history = h;
	}

	emptyHistory(): void {
		const cancelOrderConfirm = this.alertCtrl.create({
			title: 'Atención',
		  	message: 'Desea vaciar el historial? Todos los registros serán perdidos.',
		  	buttons: [{
				text: 'No'
			}, {
				text: 'Si',
				handler: () => localStorage.setItem('history', JSON.stringify([]))
			}]
	  	});

		cancelOrderConfirm.present();
	}
}
