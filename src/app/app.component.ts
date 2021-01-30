import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  personal: FormGroup;
  company: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personal = this._formBuilder.group({
      fullName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    });
    this.company = this._formBuilder.group({
      companyName: new FormControl('', Validators.required),
      emailId: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      jobTitle: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
    });
    
  }
  personalFun(){
    console.log(this.personal.value);
    localStorage.setItem('personal', JSON.stringify(this.personal.value));
  }
  companyFun(){
    console.log(this.company.value);
    localStorage.setItem('company', JSON.stringify(this.company.value));
  }
 
}
