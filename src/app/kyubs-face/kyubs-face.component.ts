import { KyubsFaceService } from './../kyubs-face-list/services/kyubs-face.service';
import { KyubsFace } from './../models/kyubs-face.model';
import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kyubs-face',
  templateUrl: './kyubs-face.component.html',
  styleUrls: ['./kyubs-face.component.scss']
})
export class KyubsFaceComponent {
  @Input() KyubsFace!: KyubsFace;

  title!: string;
  description!: string;
  createdDate!: Date;
  kyubsCount!: number;
  imageUrl!: string;
  buttonText!: string;

  constructor(private KyubsFaceService: KyubsFaceService) { }

ngOnInit() {
 
}
onSnap() {
  if (this.KyubsFace.buttonText === 'Like') {
    this.KyubsFaceService.KyubsFaceById(this.KyubsFace.id, 'like');
    this.KyubsFace.buttonText = 'Unlike';
  } else {
    this.KyubsFaceService.KyubsFaceById(this.KyubsFace.id, 'unlike');
    this.KyubsFace.buttonText = 'Like';
  
}  
}

}



