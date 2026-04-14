import { Flower } from '../types';

export const FLOWERS: Flower[] = [
  {
    id: '1',
    slug: 'karanfil',
    name: 'Karanfil',
    scientificName: 'Dianthus caryophyllus',
    description: 'Karanfiller, kenarları tırtıklı yaprakları ve mis gibi kokularıyla çok sevilen çiçeklerdir!',
    emoji: '🌸',
    imageUrl: 'https://lh3.googleusercontent.com/d/1-CILLdeAPejMe2DwW8U9XbCI60R56Cj7',
    videoUrl: 'https://www.youtube.com/embed/1ao54NSSTBo',
    quizQuestions: [
      {
        question: 'Karanfilin yaprakları nasıldır?',
        options: ['Düz ve pürüzsüz', 'Kenarları tırtıklı', 'Dikenli'],
        correctAnswer: 1
      },
      {
        question: 'Karanfiller nasıl kokar?',
        options: ['Kötü kokar', 'Mis gibi ve hoş kokar', 'Hiç kokmaz'],
        correctAnswer: 1
      },
      {
        question: 'Karanfilin bilimsel adı nedir?',
        options: ['Dianthus caryophyllus', 'Rosa', 'Tulipa'],
        correctAnswer: 0
      },
      {
        question: 'Karanfiller genellikle hangi mevsimde açar?',
        options: ['Sadece kışın', 'İlkbahar ve yazın', 'Sadece sonbaharda'],
        correctAnswer: 1
      },
      {
        question: 'Karanfil çiçeği neyi simgeler?',
        options: ['Sevgi ve şefkati', 'Korkuyu', 'Uykuyu'],
        correctAnswer: 0
      },
      {
        question: 'Karanfiller hangi renklerde olabilir?',
        options: ['Sadece siyah', 'Kırmızı, pembe, beyaz ve sarı', 'Sadece yeşil'],
        correctAnswer: 1
      },
      {
        question: 'Karanfil çiçeği ne kadar süre taze kalabilir?',
        options: ['Sadece 1 saat', 'Vazoda uzun süre (1-2 hafta)', 'Sadece 1 gün'],
        correctAnswer: 1
      },
      {
        question: 'Karanfilin ana vatanı neresidir?',
        options: ['Akdeniz bölgesi', 'Kuzey Kutbu', 'Çöller'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '2',
    slug: 'sumbul',
    name: 'Sümbül',
    scientificName: 'Hyacinthus orientalis',
    description: 'Sümbüller baharın müjdecisidir! Çok güçlü ve harika bir kokuları vardır.',
    emoji: '🪻',
    imageUrl: 'https://lh3.googleusercontent.com/d/1vkJTKbcPpuowimmf2NKxNdpAxAu89YQ9',
    videoUrl: 'https://www.youtube.com/embed/ecXYqGxVUSk',
    quizQuestions: [
      {
        question: 'Sümbüller ne zaman açar?',
        options: ['Yazın', 'Kışın', 'Baharda'],
        correctAnswer: 2
      },
      {
        question: 'Sümbülün en belirgin özelliği nedir?',
        options: ['Çok uzun olması', 'Harika kokusu', 'Sadece suda büyümesi'],
        correctAnswer: 1
      },
      {
        question: 'Sümbül hangi bitki grubuna girer?',
        options: ['Soğanlı bitkiler', 'Ağaçlar', 'Sarmaşıklar'],
        correctAnswer: 0
      },
      {
        question: 'Sümbül çiçekleri hangi şekildedir?',
        options: ['Yassı', 'Salkım şeklinde küçük çanlar', 'Tek bir büyük yaprak'],
        correctAnswer: 1
      },
      {
        question: 'Sümbülün bilimsel adı nedir?',
        options: ['Rosa', 'Hyacinthus orientalis', 'Tulipa'],
        correctAnswer: 1
      },
      {
        question: 'Sümbüller evde yetiştirilebilir mi?',
        options: ['Evet, saksıda yetişir', 'Hayır, sadece ormanda yetişir', 'Sadece denizde yetişir'],
        correctAnswer: 0
      },
      {
        question: 'Sümbülün ana vatanı neresidir?',
        options: ['Brezilya', 'Doğu Akdeniz bölgesi', 'Kuzey Kutbu'],
        correctAnswer: 1
      },
      {
        question: 'Sümbül çiçekleri hangi renklerde olabilir?',
        options: ['Sadece yeşil', 'Mavi, pembe, beyaz, mor gibi renkler', 'Sadece siyah'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '3',
    slug: 'zambak',
    name: 'Zambak',
    scientificName: 'Lilium',
    description: 'Zambaklar büyük ve gösterişli çiçeklerdir. Genellikle çok güzel kokarlar.',
    emoji: '⚜️',
    imageUrl: 'https://lh3.googleusercontent.com/d/15e_MlB9e6DmxicD_HtiwnzVj1khgoy8l',
    videoUrl: 'https://www.youtube.com/embed/e1-vDCLoYuA',
    quizQuestions: [
      {
        question: 'Zambaklar nasıldır?',
        options: ['Küçücük', 'Büyük ve gösterişli', 'Dikenli'],
        correctAnswer: 1
      },
      {
        question: 'Zambak çiçeği neyi temsil eder?',
        options: ['Zarafet ve saflığı', 'Hızı', 'Kızgınlığı'],
        correctAnswer: 0
      },
      {
        question: 'Zambaklar genellikle nerede yetişir?',
        options: ['Sadece buzullarda', 'Bahçelerde ve saksılarda', 'Sadece karanlık mağaralarda'],
        correctAnswer: 1
      },
      {
        question: 'Zambakların kokusu nasıldır?',
        options: ['Çok hafif', 'Genellikle çok güçlü ve hoş', 'Kötü kokar'],
        correctAnswer: 1
      },
      {
        question: 'Zambak çiçeğinin yaprakları nasıldır?',
        options: ['İnce ve uzun', 'Yuvarlak ve geniş', 'Dikenli'],
        correctAnswer: 0
      },
      {
        question: 'Zambaklar hangi mevsimde açar?',
        options: ['Sadece kışın', 'Yaz aylarında', 'Sadece sonbaharda'],
        correctAnswer: 1
      },
      {
        question: 'Zambak çiçeği kaç yapraklıdır?',
        options: ['Sadece 1', 'Genellikle 6 yapraklıdır', '100 yapraklıdır'],
        correctAnswer: 1
      },
      {
        question: 'Zambakların boyu ne kadar olabilir?',
        options: ['Sadece 2 cm', '60 cm ile 180 cm arası', '10 metre'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '4',
    slug: 'petunya',
    name: 'Petunya',
    scientificName: 'Petunia × atkinsiana',
    description: 'Petunyalar bahçeleri renklendiren, boru şeklinde çiçekleri olan neşeli bitkilerdir.',
    emoji: '🌺',
    imageUrl: 'https://lh3.googleusercontent.com/d/1M-ae_Iu1h2tYgdW9Qdk_nxN2inTLWh9S',
    videoUrl: 'https://www.youtube.com/embed/-kgnSvC9WXA',
    quizQuestions: [
      {
        question: 'Petunya çiçeğinin şekli nasıldır?',
        options: ['Yıldız gibi', 'Boru veya huni gibi', 'Düz'],
        correctAnswer: 1
      },
      {
        question: 'Petunyalar güneşi sever mi?',
        options: ['Evet, bol güneşi severler', 'Hayır, sadece karanlıkta büyürler', 'Sadece yağmuru severler'],
        correctAnswer: 0
      },
      {
        question: 'Petunyalar hangi mevsimde çiçek açar?',
        options: ['Sadece kışın', 'İlkbahardan sonbahara kadar', 'Sadece bir gün'],
        correctAnswer: 1
      },
      {
        question: 'Petunya çiçeği bakımı kolay mıdır?',
        options: ['Evet, oldukça kolaydır', 'Hayır, dünyanın en zor bitkisidir', 'Bakım gerektirmez'],
        correctAnswer: 0
      },
      {
        question: 'Petunyalar nerede yetiştirilir?',
        options: ['Sadece ormanlarda', 'Balkonlarda ve bahçelerde', 'Sadece su altında'],
        correctAnswer: 1
      },
      {
        question: 'Petunyaların renkleri nasıldır?',
        options: ['Sadece gri', 'Rengarenk ve çok çeşitlidir', 'Sadece kahverengi'],
        correctAnswer: 1
      },
      {
        question: 'Petunyalar soğuğa dayanıklı mıdır?',
        options: ['Evet, karda açar', 'Hayır, ılık havaları severler', 'Sadece buzda yaşarlar'],
        correctAnswer: 1
      },
      {
        question: 'Petunya çiçeği kokar mı?',
        options: ['Bazı türleri çok güzel kokar', 'Asla kokmaz', 'Sadece geceleri kötü kokar'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '5',
    slug: 'nergis',
    name: 'Nergis',
    scientificName: 'Narcissus',
    description: 'Nergisler sarı ve beyaz renkli, trompet şeklindeki çiçekleriyle baharı selamlar.',
    emoji: '🌼',
    imageUrl: 'https://lh3.googleusercontent.com/d/1dAjLm_STwHbOyKdDih5JYubQ3a6CM8KN',
    videoUrl: 'https://www.youtube.com/embed/wiqwYgsUYHQ',
    quizQuestions: [
      {
        question: 'Nergisler genellikle hangi renktedir?',
        options: ['Mavi veya Mor', 'Sarı veya Beyaz', 'Kırmızı veya Turuncu'],
        correctAnswer: 1
      },
      {
        question: 'Nergis çiçeği neyin sembolüdür?',
        options: ['Yeniden doğuş ve baharın', 'Uykunun', 'Kışın'],
        correctAnswer: 0
      },
      {
        question: 'Nergisler ne zaman çiçek açar?',
        options: ['Kış sonunda ve ilkbaharda', 'Sadece yazın', 'Sadece sonbaharda'],
        correctAnswer: 0
      },
      {
        question: 'Nergis çiçeğinin ortasındaki şekil neye benzer?',
        options: ['Bir tabağa', 'Bir trompete veya kadehe', 'Bir yıldıza'],
        correctAnswer: 1
      },
      {
        question: 'Nergisler nasıl bitkilerdir?',
        options: ['Soğanlı bitkilerdir', 'Sarmaşıktır', 'Ağaçtır'],
        correctAnswer: 0
      },
      {
        question: 'Nergis çiçeği kokulu mudur?',
        options: ['Evet, çok hoş bir kokusu vardır', 'Hayır, hiç kokmaz', 'Kötü kokar'],
        correctAnswer: 0
      },
      {
        question: 'Nergisler nerede yetişmeyi sever?',
        options: ['Sadece kumda', 'Nemli ve güneşli yerlerde', 'Sadece karanlıkta'],
        correctAnswer: 1
      },
      {
        question: 'Nergis çiçeğinin bilimsel adı nedir?',
        options: ['Narcissus', 'Rosa', 'Lilium'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '6',
    slug: 'yildiz-cicegi',
    name: 'Yıldız Çiçeği',
    scientificName: 'Dahlia pinnata',
    description: 'Yıldız çiçekleri rengarenk ve kat kat yapraklarıyla bahçelerin yıldızıdır!',
    emoji: '🌻',
    imageUrl: 'https://lh3.googleusercontent.com/d/1AltKx-vneUZF12YmfIErAoRQlV1NXZGU',
    videoUrl: 'https://www.youtube.com/embed/JPuxXfhUgOk',
    quizQuestions: [
      {
        question: 'Yıldız çiçeği ana vatanı neresidir?',
        options: ['Meksika ve Orta Amerika', 'Japonya ve Çin', 'Avrupa'],
        correctAnswer: 0
      },
      {
        question: 'Yıldız çiçeğinin diğer adı nedir?',
        options: ['Gül', 'Dahlia', 'Papatya'],
        correctAnswer: 1
      },
      {
        question: 'Yıldız çiçekleri ne zaman açar?',
        options: ['Yaz sonu ve sonbaharda', 'Sadece kışın', 'Sadece ilkbahar başında'],
        correctAnswer: 0
      },
      {
        question: 'Yıldız çiçeğinin yaprakları nasıldır?',
        options: ['Tek katlı', 'Genellikle kat kat ve çok sayıda', 'Hiç yaprağı yoktur'],
        correctAnswer: 1
      },
      {
        question: 'Yıldız çiçeği ne kadar büyüyebilir?',
        options: ['Sadece 5 cm', 'Türüne göre 30 cm\'den 2 metreye kadar', '10 metreye kadar'],
        correctAnswer: 1
      },
      {
        question: 'Yıldız çiçeği hangi bitki ailesindendir?',
        options: ['Papatyagiller', 'Güliller', 'Çamgiller'],
        correctAnswer: 0
      },
      {
        question: 'Yıldız çiçekleri soğuğa dayanıklı mıdır?',
        options: ['Evet, kar altında büyür', 'Hayır, don olaylarından etkilenir', 'Sadece buzlu suda yaşar'],
        correctAnswer: 1
      },
      {
        question: 'Yıldız çiçeği nasıl çoğaltılır?',
        options: ['Sadece yaprakla', 'Yumru kökleri veya tohumla', 'Sadece suyla'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '7',
    slug: 'aslanagzi',
    name: 'Aslanağzı',
    scientificName: 'Antirrhinum majus',
    description: 'Çiçeği sıktığınızda bir aslanın ağzı gibi açılıp kapandığı için bu ismi almıştır.',
    emoji: '🐲',
    imageUrl: 'https://lh3.googleusercontent.com/d/1tSHzSIR8xnIEW9-7XeXoyT7ovUzm2Xh-',
    videoUrl: 'https://www.youtube.com/embed/z3v6at6curY',
    quizQuestions: [
      {
        question: 'Neden bu çiçeğe Aslanağzı denir?',
        options: ['Aslanları korkuttuğu için', 'Aslan ağzı gibi açılıp kapandığı için', 'Çok hızlı büyüdüğü için'],
        correctAnswer: 1
      },
      {
        question: 'Aslanağzı çiçeğinin bilimsel adı nedir?',
        options: ['Rosa rubiginosa', 'Antirrhinum majus', 'Lilium candidum'],
        correctAnswer: 1
      },
      {
        question: 'Aslanağzı çiçeğini sıktığınızda ne olur?',
        options: ['Solar', 'Ağzı açılıp kapanır', 'Renk değiştirir'],
        correctAnswer: 1
      },
      {
        question: 'Bu çiçek hangi mevsimde daha çok görülür?',
        options: ['Kış', 'Yaz ve Bahar', 'Sadece Sonbahar'],
        correctAnswer: 1
      },
      {
        question: 'Aslanağzı çiçekleri genellikle hangi boydadır?',
        options: ['Yer örtücü', 'Orta ve uzun boylu', 'Dev ağaçlar gibi'],
        correctAnswer: 1
      },
      {
        question: 'Çiçeğin şekli hangi hayvana benzetilir?',
        options: ['Kaplan', 'Aslan', 'Ejderha'],
        correctAnswer: 1
      },
      {
        question: 'Aslanağzı çiçekleri hangi renklerde olabilir?',
        options: ['Sadece beyaz', 'Rengarenk (Sarı, pembe, kırmızı vb.)', 'Sadece yeşil'],
        correctAnswer: 1
      },
      {
        question: 'Bu çiçeği nerede yetiştirebiliriz?',
        options: ['Karanlık odalarda', 'Güneşli bahçelerde', 'Sadece suyun içinde'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '8',
    slug: 'gul',
    name: 'Gül',
    scientificName: 'Rosa',
    description: 'Değişik renkleriyle dikkat çeken, mis kokulu ve dikenli yapıya sahip çok sevilen bir çiçektir.',
    emoji: '🌹',
    imageUrl: 'https://lh3.googleusercontent.com/d/1f2Yd5isYt9vZSx_JGR_Tre5vDpVaYcLk',
    videoUrl: 'https://www.youtube.com/embed/utbYlYE6f8E',
    quizQuestions: [
      {
        question: 'Gülün sapında genellikle ne bulunur?',
        options: ['Sadece yaprak', 'Dikenler', 'Meyve'],
        correctAnswer: 1
      },
      {
        question: 'Güller hangi renklerde olabilir?',
        options: ['Sadece siyah', 'Kırmızı, beyaz, pembe, sarı vb.', 'Sadece mavi'],
        correctAnswer: 1
      },
      {
        question: 'Gül çiçekleri genellikle neyi sembolize eder?',
        options: ['Korkuyu', 'Uyku', 'Sevgi ve güzelliği'],
        correctAnswer: 2
      },
      {
        question: 'Güller güneşi sever mi?',
        options: ['Evet, bol güneşi severler', 'Hayır, karanlığı severler', 'Sadece yağmuru severler'],
        correctAnswer: 0
      },
      {
        question: 'Gülün bilimsel adı nedir?',
        options: ['Rosa', 'Lilium', 'Tulipa'],
        correctAnswer: 0
      },
      {
        question: 'Gül yapraklarından ne yapılabilir?',
        options: ['Sadece boya', 'Gül suyu ve reçel', 'Plastik'],
        correctAnswer: 1
      },
      {
        question: 'Hangi mevsimde güller en coşkulu şekilde açar?',
        options: ['Kışın karlar altında', 'İlkbahar sonu ve yaz aylarında', 'Sadece sonbaharda'],
        correctAnswer: 1
      },
      {
        question: 'Gül bitkisi genellikle nasıl bir yapıya sahiptir?',
        options: ['Dev ağaçtır', 'Çalı tarzı odunsu bitkidir', 'Sulak alan yosunudur'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '9',
    slug: 'menekse',
    name: 'Menekşe',
    scientificName: 'Viola',
    description: 'Kalp şeklindeki yaprakları ve mor tonlarındaki zarif çiçekleriyle bilinen sevimli bir bitkidir.',
    emoji: '💜',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UrXTmr8DNHCsgTrHEyvFXz-BAXQcD6GY',
    videoUrl: 'https://www.youtube.com/embed/TJGWlAA1TCU',
    quizQuestions: [
      {
        question: 'Menekşenin yaprakları genellikle ne şekildedir?',
        options: ['Yıldız şeklinde', 'İnce uzun', 'Kalp şeklinde'],
        correctAnswer: 2
      },
      {
        question: 'Menekşe en çok hangi renkle bilinir?',
        options: ['Mor', 'Yeşil', 'Siyah'],
        correctAnswer: 0
      },
      {
        question: 'Menekşeler nerede yetiştirilmeye daha uygundur?',
        options: ['Direkt yakıcı güneşte', 'Aydınlık ama direkt güneş almayan yerlerde', 'Tamamen karanlıkta'],
        correctAnswer: 1
      },
      {
        question: 'Afrika Menekşesi saksıda evde yetişebilir mi?',
        options: ['Evet, evler için çok uygundur', 'Hayır, sadece ormanda yetişir', 'Sadece suda yaşar'],
        correctAnswer: 0
      },
      {
        question: 'Menekşeler suyu nasıl sever?',
        options: ['Çok fazla sulanmak ister', 'Toprağı kurudukça, yapraklarına su değdirmeden sulanmalıdır', 'Hiç su sevmez'],
        correctAnswer: 1
      },
      {
        question: 'Menekşenin bilimsel adı nedir?',
        options: ['Rosa', 'Viola', 'Lilium'],
        correctAnswer: 1
      },
      {
        question: 'Menekşeler hangi mevsimlerde çiçek açabilir?',
        options: ['Sadece kışın 1 gün', 'Sadece yazın başı', 'İyi bakıldığında yılın büyük bölümünde'],
        correctAnswer: 2
      },
      {
        question: 'Menekşe çiçeği neyi temsil eder?',
        options: ['Kızgınlık', 'Şiddet', 'Sevgi, sadakat ve huzur'],
        correctAnswer: 2
      }
    ]
  }
];
