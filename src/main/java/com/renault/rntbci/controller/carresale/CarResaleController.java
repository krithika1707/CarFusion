package com.renault.rntbci.controller.carresale;
import com.renault.rntbci.dbservice.carresale.entity.CarResale;
import com.renault.rntbci.service.carresale.CarResaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/car_resale")
@CrossOrigin("*")
public class CarResaleController
{
    @Autowired
    CarResaleService carResaleService;
    @PostMapping("/add")
    public ResponseEntity<CarResale>postDatas(@RequestBody CarResale resale)
    {
        return new ResponseEntity<>(carResaleService.addModels(resale), HttpStatus.ACCEPTED);
    }
    @GetMapping("/get")
    public ResponseEntity<List<CarResale>>getDatas()
    {
        return new ResponseEntity<>(carResaleService.getAllModels(),HttpStatus.ACCEPTED);
    }
    @GetMapping("/get/price")
    public ResponseEntity<List<CarResale>>getSearchDatas(@RequestParam long price)
    {
        //long price1=Integer.parseInt(price);
        System.out.println("Price:"+price);
        return new ResponseEntity<>(carResaleService.searchByPrice(price),HttpStatus.ACCEPTED);
    }
    @GetMapping("/get/segments")
    public ResponseEntity<List<CarResale>>getSearchDatas1(@RequestParam long id)
    {
        return new ResponseEntity<>(carResaleService.searchBySegment(id),HttpStatus.ACCEPTED);
    }
    @GetMapping("/get/search")
    public ResponseEntity<List<CarResale>>getSearchDatas2(@RequestParam long price,@RequestParam long id)
    {
        return new ResponseEntity<>(carResaleService.searchByPrice_Segment(price,id),HttpStatus.ACCEPTED);
    }

}
