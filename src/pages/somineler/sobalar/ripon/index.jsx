import MainLayout from "../../../../layouts/main";
import FirePlaces from "../../../../components/FirePlaces";
import data from "./ripon.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Ripon"} />
    </MainLayout>
  );
};
export default Page;
