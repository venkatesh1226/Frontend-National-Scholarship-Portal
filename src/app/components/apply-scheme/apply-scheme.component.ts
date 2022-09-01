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
import { ScholarshipAddService } from 'src/app/services/AddScholarshipService/scholarship-add.service';
import { MinLengthValidator, Validators } from '@angular/forms';

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


  constructor(private serve:ScholarshipAddService,private route:Router) { }

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
    this.income = parseInt(basic.income);
    this.instituteName = acad.insName;
    this.currentCourse = acad.preClass;
    this.modeOfStudy = acad.mode;
    this.startData = new Date(acad.classStart);
    this.boardName = acad.university;
    this.prevCourse = acad.prevClass;
    this.prevClassMarks = parseInt(acad.prevClassPer);
    this.rollNo10 = parseInt(ten.rollno);
    this.boardName10 = ten.board;
    this.passingYear10 = parseInt(ten.passYear);
    this.marks10 = parseInt(ten.perObtain);
    this.rollNo12 = parseInt(twel.rollno);
    this.boardName12 = twel.board;
    this.passingYear12 = parseInt(twel.passYear);
    this.marks12 = parseInt(twel.perObtain);
    this.admissionFee = parseInt(fee.addFee);
    this.tuitionFee = parseInt(fee.tuiFee);
    this.otherFee = parseInt(fee.othFee);
    this.isDisabled = (oth.isDis === "Yes");
    this.disabilityName = oth.typeDis;
    this.disabilityPercentage = parseInt(oth.percent);
    this.maritalStatus = oth.mar;
    this.parentsProfession = oth.prof;
    this.state = con.state;
    this.district = con.district;
    this.block = con.taluka;
    this.houseNo = con.hNum;
    this.streetNo = con.sNum;
    this.pinCode = parseInt(con.pin);
    this.schemeName = sub.schemeValue;
    this.validate();
    console.log(this.aadharNumber);
    this.fill();
    this.add();
  }

  //TODO: Validate
  validate() {
    if(this.aadharNumber==="")
    {
      alert("Enter valid Adhar")
    }
    if(this.communityCategory==="")
    {
      alert("Enter valid Community Category")
    }
    if(this.fatherName==="")
    {
      alert("Enter valid Name")
    }
    if(this.motherName==="")
    {
      alert("Enter valid Name")
    }
    if(this.income===parseInt(""))
    {
      alert("Enter valid income")
    }
    if(this.presentYear===parseInt(""))
    {
      alert("Enter valid year")
    }
    if(this.prevPassingYear===parseInt(""))
    {
      alert("Enter valid previous class")
    }
    if(this.prevClassMarks===parseInt(""))
    {
      alert("Enter valid Percentage")
    }
    if(this.rollNo10===parseInt(""))
    {
      alert("Enter valid Rollno")
    }
    if(this.rollNo12===parseInt(""))
    {
      alert("Enter valid Rollno")
    }
    if(this.marks10===parseInt(""))
    {
      alert("Enter valid Percentage")
    }
    if(this.marks12===parseInt(""))
    {
      alert("Enter valid Percentage")
    }
    if(this.boardName10==="")
    {
      alert("Enter valid BoardName")
    }
    if(this.boardName12==="")
    {
      alert("Enter valid BoardName")
    }
    if(this.passingYear10===parseInt(""))
    {
      alert("Enter valid Passing year")
    }
    if(this.passingYear12===parseInt(""))
    {
      alert("Enter valid Passing year")
    }
    if(this.admissionFee===parseInt(""))
    {
      alert("Enter valid amount")
    }
    if(this.tuitionFee===parseInt(""))
    {
      alert("Enter valid amount")
    }
    if(this.otherFee===parseInt(""))
    {
      alert("Enter valid amount")
    }
    if(this.disabilityName==="")
    {
      alert("Enter valid type")
    }
    if(this.disabilityPercentage===parseInt(""))
    {
      alert("Enter valid Percentage")
    }
    if(this.parentsProfession==="")
    {
      alert("Enter valid detail")
    }
    if(this.state==="")
    {
      alert("Enter valid state")
    }
    if(this.district==="")
    {
      alert("Enter valid district")
    }
    if(this.block==="")
    {
      alert("Enter valid block")
    }
    if(this.houseNo==="")
    {
      alert("Enter valid HouseNo")
    }
    if(this.streetNo==="")
    {
      alert("Enter valid streetNo")
    }
    if(this.schemeName==="")
    {
      alert("Enter valid schemeNo")
    }
    if(this.pinCode===parseInt(""))
    {
      alert("Enter valid pincode")
    }
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
    return 27;
  }

}