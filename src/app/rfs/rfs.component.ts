import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.css']
})
export class RfsComponent  {

DistrictName = new FormControl('');
updateDistrictName(){
  this.DistrictName.setValue('');
}
districtForm = new FormGroup({
  DistrictName: new FormControl('',Validators.required),
  Area: new FormControl('',Validators.required),
  Population : new FormControl('',Validators.required)
});

onSubmit(){
  console.log(this.districtForm.value)
  
}
}
