import { Tabs, TabList, Tab, TabPanel } from "./components/CompoundTab";

import NormalTabs from "./components/Tab";

function App() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
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
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              ),
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

        <h1 className="mt-20 mb-4 text-white font-bold uppercase text-lg">
          Compound Component
        </h1>

        <Tabs orientation="horizontal" position="start">
          <TabList>
            <Tab name="kambing">Kambing</Tab>
            <Tab name="ayam">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
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
