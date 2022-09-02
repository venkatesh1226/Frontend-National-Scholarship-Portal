import { Component, OnInit } from '@angular/core';
import { Scholarship } from 'src/app/Models/Scholarship/Scholarship';
import { ScholarshipApprovalService } from 'src/app/services/scholarship-approval.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ViewScholarshipComponent } from '../view-scholarship/view-scholarship.component';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-scholarship-approval',
  templateUrl: './scholarship-approval.component.html',
  styleUrls: ['./scholarship-approval.component.css']
})
export class ScholarshipApprovalComponent implements OnInit {

  
  scholarships: Scholarship[] = [];
  role!: string;
  constructor(private service:ScholarshipApprovalService, public dialog:MatDialog,private parent:AppComponent) { 
    
  }

  ngOnInit(): void {
    this.role = this.parent.user.getLogin().role;
    if (this.role !== "INSTITUTE")
      this.service.getScholarships(this.role).subscribe((items: Scholarship[]) => (this.scholarships = items));
    else { 
      var code: string = this.parent.user.getInstitute().institutionCode;
      this.service.getInstituteScholarships(code)
    }
 
  }

  //TODO ACCORDING TO LOGGED IN USER APPROVE RELEVANT FIELD
  
  approve(item: Scholarship) {
    //BY DEFAULT ADDED NODAL OFFICER APPROVAL
    //BUT AFTER REST API CREATION CODE NEED TO BE CHANGED.
    //deleting so that list refreshes
    delete this.scholarships[0];
    item.scholarshipStatus.approvedByNodal = "APPROVED";
    this.service.editApproval(item,this.role).subscribe((items: Scholarship[]) => (this.scholarships = items));
   }

  reject(item: Scholarship) {
    item.scholarshipStatus.approvedByNodal = "Not APPROVED";
    this.service.editApproval(item,this.role).subscribe((items: Scholarship[]) => (this.scholarships = items));
   }
  
  more(item: Scholarship) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data=this.convertToLargeString(item);
    this.dialog.open(ViewScholarshipComponent,dialogConfig);
  }

  convertToShortString(item: Scholarship) { 
    return `${item.id} \n \n \n${item.schemeName}`
  }

  // TODO: create tostring methods for all details.
  convertToLargeString(item: Scholarship) {
    return ` ID OF APPLICATION : ${item.id} \n \n \n
      STUDENT Aadhar Number : ${item.basicDetails.aadharNumber} \n \n
     APPROVED By INSTITUTE ${item.academicDetails.instituteName} \n\n
      Student State ${item.contactDetails.state}\n\n
      Student District ${item.contactDetails.district}\n
      Tenth Marks ${item.tenthDetails.boardName}+${item.tenthDetails.marks}
      APPROVED BY Institute ${item.scholarshipStatus.approvedByInstitute}\n\n
     APPROVED BY NODAL OFFICER ${item.scholarshipStatus.approvedByNodal}\n\n
     APPROVED BY MINISTRY ${item.scholarshipStatus.approvedByMinistry}`
    // return "";
  }

}
