import { ExpandCollapseButtonProps } from "@/app/types";

export default function ToggleImagesButton(props: ExpandCollapseButtonProps) {
  return (
    <button
      className="bg-secondary p-2 rounded-md hover:bg-accent active:bg-tertiary disabled:bg-slate-400 focus-visible:outline-tertiary"
      onClick={props.handleClick}
      disabled={!props.isExtraImages}
    >
      {props.isExtraImages
        ? props.shouldDisplayAllImages
          ? "Show Less"
          : "Show More"
        : "No Extra Images"}
    </button>
  );
}
