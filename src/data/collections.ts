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
    slogan: "Sonsuzluğu Taşıyorsunuz",
    description:
      "Zamanın ötesinde, nesiller boyu aktarılan efsanevi parçalar. Her bir taşım, ezelilik vaadini taşır.",
    longDescription:
      "Eternite koleksiyonu, Lira Mücevherat'in en prestijli serisini oluşturur. 18 ve 24 ayar altın üzerine, el seçimi pırlantalar ve değerli taşlarla bezenmiş her parça, usta zanaatkarımızın yüzlerce saatlik titiz çalışmasının ürünü. Bu koleksiyondaki her mücevher, kuşaklar boyu aktarılmak üzere tasarlanmıştır.",
    products: [
      {
        id: "e1",
        name: "Eternite Solitaire Yuzuk",
        description: "24 ayar altin, 1.5 karat pirlanta solitaire",
        material: "24 Ayar Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "e2",
        name: "Eternite Riviere Kolye",
        description: "18 ayar beyaz altin, 36 pirlanta tennis kolye",
        material: "18 Ayar Beyaz Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "e3",
        name: "Eternite Halo Kupe",
        description: "18 ayar altin, merkez pirlanta etrafinda halo dizayn",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "e4",
        name: "Eternite Bangle Bilezik",
        description: "22 ayar altin, el oyma motifli bangle",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "e5",
        name: "Eternite Pave Band",
        description: "18 ayar rose altin, tam tur pirlanta pave yuzuk",
        material: "18 Ayar Rose Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "e6",
        name: "Eternite Pendant Kolye",
        description: "24 ayar altin, damla formunda pirlanta sarkitli",
        material: "24 Ayar Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
    ],
  },
  {
    slug: "bizantion",
    name: "Bizantion",
    slogan: "İmparatorluğun Mirası",
    description:
      "Bizans ustalarının bin yıllık geleneğini modern çizgilerle yeniden yorumluyoruz.",
    longDescription:
      "Bizantion koleksiyonu, İstanbul'un kadim Bizans mirasını modern mücevher sanatına taşır. Geleneksel Bizans örgü teknikleri, filigran işçilik ve ikonografik motifler, çağdaş tasarım anlayışıyla harmanlanmıştır. Her parca, imparatorluk saraylarının ihtişamı ile Nişantaşı'nın zarafetini bir araya getirir.",
    products: [
      {
        id: "b1",
        name: "Bizantion Orgu Bilezik",
        description: "22 ayar altin, geleneksel Bizans orgu teknigi",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "b2",
        name: "Bizantion Cross Kolye",
        description: "18 ayar altin, Bizans hac motifli kolye",
        material: "18 Ayar Altin & Yakut",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "b3",
        name: "Bizantion Filigran Kupe",
        description: "22 ayar altin, el yapimi filigran kupe",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "b4",
        name: "Bizantion Coin Yuzuk",
        description: "18 ayar altin, antik sikke motifli yuzuk",
        material: "18 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "b5",
        name: "Bizantion Mozaik Set",
        description: "18 ayar altin, renkli mine islemeli set",
        material: "18 Ayar Altin & Mine",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "b6",
        name: "Bizantion Imperial Tiara",
        description: "22 ayar altin, pirlanta ve yakut bezeli tac",
        material: "22 Ayar Altin, Pirlanta & Yakut",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "b7",
        name: "Bizantion Chain Kolye",
        description: "22 ayar altin, kat kat zincir kolye",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "b8",
        name: "Bizantion Dome Yuzuk",
        description: "18 ayar altin, kubbe formunda filigran yuzuk",
        material: "18 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
    ],
  },
  {
    slug: "moderna",
    name: "Moderna",
    slogan: "Bugünü Yaşamak",
    description:
      "Minimalist çizgiler, cesur formlar. Çağdaş kadının ifade birliği.",
    longDescription:
      "Moderna koleksiyonu, geleneksel kuyumculuk sanatını çağdaş tasarım felsefesiyle buluşturur. Minimalist geometrik formlar, saf çizgiler ve inovatif malzeme kombinasyonlarıyla, modern yaşamın zarafetini yansıtır. Her parca, günlük lüksün tanımını yeniden yapar.",
    products: [
      {
        id: "m1",
        name: "Moderna Geo Yuzuk",
        description: "18 ayar altin, geometrik kesim pirlantali yuzuk",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "m2",
        name: "Moderna Arc Kolye",
        description: "18 ayar rose altin, yarim ay formunda kolye",
        material: "18 Ayar Rose Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "m3",
        name: "Moderna Line Kupe",
        description: "18 ayar beyaz altin, uzun cizgisel kupe",
        material: "18 Ayar Beyaz Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "m4",
        name: "Moderna Twist Bilezik",
        description: "18 ayar altin, burgulu modern bilezik",
        material: "18 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "m5",
        name: "Moderna Stack Set",
        description: "18 ayar karisik altin, 5'li yuzuk seti",
        material: "18 Ayar Altin, Rose Altin & Beyaz Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "m6",
        name: "Moderna Sphere Kupe",
        description: "18 ayar altin, kure formunda minimal kupe",
        material: "18 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
    ],
  },
  {
    slug: "heritage",
    name: "Heritage",
    slogan: "Geçmişin Işığı",
    description:
      "Anadolu medeniyetlerinden esinlenen, zamansız parçalar.",
    longDescription:
      "Heritage koleksiyonu, Anadolu'nun binlerce yıllık mücevher geleneğinden ilham alır. Hitit, Frigya, Lidya ve Selçuklu motiflerinin modern yorumları, usta ellerle şekillenir. Her parca, bu toprakların zengin kültürel mirasına bir saygı duruşudur.",
    products: [
      {
        id: "h1",
        name: "Heritage Hitit Gunes Kolye",
        description: "22 ayar altin, Hitit gunes diski motifli",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "h2",
        name: "Heritage Selcuklu Yuzuk",
        description: "18 ayar altin, Selcuklu yildizi motifli",
        material: "18 Ayar Altin & Turkuaz",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "h3",
        name: "Heritage Lidya Kupe",
        description: "22 ayar altin, antik Lidya sikkesi formunda",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "h4",
        name: "Heritage Frigya Bilezik",
        description: "18 ayar altin, Frigya kemer tokasi motifli",
        material: "18 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "h5",
        name: "Heritage Anadolu Set",
        description: "22 ayar altin, kolye-kupe-yuzuk set",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "h6",
        name: "Heritage Osmani Brooch",
        description: "18 ayar altin, Osmanli tugra motifli bros",
        material: "18 Ayar Altin, Pirlanta & Zumrut",
        price: "Fiyat için iletişime geçin",
      },
    ],
  },
  {
    slug: "nisan",
    name: "Nisan",
    slogan: "Sonsuza Dek Evet",
    description:
      "Hayatınızın en önemli anına layık, tek ve benzersiz yüzükler.",
    longDescription:
      "Nisan koleksiyonu, hayatınızdaki en büyük kararı taçlayan eşsiz parçalardan oluşur. Her solitaire yuzuk, GIA sertifikalı pırlantalarla ve özenle seçilmiş değerli taşlarla, benzersiz bir şekilde tasarlanır. Atölyemizde el yapımı olarak üretilen her parça, sonsuza dek sürecek bir aşkın sembolüdür.",
    products: [
      {
        id: "n1",
        name: "Nisan Classic Solitaire",
        description: "Platin, 2 karat GIA sertifikali pirlanta",
        material: "Platin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "n2",
        name: "Nisan Halo Yuzuk",
        description: "18 ayar beyaz altin, halo pirlanta dizayn",
        material: "18 Ayar Beyaz Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "n3",
        name: "Nisan Three Stone",
        description: "Platin, uc tasli pirlanta yuzuk",
        material: "Platin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "n4",
        name: "Nisan Vintage Yuzuk",
        description: "18 ayar rose altin, vintage kesim pirlanta",
        material: "18 Ayar Rose Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "n5",
        name: "Nisan Emerald Cut",
        description: "Platin, emerald kesim pirlanta solitaire",
        material: "Platin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "n6",
        name: "Nisan Pave Band Set",
        description: "18 ayar altin, nisan ve nikah yuzugu seti",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
    ],
  },
  {
    slug: "atelier",
    name: "Atelier",
    slogan: "Ustanın Eli",
    description:
      "Sınırlı sayıda, her biri numaralanmış, koleksiyoner parçalar.",
    longDescription:
      "Atelier koleksiyonu, Lira Mücevherat'in en özel ve sınırlı serisidir. Her parca numaralanmış olup, yılda yalnızca 12 adet üretilir. Baş ustamızın birebir ilgisiyle, en nadir malzemeler ve en karmaşık teknikler kullanılarak hayata geçirilir. Bu parçalara sahip olmak, gerçek bir koleksiyoner ayrıcalığı.",
    products: [
      {
        id: "a1",
        name: "Atelier No.1 - Metamorfoz",
        description: "24 ayar altın, özel tasarım heykelsi kolye",
        material: "24 Ayar Altin & Fancy Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "a2",
        name: "Atelier No.2 - Denge",
        description: "Platin ve altın, asimetrik tasarım yüzük",
        material: "Platin, 22 Ayar Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "a3",
        name: "Atelier No.3 - Sonsuz",
        description: "18 ayar altin, Mobius seridi formunda bilezik",
        material: "18 Ayar Altin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "a4",
        name: "Atelier No.4 - Koza",
        description: "22 ayar altin, koza formunda kupe",
        material: "22 Ayar Altin",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "a5",
        name: "Atelier No.5 - Fisiltı",
        description: "Platin, narin zincir uzerinde yalniz pirlanta",
        material: "Platin & Pirlanta",
        price: "Fiyat için iletişime geçin",
      },
      {
        id: "a6",
        name: "Atelier No.6 - Gece",
        description: "18 ayar siyah altin, siyah pirlanta cocktail yuzuk",
        material: "18 Ayar Siyah Altin & Siyah Pirlanta",
        price: "Fiyat için iletişime geçin",
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
