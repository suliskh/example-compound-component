import Tabs from "./components/Tab";

function App() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
      <div className="container mx-auto px-10 max-w-md pt-20">
        <Tabs
          position="start"
          orientation="horizontal"
          items={[
            {
              key: "kambing",
              title: "Kambing",
              content: (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-base font-bold">Pengertian</h2>
                    <p className="text-sm">
                      <b>Kambing</b> ternak (<i>Capra aegagrus hircus</i>)
                      merupakan salah satu subspesies yang dipelihara atau
                      dijinakkan dari kambing liar Asia Barat Daya dan Eropa
                      Timur."
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h2 className="text-base font-bold">Taksonomi</h2>
                    <ul className="text-sm list-disc list-inside">
                      <li>
                        Famili <i>Manidae</i>
                      </li>
                      <li>
                        Famili <i>†Metacheiromyidae</i>
                      </li>
                      <li>
                        Famili <i>†Epoicotheriidae</i>
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              key: "ayam",
              title: "Ayam",
              content: (
                <div className="space-y-1">
                  <h2 className="text-base font-bold">Pengertian</h2>
                  <p className="text-sm">
                    <b>Ayam</b> (<i>Gallus gallus domesticus</i>) adalah
                    binatang unggas yang biasa dipelihara untuk dimanfaatkan
                    daging, telur, dan bulunya. Ayam peliharaan merupakan
                    keturunan langsung dari salah satu subspesies ayam hutan
                    yang dikenal sebagai ayam hutan merah (<i>Gallus gallus</i>)
                    atau ayam bangkiwa (<i>bankiva fowl</i>)
                  </p>
                </div>
              ),
            },
            {
              key: "trenggiling",
              title: "Trenggiling",
              content: (
                <div className="space-y-1">
                  <h2 className="text-base font-bold">Pengertian</h2>
                  <p className="text-sm">
                    <b>Tenggiling</b> atau <b>trenggiling</b> (juga disebut
                    sebagai pemakan-semut bersisik) adalah mamalia dari ordo
                    <i>Pholidota</i>. Satu keluarga yang masih ada,{" "}
                    <i>Manidae</i>, memiliki tiga genera, yaitu <i>Manis</i>{" "}
                    yang terdiri dari empat spesies yang hidup di Asia,{" "}
                    <i>Phataginus</i> yang terdiri dari dua spesies hidup di
                    Afrika, dan <i>Smutsia</i> yang terdiri dari dua spesies
                    juga tinggal di Afrika
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
