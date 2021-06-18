import * as React from 'react';
import {Helmet} from 'react-helmet';

import {StatisticsScript} from '../components/statistics';

import FullLogo from '../images/nyu8-full-logo-120.png';
import GitHubLogo from '../images/github.svg';

const FORUM_URL = process.env.GATSBY_FORUM_URL || 'https://discuss.nyu8.com';

interface LinkButtonProps {
  children: React.ReactNode;
  target?: string;
  href: string;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <a target={props.target || '_self'} href={props.href}>
      <div className="bg-gray-50 rounded-md p-3 mr-3 w-32 flex flex-row items-center justify-center hover:bg-gray-200">
        {props.children}
      </div>
    </a>
  );
};

export default () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>NYU8 - 纽约大学中文社区</title>
        <meta
          name="description"
          content="纽约大学中文社区NYU8是由纽约大学学生与校友驱动的中文社区，提供微信组群、学习、实习、生活等交流平台！社区基于开源技术创建并且本身也完全开源。"
        />
      </Helmet>
      <div className="flex flex-col items-center">
        <img className="w-64 mb-10" src={FullLogo} />
        <div className="flex flex-row items-center justify-center text-gray-600">
          <LinkButton href={FORUM_URL}>进入社区</LinkButton>
          <LinkButton target="_blank" href="https://github.com/nyu8">
            <img className="h-5 mr-3" src={GitHubLogo} />
            GitHub
          </LinkButton>
        </div>
        <div className="mt-5 text-gray-400">©️ 2021 NYU8</div>
      </div>
      <StatisticsScript />
    </div>
  );
};
