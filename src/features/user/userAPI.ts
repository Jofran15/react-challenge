import { UserModel } from "./userModel";

/**
 *
 * @returns UserModel
 */
export async function getUser(): Promise<UserModel> {
  const response = await fetch(`https://randomuser.me/api`);
  const data = await response.json();

  return data.results[0] as UserModel;
}

/**
 *
 * @param nationality
 * @returns UserModel[]
 */
export async function getUsersByNationality(
  nationality: string
): Promise<UserModel[]> {
  const response = await fetch(
    `https://randomuser.me/api/?results=10&nat=${nationality}`
  );
  const data = await response.json();

  return data.results as UserModel[];
}
