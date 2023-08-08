import Tabs from "./components/Tab";

function App() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
      <div className="container mx-auto px-10 max-w-md pt-20">
        <Tabs
          items={[
            {
              key: "kambing",
              title: "Kambing",
              content:
                "Kambing ternak (Capra aegagrus hircus) merupakan salah satu subspesies yang dipelihara atau dijinakkan dari kambing liar Asia Barat Daya dan Eropa Timur.",
            },
            {
              key: "ayam",
              title: "Ayam",
              content:
                "Ayam (Gallus gallus domesticus) adalah binatang unggas yang biasa dipelihara untuk dimanfaatkan daging, telur, dan bulunya. Ayam peliharaan merupakan keturunan langsung dari salah satu subspesies ayam hutan yang dikenal sebagai ayam hutan merah (Gallus gallus) atau ayam bangkiwa (bankiva fowl)",
            },
            {
              key: "trenggiling",
              title: "Trenggiling",
              content:
                "Tenggiling atau trenggiling (juga disebut sebagai pemakan-semut bersisik) adalah mamalia dari ordo Pholidota. Satu keluarga yang masih ada, Manidae, memiliki tiga genera, yaitu Manis yang terdiri dari empat spesies yang hidup di Asia, Phataginus yang terdiri dari dua spesies hidup di Afrika, dan Smutsia yang terdiri dari dua spesies juga tinggal di Afrika.",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
