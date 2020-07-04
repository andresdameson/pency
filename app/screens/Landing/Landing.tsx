import React from "react";
import {Stack} from "@chakra-ui/core";

import Header from "./Header";
import Navbar from "./Navbar";
import Features from "./Features";
import Previews from "./Previews";
import Testimonial from "./Testimonial";
import Shout from "./Shout";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import FAQ from "./FAQ";

import {ClientTenant} from "~/tenant/types";

interface Props {
  tenants: ClientTenant[];
}

const Landing: React.FC<Props> = ({tenants}) => {
  console.log({tenants});

  return (
    <Stack minHeight="100vh" spacing={0}>
      <Navbar />
      <Header />
      <Features />
      <Previews />
      <Testimonial />
      <Shout />
      <FAQ />
      <CallToAction />
      <Footer />
    </Stack>
  );
};

export default Landing;
