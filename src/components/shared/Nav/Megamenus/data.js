import { BsArrowRight } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

import BusinessMenu from "./BusinessMenu";
import CompanyMenu from "./CompanyMenu";
import ProductsMenu from "./ProductsMenu";
import ResourcesMenu from "./ResourcesMenu";
import SolutionsMenu from "./SolutionsMenu";

import computer2 from "../../../../assets/shared/computer2.png";

export const ResourcesData1 = [
  {
    category: <FormattedMessage id="resources1" defaultMessage="Resources" />,
    categoryId: "resources",
    to1: "/",
    links: [
      {
        id: 1,
        icon: computer2,
        title: (
          <FormattedMessage
            id="how-pay2gate-works"
            defaultMessage="How Pay2Gate Works"
          />
        ),
        text: (
          <FormattedMessage
            id="intro-video1"
            defaultMessage="See Our Introduction Video"
          />
        ),
        to: "/",
      },
      {
        id: 2,
        icon: computer2,
        title: (
          <FormattedMessage id="help-center" defaultMessage="Help Center" />
        ),
        text: (
          <FormattedMessage
            id="more-about-tearms"
            defaultMessage="Learn More About Tearms Of Use"
          />
        ),
        to: "/",
      },
      {
        id: 3,
        icon: computer2,
        title: <FormattedMessage id="support" defaultMessage="Support" />,
        text: (
          <FormattedMessage
            id="pay2gate-offers"
            defaultMessage="Pay2Gate offers 24/7 Support"
          />
        ),
        to: "/",
      },
      {
        id: 4,
        icon: computer2,
        title: (
          <FormattedMessage
            id="become-a-partner"
            defaultMessage="Become A Partner"
          />
        ),
        text: (
          <FormattedMessage
            id="connect-with-us"
            defaultMessage="Connect With Us On Different Level"
          />
        ),
        to: "/",
      },
      {
        id: 5,
        icon: computer2,
        title: <FormattedMessage id="blog" defaultMessage="Blog" />,
        text: (
          <FormattedMessage
            id="check-out-our-blog"
            defaultMessage="Check Out Our Blog"
          />
        ),
        to: "/",
      },
      {
        id: 6,
        icon: computer2,
        title: <FormattedMessage id="faq" defaultMessage="FAQ's" />,
        text: (
          <FormattedMessage
            id="have-some-questions"
            defaultMessage="Have Some Questions?"
          />
        ),
        to: "/",
      },
    ],
  },
];

export const CompanyData2 = [
  {
    category: <FormattedMessage id="code" defaultMessage="Code" />,
    id: "code",
    to: "/",
  },
  {
    category: <FormattedMessage id="scratch" defaultMessage="Scratch"/>,
    id: "scratch",
    to: "/",
  },

  {
    category: <FormattedMessage id="mit-app-inventor" defaultMessage="Mit App Inventor"/>,
    id: "mit-app-inventor",
    to: "/",
  },

  {
    category: <FormattedMessage id="html-&-css-&-js" defaultMessage="HTML & CSS & JS"/>,
    id: "html-&-css-&-js",
    to: "/",
  },

  {
    category: <FormattedMessage id="wordpress" defaultMessage="Wordpress"/>,
    id: "wordpress",
    to: "/",
  },

  {
    category: <FormattedMessage id="php-&-mySql" defaultMessage="Php & mySql"/>,
    id: "php-&-mySql",
    to: "/",
  },
  {
    category: <FormattedMessage id="laravel" defaultMessage="Laravel"/>,
    id: "laravel",
    to: "/",
  },
  {
    category: <FormattedMessage id="react-&-js-&-native" defaultMessage="React & Js & Native"/>,
    id: "react-&-js-&-native",
    to: "/",
  },
  {
    category: <FormattedMessage id="java" defaultMessage="Java"/>,
    id: "java",
    to: "/",
  },
];

