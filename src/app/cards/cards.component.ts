import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = [
    {
      title: 'Heredera de Fuego',
      img: 'https://media.revistaad.es/photos/60c22735e4a4926cca84f1e7/master/w_1600%2Cc_limit/247855.jpg',
      desc: 'Celaena Sardothien ha sobrevivido a mortíferos combates y a la demoledora experiencia del desamor, pero a un costo indescriptible. Ahora debe viajar a una nueva tierra para enfrentar su más oscuro pasado, una verdad sobre su historia que podría darle un vuelco a su vida, y a su futuro, para siempre.'
    },
    {
      title: 'El Caballero Astado',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlh1A5KRUpZpJ69Xhfg30U9fTpvJu7P08Ghg&usqp=CAU',
      desc: 'En el ocaso de un reino, un caballero abandonará la senda del mal. En su exilio se encontrará a quienes antaño hirió y, guiado por una misteriosa anciana, recorrerá un peligroso camino hacia la tierra sagrada de Calerhem.'
    },
    {
      title: 'El Código Da Vinci',
      img: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/5db/8d6/283ab55402bba4c87c6b32d783.jpg',
      desc: 'Description 3Una mezcla trepidante de aventuras, intrigas vaticanas, simbología y enigmas cifrados que provocó una extraordinaria polémica al poner en duda algunos de los dogmas sobre los que se asienta la Iglesia católica.'
    },
    {
      title: 'La Divina Comedia',
      img: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/cad/978/92fa375b0bbb651bd491d9b822.jpg',
      desc: 'La Divina Comedia sigue el camino desde el centro de la Tierra, donde se halla Lucifer, hasta el dominio de Dios. El tema de la obra es el recorrido del poeta a través del más allá. En su obra se encuentra gran capacidad para describir el infierno, los círculos, los sufrimientos y los pecadores.'
    }
  ]
}
