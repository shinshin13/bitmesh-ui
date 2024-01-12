import { BehindIcon } from "../../assets/icon/behind.icon";
import { BitmeshIcon } from "../../assets/icon/bitmesh.icon";
import { CollectionIcon } from "../../assets/icon/collection.icon";
import { GlobeIcon } from "../../assets/icon/globe.icon";
import { StackIcon } from "../../assets/icon/stack.icon";
import { StoryIcon } from "../../assets/icon/story.icon";
import { TechnologyIcon } from "../../assets/icon/technology.icon";

export const SECTIONS = (size?: number) => [
  {
    id: "#what-is-bitmesh",
    icon: <BitmeshIcon size={size} />,
    text: "What is BitMesh",
    top: "117px",
    left: "952px",
    size: "96px",
  },
  {
    id: "#create-your-story",
    icon: <StoryIcon size={size} />,
    text: "Create your Story",
    top: "240px",
    left: "619px",
    size: "88px",
  },
  {
    id: "#build-your-world",
    icon: <GlobeIcon size={size} />,
    text: "Build your World",
    top: "208px",
    left: "304px",
    size: "112px",
  },
  {
    id: "#the-economy",
    icon: <StackIcon size={size} />,
    text: "The Economy",
    top: "528px",
    left: "372px",
    size: "96px",
  },
  {
    id: "",
    icon: <div />,
    text: "",
    top: "418px",
    left: "1012px",
    size: "48px",
  },
  {
    id: "#native-NFT-collection",
    icon: <CollectionIcon size={size} />,
    text: "Native NFT Collection",
    top: "576px",
    left: "846px",
    size: "88px",
  },
  {
    id: "#behind-the-scene",
    icon: <BehindIcon size={size} />,
    text: "Behind the Scene",
    top: "762px",
    left: "252px",
    size: "88px",
  },
  {
    id: "#our-technology",
    icon: <TechnologyIcon size={size} />,
    text: "Our Technology",
    top: "689px",
    left: "1128px",
    size: "112px",
  },
];

export const SECTION_MOBILE = (size?: number) => [
  {
    id: "#what-is-bitmesh",
    icon: <BitmeshIcon size={size} />,
    text: "What is BitMesh",
    top: "109px",
    left: "286px",
    size: "46px",
  },
  {
    id: "#create-your-story",
    icon: <StoryIcon size={size} />,
    text: "Create your Story",
    top: "179px",
    left: "146px",
    size: "40px",
  },
  {
    id: "#build-your-world",
    icon: <GlobeIcon size={size} />,
    text: "Build your World",
    top: "137px",
    left: "17px",
    size: "56px",
  },
  {
    id: "#the-economy",
    icon: <StackIcon size={size} />,
    text: "The Economy",
    top: "324px",
    left: "23px",
    size: "48px",
  },
  {
    id: "",
    icon: <div />,
    text: "",
    top: "270px",
    left: "336px",
    size: "24px",
  },
  {
    id: "#native-NFT-collection",
    icon: <CollectionIcon size={size} />,
    text: "Native NFT Collection",
    top: "350px",
    left: "256px",
    size: "40px",
  },
  {
    id: "#behind-the-scene",
    icon: <BehindIcon size={size} />,
    text: "Behind the Scene",
    top: "480px",
    left: "16px",
    size: "48px",
  },
  {
    id: "#our-technology",
    icon: <TechnologyIcon size={size} />,
    text: "Our Technology",
    top: "480px",
    left: "318px",
    size: "56px",
  },
];
