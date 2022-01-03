import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  createuser: FormGroup;
  myform: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private commonService: CommonService) { 

    this.createuser = formBuilder.group({
      'customer_id': [null, Validators.compose([Validators.required])],
      'name': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
      'street': [null, Validators.compose([Validators.required])],
      'postal_code': [null, Validators.compose([Validators.required])],
      'city': [null, Validators.compose([Validators.required])],
      'start_date': [null, Validators.compose([Validators.required])],
      'end_date': [null, Validators.compose([Validators.required])],
    });

  }

  ngOnInit(): void {
  }
  submitForm(body: any) {
    this.commonService.userform(body)
      .subscribe((response) => {
          console.log(response);
          this.createuser.reset();
      }, (error) => {
        console.log(error);
      });
      
  }
  
}
