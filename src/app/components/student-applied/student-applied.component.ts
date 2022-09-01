import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Scholarship } from 'src/app/Models/Scholarship/Scholarship';
import { ScholarshipAddService } from 'src/app/services/AddScholarshipService/addScholarshipService.service';

@Component({
  selector: 'app-student-applied',
  templateUrl: './student-applied.component.html',
  styleUrls: ['./student-applied.component.css']
})
export class StudentAppliedComponent implements OnInit {

  scholarships!: Scholarship[];
  constructor(private serve:ScholarshipAddService,public parent:AppComponent) { }

  ngOnInit(): void {
    var id = this.parent.user.getStudent().id;
    console.log("****"+id)
    this.serve.getCurrentStudentsScholarship(id == undefined ? 27 : id).
      subscribe((items: Scholarship[]) => {
        console.log(items);
        this.scholarships = items;
       },
        (error: any) => { 
          alert("Relogin Again or Try After Some Time");
          console.log(error);
        });
  }

  convertToShortString(s:Scholarship):string { 
    return s.schemeName + "\nInstitute Status " + s.scholarshipStatus.approvedByInstitute +
      "\nNodal Officer status " + s.scholarshipStatus.approvedByNodal +
      "\nMinistry Status "+ s.scholarshipStatus.approvedByMinistry;
  }

}
