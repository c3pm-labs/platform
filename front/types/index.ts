export interface Package {
  name: string;
  latest: Version;
  versions: Version[];
  author: User;
}

export interface Version {
  version: string;
  publishedAt: string;
  description: string;
  readme: string;
  contributors: string;
  website: string;
  repository: string;
  documentation: string;
  package?: Package;
}

export interface User {
  id: string;
  username: string;
  email: string;
  description: string;
  packages: Package[];
}

export interface Viewer extends User {
  username: string;
  email: string;
}
