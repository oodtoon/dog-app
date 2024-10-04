import { ReactNode } from "react";

export interface DogBreedsProps {
  dogBreedsData: { status: string; images?: string[]; message?: string };
}

export interface DogImagesProps {
  dogImages: string[];
  breed: string;
  shouldDisplayAllImages: boolean;
}

export interface ExpandCollapseButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  shouldDisplayAllImages: boolean;
  isExtraImages: boolean;
}

export interface UiProps {
  children?: ReactNode;
  id?: string;
}
