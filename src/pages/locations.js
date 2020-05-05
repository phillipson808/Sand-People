import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/locations.module.scss"
import phone from "../img/phone.svg"



const locations = () => {
  return (
    <Layout>
      {/*Main Showcase*/}
      <div id={styles.Showcase}>
        <div className={styles.showcaseContent}>
          <h1>Locations</h1>
          <p>View our locations on Kauai, Maui, and Oahu.</p>
        </div>
      </div>
      {/*Island Containers*/}
      {/*Oahu*/}
      <div className={styles.islandContainer}>
        <div className={styles.islandContent}>
          <div className={styles.oahuImageContainer}></div>

          <div className={styles.islandTextContainer}>
            <h1>Oahu</h1>
            <div className={styles.ruler}></div>
            <div className={styles.islandFlexContainer}>
              <div className={styles.address}>
                <h3>Sand People Kailua</h3>
                <p>600 Kailua Road #118, Kailua, HI 96734</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-261-8878">(808) 261-8878</a>
                </div>
                <a
                  href="https://www.google.com/maps/place/Sand+People/@21.3941794,-157.7431996,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0014db45e655b7:0xc488cabd0903de94!8m2!3d21.3941794!4d-157.7410163"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>Sand Kids Kailua</h3>
                <p>600 Kailua Road #117, Kailua, HI 96734</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-261-4689">(808) 261-4689</a>
                </div>

                <a
                  href="https://www.google.com/maps/place/Sand+kids/@21.3941945,-157.7432449,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0014dcfb8670a3:0x24775ada30938ed6!8m2!3d21.3941945!4d-157.7410616"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>Sand People Ala Moana</h3>
                <p>
                  <i>*Ala Moana Shopping Center</i>
                </p>
                <p>
                  <br /> Ala Moana Blvd, Space 2254 Honolulu, HI 96814
                </p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-955-8883">(808) 955-8883</a>
                </div>
                <a
                  href="https://www.google.com/maps/place/Sand+People/@21.2904964,-157.8443185,17z/data=!3m2!4b1!5s0x7c006df06800f5bd:0x7edf0a3a4f3909d0!4m5!3m4!1s0x7c006df054a75a47:0x5ba90e77a226cb37!8m2!3d21.2904964!4d-157.8421352"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>

              <div className={styles.address}>
                <h3>Sand People Haleiwa</h3>
                <p>66-197 Kamehameha Hwy, Haleiwa, HI 96712</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-637-3373">(808) 637-3373</a>
                </div>
                <a
                  href="https://www.google.com/maps/place/Haleiwa+Town+Center/@21.5890105,-158.1055631,17z/data=!4m13!1m7!3m6!1s0x7c005f2ce550819d:0x41363bae1d4a1dc0!2s66-249+Kamehameha+Hwy,+Haleiwa,+HI+96712!3b1!8m2!3d21.586706!4d-158.1034012!3m4!1s0x7c0058d374949f85:0xc7ab946494263d52!8m2!3d21.5891213!4d-158.1035192"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>

              <div className={styles.address}>
                <h3>Sand People Int'l Marketplace</h3>
                <p>
                  <i>*International Marketplace</i>
                </p>
                <br />
                <p>2330 Kalakaua Avenue #207, Honolulu, HI 96815</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-800-3314">(808) 800-3314</a>
                </div>
                <a
                  href="https://www.google.com/maps/place/2330+Kalakaua+Ave+%23207,+Honolulu,+HI+96815/@21.2776635,-157.8289872,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0072767938c647:0xac9dd31f2b893620!8m2!3d21.2776635!4d-157.8268039"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>

              <div className={styles.address}>
                <h3>Sand People Waikiki</h3>
                <p>2369 Kalakaua Ave #1, Honolulu, HI 96815</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-924-6773">(808) 924-6773</a>
                </div>
                <a
                  href="https://www.google.com/maps/place/Sand+People/@21.2756631,-157.8270468,18.35z/data=!4m8!1m2!2m1!1ssand+people+moana+surfrider!3m4!1s0x0:0xc13189437b79dc4c!8m2!3d21.2763415!4d-157.8261794"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Maui*/}
      <div className={styles.islandContainer}>
        <div className={styles.islandContent}>
          <div className={styles.mauiImageContainer}></div>

          <div className={styles.islandTextContainer}>
            <h1>Maui</h1>
            <div className={styles.ruler}></div>
            <div className={styles.islandFlexContainer}>
              <div className={styles.address}>
                <h3>Sand People Whalers</h3>
                <p>
                  Whalers Village H4
                  <br />
                  2435 Kaanapali Parkway, Lahaina, HI 96761
                </p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-662-8785">(808) 662-8785</a>
                </div>
                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&sxsrf=ALeKk03KrCrCU1YBlKEp0236AxEcZY1O7w:1588704808086&ei=JLaxXtSLDKi60PEPprCkyA0&q=sand%20people%20lahaina&oq=sand+people+lahaina&gs_lcp=CgZwc3ktYWIQAzoECAAQRzoECCMQJzoCCAA6BAgAEENQ5wtY8xRgrRVoAHACeACAAVmIAZIEkgEBN5gBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=2ahUKEwi9_PPNsp3pAhVqJTQIHcK8D2YQvS4wAXoECAsQHw&uact=5&npsic=0&rflfq=1&rlha=0&rllag=20897868,-156687095,2717&tbm=lcl&rldimm=9621970541930010393&lqi=ChNzYW5kIHBlb3BsZSBsYWhhaW5hIgOIAQFaIgoLc2FuZCBwZW9wbGUiE3NhbmQgcGVvcGxlIGxhaGFpbmE&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4&rlst=f#rlfi=hd:;si:9621970541930010393,l,ChNzYW5kIHBlb3BsZSBsYWhhaW5hIgOIAQFaIgoLc2FuZCBwZW9wbGUiE3NhbmQgcGVvcGxlIGxhaGFpbmE;mv:[[20.923940899999998,-156.6781232],[20.871796699999997,-156.696068]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>Sand Kids Whalers</h3>
                <p>
                  Whalers Village H3
                  <br />
                  2435 Kaanapali Parkway, Lahaina, HI 96761
                </p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-661-8861">(808) 661-8861</a>
                </div>

                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&tbm=lcl&sxsrf=ALeKk02pmtLQOl-0vO_z02yWuodIRp6bMA%3A1588704848754&ei=ULaxXrHALf7L0PEP9Kik-AM&q=sand+kids+lahaina&oq=sand+kids+lahaina&gs_l=psy-ab.3...24009.27639.0.27718.14.12.2.0.0.0.121.942.6j4.10.0....0...1c.1.64.psy-ab..4.1.111...35i39k1.0.AwOK-JCASJU#rlfi=hd:;si:15274281397845109631;mv:[[20.921370577319028,-156.6949483197484],[20.921010622680974,-156.69533368025165]]"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>Sand People Lahaina</h3>
                <p>762 Front Street, Lahaina, HI 96761</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-662-8781">(808) 662-8781</a>
                </div>
                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&tbm=lcl&sxsrf=ALeKk01Hwwn4cvIAdq4BoAcB5av2QibJPA%3A1588704877031&ei=bbaxXtSoAYTh9AO95IKwCw&q=sand+people+lahaina&oq=sand+people+lahaina&gs_l=psy-ab.3..35i39k1.40566.42708.0.42759.19.18.0.0.0.0.164.2150.7j11.18.0....0...1c.1.64.psy-ab..1.18.2147...0j0i67k1j0i20i263k1j0i10k1j0i131i20i263k1j0i273k1j0i131k1j0i131i273k1.0.D-Moi1_R7Hk#rlfi=hd:;si:2296123067477022504;mv:[[20.881326495655887,-156.6741706930847],[20.869858403414288,-156.6960360609741],null,[20.8755925589614,-156.6851033770294],16]"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Kauai*/}
      <div className={styles.islandContainer}>
        <div className={styles.islandContent}>
          <div className={styles.kauaiImageContainer}></div>

          <div className={styles.islandTextContainer}>
            <h1>Kauai</h1>
            <div className={styles.ruler}></div>
            <div className={styles.islandFlexContainer}>
              <div className={styles.address}>
                <h3>Sand People Poipu</h3>
                <p>
                  <i>The Shops at Kukuiula</i>
                  <br />
                  2829 Ala Kalanikaumaka st. Suite G141, Koloa, HI 96756
                </p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-742-2888">(808) 742-2888</a>
                </div>
                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&biw=971&bih=717&tbm=lcl&sxsrf=ALeKk02E4VL6StDcIERxRvOhvlKERP0KEA%3A1588705168790&ei=kLexXu_fL5TA0PEPkPKfkAM&q=shops+at+kukuiula&oq=shops+at+kukuiula&gs_l=psy-ab.3..0l4j0i10k1j0j0i10i67k1j0i22i30k1l3.6489.9767.0.9839.19.15.0.4.4.0.146.1196.7j5.12.0....0...1c.1.64.psy-ab..3.16.1207...35i39k1j0i67k1j0i131k1j0i273k1.0.F2CJP_cAmI0#rlfi=hd:;si:11260167077786486713;mv:[[21.883644377319026,-159.4690276471901],[21.883284422680973,-159.46941555280986]]"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
              <div className={styles.address}>
                <h3>Sand Kids Poipu</h3>
                <p>
                  <i>The Shops at Kukuiula</i>
                  <br />
                  2829 Ala Kalanikaumaka st. Suite H155, Koloa, HI 96756
                </p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-742-2888">(808) 742-2288</a>
                </div>

                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&biw=971&bih=717&tbm=lcl&sxsrf=ALeKk02E4VL6StDcIERxRvOhvlKERP0KEA%3A1588705168790&ei=kLexXu_fL5TA0PEPkPKfkAM&q=shops+at+kukuiula&oq=shops+at+kukuiula&gs_l=psy-ab.3..0l4j0i10k1j0j0i10i67k1j0i22i30k1l3.6489.9767.0.9839.19.15.0.4.4.0.146.1196.7j5.12.0....0...1c.1.64.psy-ab..3.16.1207...35i39k1j0i67k1j0i131k1j0i273k1.0.F2CJP_cAmI0#rlfi=hd:;si:11260167077786486713;mv:[[21.883644377319026,-159.4690276471901],[21.883284422680973,-159.46941555280986]]"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>

              <div className={styles.address}>
                <h3>Sand People Hanalei</h3>
                <p>5-5161 Kuhio Highway PO Box 870, Hanalei, HI 96714</p>
                <div className={styles.phoneContainer}>
                  <img src={phone}></img>
                  <a href="tel:808-826-1008">(808) 826-1008</a>
                </div>
                <a
                  href="https://www.google.com/search?rlz=1C5CHFA_enUS704US704&biw=971&bih=717&tbm=lcl&sxsrf=ALeKk03PzCKJH3C4TmIPmqnCpoMw_1uG8A%3A1588705179125&ei=m7exXqyYB9q60PEPxpeFUA&q=sand+people+hanalei&oq=sand+people+hanalei&gs_l=psy-ab.3..35i39k1.180876.182827.0.182951.19.18.0.0.0.0.168.1920.4j12.16.0....0...1c.1.64.psy-ab..3.16.1918...0j0i67k1j0i131k1j0i273k1j0i20i263k1j0i131i273k1j0i10k1.0.0pJmrIiyq88#rlfi=hd:;si:4667756901923447813;mv:[[22.20270727731903,-159.49644210937785],[22.20234732268097,-159.49683089062214]]"
                  target="_blank"
                >
                  <button className={styles.directionsbtn}>Directions</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default locations
