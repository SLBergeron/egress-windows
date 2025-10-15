import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Outcomes = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <Heading>
          Safer Basements, <br />
          Brighter Spaces
        </Heading>

        <Subheading className="py-8">
          Turn your basement into a legal living space. More natural light.
          Emergency exit access. Peace of mind for you and your family. Full
          compliance with building code.
        </Subheading>

        <LandingImages
          firstImageSrc={"/Safety_1.avif"}
          secondImageSrc={"/Safety_2.avif"}
        />
      </Container>
      <GradientDivider />
    </section>
  );
};
