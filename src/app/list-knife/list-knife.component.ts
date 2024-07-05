import { Component } from '@angular/core';
import { KnifeSpecification } from './Knife-specification';
@Component({
  selector: 'app-list-knife',
  templateUrl: './list-knife.component.html',
  styleUrl: './list-knife.component.scss'
})
export class ListKnifeComponent {
  titulo: string = "Knife List";
  
  knives: KnifeSpecification[] = [{
    knifeId: 1,
    knifeImage: "assets/image/Benchmade_Bugout.jpeg",
    knifeName: "Benchmade Bugout",
    bladeLength: 3.24,
    overallLength: 7.46,
    weight: 1.85,
    bladeMaterial: "CPM-S30V Stainless Steel",
    handleMaterial: "Grivory",
    bladeType: "Drop Point",
    lockingMechanism: "AXIS Lock",
    edgeType: "Straight",
    bladeThickness:  0.090,
    Manufacturer: "Benchmade",
    price: 145.00,
    stock: 0,
    clearance: false,
    quantity: 0,
  },
  {
    knifeId: 2,
    knifeImage: "assets/image/Spyderco_Paramilitary_2.jpeg",
    knifeName: "Spyderco Paramilitary 2",
    bladeLength: 3.44,
    overallLength: 7.46,
    weight: 1.85,
    bladeMaterial: "CPM-S30V Stainless Steel",
    handleMaterial: "Grivory",
    bladeType: "Drop Point",
    lockingMechanism: "AXIS Lock",
    edgeType: "Straight",
    bladeThickness:  0.090,
    Manufacturer: "Benchmade",
    price: 185.00,
    stock: 16,
    clearance: true,
    quantity: 0,
  },
  {
    knifeId: 3,
    knifeImage: "assets/image/Kershaw_Leek.jpeg",
    knifeName: "Kershaw Leek",
    bladeLength:  3.0,
    overallLength: 7.46,
    weight: 1.85,
    bladeMaterial: "Sandvik 14C28N Stainless Steel",
    handleMaterial: "Grivory",
    bladeType: "Drop Point",
    lockingMechanism: "AXIS Lock",
    edgeType: "Straight",
    bladeThickness:  0.090,
    Manufacturer: "Benchmade",
    price: 79.99,
    stock: 16,
    clearance: false,
    quantity: 0,
  },
  {
    knifeId: 4,
    knifeImage: "assets/image/Buck_110_Folding_Hunter.jpeg",
    knifeName: "Buck 110 Folding Hunter",
    bladeLength: 3.75,
    overallLength: 7.46,
    weight: 1.85,
    bladeMaterial: "420HC Stainless Steel",
    handleMaterial: "Grivory",
    bladeType: "Drop Point",
    lockingMechanism: "AXIS Lock",
    edgeType: "Straight",
    bladeThickness:  0.090,
    Manufacturer: "Benchmade",
    price: 59.99,
    stock: 16,
    clearance: false,
    quantity: 0,
  }]

 maxReached(m: string){
  alert(m);
 }
}

