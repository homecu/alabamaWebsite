import React, { Fragment } from "react";
import { Page, Hero, Products, Divider, Feature } from "@homecu/blossom-websites-core-package";

function Home({ pageData }) {
  return (
    <Page cms={{ pageId: "cu-home-pages", pageData }} pathname="">
      {data => {
        return (
          <React.Fragment>
            <Hero variant={Hero.variant.CENTRAL} data={data.Heros} />
            <Divider className="tw-mb-20 md:tw-mb-40" />

            <Products data={data.Products} />
            <div className="tw-container">
              <Divider className="tw-mb-20 md:tw-mb-40" />

              {data.FeaturesV2?.map((feature, index) => {
                return (
                  <Fragment key={`FeatureV2-${index}`}>
                    <Feature variant={Feature.variant.V2} data={feature} />

                    <Divider className="tw-mb-20 md:tw-mb-48" />
                  </Fragment>
                );
              })}

              <Feature variant={Feature.variant.V1} data={data.FeatureV1} />
              <Divider className="tw-my-7 sm:tw-my-12" />
            </div>
          </React.Fragment>
        );
      }}
    </Page>
  );
}

export default Home;
