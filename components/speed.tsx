import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Speed = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-10 relative overflow-hidden" id="process">
      <Container>
        <Heading>
          How We Work <br />
          Start to Finish
        </Heading>

        <Subheading className="py-8">
          We handle the entire process. Design, permits, cutting, excavation,
          window install, drainage, and finishing. You get one point of contact
          for everything.
        </Subheading>

        <LandingImages
          firstImageSrc={"/Process_1.avif"}
          secondImageSrc={"/Process_2.avif"}
        />
      </Container>
      <GradientDivider />
    </section>
  );
};
