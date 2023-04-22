import { useState } from "react";
import { NationalityModel } from "../features/nationality/nationalityModel";
import { getAllNationalities } from "../features/nationality/nationalityAPI";
import { NationalityList } from "../features/nationality/nationalityList";

export function Nationalities() {
  const [nationalities, setNationalities] = useState<NationalityModel[]>([]);

  if (nationalities.length === 0) {
    getAllNationalities().then((nationalities) => {
      console.log("getAllNationalities response: ", nationalities);
      setNationalities(nationalities);
    });
  }

  return (
    <>
      <NationalityList nationalities={nationalities}></NationalityList>
    </>
  );
}
