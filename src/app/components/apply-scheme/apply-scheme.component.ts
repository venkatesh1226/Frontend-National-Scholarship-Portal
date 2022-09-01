import { Component, OnInit } from '@angular/core';

import { AcademicDetails } from 'src/app/Models/Scholarship/AcademicDetails';
import { BasicDetails } from 'src/app/Models/Scholarship/BasicDetails';
import { Scholarship } from 'src/app/Models/Scholarship/Scholarship';
import { ScholarshipStatus } from 'src/app/Models/Scholarship/ScholarshipStatus';
import { TwelfthDetails } from 'src/app/Models/Scholarship/TwelfthDetails';
import { OtherDetails } from 'src/app/Models/Scholarship/OtherDetails';
import { TenthDetails } from 'src/app/Models/Scholarship/TenthDetails';
import { AcadDetComponent } from '../acad-det/acad-det.component';
import { BasicDetComponent } from '../basic-det/basic-det.component';
import { ConDetComponent } from '../con-det/con-det.component';
import { FeeDetComponent } from '../fee-det/fee-det.component';
import { OthDetComponent } from '../oth-det/oth-det.component';
import { SubDetComponent } from '../sub-det/sub-det.component';
import { TenDetComponent } from '../ten-det/ten-det.component';
import { TwelDetComponent } from '../twel-det/twel-det.component';
import { FeeDetails } from 'src/app/Models/Scholarship/FeeDetails';
import { ContactDetails } from 'src/app/Models/Scholarship/ContactDetails';
import { Router } from '@angular/router';
import { ScholarshipAddService } from 'src/app/services/AddScholarshipService/addScholarshipService.service';
import { MinLengthValidator, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-apply-scheme',
  templateUrl: './apply-scheme.component.html',
  styleUrls: ['./apply-scheme.component.css']
})
export class ApplySchemeComponent implements OnInit {

  scholarship!: Scholarship;
  id?: number;
  studentId!: number;
  schemeName!: string;
  basicDetails!: BasicDetails;
  academicDetails!: AcademicDetails;
  tenthDetails!: TenthDetails;
  twelfthDetails!: TwelfthDetails;
  feeDetails!: FeeDetails;
  otherDetails!: OtherDetails;
  contactDetails!: ContactDetails;
  scholarshipStatus!: ScholarshipStatus;
  aadharNumber!: string;
  religion!: string;
  communityCategory!: string;
  fatherName!: string;
  motherName!: string;
  income!: number;
  instituteName!: string;
  currentCourse!: string;
  presentYear!: number;
  modeOfStudy!: string;
  startData!: Date;
  boardName!: string;
  prevCourse!: string;
  prevPassingYear!: number;
  prevClassMarks!: number;
  rollNo10!: number;
  boardName10!: string;
  passingYear10!: number;
  marks10!: number;
  rollNo12!: number;
  boardName12!: string;
  passingYear12!: number;
  marks12!: number;
  admissionFee!: number;
  tuitionFee!: number;
  otherFee!: number;
  isDisabled!: boolean;
  disabilityName!: string;
  disabilityPercentage!: number;
  maritalStatus!: string;
  parentsProfession!: string;
  state!: string;
  district!: string;
  block!: string;
  houseNo!: string;
  streetNo!: string;
  pinCode!: number;
  approvedByInstitute: string = "Not Received";
  approvedByNodal: string = "Not Received";
  approvedByMinistry: string = "Not Received";


  constructor(private serve:ScholarshipAddService,private route:Router,private parent:AppComponent) { }

  ngOnInit(): void {
  }

