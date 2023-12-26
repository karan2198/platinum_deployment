import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";

import { DataContextProvider } from "@/context/DataContext";
export const metadata = {
  title: "Home v1 || Platinum Circle - Real Estate Concierge Services",
};

export default function MainRoot({ Component, pageProps }) {
  return (
    <Wrapper>
       {/* <DataContextProvider> */}

          <Home_V1 {...pageProps} />
       {/* </DataContextProvider> */}
    </Wrapper>
  );
}
