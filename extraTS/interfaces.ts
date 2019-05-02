import * as constants from './constants';

export interface IDiamond {
  (val: number): void;
}

export interface IEquilateralTriangle {
  (value : number) : void ;
}

export interface IHasPermission {
  (
    moduleName : string,
    role : string,
    permissionType : string
  ): boolean;
}

export interface IValidateEmail {
  trainee : string,
  reviewer : string
}

