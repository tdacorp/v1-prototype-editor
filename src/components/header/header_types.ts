export type NavLink = {
  name: string;
  href: string;
};

export type HeaderProps = {
  logo?: string;
  links?: NavLink[];
  userName?: string;
};
