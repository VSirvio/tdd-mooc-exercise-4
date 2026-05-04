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
      if (item.name !== SULFURAS) {
        item.sellIn -= 1;
      }

      if (item.name === AGED_BRIE) {
        if (item.sellIn < 0 && item.quality < 49) {
          item.quality += 2;
        } else if (item.quality < 50) {
          item.quality += 1;
        }
      } else if (item.name === BACKSTAGE_PASSES) {
        const originalQuality = item.quality;

        if (item.sellIn < 5 && originalQuality < 48) {
          item.quality += 3;
        } else if (item.sellIn < 10 && originalQuality < 49) {
          item.quality += 2;
        } else if (originalQuality < 50) {
          item.quality++;
        }

        if (item.sellIn < 0) {
          item.quality = 0;
        }
      } else if (![AGED_BRIE, BACKSTAGE_PASSES, SULFURAS].includes(item.name)) {
        if (item.quality > 0) {
          item.quality--;
        }

        if (item.sellIn < 0 && item.quality > 0) {
          item.quality--;
        }
      }
    }

    return this.items;
  }
}
