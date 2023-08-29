import React, { useContext } from 'react';
import { Container } from '~paragon-react';
import Layout from '../../components/PageLayout';
import SEO from '../../components/SEO';
import {
  HeadingsTable,
  BodyTable,
  DisplayTable,
  DecorationAndEmphasisTable,
  LinksTable,
  AlignmentTable,
} from '../../components/typography-page';
import { SettingsContext } from '../../context/SettingsContext';

export default function TypographyPage() {
  const { settings } = useContext(SettingsContext);

  return (
    <Layout isAutoToc>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Typography" />
      <Container size={settings.containerWidth} className="py-5">
        <h1>Typography</h1>
        <hr />
        <HeadingsTable />
        <BodyTable />
        <DisplayTable />
        <LinksTable />
        <DecorationAndEmphasisTable />
        <AlignmentTable />
      </Container>
    </Layout>
  );
}
