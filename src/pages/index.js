import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Just what you didn\'t know you needed'}
        subtitle={'Discover New Products for Winter 2024'}
        ctaText={'shop now'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          More products and better content coming soon from{' '}
          <span className={styles.gold}>blowzie designs.</span>
        </p>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Blowzie'}
        quote={
          '“Marital bliss through thougtful products designed to nurture harmony and strentghen the bond between couples.  Because a happy marriage begins with Blowzie."'
        }
      />

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Designed with You in mind'}
          subtitle={'Tag @blowzie to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/satisfied.png`} alt={'social media 1'} />
          <img src={`/argue.png`} alt={'social media 2'} />
          <img src={`/confused_man.png`} alt={'social media 3'} />
          <img src={`/inboxes.png`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
