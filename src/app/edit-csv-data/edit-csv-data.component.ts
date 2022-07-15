import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidService } from './../covid.service';
import { CSVRecord } from './../CSVModel';

@Component({
  selector: 'app-edit-csv-data',
  templateUrl: './edit-csv-data.component.html',
  styleUrls: ['./edit-csv-data.component.css']
})
export class EditCsvDataComponent implements OnInit {

  id!: number;
  form!: FormGroup;
  public post: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private csvService: CovidService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDataById();

    this.form = new FormGroup({
      eid: new FormControl(this.id),
      name: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      state: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      zip: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]+$/)]),
      amount: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[0-9]+$/)]),
      qty: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9]+$/)]),
      item: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

   // Get the data from CSV
   getDataById() {
    this.csvService.find(this.id).subscribe((data: any)=>{
      this.post = data[0];
      console.log(this.post);
   });
  }

  get f(){
    return this.form.controls;
  }

  submit(){

    console.log(this.form.value);

    this.csvService.editCsvData(this.id, this.form.value).subscribe(res => {

         console.log('Post updated successfully!');

         //this.router.navigateByUrl('post/index');

    })

  }

}
