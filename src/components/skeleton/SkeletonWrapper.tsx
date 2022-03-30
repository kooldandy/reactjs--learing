import React from "react";
import ReactDOM from "react-dom";
import SkeletonElement from "./SkeletonElement";

interface ISkeletonWrapperProps {
  children?: any;
  showSkeleton?: boolean;
}

const Modal = (props: any) => {
  const el = document.createElement("div");
  el.setAttribute("style", "display: none");
  const root = document.getElementById("root") as HTMLElement;

  React.useEffect(() => {
    root.appendChild(el);
  }, []);

  React.useEffect(() => {
    const skeletontype = document.querySelectorAll(
      "[data-skeletontype='card']"
    );
    console.log("skeletontype", skeletontype);
  }, []);

  return ReactDOM.createPortal(
    React.Children.map(props.children, (child) => child),
    el
  );
};

const ChildrenWithWrapperDiv = React.forwardRef((props: any, ref: any) => {
  //return <div ref={ref}>Child1</div>
  const [, setForceUpdate] = React.useState(Date.now());
  React.useEffect(() => {
    setTimeout(() => {
      const card: HTMLElement = ref.current?.querySelector(
        "[data-skeletontype='card']"
      );
      if (!!card) {
        while (card.firstChild) {
          card?.removeChild(card.firstChild);
        }
        const cardDiv: HTMLElement = document.createElement("div");
        cardDiv.setAttribute("class", "skeleton shimmer card");
        card?.appendChild(cardDiv);
      }

      setForceUpdate(Date.now());

      const text = ref.current?.querySelector("[data-skeletontype='text']");

      if (!!text) {
        while (text.firstChild) {
            text?.removeChild(text.firstChild);
        }
        //console.log("text cardref", text);
        const div: HTMLElement = document.createElement("div");
        div.setAttribute("class", "skeleton shimmer text");
        text?.appendChild(div);

        // const div1: HTMLElement = document.createElement("div");
        // div1.setAttribute("class", "skeleton shimmer text");
        // text?.appendChild(div1);

        // const div2: HTMLElement = document.createElement("div");
        // div2.setAttribute("class", "skeleton shimmer text");
        // text?.appendChild(div2);
      }

      setForceUpdate(Date.now());
    }, 0);
  }, []);

  return React.Children.map(props.children, (child: any) => {
    return <div ref={ref}> {child} </div>;
  });
});

const SkeletonWrapper: React.FC<ISkeletonWrapperProps> = ({ children }) => {
  const cardref = React.useRef<HTMLElement>();
  return (
    <>
      {/* <SkeletonElement key={Math.random()} type="card"> */}
      {/* <Modal children={children} /> */}
      {/* {children} */}
      {/* </SkeletonElement> */}
      <ChildrenWithWrapperDiv children={children} ref={cardref} />
    </>
  );
};

export default SkeletonWrapper;
