export interface Package {
  name: string;
  latest: Version;
  versions: Version[];
  author: User;
  downloads: number;
  tags: string[];
  contributors: string[];
  documentation: string;
  website: string;
  repository: string;
}

export interface Version {
  version: string;
  publishedAt: string;
  description: string;
  readme: string;
  package?: Package;
  tags: string[];
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
