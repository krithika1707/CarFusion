export class Segments {
    public segment_id!:number;
    public segment_name!:string;


        getSegmentId(): number {
            return this.segment_id;
          }
        
          getSegmentName(): string {
            return this.segment_name;
          }
    
          setSegmentId(id:number){
            this.segment_id=id;
          }
          setSetmentName(name:string){
            this.segment_name=name;
          }
}

