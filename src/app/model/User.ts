import {EducationInfo} from "./educationInfo";

export interface User {
  id: string;
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  email: string;

  allEducationInfo: EducationInfo[];
  roles: string[];
  phones: string[];
  password: string;
}
