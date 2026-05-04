const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === SULFURAS) {
        continue;
      }

      item.sellIn -= 1;

      if (item.name === BACKSTAGE_PASSES && item.sellIn < 0) {
        item.quality = 0;
        continue;
      }

      let changeAmount = -1;

      if (item.name === AGED_BRIE) {
        changeAmount = 1;
      }

      const originalQuality = item.quality;

      if (item.name === AGED_BRIE) {
        if (item.sellIn < 0) {
          item.quality += 2;
          changeAmount *= 2;
        } else {
          item.quality += 1;
        }
      } else if (item.name === BACKSTAGE_PASSES) {
        if (item.sellIn < 5) {
          item.quality += 3;
          changeAmount *= 3;
        } else if (item.sellIn < 10) {
          item.quality += 2;
          changeAmount *= 2;
        } else {
          item.quality += 1;
        }
      } else {
        if (item.quality > 0) {
          if (item.sellIn < 0) {
            item.quality -= 2;
            changeAmount *= 2;
          } else {
            item.quality -= 1;
          }
        }
      }

      if (item.quality > 50) {
        item.quality = 50;
      }
    }

    return this.items;
  }
}
