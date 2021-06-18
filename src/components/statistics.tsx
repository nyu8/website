import * as React from 'react';

export const StatisticsScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?632a422a705ecf7ed451961986ad4b5b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
    `,
      }}
    />
  );
};
