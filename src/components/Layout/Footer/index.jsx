import { Fragment } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { StructuredText } from 'react-datocms';

import { usePageLocale } from '../../../hooks/usePageLocale';

import { WrapperFooter, Wrapper, Container, CallOutContainer, Column } from './styles';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsFooter {
        nodes {
          id: originalId
          textLeft {
            value
          }
          textRight {
            value
          }
          textMid {
            value
          }
          locale
        }
      }
    }
  `);

  const { pageLocale } = usePageLocale();

  const {
    allDatoCmsFooter: { nodes },
  } = data;

  return (
    <WrapperFooter>
      <Wrapper>
        <CallOutContainer>
          {nodes
            .filter(({ locale }) => locale === pageLocale)
            .map(
              ({
                id,
                textMid: { value: textMidValue },
              }) => (
                <Fragment key={id}>
                  <Column>
                    <StructuredText data={textMidValue} />
                  </Column>
                </Fragment>
              )
            )}
        </CallOutContainer>

        <Container>
          {nodes
            .filter(({ locale }) => locale === pageLocale)
            .map(
              ({
                id,
                textLeft: { value: textLeftValue },
                textRight: { value: textRightValue },
              }) => (
                <Fragment key={id}>
                  <Column>
                    <StructuredText data={textLeftValue} />
                  </Column>
                  <Column>
                    <StructuredText data={textRightValue} />
                  </Column>
                </Fragment>
              )
            )}
        </Container>
      </Wrapper>
    </WrapperFooter>
  );
};
