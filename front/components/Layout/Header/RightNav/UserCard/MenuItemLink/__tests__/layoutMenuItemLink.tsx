import { render } from "@testing-library/react";
import MenuItemLink from "../index";

test("Layout MenuItemLink", () => {
  const { container } = render(
    <MenuItemLink
      className={""}
      onClick={() => console.log("close")}
      href="/user/[params]"
      as={`/user/10`}
    >
      toto
    </MenuItemLink>
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        aria-disabled="false"
        class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
        href="/user/10"
        role="menuitem"
        tabindex="-1"
      >
        toto
        <span
          class="MuiTouchRipple-root"
        />
      </a>
    </div>
  `);
});
