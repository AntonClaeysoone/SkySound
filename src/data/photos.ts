// Gecureerde metadata voor de SkySound 2026-foto's (FLIGHT LOG).
// Volgorde = weergavevolgorde: van gouden uur, over take-off, tot diep in de nacht.

export type PhotoCategory = 'night' | 'golden' | 'crew' | 'passengers';

export interface FestivalPhoto {
  file: string;
  src: string;
  category: PhotoCategory;
  alt: string;
  caption?: string;
  portrait?: boolean;
}

export const CATEGORY_LABELS: Record<PhotoCategory, string> = {
  night: 'Night flight',
  golden: 'Golden hour',
  crew: 'Crew',
  passengers: 'Passengers',
};

const modules = import.meta.glob('../public/SkySound2026/web/20260808_Skysound-*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const meta: Array<Omit<FestivalPhoto, 'src'>> = [
  { file: '20260808_Skysound-14.jpg', category: 'golden', alt: 'Overzicht van het festivalterrein met FOOD- en BAR-tenten onder een blauwe hemel', caption: 'TERMINAL OVERVIEW' },
  { file: '20260808_Skysound-26.jpg', category: 'passengers', alt: 'Zes vrienden poseren met drankjes op het terrein' },
  { file: '20260808_Skysound-12.jpg', category: 'crew', alt: 'Dj-duo viert achter de decks terwijl een lijnvliegtuig laag overvliegt', caption: 'TRAFFIC OVERHEAD' },
  { file: '20260808_Skysound-16.jpg', category: 'passengers', alt: 'Vrienden lachen samen met SkySound-bekers in de hand' },
  { file: '20260808_Skysound-13.jpg', category: 'golden', alt: 'Danseres in kleurrijke kimono lacht in het gouden avondlicht' },
  { file: '20260808_Skysound-19.jpg', category: 'golden', alt: 'Pizza in doos met het festivalterrein op de achtergrond', caption: 'CATERING SERVICE' },
  { file: '20260808_Skysound-18.jpg', category: 'golden', alt: 'Bezoekster met waaier en SkySound-polsbandje in de avondzon' },
  { file: '20260808_Skysound-21.jpg', category: 'golden', alt: 'Twee vriendinnen lachen in het gouden uur' },
  { file: '20260808_Skysound-27.jpg', category: 'golden', alt: 'Verhoogd VIP-deck met parasols en publiek overdag', caption: 'BUSINESS CLASS' },
  { file: '20260808_Skysound-20.jpg', category: 'passengers', alt: 'Vrienden zitten samen in het gras met festivalbekers' },
  { file: '20260808_Skysound-29.jpg', category: 'golden', alt: 'Bezoekster wijst lachend naar het podium in de avondzon' },
  { file: '20260808_Skysound-15.jpg', category: 'golden', alt: 'Bezoekster met SkySound-beker danst bij zonsondergang' },
  { file: '20260808_Skysound-30.jpg', category: 'golden', alt: 'Danseres met gesloten ogen in de avondgloed' },
  { file: '20260808_Skysound-17.jpg', category: 'crew', alt: 'Dj-duo kijkt vanaf het podium uit over het publiek in de schemering', caption: 'COCKPIT VIEW' },
  { file: '20260808_Skysound-43.jpg', category: 'crew', alt: 'Zicht vanaf het podium over de decks en het publiek, met TIME FOR TAKE-OFF op de booth', caption: 'TIME FOR TAKE-OFF' },
  { file: '20260808_Skysound-24.jpg', category: 'crew', alt: 'Danseressen in witte jurken zwieren over het podium', caption: 'IN-FLIGHT ENTERTAINMENT' },
  { file: '20260808_Skysound-23.jpg', category: 'night', alt: 'Witte lichtstralen kruisen als landingslichten boven de menigte', caption: 'RUNWAY LIGHTS' },
  { file: '20260808_Skysound-31.jpg', category: 'night', alt: 'Wijd zicht op het publiek met gouden lichtbundels en paarse SKYSOUND-doeken', caption: 'NIGHT FLIGHT SKY26' },
  { file: '20260808_Skysound-32.jpg', category: 'crew', alt: 'Mc met microfoon achter de Pioneer-decks in amberkleurige rook' },
  { file: '20260808_Skysound-22.jpg', category: 'night', alt: 'Honingraatlampen schijnen door amberkleurige rook over het publiek', caption: 'CLOUD LAYER' },
  { file: '20260808_Skysound-11.jpg', category: 'night', alt: 'Publiek met rode lichtstaven tijdens een nachtelijke set' },
  { file: '20260808_Skysound-33.jpg', category: 'crew', alt: 'Dj steekt de hand op tussen honingraatlampen en rook', caption: 'CLEARED FOR LANDING' },
  { file: '20260808_Skysound-35.jpg', category: 'passengers', alt: 'Bezoekster juicht met geheven armen in rood en blauw licht', caption: 'TURBULENCE WELCOME', portrait: true },
  { file: '20260808_Skysound-25.jpg', category: 'night', alt: 'Dj met gespreide armen voor een muur van amberkleurig licht', caption: 'CRUISING ALTITUDE' },
  { file: '20260808_Skysound-34.jpg', category: 'night', alt: 'Podium in amberkleurig licht met silhouetten van het publiek' },
  { file: '20260808_Skysound-37.jpg', category: 'passengers', alt: 'Festivalganger op de schouders van een vriend, juichend in de nacht' },
  { file: '20260808_Skysound-36.jpg', category: 'night', alt: 'Publiek juicht voor de rood oplichtende SKYSOUND-letters' },
  { file: '20260808_Skysound-39.jpg', category: 'passengers', alt: 'Verjaardagstaart met kaarsjes wordt uitgeblazen midden in het publiek', caption: 'BIRTHDAY AT 30,000 FT' },
  { file: '20260808_Skysound-40.jpg', category: 'crew', alt: 'Danseres met geheven armen in blauw licht voor het SKYSOUND-doek met vliegtuiglogo' },
  { file: '20260808_Skysound-41.jpg', category: 'crew', alt: 'Danseressen in cabinepersoneel-outfits met vuurfonteinen op het podium', caption: 'CABIN CREW ON DUTY' },
  { file: '20260808_Skysound-42.jpg', category: 'crew', alt: 'Dj wijst naar het publiek terwijl vuurwerk achter hem spuit' },
  { file: '20260808_Skysound-44.jpg', category: 'crew', alt: 'Dj-duo in het rood achter de decks bij nacht', caption: 'CO-PILOTS' },
  { file: '20260808_Skysound-38.jpg', category: 'night', alt: 'Wijd nachtzicht op het podium met warme spots boven de menigte', caption: 'FINAL APPROACH' },
];

// Ontbrekende bestanden worden stilletjes overgeslagen zodat de pagina nooit crasht.
export const festivalPhotos: FestivalPhoto[] = meta.flatMap((m) => {
  const key = Object.keys(modules).find((k) => k.endsWith(m.file));
  return key ? [{ ...m, src: modules[key] }] : [];
});
