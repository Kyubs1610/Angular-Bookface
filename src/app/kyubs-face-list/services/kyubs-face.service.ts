import { KyubsFace } from './../../models/kyubs-face.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KyubsFaceService {
  KyubsFace : KyubsFace[] = [
    { 
    id: 1,
    title: 'Kyubs & Aïko',
    location: 'Tokyo, JP',
    description:'Kyubs & Aïko are the best friends in the world',
    imageUrl: 'https://cdn.midjourney.com/09e835d7-6cb1-40bd-8136-5c83b79987b2/grid_0.png',
    createdDate: new Date(),
    kyubsCount : 180,
    buttonText: 'Like',

  },
  {
    id: 2,
    title:'Sunset',
    location: 'Mountain View, JP',
    description:'Sunset in the mountains',
    createdDate: new Date(),
    kyubsCount : 90,
     imageUrl:'https://cdn.midjourney.com/cba90410-49e9-4daa-885b-d519a3101072/grid_0.png',
     buttonText:'Like',
    
  },
  {
    id: 3,
    title:"Growlithe mix with Kyubs",
    description:'Growlithe is a Pokémon species in Nintendo and Game Freaks Pokémon franchise. In Pokémon Red and Blue, Growlithe can be found on Routes 7, 8, and 36.',
    createdDate:  new Date(),
    kyubsCount :  255,
    imageUrl:  'https://cdn.midjourney.com/e06bf194-4d9c-48ab-b771-0cec52e1709a/grid_0.png',
    buttonText: 'Like',
  }

];

  getAllKyubsFace(): KyubsFace[]{
    return this.KyubsFace;
  }

  getKyubsFaceById(kyusFaceId: number): KyubsFace{
    const kyubsFace = this.KyubsFace.find(KyubsFace => KyubsFace.id === kyusFaceId);
    if(!kyubsFace){
      throw new Error('KyubsFace not found');
    }else{
      return kyubsFace;
    }
  }

  KyubsFaceById(kyusFaceId: number, kyubsType: 'like' | 'unlike'): void {
    const kyubsFace = this.getKyubsFaceById(kyusFaceId);
    kyubsType === 'like' ? kyubsFace.kyubsCount++ : kyubsFace.kyubsCount--;
    }

      
  }


