import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
  {
    publisherId: "Woobi",
  },
  {
    publisherId: "Crazy4Media Spain",
  },
  {
    publisherId: "Playbuzz",
  },
  {
    publisherId: "DSNRMG",
  },
  {
    publisherId: "Adtention",
  },
  {
    publisherId: "Barons\\' Media",
  },
  {
    publisherId: "Integral Marketing",
  },
  {
    publisherId: "Mars Video",
  },
  {
    publisherId: "Media 122",
  },
  {
    publisherId: "Division D",
  },
  {
    publisherId: "Cheetah Mobile",
  },
  {
    publisherId: "Appodeal",
  },
  {
    publisherId: "RF2 Mobile",
  },
  {
    publisherId: "Crazy4Media SEA",
  },
  {
    publisherId: "Revolution Mobile",
  },
  {
    publisherId: "MORRUM CONSULTING CORP DOO",
  },
  {
    publisherId: "Bluewaterads",
  },
  {
    publisherId: "Cheetah Mobile- Orion",
  },
  {
    publisherId: "clickky media",
  },
  {
    publisherId: "Oak Lane Media",
  },
  {
    publisherId: "BitTorent",
  },
  {
    publisherId: "5mina.com",
  },
  {
    publisherId: "Vidgyor Media Technologies Pvt. Ltd.",
  },
  {
    publisherId: "Pairade",
  },
  {
    publisherId: "New IT Solutions Ltd",
  },
  {
    publisherId: "Yashi:10350",
  },
  {
    publisherId: "Photobucket",
  },
  {
    publisherId: "Tersertude",
  },
  {
    publisherId: "JunGroup",
  },
  {
    publisherId: "Taptica INC",
  },
  {
    publisherId: "Vungle",
  },
  {
    publisherId: "Lead2Class Pvt. Ltd.",
  },
  {
    publisherId: "dingit.tv",
  },
  {
    publisherId: "Solve Media:10766",
  },
  {
    publisherId: "Dashbid",
  },
  {
    publisherId: "Mobpipe",
  },
  {
    publisherId: "AirG",
  },
  {
    publisherId: "Telegraph Media",
  },
  {
    publisherId: "TVZONE",
  },
  {
    publisherId: "Jagran Prakashan Ltd.",
  },
  {
    publisherId: "Outfit7",
  },
  {
    publisherId: "M&M Media, Inc.:9300",
  },
  {
    publisherId: "Guchill",
  },
  {
    publisherId: "Gramedia Group",
  },
  {
    publisherId: "Infospesial.net",
  },
  {
    publisherId: "vdopia",
  },
  {
    publisherId: "SoftGames",
  },
  {
    publisherId: "WomensForum.com Inc.",
  },
  {
    publisherId: "RASOLANT COMMERCE LP",
  },
  {
    publisherId: "Asianet News Network Pvt Ltd",
  },
];

function Main() {
  const [render, setRender] = useState(data.slice(0, 10));

  let lastEl = useRef();
  const obsever = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        console.log(entry);
        console.log(lastEl.current);

        if (
          entry.target.classList.contains("lastEl") &&
          entry.isIntersecting &&
          render.length < data.length
        ) {
          console.log("last", entry.target.innerHTML);
          setRender(data.slice(0, render.length + 10));
          console.log("v", data.slice(0, render.length + 10));
        }
      });
    },

    {
      root: document.querySelector(".Container"),
      threshold: 0.1,
    }
  );

  useEffect(() => {
    let i = document.querySelectorAll(".item");
    console.log(i);
    i.forEach((item) => {
      obsever.observe(item);
    });
  });

  //
  return (
    <>
      Main
      <div
        className="Container"
        style={{
          height: "200px",
          width: "500px",
          border: "1px solid black",
          overflowY: "scroll",
        }}
      >
        {render.map((item, index) => {
          // obsever.observe(i);

          // if (obsever.observe(document.getElementsByClassName(`item`)))

          if (index === render.length - 1) {
            return (
              <div ref={lastEl} className={"item lastEl"} key={index}>
                {item.publisherId}
              </div>
            );
          } else {
            return (
              <div className={"item"} key={index}>
                {item.publisherId}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Main;
