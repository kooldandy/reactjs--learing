import React from "react";
import './SkeletonElement.css';

interface ISkeletonElementProps {
  type: string;
  children?: any;
}

const SkeletonElement: React.FC<ISkeletonElementProps> = ({ type, children }) => {
  const classes = `skeleton shimmer ${type}`;
  //console.log("childeren ", children)
  return <div className={classes}>{children}</div>;
};

export default SkeletonElement;
