import MainLayout from "../../../layouts/main";
import FirePlaces from "../../../components/FirePlaces";
import data from "./aksesuar.json";

const Page = () => {
  return (
    <MainLayout>
      <FirePlaces data={data} title={"Aksesuar"} />
    </MainLayout>
  );
};

export default Page;
