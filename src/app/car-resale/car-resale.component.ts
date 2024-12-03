import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
 
export interface Car {
  model: string;
  price: number;
  km: number;
  owners: number;
  segment: string;
  image: string;
}
 
@Component({
  selector: 'app-car-resale',
  templateUrl: './car-resale.component.html',
  styleUrls: ['./car-resale.component.css']
})
export class CarResaleComponent implements OnInit {
  price: number = 500000;  
  selectedSegment: string = '';  
  cars: Car[] = [
    { model: 'Renault Clio', price: 1200000, km: 45000, owners: 2, segment: 'Compact', image: 'https://www.renaultgroup.com/wp-content/uploads/2019/01/2019-renault-nouvelle-clio-.jpg' },
    { model: 'Nissan Altima', price: 1800000, km: 35000, owners: 1, segment: 'Sedan', image: 'https://media.licdn.com/dms/image/C4D12AQEVzSvPyRekBg/article-cover_image-shrink_600_2000/0/1522265636318?e=2147483647&v=beta&t=TDtkZfvBDey0bSC7KuTcKHOb5YLMeTlO9ZXoqljc2K8' },
    { model: 'Renault Megane', price: 1500000, km: 25000, owners: 1, segment: 'Compact', image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80' },
    { model: 'Nissan Rogue', price: 820000, km: 30000, owners: 2, segment: 'SUV', image: 'https://images2.alphacoders.com/736/thumb-1920-736978.jpg' },
    { model: 'Renault Koleos', price: 950000, km: 40000, owners: 1, segment: 'SUV', image: 'https://mahindrafirstchoice.com/images/renault-koleos.jpg' },
    { model: 'Nissan Leaf', price: 980000, km: 20000, owners: 1, segment: 'Electric', image: 'https://cache4.pakwheels.com/system/car_generation_pictures/5857/original/Nissan_Leaf_2018.jpg?1632468474' },
    { model: 'Renault Talisman', price: 1500000, km: 30000, owners: 1, segment: 'Sedan', image: 'https://ik.imagekit.io/girnar/sayaratbay/large/gallery/color/33/368/renault-talisman-color-719767.jpg' },
    { model: 'Nissan Juke', price: 1400000, km: 35000, owners: 2, segment: 'SUV', image: 'https://imgcdn.oto.com/large/gallery/color/29/226/nissan-juke-color-418780.jpg' },
    { model: 'Renault Captur', price: 1500000, km: 25000, owners: 1, segment: 'SUV', image: 'https://www.ttcar.com/bases/ttcar_range_cars_image/grande/54/RENAULTCAPTUR.jpg' },
    { model: 'Nissan Qashqai', price: 7500000, km: 27000, owners: 1, segment: 'SUV', image: 'https://nissan.mu/media/qltaz0vp/16-all-new-nissan-qashqai-colours-1762a8-000000.jpg' },
    { model: 'Renault Scenic', price: 950000, km: 50000, owners: 2, segment: 'MPV', image: 'https://cdn.motor1.com/images/mgl/nBK71/s1/2017-renault-scenic-initiale-paris.jpg' },
    { model: 'Nissan Micra', price: 7500000, km: 30000, owners: 1, segment: 'Hatchback', image: 'https://imgd.aeplcdn.com/664x374/cw/ec/35639/Nissan-Micra-Active-Exterior-133308.jpg?wm=0&q=80' }
  ];
 
  filteredCars: Car[] = [];
 
  constructor(private cartService: CartService) {}
 
  ngOnInit(): void {
    this.onPriceChange();  
  }
 
  onPriceChange(): void {
    this.filteredCars = this.cars.filter(car => car.price <= this.price);
    this.filterBySegment();
  }
 
  onSearch(): void {
    this.filteredCars = this.cars.filter(car =>
      car.price <= this.price && (this.selectedSegment ? car.segment.toLowerCase() === this.selectedSegment.toLowerCase() : true)
    );
  }
 
  filterBySegment(): void {
    if (this.selectedSegment) {
      this.filteredCars = this.filteredCars.filter(car =>
        car.segment.toLowerCase() === this.selectedSegment.toLowerCase()
      );
    }
  }
 
  addToCart(car: Car): void {
    this.cartService.addToCart(car);
    this.filteredCars = this.filteredCars.filter(c => c !== car);
  }
}
 