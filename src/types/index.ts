import type { AuthContext } from "@/context/AuthContext";

export interface RouterContext {
  authentication: AuthContext;
}

export interface User {
  id: string;
  email: string;
  username: string;
}

// comopnents props
export interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export interface ButtonProps {
  href: string;
  label: string;
}
