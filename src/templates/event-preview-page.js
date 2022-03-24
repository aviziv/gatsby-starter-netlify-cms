import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const EventPreviewPageTemplate = ({
  image,
  startDate,
  endDate,
  title,
/*  price,
  venue*/
}) => {
  const eventImage = getImage(image) || image;

  return (
    <div className="content">
      <FullWidthImage img={eventImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {startDate} : {endDate}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

EventPreviewPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  title: PropTypes.string
};

const EventPreviewPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EventPreviewPageTemplate
        image={frontmatter.image}
        startDate={frontmatter.startDate}
        endDate={frontmatter.endDate}
        title={frontmatter.title}
      />
    </Layout>
  );
};

EventPreviewPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventPreviewPage;

export const EventPreviewPageQuery = graphql`
  query EventPreviewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        startDate
        endDate
        title
      }
    }
  }
`;
