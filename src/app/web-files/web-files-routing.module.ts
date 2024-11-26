import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebFilesComponent } from './web-files.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CaseStudiesComponent } from './shared/case-studies/case-studies.component';
import { CaseStudyDetailsComponent } from './components/case-study-details/case-study-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SearchEngineOptComponent } from './components/search-engine-opt/search-engine-opt.component';
import { PaidSearchComponent } from './components/paid-search/paid-search.component';
import { BlogComponent } from './shared/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServicesComponent } from './shared/services/services.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ReputationManagementComponent } from './components/reputation-management/reputation-management.component';
import { BrandingLogoComponent } from './components/branding-logo/branding-logo.component';
import { WebsiteHostingComponent } from './components/website-hosting/website-hosting.component';
import { WebSupportComponent } from './components/web-support/web-support.component';
import { LocalSeoComponent } from './components/local-seo/local-seo.component';
import { WordPressComponent } from './components/word-press/word-press.component';
import { WooCommerceComponent } from './components/woo-commerce/woo-commerce.component';
import { ShopifyComponent } from './components/shopify/shopify.component';
import { WixDeveloperComponent } from './components/wix-developer/wix-developer.component';
import { MagentoComponent } from '../web-files/components/magento/magento.component';
import { SquareSpaceComponent } from './components/square-space/square-space.component';
import { BigCommerceComponent } from './components/big-commerce/big-commerce.component';
import { DrupalComponent } from './components/drupal/drupal.component';
import { JoomlaComponent } from './components/joomla/joomla.component';
import { HubspotComponent } from './components/hubspot/hubspot.component';
import { OsCommerceComponent } from './components/os-commerce/os-commerce.component';
import { PrestashopComponent } from './components/prestashop/prestashop.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { OurProjectComponent } from './components/our-project/our-project.component';
import { MedicalComponent } from './components/medical/medical.component';
import { FinancialComponent } from './components/financial/financial.component';
import { LocalBusinessComponent } from './components/local-business/local-business.component';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { LegalMarketingComponent } from './components/legal-marketing/legal-marketing.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { HealthFitnessComponent } from './components/health-fitness/health-fitness.component';
import { HvacComponent } from './components/hvac/hvac.component';



const routes: Routes = [
  {
    path:'',
    component:WebFilesComponent,
  children:[
    {
      path:'',
      component:HomeComponent,
    },
    {
      path:'home',
      component:HomeComponent,
    },
    {
      path:'contact',
      component:ContactComponent,
    },
    {
      path:'about',
      component:AboutComponent,
    },
    {
      path:'blog',
      component:BlogComponent,
    },
    {
      path:'blog-details/:id',
      component: BlogDetailsComponent,
    },
    {
      path: 'case-study',
      component: CaseStudiesComponent
    },
    {
      path: 'case-study-details/:id',
      component: CaseStudyDetailsComponent
    },
    {
      path: 'blogs',
      component: BlogsComponent
    },
    {
      path: 'seo',
      component: SearchEngineOptComponent
    },
    {
      path: 'paid-search',
      component: PaidSearchComponent
    },
    {
      path: 'services',
      component: ServicesComponent
    },
    {
      path: 'service-detail/:id',
      component: ServiceDetailsComponent
    },
    {
      path: 'social-media',
      component: SocialMediaComponent
    },
    {
      path: 'reputation-management',
      component: ReputationManagementComponent
    },
    {
      path: 'branding-logo',
      component: BrandingLogoComponent
    },
    {
      path: 'website-hosting',
      component: WebsiteHostingComponent
    },
    {
      path: 'web-support',
      component: WebSupportComponent
    },
    {
      path: 'local-seo',
      component: LocalSeoComponent
    },
    {
      path: 'word-press',
      component: WordPressComponent
    },
    {
      path: 'woo-commerce',
      component: WooCommerceComponent
    },
    {
      path: 'shopify',
      component: ShopifyComponent
    },
    {
      path: 'wix-developer',
      component: WixDeveloperComponent
    },
    {
      path: 'magento',
      component: MagentoComponent
    },
    {
      path: 'square-space',
      component: SquareSpaceComponent
    },
    {
      path: 'big-commerce',
      component: BigCommerceComponent
    },
    {
      path: 'drupal',
      component: DrupalComponent
    },
    {
      path: 'joomla',
      component: JoomlaComponent
    },
    {
      path: 'hubspot',
      component: HubspotComponent
    },
    {
      path: 'Os-Commerce',
      component: OsCommerceComponent
    },
    {
      path: 'prestashop',
      component: PrestashopComponent
    },
    {
      path: 'case-study',
      component: CaseStudyComponent
    },
    {
      path: 'our-project',
      component: OurProjectComponent
    },
    {
      path: 'medical',
      component: MedicalComponent
    },
    {
      path: 'finacial',
      component: FinancialComponent
    },
    {
      path: 'local-business',
      component: LocalBusinessComponent
    },
    {
      path: 'eCommerce',
      component: ECommerceComponent
    },
    {
      path: 'legal-marketing',
      component: LegalMarketingComponent
    },
    {
      path: 'home-services',
      component: HomeServicesComponent
    },
    {
      path: 'health-fitness',
      component: HealthFitnessComponent
    },
    {
      path: 'hvac',
      component: HvacComponent
    },




  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFilesRoutingModule { }
