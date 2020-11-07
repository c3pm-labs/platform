export interface UpdateUserParams {
  username?: string;
  email?: string;
  description?: string;
}

export const initialValues: UpdateUserParams = {
  username: '', email: '', description: '',
};
