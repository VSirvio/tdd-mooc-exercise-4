import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 3)]);
    const items = gildedRose.updateQuality();
    expect(items).to.deep.equal([{ name: "foo", sellIn: -1, quality: 1 }]);
  });

  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";
    const gildedRose = new Shop([new Item(itemName, 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items).to.deep.equal([{ name: itemName, sellIn: -1, quality: 0 }]);
  });
});
