import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidService } from './../covid.service';
import { CSVRecord } from './../CSVModel';

@Component({
  selector: 'app-add-csv-data',
  templateUrl: './add-csv-data.component.html',
  styleUrls: ['./add-csv-data.component.css']
})
export class AddCsvDataComponent implements OnInit {
  id: number = 0;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private csvService: CovidService
    ) {}

    ngOnInit(): void {
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
        amount: new FormControl('', Validators.required),
        qty: new FormControl('', Validators.required),
        item: new FormControl('', Validators.required)
      });
    }

    get f(){
      return this.form.controls;
    }

    submit(){ alert('a');
      console.log(this.form.value);
      this.csvService.addCsvData(this.form.value).subscribe(res=>{
        console.log('Post created successfully');
        //this.router.navigateByUrl('post/index')
      })
    }

}
