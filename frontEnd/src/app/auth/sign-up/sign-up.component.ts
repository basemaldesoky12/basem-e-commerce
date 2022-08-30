import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signupForm! : FormGroup
  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      phone : new FormControl(''),
      city : new FormControl(''),
      postCode : new FormControl(''),
      address : new FormControl(''),
    })
  }
 signup()
 {
  this.auth.addCustomer(this.signupForm.value).subscribe((res)=>{
    this.router.navigate(['login'])
    console.log(res)
  },err=>{
    console.log(err)
  })
 }
}
