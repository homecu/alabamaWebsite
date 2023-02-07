import React from "react";
import {
  BodyText,
  Callout,
  Divider,
  Page,
  PageHeader,
} from "@hellobuild/blossom-websites-core-package";

function AboutUsPage() {
  return (
    <Page cms={{ pageId: "cu-about-uss" }} pathname="about-us">
      {data => {
        return (
          <React.Fragment>
            <PageHeader
              variant={PageHeader.variant.GRADIENT}
              color={PageHeader.color.PRIMARY}
              data={data.PageHeaderGradient}
            />
            <Divider className="tw-my-6" />

            <div className="tw-container">
              {data.Texts?.map((item, index) => {
                return (
                  <React.Fragment key={`Texts-Fragment-item-${index}`}>
                    <BodyText data={item} />
                    <Divider className="tw-my-6" />
                  </React.Fragment>
                );
              })}

              {data.TextsLists?.map((item, index) => {
                if (index === 0) {
                  return (
                    <React.Fragment key="TextsLists-item-0">
                      <Callout variant={Callout.variant.TEXT} title={item.title} list={item.list} />
                      <Divider className="tw-my-6" />
                    </React.Fragment>
                  );
                }

                return <BodyText key={`TextsLists-item-${index}`} data={item} />;
              })}
              <Divider className="tw-my-10" />

              <Callout variant={Callout.variant.BUTTON} data={data.CalloutButton} />
              <Divider className="tw-my-16" />
            </div>
          </React.Fragment>
        );
      }}
    </Page>
  );
}

export default AboutUsPage;
