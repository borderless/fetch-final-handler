import { Request } from "cross-fetch";
import { finalHandler } from "./index";

describe("fetch final handler", () => {
  const handler = finalHandler();

  it("should return a 404 response", async () => {
    const req = new Request("/");
    const res = await handler(req);
    expect(res).toMatchSnapshot();
  });

  it("should not return a body when using HEAD", async () => {
    const req = new Request("/", { method: "head" });
    const res = await handler(req);
    expect(res).toMatchSnapshot();
  });
});
