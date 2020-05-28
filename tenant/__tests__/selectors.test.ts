import produce from "immer";

import {parseTenant} from "../selectors";
import {DEFAULT_TENANT} from "../constants";
import mock from "../mock";

describe("selectors", () => {
  describe("parseTenant", () => {
    describe("id", () => {
      it("should throw when no id is present", () => {
        const actual = {...mock.full, id: null};

        expect(() => parseTenant(actual)).toThrowError("Esta tienda es inválida");
      });
    });

    describe("slug", () => {
      it("should throw when no slug is present", () => {
        const actual = {...mock.full, slug: null};

        expect(() => parseTenant(actual)).toThrowError("Esta tienda es inválida");
      });
    });

    describe("color", () => {
      it("should throw when no color is present", () => {
        const base = mock.full;
        const actual = produce(base, (actual) => {
          delete actual.color;
        });
        const expected = {...base, color: DEFAULT_TENANT.color};

        expect(parseTenant(actual)).toMatchObject(expected);
      });
    });

    describe("phone", () => {
      it("should throw when no phone is present", () => {
        const base = mock.full;
        const actual = produce(base, (actual) => {
          delete actual.phone;
        });
        const expected = {...base, phone: DEFAULT_TENANT.phone};

        expect(parseTenant(actual)).toMatchObject(expected);
      });
    });
  });
});