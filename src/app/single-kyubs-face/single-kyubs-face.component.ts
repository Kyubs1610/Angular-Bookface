import { Component } from '@angular/core';
import { KyubsFaceService } from './../kyubs-face-list/services/kyubs-face.service';
import { KyubsFace } from './../models/kyubs-face.model';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-kyubs-face',
  templateUrl: './single-kyubs-face.component.html',
  styleUrls: ['./single-kyubs-face.component.scss']
})
export class SingleKyubsFaceComponent {
  @Input() KyubsFace!: KyubsFace;

  title!: string;
  description!: string;
  createdDate!: Date;
  kyubsCount!: number;
  imageUrl!: string;
  buttonText!: string;

  constructor(private KyubsFaceService: KyubsFaceService,
              private route: ActivatedRoute) { }

ngOnInit() {
 const KyubsFaceId = +this.route.snapshot.params['id'];
 this.KyubsFace = this.KyubsFaceService.getKyubsFaceById(KyubsFaceId);
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
