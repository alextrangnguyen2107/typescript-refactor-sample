// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface BaseListApiRequest {
  limit: number;
  page: number;
  order_by?: string;
  sort_by?: 'asc' | 'desc';
};

const defaults: BaseListApiRequest = {
  limit: 10,
  page: 1,
  sort_by: 'asc'
} 

const obj = {...defaults, sort_by: 'desc'} as BaseListApiRequest;

console.log(obj);
obj.page = 2;

console.log(obj);

enum AccountType {
  SERVICE_ADMIN = 99,
  MEMBER = 0,
  GROUP_ADMIN = 1,
  ORGANIZATION_ADMIN = 2,
}

const Roles = {
  MEMBER: {
    role_id: 0,
    description: 'Member',
  },
  GROUP_ADMIN: {
    role_id: 1,
    description: 'GroupAdmin',
  },
  ORGANIZATION_ADMIN: {
    role_id: 2,
    description: 'OrganizationAdmin',
  },
  SERVICE_ADMIN: {
    role_id: 99,
    description: 'ServiceAdmin',
  },
};

let role_checkbox = {
  [Roles.MEMBER.role_id]: false,
  [Roles.GROUP_ADMIN.role_id]: false,
  [Roles.ORGANIZATION_ADMIN.role_id]: false,
  [Roles.SERVICE_ADMIN.role_id]: false,
}
  /**
   * Init value form filter
   */
  const getInitValue = {
    first_name: '',
    last_name: '',
    email: '',
    label: '',
    handleFormGroup: false,
    [Roles.MEMBER.role_id]: false,
  };

  console.log(getInitValue);

  function initDefaultRoleFiter (under_role_id, initVal = false) {
    return Object.keys(AccountType).filter(key => {
      console.log(AccountType[key]);
      if (AccountType[key] > under_role_id) {
        return AccountType[key] ;
      }
    }).map(item => ({item : initVal}));
  };

  const roles_init = initDefaultRoleFiter(3, true);
  console.log(roles_init);
  console.clear();

  const under_role_id = 99;

  const lst = Object.entries(Roles)
    .filter(([key, value]) => {
      return value.role_id <= under_role_id;
    }).flatMap(([k, v]) => ({key: v.role_id, value: false, label: v.description}));

    console.log(`lst checkbox: `, lst);
  
    const skey = 2;
    const index = lst.findIndex(data => data.key === skey);
    if (index >= 0) {
      lst[index].value = true;
    }
    
    console.log(`lst findIndex: `, lst);

    lst.find(data => {
      return data.key === skey || {}}).value = true;

    console.log(`lst 2 find: `, lst);

    const xx = Object.values(AccountType).filter(value => typeof value === 'number' );

    console.log(`account type[]: `, xx);
   