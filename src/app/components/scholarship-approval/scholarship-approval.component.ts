import { Component, OnInit } from '@angular/core';
import { Scholarship } from 'src/app/Models/Scholarship/Scholarship';
import { ScholarshipApprovalService } from 'src/app/services/scholarship-approval.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ViewScholarshipComponent } from '../view-scholarship/view-scholarship.component';
@Component({
  selector: 'app-scholarship-approval',
  templateUrl: './scholarship-approval.component.html',
  styleUrls: ['./scholarship-approval.component.css']
})
export class ScholarshipApprovalComponent implements OnInit {

  
  scholarships: Scholarship[]=[];
  constructor(private service:ScholarshipApprovalService, public dialog:MatDialog) { 
    
  }

  ngOnInit(): void {
    this.service.getScholarships().subscribe((items:Scholarship[])=>(this.scholarships=items));
  }

  //TODO ACCORDING TO LOGGED IN USER APPROVE RELEVANT FIELD
  
  approve(item: Scholarship) {
    //BY DEFAULT ADDED NODAL OFFICER APPROVAL 
    //BUT AFTER REST API CREATION CODE NEED TO BE CHANGED.
    item.scholarshipStatus.approvedByNodal="Accepted by Nodal Officer"
    this.service.editApproval(item).subscribe((items: Scholarship[]) => (this.scholarships = items));
   }

  reject(item: Scholarship) {
    item.scholarshipStatus.approvedByNodal = "Not Accepted By Nodal Officer";
    this.service.editApproval(item).subscribe((items: Scholarship[]) => (this.scholarships = items));
   }
  
  more(item: Scholarship) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data=this.convertToLargeString(item);
    this.dialog.open(ViewScholarshipComponent,dialogConfig);
  }

  convertToShortString(item: Scholarship) { 
    return `${item.id} \n \n \n${item.schemeName}`
  }

  // TODO: create tostring methods for all details.
  convertToLargeString(item: Scholarship) {
    // return ` ID OF APPLICATION : ${item.id} \n \n \n
    //   STUDENT DETAILS : ${item.details} \n \n
    //  APPROVED By INSTITUTE ${item.instituteApproval} \n\n
    //  APPROVED BY NODAL OFFICER ${item.nodalApproval}\n\n
    //  APPROVED BY MINISTRY ${item.ministryApproval}`
    return "";
  }

}
