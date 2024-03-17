import React from "react";
import "../sass/components-styles/BlogsSections.css";

function BlogsSections() {
  return (
    <section className="sections">
      <div className="sections-info">
        <h2>Title</h2>
        <p>Date 00/00/00 at 00:00</p>
      </div>
      <div className="sections-sum">
        <p>Topics</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
          scelerisque ligula id hendrerit. Morbi in ultricies nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Morbi et lectus sit amet diam facilisis pretium. Nunc lacus
          metus, consequat eget consequat et, lobortis vel felis. Cras eu dui
          tortor. Duis vulputate imperdiet ligula. Suspendisse vel velit eget
          justo porta porttitor nec in justo. Nam iaculis vehicula lacus, nec
          sagittis libero convallis non. Sed faucibus risus non dapibus
          tincidunt.
        </p>
      </div>
    </section>
  );
}

export default BlogsSections;
