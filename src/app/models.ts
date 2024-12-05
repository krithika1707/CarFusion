export class TestDrive {
    testdrive_id: number;
    car_name: string;
    car_image: string;
    time_slots: string[];
    description: string;
    testDriveSegments: { 
      segment_id: number; 
      segment_name: string; 
    };
  
    constructor(
      testdrive_id: number,
      car_name: string,
      car_image: string,
      time_slots: string[],
      description: string,
      testDriveSegments: { segment_id: number; segment_name: string }
    ) {
      this.testdrive_id = testdrive_id;
      this.car_name = car_name;
      this.car_image = car_image;
      this.time_slots = time_slots;
      this.description = description;
      this.testDriveSegments = testDriveSegments;
    }
  
  }
  