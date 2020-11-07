export interface UpdateUserParams {
  newUsername?: string;
  email?: string;
  description?: string;
}

export const initialValues: UpdateUserParams = {
  newUsername: '', email: '', description: '',
};
