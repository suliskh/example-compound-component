import { Tabs, TabList, Tab, TabPanel } from "./components/CompoundTab";

import NormalTabs from "./components/Tab";

function App() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-amber-900 min-h-screen">
      <div className="container mx-auto px-10 max-w-md pt-20">
        <h1 className="mb-4 text-white font-bold uppercase text-lg">
          Normal Component
        </h1>
        <NormalTabs
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
              disabled: true,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
              ),
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

        <h1 className="mt-20 mb-4 text-white font-bold uppercase text-lg">
          Compound Component
        </h1>

        <Tabs orientation="horizontal" position="start">
          <TabList>
            <Tab name="kambing">Kambing</Tab>
            <Tab name="ayam" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                />
              </svg>

              <span>Ayam</span>
            </Tab>
            <Tab name="trenggiling">Trenggiling</Tab>
          </TabList>

          <TabPanel name="kambing">
            <div className="space-y-4 px-6 py-4 bg-white rounded-xl">
              <div className="space-y-1">
                <h2 className="text-base font-bold">Pengertian</h2>
                <p className="text-sm">
                  <b>Kambing</b> ternak (<i>Capra aegagrus hircus</i>) merupakan
                  salah satu subspesies yang dipelihara atau dijinakkan dari
                  kambing liar Asia Barat Daya dan Eropa Timur."
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
          </TabPanel>

          <TabPanel name="ayam">
            <div className="space-y-1 px-6 py-4 bg-white rounded-xl">
              <h2 className="text-base font-bold">Pengertian</h2>
              <p className="text-sm">
                <b>Ayam</b> (<i>Gallus gallus domesticus</i>) adalah binatang
                unggas yang biasa dipelihara untuk dimanfaatkan daging, telur,
                dan bulunya. Ayam peliharaan merupakan keturunan langsung dari
                salah satu subspesies ayam hutan yang dikenal sebagai ayam hutan
                merah (<i>Gallus gallus</i>) atau ayam bangkiwa (
                <i>bankiva fowl</i>)
              </p>
            </div>
          </TabPanel>

          <TabPanel name="trenggiling">
            <div className="space-y-1 px-6 py-4 bg-white rounded-xl">
              <h2 className="text-base font-bold">Pengertian</h2>
              <p className="text-sm">
                <b>Tenggiling</b> atau <b>trenggiling</b> (juga disebut sebagai
                pemakan-semut bersisik) adalah mamalia dari ordo
                <i>Pholidota</i>. Satu keluarga yang masih ada, <i>Manidae</i>,
                memiliki tiga genera, yaitu <i>Manis</i> yang terdiri dari empat
                spesies yang hidup di Asia, <i>Phataginus</i> yang terdiri dari
                dua spesies hidup di Afrika, dan <i>Smutsia</i> yang terdiri
                dari dua spesies juga tinggal di Afrika
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
