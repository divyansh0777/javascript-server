import * as constants from './constants';

export interface diamondInterface {
  (val: number): void;
}

export interface eqTriangleInterface {
  (value : number) : void ;
}

export interface hasPermissionInterface {
  (
    moduleName : string,
    role : string,
    permissionType : string
  ): boolean;
}

export interface validateEmailInterface {
  trainee : string,
  reviewer : string
}

