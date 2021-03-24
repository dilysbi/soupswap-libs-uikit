/* eslint-disable import/no-dynamic-require */
import React from "react";

interface Props {
  att: string;
}

const Attach: React.FC<Props> = ({ att, ...otherProps }) => {
  const isIcon = att?.startsWith("static");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = isIcon ? "img" : "span";
  return <>{isIcon ? <img src={att} alt="" {...otherProps} width={30} /> : <Tag>{att}</Tag>}</>;
};

export default Attach;
