import React from "react";

interface Props {
  att: string;
}

const Attach: React.FC<Props> = ({ att, ...otherProps }) => {
  return <div {...otherProps}>{att}</div>;
};

export default Attach;
