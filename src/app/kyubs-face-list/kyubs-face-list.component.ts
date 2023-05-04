import { KyubsFaceService } from './services/kyubs-face.service';
import { Component } from '@angular/core';
import { KyubsFace } from '../models/kyubs-face.model';

@Component({
  selector: 'app-kyubs-face-list',
  templateUrl: './kyubs-face-list.component.html',
  styleUrls: ['./kyubs-face-list.component.scss']
})
export class KyubsFaceListComponent {
  KyubsFaces!: KyubsFace[];

  constructor(private KyubsFaceService: KyubsFaceService) { }

  ngOnInit() {
    this.KyubsFaces =  this.KyubsFaceService.getAllKyubsFace();
  }

}
