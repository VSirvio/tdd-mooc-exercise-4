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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name === AGED_BRIE || item.name === BACKSTAGE_PASSES) {
        if (item.quality < 50) {
          item.quality++;
          if (item.name === BACKSTAGE_PASSES) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality++;
              }
            }

            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality++;
              }
            }
          }
        }
      } else if (item.name !== SULFURAS) {
        if (item.quality > 0) {
          this.items[i].quality--;
        }
      }

      if (this.items[i].name !== SULFURAS) {
        this.items[i].sellIn--;
      }

      if (this.items[i].sellIn < 0) {
        if (this.items[i].name === AGED_BRIE) {
          if (this.items[i].quality < 50) {
            this.items[i].quality++;
          }
        } else if (this.items[i].name === BACKSTAGE_PASSES) {
          this.items[i].quality = 0;
        } else if (this.items[i].name !== SULFURAS) {
          if (this.items[i].quality > 0) {
            this.items[i].quality--;
          }
        }
      }
    }

    return this.items;
  }
}