  submit(basic: BasicDetComponent, acad: AcadDetComponent, ten: TenDetComponent,
    twel: TwelDetComponent, fee: FeeDetComponent, oth: OthDetComponent, con: ConDetComponent,
    sub: SubDetComponent) {
    this.aadharNumber = basic.adhar;
    this.religion = basic.relig;
    this.communityCategory = basic.commu;
    this.fatherName = basic.fName;
    this.motherName = basic.mName;
    this.income = Number(basic.income);
    this.instituteName = acad.insName;
    this.currentCourse = acad.preClass;
    this.modeOfStudy = acad.mode;
    this.startData = new Date(acad.classStart);
    this.boardName = acad.university;
    this.prevCourse = acad.prevClass;
    this.prevClassMarks = Number(acad.prevClassPer);
    this.rollNo10 = Number(ten.rollno);
    this.boardName10 = ten.board;
    this.passingYear10 = Number(ten.passYear);
    this.marks10 = Number(ten.perObtain);
    this.rollNo12 = Number(twel.rollno);
    this.boardName12 = twel.board;
    this.passingYear12 = Number(twel.passYear);
    this.marks12 = Number(twel.perObtain);
    this.admissionFee = Number(fee.addFee);
    this.tuitionFee = Number(fee.tuiFee);
    this.otherFee = Number(fee.othFee);
    this.isDisabled = (oth.isDis === "Yes");
    this.disabilityName = oth.typeDis;
    this.disabilityPercentage = Number(oth.percent);
    this.maritalStatus = oth.mar;
    this.parentsProfession = oth.prof;
    this.state = con.state;
    this.district = con.district;
    this.block = con.taluka;
    this.houseNo = con.hNum;
    this.streetNo = con.sNum;
    this.pinCode = Number(con.pin);
    this.schemeName = sub.schemeValue;
    if (!this.validate()) {
      this.fill();
      this.add();
    }
  }

  //TODO: Validate
   validate():boolean {
    if(this.aadharNumber===null||this.aadharNumber==undefined)
    {
      alert("Enter valid Adhar")
      return true
    }
    if(this.communityCategory===null||this.communityCategory==undefined)
    {
      alert("Enter valid Community Category")
      return true;
    }
    if(this.fatherName===null||this.fatherName===undefined)
    {
      alert("Enter valid Name")
      return true;
    }
    if(this.motherName===null||this.motherName===undefined)
    {
      alert("Enter valid Name")
      return true;
    }
    if(this.income===0)
    {
      alert("Enter valid income")
      return true;
    }
    // if(this.presentYear===0||this.presentYear===undefined)
    // {
    //   alert("Enter valid year")
    //   return true;
    // }
    // if(this.prevPassingYear===0||this.prevPassingYear===undefined)
    // {
    //   alert("Enter valid previous class")
    //   return true;
    // }
    if(this.prevClassMarks===0||this.prevClassMarks===undefined)
    {
      alert("Enter valid Percentage")
      return true;
    }
    if(this.rollNo10===0||this.rollNo10===undefined)
    {
      alert("Enter valid Rollno of 10th class")
      return true;
    }
    if(this.rollNo12===0||this.rollNo12===undefined)
    {
      alert("Enter valid Rollno of 12th class")
      return true;
    }
    if(this.marks10===0||this.marks10===undefined)
    {
      alert("Enter valid Percentage")
      return true;
    }
    if(this.marks12===0||this.marks12===undefined)
    {
      alert("Enter valid Percentage")
      return true;
    }
    if(this.boardName10===null||this.boardName10===undefined)
    {
      alert("Enter valid BoardName")
      return true;
    }
    if(this.boardName12===null||this.boardName12===undefined)
    {
      alert("Enter valid BoardName")
      return true;
    }
    if(this.passingYear10===0||this.passingYear10===NaN)
    {
      alert("Enter valid Passing year")
      return true;
    }
    if(this.passingYear12===0||this.passingYear12===NaN)
    {
      alert("Enter valid Passing year")
      return true;
    }
    if(this.admissionFee===0||this.admissionFee===NaN)
    {
      alert("Enter valid amount")
      return true;
    }
    if(this.tuitionFee===0||this.tuitionFee===NaN)
    {
      alert("Enter valid amount")
      return true;
    }
    if(this.otherFee===0||this.otherFee===NaN)
    {
      alert("Enter valid amount")
      return true;
    }
    // if(this.disabilityName===null)
    // {
    //   alert("Enter valid type")
    //   return true;
    // }
    // if(this.disabilityPercentage===0||this.disabilityPercentage===0)
    // {
    //   alert("Enter valid Percentage")
    //   return true;
    // }
    if(this.parentsProfession===null||this.parentsProfession===undefined)
    {
      alert("Enter valid detail")
      return true;
    }
    if(this.state===null||this.state===undefined)
    {
      alert("Enter valid state")
      return true;
    }
    if(this.district===null||this.district===undefined)
    {
      alert("Enter valid district")
      return true;
    }
    if(this.block===null||this.block===undefined)
    {
      alert("Enter valid block")
      return true;
    }
    if(this.houseNo===null||this.houseNo===undefined)
    {
      alert("Enter valid HouseNo")
      return true;
    }
    if(this.streetNo===null||this.streetNo===undefined)
    {
      alert("Enter valid streetNo")
      return true;
    }
    if(this.schemeName===null||this.schemeName===undefined)
    {
      alert("Enter valid schemeNo")
      return true;
    }
    if(this.pinCode===0||this.pinCode===NaN)
    {
      alert("Enter valid pincode")
      return true;
     }
     return false;
  }

