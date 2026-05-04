import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

const newItem = obj => new Item(obj.name, obj.sellIn, obj.quality);

describe("Gilded Rose", () => {
  test("foo with sellIn 0, quality 3", () => {
    const name = "foo";
    const itemBefore = newItem({ sellIn: 0, quality: 3, name });
    const itemAfter = newItem({ sellIn: -1, quality: 1, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("Backstage passes with sellIn 0, quality 0", () => {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const itemBefore = newItem({ sellIn: 0, quality: 0, name });
    const itemAfter = newItem({ sellIn: -1, quality: 0, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("default argument", () => {
    const gildedRose = new Shop();
    expect(gildedRose.items).to.be.empty;
  });

  test("Aged Brie with sellIn 0, quality 0", () => {
    const name = "Aged Brie";
    const itemBefore = newItem({ sellIn: 0, quality: 0, name });
    const itemAfter = newItem({ sellIn: -1, quality: 2, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("Backstage passes with sellIn 1, quality 0", () => {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const itemBefore = newItem({ sellIn: 1, quality: 0, name });
    const itemAfter = newItem({ sellIn: 0, quality: 3, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("Sulfuras, Hand of Ragnaros with sellIn -1, quality 1", () => {
    const name = "Sulfuras, Hand of Ragnaros";
    const itemBefore = newItem({ sellIn: -1, quality: 1, name });
    const itemAfter = newItem({ sellIn: -1, quality: 1, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("Backstage passes with sellIn 1, quality 50", () => {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const itemBefore = newItem({ sellIn: 1, quality: 50, name });
    const itemAfter = newItem({ sellIn: 0, quality: 50, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("foo with sellIn 0, quality 0", () => {
    const name = "foo";
    const itemBefore = newItem({ sellIn: 0, quality: 0, name });
    const itemAfter = newItem({ sellIn: -1, quality: 0, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("Backstage passes with sellIn 11, quality 0", () => {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const itemBefore = newItem({ sellIn: 11, quality: 0, name });
    const itemAfter = newItem({ sellIn: 10, quality: 1, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });

  test("Backstage passes with sellIn 6, quality 0", () => {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    const itemBefore = newItem({ sellIn: 6, quality: 0, name });
    const itemAfter = newItem({ sellIn: 5, quality: 2, name });
    expect(new Shop([itemBefore]).updateQuality()).to.deep.equal([itemAfter]);
  });
});
