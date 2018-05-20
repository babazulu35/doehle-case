import { Roles as RolesEnum } from './../enum/roles.enum';

export class Roles {
    static readonly CUSTOMER:number = RolesEnum.Customer;
    static readonly BOARD_MEMBER:number = RolesEnum.BoardMember;
    static readonly ADMINISTRATOR:number = RolesEnum.Administrator;
    static readonly SUPER_ADMIN:number = RolesEnum.SuperAdmin;
    static readonly ACCOUNTER:number = RolesEnum.Accounter;
    static readonly HUMAN_RESOURCES:number = RolesEnum.HumanResources;

}
