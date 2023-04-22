import { NationalityModel } from "./nationalityModel";

/**
 *
 * @returns Nationality[]
 */
export function getAllNationalities() {
  return new Promise<NationalityModel[]>((resolve) =>
    setTimeout(
      () => resolve([{ code: "BR" }, { code: "CA" }, { code: "CH" }]),
      500
    )
  );
}
