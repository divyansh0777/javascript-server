export interface IHasPermission {
  (
    moduleName : string,
    role : string,
    permissionType : string
  ): boolean;
}
