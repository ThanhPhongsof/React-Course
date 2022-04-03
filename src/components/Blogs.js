import React from "react";
import useHover from "../hooks/useHover";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blogs = () => {
  const { contentRef } = useLinkNewTab();
  const { hoverd, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <div className="m5-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        exercitationem dignissimos, est rem magni accusamus impedit et
        temporibus hic minima sit fuga, corporis vero distinctio veniam
        incidunt, itaque omnis sequi?
        <a
          href="http://google.com"
          className={`${hoverd ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
      </div>
      <div className="m5-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        exercitationem dignissimos, est rem magni accusamus impedit et
        temporibus hic minima sit fuga, corporis vero distinctio veniam
        incidunt, itaque omnis sequi?
      </div>
      <div className="m5-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        exercitationem dignissimos, est rem magni accusamus impedit et
        temporibus hic minima sit fuga, corporis vero distinctio veniam
        incidunt, itaque omnis sequi?
      </div>
    </div>
  );
};

export default Blogs;
