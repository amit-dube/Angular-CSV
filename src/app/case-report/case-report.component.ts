import { Component, OnInit } from '@angular/core';
import { CovidService } from './../covid.service';
import { CSVRecord } from './../CSVModel';

@Component({
  selector: 'app-case-report',
  templateUrl: './case-report.component.html',
  styleUrls: ['./case-report.component.css']
})
export class CaseReportComponent implements OnInit {

  covidData: any[] = [];
  public records: any = [];
  employeeList: any = [];
  constructor(private csvService: CovidService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {

    this.csvService.getInfo().subscribe(data => {
      this.records = data;
       // console.log(this.records);
    });

  }


  remove(id: number) {
    alert(id);
    this.csvService.deleteData(id).subscribe(response => {
      this.getData();
    })
  }

}
