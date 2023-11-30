import MainLayout from "../../../layouts/main";
import FirePlaces from "../../../components/FirePlaces";
import data from "./elektrikli.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Elektrikli Şömineler"} />
    </MainLayout>
  );
};

export default Page;
