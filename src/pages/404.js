import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="not-found">
      <Image
        alt="brt"
        priority
        src="/assets/img/logo-dark.png"
        width={200}
        height={60}
      />
      <h3 style={{ color: "#401e00" }}>Sayfa Bulunamadı</h3>
    </div>
  );
};

export default Custom404;
