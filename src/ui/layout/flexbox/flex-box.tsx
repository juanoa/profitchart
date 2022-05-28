import React from "react";
import "./flex-box.css";

enum Directions {
    ROW = "row",
    COLUMN = "column",
    ROW_REVERSE = "row-reverse",
    COLUMN_REVERSE = "column-reverse"
}

enum Justifies {
    START = "start",
    END = "end",
    CENTER = "center",
    BETWEEN = "between",
    AROUND = "around",
    EVENLY = "evenly",
}

enum Aligns {
    STRETCH = "stretch",
    START = "start",
    END = "end",
    CENTER = "center",
    BASELINE = "baseline",
}

enum Wraps {
    NO_WRAP = "nowrap",
    WRAP = "wrap",
    WRAP_REVERSE = "wrap-reverse",
}

interface Props {
    className?: string;
    direction?: Directions;
    justify?: Justifies;
    align?: Aligns;
    flex?: number,
    grow?: number,
    gap?: number,
    wrap?: Wraps,
}

const FlexBox = ({ direction = Directions.ROW, align = Aligns.STRETCH, flex, grow, justify = Justifies.START, className, gap, wrap }: Props) => {

  return (
    <div
      className={`
        ${className ? className : ''}
        flex
        ${direction ? direction : ''}
        ${align ? align : ''}
        ${flex ? flex : ''}
        ${grow ? grow : ''}
        ${justify ? justify : ''}
        ${gap ? gap : ''}
        ${wrap ? wrap : ''}
      `}
    />
  );
};

FlexBox.directions = Directions;
FlexBox.justifies = Justifies;
FlexBox.aligns = Aligns;
FlexBox.wraps = Wraps;

FlexBox.displayName = "FlexBox";

export default FlexBox;
