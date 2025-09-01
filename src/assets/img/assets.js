import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./Home Page Container.jpg";
import main_banner_bg_sm from "./Home Page Container sm.jpg";
import bottom_banner_bg_sm from "./bottom-banner-sm (1) (1).jpg";
import bottom_banner_bg from "./bottom-banner (1) (1).jpg";
import add_address_iamge from "./add_address_image.svg";

import ring_home from "./Diamand Stone Ring.jpg";
import bracelet_home from "./BlueStone Bracelet.jpg";
import earring_home from "./Fancy Earrings.jpg";
import necklace_home from "./Eve-Maier Naecklace.jpg";
import bangle_home from "./Golden Bangles.jpg";
import pendant_home from "./Heart Pendant.jpg";
import keychain_home from "./Teddy Keychain.jpg";

// rings
import ring_img_1 from "./Classic Solitaire Silver Ring.jpg";
import ring_img_2 from "./Diamand Stone Ring.jpg";
import ring_img_3 from "./Golden Plain Ring.jpg";
import ring_img_4 from "./Golden Ring Band.jpg";
import ring_img_5 from "./Golden Ring.jpg";
import ring_img_6 from "./Golden-Silver Ring.jpg";

// necklace
import necklace_img_1 from "./Eve-Maier Naecklace.jpg";
import necklace_img_2 from "./Flower Pendant Necklace.jpg";
import necklace_img_3 from "./Gold Layering Necklace.jpg";
import necklace_img_4 from "./Gold Leaf Necklace.jpg";
import necklace_img_5 from "./Golden King Necklace.jpg";
import necklace_img_6 from "./Teddy Keychain.jpg";

// earring
import earring_img_1 from "./Fancy Earrings.jpg";
import earring_img_2 from "./Gold Drop Earrings.jpg";
import earring_img_3 from "./Golden Stud Earrings.jpg";
import earring_img_4 from "./Gold-Toned Earrings.jpg";
import earring_img_5 from "./Green Stone Earrings.jpg";

// bracelet
import bracelet_img_1 from "./BlueStone Bracelet.jpg";
import bracelet_img_2 from "./Gold & Diamond Bracelet.jpg";
import bracelet_img_3 from "./Gold Plated Bracelet.jpg";
import bracelet_img_4 from "./Knot Bracelet.jpg";
import bracelet_img_5 from "./Mixed-Cut Diamond Bracelet.jpg";
import bracelet_img_6 from "./Paper Silver Bracelet.jpg";
import bracelet_img_7 from "./Sterling Silver Bracelet.jpg";
import bracelet_img_8 from "./Stone-Stunned Bracelet.jpg";

// bangle
import bangle_img_1 from "./Colorful Bangles.jpg";
import bangle_img_2 from "./Curved Bangles.jpg";
import bangle_img_3 from "./Gold Coin Bangles.jpg";
import bangle_img_4 from "./Gold Plain Bangles.jpg";
import bangle_img_5 from "./Golden Bangles.jpg";
import bangle_img_6 from "./Golnar Bangles.jpg";

// pendant
import pendant_img_1 from "./Eye Design Pendant.jpg";
import pendant_img_2 from "./Heart Pendant.jpg";
import pendant_img_3 from "./Pendant with diamont Accent.jpg";
import pendant_img_4 from "./Plus Side Charm Pendant.jpg";

// keychain
import keychain_img_1 from "./Erika-Lowe Keychain.jpg";
import keychain_img_2 from "./Flower Keychain.jpg";
import keychain_img_3 from "./Teddy Keychain.jpg";

export const assets={
    logo,
    search_icon,
    remove_icon,
    arrow_right_icon_colored,
    star_icon,
    star_dull_icon,
    cart_icon,
    nav_cart_icon,
    add_icon,
    refresh_icon,
    product_list_icon,
    order_icon,
    upload_area,
    profile_icon,
    menu_icon,
    delivery_truck_icon,
    leaf_icon,
    coin_icon,
    trust_icon,
    black_arrow_icon,
    white_arrow_icon,
    main_banner_bg,
    main_banner_bg_sm,
    bottom_banner_bg,
    bottom_banner_bg_sm,
    add_address_iamge,
    box_icon,
}
export const categories = [
    {
      text: "Rings",
      path: "Rings",
      image:ring_home,
      bgColor: "#FEF6DA",
    },
    {
      text: "Bracelet's",
      path: "Bracelet",
      image: bracelet_home,
      bgColor: "#FEE0E0",
    },
    {
      text: "Earrings",
      path: "Earrings",
      image: earring_home,
      bgColor: "#F0F5DE",
    },
    {
      text: "Necklace",
      path: "Necklace",
      image: necklace_home,
      bgColor: "#E1F5EC",
    },
    {
      text: "Bangles",
      path: "Bangles",
      image: bangle_home,
      bgColor: "#FEE6CD",
    },
    {
      text: "Pendants",
      path: "Pendants",
      image: pendant_home,
      bgColor: "#E0F6FE",
    },
    {
      text: "Keychains",
      path: "Keychains",
      image: keychain_home,
      bgColor: "#F1E3F9",
    },
  ];