export const Activities = [
  {
    category: <FormattedMessage id="cinema" defaultMessage="Cinema" />,
    to: "/",
    id: "cinema",
  },
  {
    category: (
      <FormattedMessage id="spring-camp" defaultMessage="Spring Camp" />
    ),
    to: "/",
    id: "spring-camp",
  },
  {
    category: (
      <FormattedMessage id="summer-school" defaultMessage="Summer School" />
    ),
    to: "/",
    id: "summer-school",
  },
  {
    category: (
      <FormattedMessage
        id="november-code-fest"
        defaultMessage="November Code Fest"
      />
    ),
    to: "/",
    id: "november-code-fest",
  },
  {
    category: (
      <FormattedMessage id="tournaments" defaultMessage="Tournaments" />
    ),
    to: "/",
    id: "tournaments",
  },
  {
    category: (
      <FormattedMessage id="other-courses" defaultMessage="Other Courses" />
    ),
    to: "/",
    id: "other-courses",
  },
];
export const CompanyData1 = [
  {
    category: (
      <FormattedMessage id="Our-activities" defaultMessage="Our activities" />
    ),
    categoryId: "about-us",
    to1: "/",
    links: [
      {
        id: 1,
        icon: computer2,
        title: <FormattedMessage id="cinema" defaultMessage="Cinema" />,
        to: "/",
      },
      {
        id: 2,
        icon: computer2,
        title: (
          <FormattedMessage
            id="November-Code-Fest"
            defaultMessage="November Code Fest"
          />
        ),
        to: "/",
      },
      {
        id: 3,
        icon: computer2,
        title: (
          <FormattedMessage id="Spring-Camp" defaultMessage="Spring Camp" />
        ),
        to: "/",
      },
      {
        id: 4,
        icon: computer2,
        title: (
          <FormattedMessage id="tournaments" defaultMessage="Tournaments" />
        ),
        to: "/",
      },
      {
        id: 5,
        icon: computer2,
        title: (
          <FormattedMessage id="Summer-School" defaultMessage="Summer School" />
        ),
        to: "/",
      },
      {
        id: 6,
        icon: computer2,
        title: (
          <FormattedMessage id="Other-courses" defaultMessage="Other courses" />
        ),
        to: "/",
      },
    ],
  },
];

export const SolutionData1 = [
  {
    category: <FormattedMessage id="beginner" defaultMessage="Beginner" />,
    categoryId: "by-business-type",
    to1: "/",
    links: [
      {
        id: 1,
        icon: computer2,
        title: <FormattedMessage id="Code-2" defaultMessage="Code " />,
        to: "/",
      },
      {
        id: 2,
        icon: computer2,
        title: <FormattedMessage id="Scratch" defaultMessage="Scratch" />,
        to: "/",
      },
      {
        id: 3,
        icon: computer2,
        title: (
          <FormattedMessage id="Code-4" defaultMessage="Mit App Inventor" />
        ),
        to: "/",
      },
    ],
  },
  {
    category: <FormattedMessage id="Advanced" defaultMessage="Advanced" />,
    categoryId: "by-role",
    to1: "/",
    links: [
      {
        id: 4,
        icon: computer2,
        title: (
          <FormattedMessage
            id="HTML-&-CSS-&-JS"
            defaultMessage="HTML & CSS & JS"
          />
        ),
        to: "/",
      },
      {
        id: 5,
        icon: computer2,
        title: <FormattedMessage id="laravel" defaultMessage="Laravel" />,
        to: "/",
      },
      {
        id: 6,
        icon: computer2,
        title: <FormattedMessage id="Wordpress" defaultMessage="Wordpress" />,
        to: "/",
      },
      {
        id: 7,
        icon: computer2,
        title: (
          <FormattedMessage id="Laravel" defaultMessage="React/ Js / Native" />
        ),
        to: "/",
      },
      {
        id: 8,
        icon: computer2,
        title: (
          <FormattedMessage id="Php-&-mySql" defaultMessage="Php & mySql" />
        ),
        to: "/",
      },
      {
        id: 9,
        icon: computer2,
        title: (
          <FormattedMessage id="developers-and-it" defaultMessage="Java" />
        ),
        to: "/",
      },
    ],
  },
];

export const MainData2 = [
  {
    link: <FormattedMessage id=".home()" defaultMessage=".home()" />,
    cls: "products-link",
    to: "/",
    // megamenu:<ProductsMenu />
  },
  {
    link: <FormattedMessage id=".ourTeam()" defaultMessage=".ourTeam()" />,
    cls: "about-link",
    to: "/ourTeam",
    // megamenu:<CompanyMenu />
  },
  {
    link: <FormattedMessage id=".aboutUs()" defaultMessage=".aboutUs()" />,
    cls: "resources-link",
    to: "/",
    // megamenu:<ResourcesMenu />
  },
  {
    link: <FormattedMessage id=".projects()" defaultMessage=".projects()" />,
    cls: "solutions-link",
    to: "/",
    megamenu: <SolutionsMenu />,
  },
  {
    link: (
      <FormattedMessage id=".activities()" defaultMessage=".activities()" />
    ),
    cls: "contact-link",
    to: "/",
    megamenu: <CompanyMenu />,
  },
];
