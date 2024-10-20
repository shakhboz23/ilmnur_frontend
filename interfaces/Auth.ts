export interface IRegister {
  role: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IActivateLink {
  activation_link: string;
}
