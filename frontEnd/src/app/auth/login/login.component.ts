import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm! : FormGroup
  constructor(private formBuilder : FormBuilder,
    private router : Router,
    private auth : AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : new FormControl(''),
      password : new FormControl('')
    })
  }
login()
{
  if(this.loginForm.controls['email'].value=='admin')
  {
    console.log('okkk')
    this.auth.adminLogin(this.loginForm.value).subscribe((res:any)=>{
      this.router.navigate(['/adminHome'])
      console.log(res)
    })
  }
  else{
    console.log("okkkkkkk")
  this.auth.login(this.loginForm.value).subscribe((res:any)=>{
    console.log(res)
    this.router.navigate(['/home'])
  },err=>{
    console.log(err)
  })
}
}
}
