import Logo from "/public/logo.svg";
import type { NextApiRequest, NextApiResponse } from 'next'
type tabs = {
  title: string;
  href: string;
}[];

type logos = {
  src: string;
  alt: string;
};

type headerData = {
  tabs: tabs,
  logo: logos
}

const data={
  "tabs": [
    {
      "title": "Home",
      "href": "/"
    },
    {
      "title": "New Collections",
      "href": "/new"
    },
    {
      "title": "Authors",
      "href": "/author"
    },
    {
      "title": "Wishlist",
      "href": "/wishlist"
    }
  ],
  "logo": {
    "src": `/logo.svg`,
    "alt": "Logo"
  }
}



export default function handler(req:any, res:any) {
  res.status(200).json(data);
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<headerData>
// ) {
//   res.status(200).json(data)
// }
