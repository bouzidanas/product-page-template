import Header from './Header';
import { IntroSection, ImageTransitionSection, IncentivesSection, ProductSection, ResourcesSection, FooterSection } from './sections';
import './AdjustLandingPage.css';
import Page from '../components/Page';

function AdjustLandingPage() {

  return (
    <Page dark vertical centerText scrollTop={68} maxWidth="min(1120px, 90vw)">
      <Header />
      <IntroSection />
      <ImageTransitionSection />
      <IncentivesSection />
      <ProductSection />
      <ResourcesSection />
      <FooterSection />
    </Page>
  )
}

export default AdjustLandingPage
