import { AcademicDetails } from "./AcademicDetails";
import { BasicDetails } from "./BasicDetails";
import { ContactDetails } from "./ContactDetails";
import { FeeDetails } from "./FeeDetails";
import { OtherDetails } from "./OtherDetails";
import { ScholarshipStatus } from "./ScholarshipStatus";
import { TenthDetails } from "./TenthDetails";
import { TwelfthDetails } from "./TwelfthDetails";

export interface Scholarship { 
    id?: number;
    studentId: number,
    schemeName: string,
    basicDetails: BasicDetails,
    academicDetails: AcademicDetails,
    tenthDetails: TenthDetails,
    twelfthDetails: TwelfthDetails,
    feeDetails: FeeDetails,
    otherDetails: OtherDetails,
    contactDetails: ContactDetails,
    scholarshipStatus:ScholarshipStatus
}