import * as constants from './constants';

export interface IdiamondInterface {
  (val: number): void;
}

export interface IeqTriangleInterface {
  (value : number) : void ;
}

export interface IhasPermissionInterface {
  (
    moduleName : string,
    role : string,
    permissionType : string
  ): boolean;
}

export interface IvalidateEmailInterface {
  trainee : string,
  reviewer : string
}

