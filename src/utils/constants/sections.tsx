import { BehindIcon } from "../../assets/icon/behind.icon";
import { BitmeshIcon } from "../../assets/icon/bitmesh.icon";
import { CollectionIcon } from "../../assets/icon/collection.icon";
import { GlobeIcon } from "../../assets/icon/globe.icon";
import { StackIcon } from "../../assets/icon/stack.icon";
import { StoryIcon } from "../../assets/icon/story.icon";
import { TechnologyIcon } from "../../assets/icon/technology.icon";

export const SECTIONS = (size?: number) => [
  {
    id: 1,
    icon: <BitmeshIcon size={size} />,
    text: "What is BitMesh",
    top: "117px",
    left: "952px",
    size: "96px",
  },
  {
    id: 2,
    icon: <StoryIcon size={size} />,
    text: "Create your Story",
    top: "240px",
    left: "619px",
    size: "88px",
  },
  {
    id: 3,
    icon: <GlobeIcon size={size} />,
    text: "Build your World",
    top: "208px",
    left: "304px",
    size: "112px",
  },
  {
    id: 4,
    icon: <StackIcon size={size} />,
    text: "The Economy",
    top: "528px",
    left: "372px",
    size: "96px",
  },
  {
    id: 5,
    icon: <div />,
    text: "",
    top: "418px",
    left: "1012px",
    size: "48px",
  },
  {
    id: 6,
    icon: <CollectionIcon size={size} />,
    text: "Native NFT Collection",
    top: "576px",
    left: "846px",
    size: "88px",
  },
  {
    id: 7,
    icon: <BehindIcon size={size} />,
    text: "Behind the Scene",
    top: "762px",
    left: "252px",
    size: "88px",
  },
  {
    id: 8,
    icon: <TechnologyIcon size={size} />,
    text: "Our Technology",
    top: "689px",
    left: "1128px",
    size: "112px",
  },
];
