import { acadamic_det } from "./acadamic_det";
import { basic_det } from "./basic_det";
import { con_det } from "./con_det";
import { fee_det } from "./fee_det";
import { oth_det } from "./oth_det";
import { sub_det } from "./sub_det";
import { ten_det } from "./ten_det";
import { twel_det } from "./twel_det";

export interface std_regi{
    id?: number;
    state:string;
    district:string;
    name:string;
    dob:string;
    gender:string;
    mobile:string;
    email:string;
    instCode:string;
    aadhar:string;
    ifsc:string;
    bankAcc:string;
    bankName:string;
    password:string;
    // basicDet:basic_det
    // acadamicDet:acadamic_det;
    // tenthDet:ten_det;
    // twelthDet:twel_det;
    // feeDet:fee_det;
    // othDet:oth_det;
    // conDet: con_det;
    // subDet: sub_det;

}