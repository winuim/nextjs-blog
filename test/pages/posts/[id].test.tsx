import React from "react";
import { render } from "../../testUtils";
import Post from "../../../pages/posts/[id]";

describe("Home page", () => {
  it("matches snapshot", () => {
    const postData: {
      title: string;
      date: string;
      contentHtml: string;
    } = {
      title: "test tilte",
      date: "2021-01-01",
      contentHtml: "test content",
    };
    const { asFragment } = render(<Post postData={postData} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