//   footer

  export const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { text: "Home", url: "/#home" },
        { text: "Best Sellers", url: "/#best-seller" },
        { text: "Offers & Deals", url: "/products" },
        { text: "Contact Us", url: "#contact-us" },
        { text: "FAQs", url: "#" },
      ],
    },
    {
      title: "Need help?",
      links: [
        { text: "Delivery Information", url: "/cart" },
        { text: "Return & Refund Policy", url: "/cart#contact-us" },
        { text: "Payment Methods", url: "/cart" },
        { text: "Track your Order", url: "/cart" },
        { text: "Contact Us", url: "#contact-us" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { text: "Instagram", url: "#" },
        { text: "Twitter", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "WhatsApp", url: "#" },
      ],
    },
  ];

//   Features container

  export const features = [
    {
      icon: delivery_truck_icon,
      title: "Fastest Delivery",
      description: "Product delivered in under 30 minutes.",
    },
    {
      icon: leaf_icon,
      title: "Product Guaranteed",
      description: "The Jewellery's straight from the USA.",
    },
    {
      icon: coin_icon,
      title: "Affordable Prices",
      description: "Quality jewellery at unbeatable prices.",
    },
    {
      icon: trust_icon,
      title: "Trusted by Thousands",
      description: "Loved by 10,000+ happy customers.",
    },
  ];

