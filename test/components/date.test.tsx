import React from "react";
import { render } from "../testUtils";
import Date from "../../components/date";

describe("Date component", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Date dateString={"2021-01-01 "} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