  fill() { 
    this.basicDetails = {
      aadharNumber: this.aadharNumber,
    religion: this.religion,
    communityCategory: this.communityCategory,
    fatherName: this.fatherName,
    motherName: this.motherName,
    income:this.income
    }
    this.academicDetails = {
      instituteName:this.instituteName,
    currentCourse: this.currentCourse,
    presentYear: this.presentYear,
    modeOfStudy: this.modeOfStudy,
    startDate: this.startData,
    boardName: this.boardName,
    prevCourse: this.prevCourse,
    prevPassingYear: this.prevPassingYear,
    prevClassMarks:this.prevClassMarks
    }
    this.tenthDetails = {
      rollNo: this.rollNo10,
      boardName: this.boardName10,
      passingYear: this.passingYear10,
      marks:this.marks10
    }
    this.twelfthDetails = {
      rollNo: this.rollNo12,
      boardName: this.boardName12,
      passingYear: this.passingYear12,
      marks:this.marks12
    }
    this.feeDetails = {
      admissionFee: this.admissionFee,
    tuitionFee: this.tuitionFee,
    otherFee:this.otherFee
    }
    this.otherDetails = {
      isDisabled: this.isDisabled,
    disabilityName: this.disabilityName,
    disabilityPercentage: this.disabilityPercentage,
    maritalStatus: this.maritalStatus,
    parentsProfession:this.parentsProfession
    }
    this.contactDetails={ 
      state: this.state,
    district: this.district,
    block: this.block,
    houseNo: this.houseNo,
    streetNo: this.streetNo,
    pinCode:this.pinCode
          
    }
    this.scholarshipStatus = {
      approvedByInstitute: this.approvedByInstitute,
      approvedByMinistry:this.approvedByMinistry,
      approvedByNodal:this.approvedByNodal
    }
    this.scholarship={ 
      studentId: this.getStudent(),
    schemeName: this.schemeName,
    basicDetails: this.basicDetails,
    academicDetails: this.academicDetails,
    tenthDetails: this.tenthDetails,
    twelfthDetails: this.twelfthDetails,
    feeDetails: this.feeDetails,
    otherDetails: this.otherDetails,
    contactDetails: this.contactDetails,
    scholarshipStatus:this.scholarshipStatus
    }
  }

  add() { 
    this.serve.addScholarship(this.scholarship).subscribe((data: Scholarship) => {
      console.log(data);
      alert("Succefully Applied ");
      this.route.navigate(["../student-home"])

    },
      (error: any)=>{ 
        console.log(error);
        alert("Some errors occured try again");
      })
  }

  getStudent(): number{//update after login
    var id = this.parent.user.getStudent().id;
    return id == undefined ? 27 : id;
  }

}