//   Jewellery Product
export const dummyProducts=[
  // Best Seller
  {
    _id: "r1",
    name: "Diamand Stone Ring",
    category: "Rings",
    price: 125,
    offerPrice: 100,
    image: [ring_img_2],
    description: [
      "Well Designed",
      "Rich in Appearance",
      "Best Quality With low Price",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "e2",
    name: "Gold Drop Earrings",
    category: "Earrings",
    price: 180,
    offerPrice: 120,
    image: [earring_img_2],
    description: [
      "Well Designed",
      "Rich in Appearance",
      "Best Quality With low Price",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "n2",
    name: "Flower Pendant Necklace",
    category: "Necklace",
    price: 250,
    offerPrice: 200,
    image: [necklace_img_2],
    description: [
      "Well Designed",
      "Rich in Appearance",
      "Best Quality With low Price",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ba2",
    name: "Curved Bangles",
    category: "Bangles",
    price: 120,
    offerPrice: 80,
    image: [bangle_img_2],
    description: [
      "Well Designed",
      "Rich in Appearance",
      "Best Quality With low Price",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "k2",
    name: "Flower Keychain",
    category: "Keychains",
    price: 100,
    offerPrice: 80,
    image: [keychain_img_2],
    description: [
      "Well Designed",
      "Rich in Appearance",
      "Best Quality With low Price",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

    // Rings
      {
        _id: "r1",
        name: "Diamand Stone Ring",
        category: "Rings",
        price: 125,
        offerPrice: 100,
        image: [ring_img_2],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "r2",
        name: "Classic Solitaire Silver Ring",
        category: "Rings",
        price: 125,
        offerPrice: 100,
        image: [ring_img_1],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "r3",
        name: "Golden Plain Ring",
        category: "Rings",
        price: 125,
        offerPrice: 100,
        image: [ring_img_3],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "r4",
        name: "Golden Ring Band",
        category: "Rings",
        price: 125,
        offerPrice: 100,
        image: [ring_img_4],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "r5",
        name: "Golden Ring",
        category: "Rings",
        price: 125,
        offerPrice: 100,
        image: [ring_img_5],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "r6",
        name: "Golden-Silver Ring",
        category: "Rings",
        price: 125,
        offerPrice: 100,
        image: [ring_img_6],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      

    // necklace
    {
        _id: "n1",
        name: "Eve-Maier Naecklace",
        category: "Necklace",
        price: 250,
        offerPrice: 200,
        image: [necklace_img_1],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "n2",
        name: "Flower Pendant Necklace",
        category: "Necklace",
        price: 250,
        offerPrice: 200,
        image: [necklace_img_2],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "n3",
        name: "EGold Layering Necklace",
        category: "Necklace",
        price: 250,
        offerPrice: 200,
        image: [necklace_img_3],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "n4",
        name: "Gold Leaf Necklace",
        category: "Necklace",
        price: 250,
        offerPrice: 200,
        image: [necklace_img_4],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "n5",
        name: "Golden King Necklace",
        category: "Necklace",
        price: 250,
        offerPrice: 200,
        image: [necklace_img_5],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "n6",
        name: "Teddy Keychain",
        category: "Necklace",
        price: 250,
        offerPrice: 200,
        image: [necklace_img_6],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },

    //   earrings
    {
        _id: "e1",
        name: "Fancy Earrings",
        category: "Earrings",
        price: 180,
        offerPrice: 120,
        image: [earring_img_1
        ],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "e2",
        name: "Gold Drop Earrings",
        category: "Earrings",
        price: 180,
        offerPrice: 120,
        image: [earring_img_2],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "e3",
        name: "Golden Stud Earrings",
        category: "Earrings",
        price: 180,
        offerPrice: 120,
        image: [earring_img_3],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "e4",
        name: "Gold-Toned Earrings",
        category: "Earrings",
        price: 180,
        offerPrice: 120,
        image: [earring_img_4],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "e5",
        name: "Green Stone Earrings",
        category: "Earrings",
        price: 180,
        offerPrice: 120,
        image: [earring_img_5],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },

    //   bracelet
    {
        _id: "b1",
        name: "BlueStone Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_1],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "b2",
        name: "Gold & Diamond Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_2],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "b3",
        name: "Gold Plated Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_3],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "b4",
        name: "Knot Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_4],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "b5",
        name: "Mixed-Cut Diamond Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_5],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "b6",
        name: "Paper Silver Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_6],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "b7",
        name: "Sterling Silver Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_7],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "b8",
        name: "Stone-Stunned Bracelet",
        category: "Bracelet",
        price: 150,
        offerPrice: 100,
        image: [bracelet_img_8],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },

    //   bangle
    {
        _id: "ba1",
        name: "Colorful Bangles",
        category: "Bangles",
        price: 120,
        offerPrice: 80,
        image: [bangle_img_1],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "ba2",
        name: "Curved Bangles",
        category: "Bangles",
        price: 120,
        offerPrice: 80,
        image: [bangle_img_2],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "ba3",
        name: "Gold Coin Bangles",
        category: "Bangles",
        price: 120,
        offerPrice: 80,
        image: [bangle_img_3],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "ba4",
        name: "Gold Plain Bangles",
        category: "Bangles",
        price: 120,
        offerPrice: 80,
        image: [bangle_img_4],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "ba5",
        name: "Golden Bangles",
        category: "Bangles",
        price: 120,
        offerPrice: 80,
        image: [bangle_img_5],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "ba6",
        name: "Golnar Bangles",
        category: "Bangles",
        price: 120,
        offerPrice: 80,
        image: [bangle_img_6],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },

    //   pendant
    {
        _id: "p1",
        name: "Eye Design Pendant",
        category: "Pendants",
        price: 160,
        offerPrice: 120,
        image: [pendant_img_1],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "p2",
        name: "Heart Pendant",
        category: "Pendants",
        price: 160,
        offerPrice: 120,
        image: [pendant_img_2],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "p3",
        name: "Pendant with diamont Accent",
        category: "Pendants",
        price: 160,
        offerPrice: 120,
        image: [pendant_img_3],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "p4",
        name: "Plus Side Charm Pendant",
        category: "Pendants",
        price: 160,
        offerPrice: 120,
        image: [pendant_img_4],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      
    //   keychain
    {
        _id: "k1",
        name: "Erika-Lowe Keychain",
        category: "Keychains",
        price: 100,
        offerPrice: 80,
        image: [keychain_img_1],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "k2",
        name: "Flower Keychain",
        category: "Keychains",
        price: 100,
        offerPrice: 80,
        image: [keychain_img_2],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      {
        _id: "k3",
        name: "Teddy Keychain",
        category: "Keychains",
        price: 100,
        offerPrice: 80,
        image: [keychain_img_3],
        description: [
          "Well Designed",
          "Rich in Appearance",
          "Best Quality With low Price",
        ],
        createdAt: "2025-03-25T07:17:46.018Z",
        updatedAt: "2025-03-25T07:18:13.103Z",
        inStock: true,
      },
      
];

// dummy address
export const dummyAddress = [
    {
      _id: "67b5b9e54ea97f71bbc196a0",
      userId: "67b5880e4d09769c5ca61644",
      firstName: "Satva",
      lastName: "jewel's",
      email: "user.satva@gmail.com",
      street: "Street 123",
      city: "Main City",
      state: "New State",
      pincode: 123456,
      country: "IN",
      phone: "1234567890",
    },
  ];

//   dummy order
export const dummyOrders = [
    {
      _id: "67e2589a8f87e63366786400",
      userId: "67b5880e4d09769c5ca61644",
      items: [
        {
          product: dummyProducts[3],
          quantity: 2,
          _id: "67e2589a8f87e63366786401",
        },
      ],
      amount: 80,
      address: dummyAddress[0],
      status: "Order Placed",
      paymentType: "Online",
      isPaid: true,
      createdAt: "2025-03-25T07:17:46.018Z",
      updatedAt: "2025-03-25T07:18:13.103Z",
    },
    {
      _id: "67e258798f87e633667863f2",
      userId: "67b5880e4d09769c5ca61644",
      items: [
        {
          product: dummyProducts[0],
          quantity: 1,
          _id: "67e258798f87e633667863f3",
        },
        {
          product: dummyProducts[1],
          quantity: 1,
          _id: "67e258798f87e633667863f4",
        },
      ],
      amount: 100,
      address: dummyAddress[0],
      status: "Order Placed",
      paymentType: "COD",
      isPaid: false,
      createdAt: "2025-03-25T07:17:13.068Z",
      updatedAt: "2025-03-25T07:17:13.068Z",
    },
  ];
