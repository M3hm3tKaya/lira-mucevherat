export interface Product {
  id: string;
  name: string;
  description: string;
  material: string;
  price: string;
}

export interface Collection {
  slug: string;
  name: string;
  slogan: string;
  description: string;
  longDescription: string;
  products: Product[];
}

export const collections: Collection[] = [
  {
    slug: "eternite",
    name: "Eternite",
    slogan: "Sonsuzlugu Tasiyorsunuz",
    description:
      "Zamanin otesinde, nesiller boyu aktarilan efsanevi parcalar. Her bir tasim, ezelilik vaadini tasir.",
    longDescription:
      "Eternite koleksiyonu, Lira Mucevherat'in en prestijli serisini olusturur. 18 ve 24 ayar altin uzerine, el secimi pirlantalar ve degerli taslarla bezenmis her parca, usta zanaatkarimizin yuzlerce saatlik titiz calismasinin urunu. Bu koleksiyondaki her mucevher, kusaklar boyu aktarilmak uzere tasarlanmistir.",
    products: [
      {
        id: "e1",
        name: "Eternite Solitaire Yuzuk",
        description: "24 ayar altin, 1.5 karat pirlanta solitaire",
        material: "24 Ayar Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "e2",
        name: "Eternite Riviere Kolye",
        description: "18 ayar beyaz altin, 36 pirlanta tennis kolye",
        material: "18 Ayar Beyaz Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "e3",
        name: "Eternite Halo Kupe",
        description: "18 ayar altin, merkez pirlanta etrafinda halo dizayn",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "e4",
        name: "Eternite Bangle Bilezik",
        description: "22 ayar altin, el oyma motifli bangle",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "e5",
        name: "Eternite Pave Band",
        description: "18 ayar rose altin, tam tur pirlanta pave yuzuk",
        material: "18 Ayar Rose Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "e6",
        name: "Eternite Pendant Kolye",
        description: "24 ayar altin, damla formunda pirlanta sarkitli",
        material: "24 Ayar Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
    ],
  },
  {
    slug: "bizantion",
    name: "Bizantion",
    slogan: "Imparatorlugun Mirasi",
    description:
      "Bizans ustalarinin bin yillik gelenegini modern cizgilerle yeniden yorumluyoruz.",
    longDescription:
      "Bizantion koleksiyonu, Istanbul'un kadim Bizans mirasini modern mucevher sanatina tasir. Geleneksel Bizans orgu teknikleri, filigran iscilik ve ikonografik motifler, cagdas tasarim anlayisiyla harmanlanmistir. Her parca, imparatorluk saraylarinin ihtisami ile Nisantasi'nin zarafetini bir araya getirir.",
    products: [
      {
        id: "b1",
        name: "Bizantion Orgu Bilezik",
        description: "22 ayar altin, geleneksel Bizans orgu teknigi",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "b2",
        name: "Bizantion Cross Kolye",
        description: "18 ayar altin, Bizans hac motifli kolye",
        material: "18 Ayar Altin & Yakut",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "b3",
        name: "Bizantion Filigran Kupe",
        description: "22 ayar altin, el yapimi filigran kupe",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "b4",
        name: "Bizantion Coin Yuzuk",
        description: "18 ayar altin, antik sikke motifli yuzuk",
        material: "18 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "b5",
        name: "Bizantion Mozaik Set",
        description: "18 ayar altin, renkli mine islemeli set",
        material: "18 Ayar Altin & Mine",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "b6",
        name: "Bizantion Imperial Tiara",
        description: "22 ayar altin, pirlanta ve yakut bezeli tac",
        material: "22 Ayar Altin, Pirlanta & Yakut",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "b7",
        name: "Bizantion Chain Kolye",
        description: "22 ayar altin, kat kat zincir kolye",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "b8",
        name: "Bizantion Dome Yuzuk",
        description: "18 ayar altin, kubbe formunda filigran yuzuk",
        material: "18 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
    ],
  },
  {
    slug: "moderna",
    name: "Moderna",
    slogan: "Bugunu Yasamak",
    description:
      "Minimalist cizgiler, cesur formlar. Cagdas kadinin ifade birligi.",
    longDescription:
      "Moderna koleksiyonu, geleneksel kuyumculuk sanatini cagdas tasarim felsefesiyle bulusturur. Minimalist geometrik formlar, saf cizgiler ve inovatif malzeme kombinasyonlariyla, modern yasamin zarafetini yansitir. Her parca, gunluk luksun tanimini yeniden yapar.",
    products: [
      {
        id: "m1",
        name: "Moderna Geo Yuzuk",
        description: "18 ayar altin, geometrik kesim pirlantali yuzuk",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "m2",
        name: "Moderna Arc Kolye",
        description: "18 ayar rose altin, yarim ay formunda kolye",
        material: "18 Ayar Rose Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "m3",
        name: "Moderna Line Kupe",
        description: "18 ayar beyaz altin, uzun cizgisel kupe",
        material: "18 Ayar Beyaz Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "m4",
        name: "Moderna Twist Bilezik",
        description: "18 ayar altin, burgulu modern bilezik",
        material: "18 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "m5",
        name: "Moderna Stack Set",
        description: "18 ayar karisik altin, 5'li yuzuk seti",
        material: "18 Ayar Altin, Rose Altin & Beyaz Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "m6",
        name: "Moderna Sphere Kupe",
        description: "18 ayar altin, kure formunda minimal kupe",
        material: "18 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
    ],
  },
  {
    slug: "heritage",
    name: "Heritage",
    slogan: "Gecmisin Isigi",
    description:
      "Anadolu medeniyetlerinden esinlenen, zamansiz parcalar.",
    longDescription:
      "Heritage koleksiyonu, Anadolu'nun binlerce yillik mucevher geleneginden ilham alir. Hitit, Frigya, Lidya ve Selcuklu motiflerinin modern yorumlari, usta ellerle sekillenir. Her parca, bu topraklarin zengin kulturel mirasina bir saygi durusudur.",
    products: [
      {
        id: "h1",
        name: "Heritage Hitit Gunes Kolye",
        description: "22 ayar altin, Hitit gunes diski motifli",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "h2",
        name: "Heritage Selcuklu Yuzuk",
        description: "18 ayar altin, Selcuklu yildizi motifli",
        material: "18 Ayar Altin & Turkuaz",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "h3",
        name: "Heritage Lidya Kupe",
        description: "22 ayar altin, antik Lidya sikkesi formunda",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "h4",
        name: "Heritage Frigya Bilezik",
        description: "18 ayar altin, Frigya kemer tokasi motifli",
        material: "18 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "h5",
        name: "Heritage Anadolu Set",
        description: "22 ayar altin, kolye-kupe-yuzuk set",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "h6",
        name: "Heritage Osmani Brooch",
        description: "18 ayar altin, Osmanli tugra motifli bros",
        material: "18 Ayar Altin, Pirlanta & Zumrut",
        price: "Fiyat icin iletisime gecin",
      },
    ],
  },
  {
    slug: "nisan",
    name: "Nisan",
    slogan: "Sonsuza Dek Evet",
    description:
      "Hayatinizin en onemli anina layik, tek ve benzersiz yuzukler.",
    longDescription:
      "Nisan koleksiyonu, hayatinizdaki en buyuk karari taclayan esiz parcalardan olusur. Her solitaire yuzuk, GIA sertifikali pirlantalarla ve ozenle secilmis degerli taslarla, benzersiz bir sekilde tasarlanir. Atölyemizde el yapimi olarak uretilen her parca, sonsuza dek surecek bir askin semboludur.",
    products: [
      {
        id: "n1",
        name: "Nisan Classic Solitaire",
        description: "Platin, 2 karat GIA sertifikali pirlanta",
        material: "Platin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "n2",
        name: "Nisan Halo Yuzuk",
        description: "18 ayar beyaz altin, halo pirlanta dizayn",
        material: "18 Ayar Beyaz Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "n3",
        name: "Nisan Three Stone",
        description: "Platin, uc tasli pirlanta yuzuk",
        material: "Platin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "n4",
        name: "Nisan Vintage Yuzuk",
        description: "18 ayar rose altin, vintage kesim pirlanta",
        material: "18 Ayar Rose Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "n5",
        name: "Nisan Emerald Cut",
        description: "Platin, emerald kesim pirlanta solitaire",
        material: "Platin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "n6",
        name: "Nisan Pave Band Set",
        description: "18 ayar altin, nisan ve nikah yuzugu seti",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
    ],
  },
  {
    slug: "atelier",
    name: "Atelier",
    slogan: "Ustanin Eli",
    description:
      "Sinirli sayida, her biri numaralanmis, koleksiyoner parcalar.",
    longDescription:
      "Atelier koleksiyonu, Lira Mucevherat'in en ozel ve sinirli serisidir. Her parca numaralanmis olup, yilda yalnizca 12 adet uretilir. Bas ustamizin birebir ilgisiyle, en nadir malzemeler ve en karmaSik teknikler kullanilarak hayata gecirilir. Bu parcalara sahip olmak, gercek bir koleksiyoner ayricaligi.",
    products: [
      {
        id: "a1",
        name: "Atelier No.1 - Metamorfoz",
        description: "24 ayar altin, ozel tasarim heykelsi kolye",
        material: "24 Ayar Altin & Fancy Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "a2",
        name: "Atelier No.2 - Denge",
        description: "Platin ve altin, asimetrik tasarim yuzuk",
        material: "Platin, 22 Ayar Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "a3",
        name: "Atelier No.3 - Sonsuz",
        description: "18 ayar altin, Mobius seridi formunda bilezik",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "a4",
        name: "Atelier No.4 - Koza",
        description: "22 ayar altin, koza formunda kupe",
        material: "22 Ayar Altin",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "a5",
        name: "Atelier No.5 - Fisiltı",
        description: "Platin, narin zincir uzerinde yalniz pirlanta",
        material: "Platin & Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
      {
        id: "a6",
        name: "Atelier No.6 - Gece",
        description: "18 ayar siyah altin, siyah pirlanta cocktail yuzuk",
        material: "18 Ayar Siyah Altin & Siyah Pirlanta",
        price: "Fiyat icin iletisime gecin",
      },
    ],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return collections.map((c) => c.slug);
}
