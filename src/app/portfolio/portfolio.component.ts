import { Component } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  closeResult = '';

	constructor(private modalService: NgbModal) {}

	open1(content1: any) {
		this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		);
	}
  open2(content2: any) {
		this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		);
	}
  open3(content3: any) {
		this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		);
	}
  open4(content4: any) {
		this.modalService.open(content4, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		);
	}
}
