import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CarresaleserviceService } from '../carresaleservice.service';
import { CartService } from '../cart/cart.service';

export interface Car {
  resale_id: number;
  model: string;
  price: number;
  km: string;
  fuelType: string;
  segment: string;
  image: string;
  slots: string[];
  segmentId: number;
}

@Component({
  selector: 'app-car-resale',
  templateUrl: './car-resale.component.html',
  styleUrls: ['./car-resale.component.css']
})
export class CarResaleComponent implements OnInit {
  price: number = 500000;
  selectedSegment: string = '';
  filteredCars: Car[] = [];
  segments: any[] = [];

  @ViewChild('carListContainer') carListContainer!: ElementRef;

  constructor(private router: Router, private CarResaleService: CarresaleserviceService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCars();  
  }

  // Function to map car data to required format
  mapCarData(cars: any[]): Car[] {
    return cars.map(car => ({
      resale_id: car.resale_id,
      model: car.car_name,
      price: car.car_price,
      km: car.kilometers,
      fuelType: car.fuel_type,
      segment: car.segment.segment, // Nested field
      image: car.car_image,
      slots: car.slots,
      segmentId: car.segment.car_segment_id // Nested field
    }));
  }

  loadCars(): void {
    this.CarResaleService.getAllCars().subscribe((cars) => {
      this.filteredCars = this.mapCarData(cars);  // Use mapCarData function here
      this.extractSegments(cars); // Extract segments after mapping
    }, (error) => {
      console.error('Error fetching cars......', error);
    });
  }

  extractSegments(cars: any[]): void {
    const uniqueSegments = Array.from(
      new Set(cars.map(car => car.segment.car_segment_id))
    ).map(id => {
      const segment = cars.find(car => car.segment.car_segment_id === id);
      return { id, name: segment ? segment.segment.segment : '' };
    });
    this.segments = uniqueSegments;
  }

  onPriceChange(price: number): void {
    this.filterCars();
  }

  onSearch(): void {
    this.filterCars();
  }

  filterCars(): void {
    const segmentId = this.getSegmentIdByName(this.selectedSegment);

    if (segmentId && this.price) {
      this.CarResaleService.getCarsByPriceAndSegment(this.price, segmentId).subscribe(
        (cars) => {
          this.filteredCars = this.mapCarData(cars);  // Use mapCarData function here
        },
        (error) => {
          console.error('Error fetching cars....', error);
        }
      );
    } else if (segmentId) {
      this.CarResaleService.getCarsBySegment(segmentId).subscribe(
        (cars) => {
          this.filteredCars = this.mapCarData(cars);  // Use mapCarData function here
        },
        (error) => {
          console.error('Error fetching cars using segmentId....', error);
        }
      );
    } else if (this.price) {
      this.CarResaleService.getCarsByPrice(this.price).subscribe(
        (cars) => {
          this.filteredCars = this.mapCarData(cars);  // Use mapCarData function here
        },
        (error) => {
          console.error('Error fetching cars using price....', error);
        }
      );
    }
  }

  getSegmentIdByName(segmentName: string): number {
    const segment = this.segments.find(s => s.name.toLowerCase() === segmentName.toLowerCase());
    return segment ? segment.id : 0;
  }

  addToCart(car: Car): void {
    this.cartService.addToCart(car);
    this.filteredCars = this.filteredCars.filter(c => c !== car);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  moveCarList(direction: 'left' | 'right'): void {
    const container = this.carListContainer.nativeElement;
    const scrollAmount = direction === 'left' ? -300 : 300; 
    container.scrollLeft += scrollAmount;
  }


}
