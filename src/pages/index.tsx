import * as React from 'react';

import FullLogo from '../images/nyu8-full-logo-120.png';
import GitHubLogo from '../images/github.svg';

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
      <div className="flex flex-col items-center">
        <img className="w-64 mb-10" src={FullLogo} />
        <div className="flex flex-row items-center justify-center text-gray-600">
          <LinkButton href="https://discuss.nyu8.com">进入社区</LinkButton>
          <LinkButton target="_blank" href="https://github.com/nyu8">
            <img className="h-5 mr-3" src={GitHubLogo} />
            GitHub
          </LinkButton>
        </div>
        <div className="mt-5 text-gray-400">©️ 2021 NYU8</div>
      </div>
    </div>
  );
};
