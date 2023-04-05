import { StaticImageData } from "next/image";

export type Props = {
  classProp?: string
  margin?: string;
  children?: React.ReactNode;
};

export type MainProps = {
  children: JSX.Element[]
}

export type Data = {
  image: StaticImageData,
  date: string,
  userName: string,
  title: string,
  text: string,
}

export type ButtonProps = {
  children?: string,
  type?: 'submit' | 'reset' | 'button' | undefined
};

interface cardItem {
  price: string, 
  title: string,
  descr: string,
}

export type Card = {
  img: StaticImageData | string,
  name?: string,
  review?: string,
  position?: string
  descr?: string,
}
export type MenuCardType = {
  data: cardItem[],
  title: string
}
export type Form = {
  children?: JSX.Element,
  subtitle?: string,
  title?: string,
}


