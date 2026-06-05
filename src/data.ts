import { 
  Identitas, 
  TujuanPembelajaran, 
  QuranVerse, 
  KurmaJenis, 
  SoalPilihanGanda, 
  SoalEssay 
} from "./types";

export const identitasModul: Identitas = {
  judul: "Kurma antara Agama dan Sains Modern",
  mataPelajaran: "Biologi Terintegrasi Nilai Keislaman",
  faseKelas: "Fase F / Kelas XI SMA-MA",
  alokasiWaktu: "4 JP (2 Pertemuan x 2 JP @45 Menit)",
  penyusun: "Tim Guru Biologi & Keagamaan Abad 21",
  sekolah: "Madrasah Aliyah / SMA Unggulan"
};

export const tujuanPembelajaran: TujuanPembelajaran[] = [
  {
    id: "TP-1",
    teks: "Melalui penyelidikan mandiri terbimbing menggunakan E-Modul (C), Peserta Didik SMA Kelas XI (A) dapat menganalisis kandungan nutrisi utama pada kurma (B) dengan tingkat ketepatan minimal 85% berdasarkan data penelitian ilmiah (D).",
    komponen: {
      audience: "Peserta Didik SMA Kelas XI",
      behavior: "Menganalisis kandungan nutrisi utama pada kurma",
      condition: "Penyelidikan mandiri terbimbing menggunakan E-Modul",
      degree: "Tingkat ketepatan minimal 85% berdasarkan data penelitian ilmiah"
    }
  },
  {
    id: "TP-2",
    teks: "Setelah mendiskusikan studi kasus berbasis Problem Based Learning (C), Peserta Didik (A) mampu menghubungkan khasiat medis buah kurma dalam Surah Maryam ayat 25-26 dengan mekanisme fisiologis persalinan (B) secara sistematis dan sesuai dengan literatur kedokteran modern (D).",
    komponen: {
      audience: "Peserta Didik",
      behavior: "Menghubungkan khasiat medis buah kurma dalam Surah Maryam ayat 25-26 dengan mekanisme fisiologis persalinan",
      condition: "Mendiskusikan studi kasus berbasis Problem Based Learning",
      degree: "Secara sistematis dan sesuai dengan literatur kedokteran modern"
    }
  },
  {
    id: "TP-3",
    teks: "Melalui kegiatan kajian pustaka Al-Qur'an dan sains modern (C), Peserta Didik (A) dapat menyusun argumen ilmiah tentang pentingnya berbuka puasa dengan kurma (B) dengan menyertakan minimal 3 bukti metabolisme glukosa cepat secara logis (D).",
    komponen: {
      audience: "Peserta Didik",
      behavior: "Menyusun argumen ilmiah tentang pentingnya berbuka puasa dengan kurma",
      condition: "Kegiatan kajian pustaka Al-Qur'an dan sains modern",
      degree: "Menyertakan minimal 3 bukti metabolisme glukosa cepat secara logis"
    }
  },
  {
    id: "TP-4",
    teks: "Melalui kerja kelompok merancang infografis/poster (C), Peserta Didik (A) dapat mengomunikasikan hasil integrasi sains-keislaman pada fenomena kurma (B) secara kreatif, komunikatif, dan bebas dari plagiasi (D).",
    komponen: {
      audience: "Peserta Didik",
      behavior: "Mengomunikasikan hasil integrasi sains-keislaman pada fenomena kurma",
      condition: "Kerja kelompok merancang infografis/poster",
      degree: "Secara kreatif, komunikatif, dan bebas dari plagiasi"
    }
  }
];

export const quranVerses: QuranVerse[] = [
  {
    surah: "Maryam",
    ayat: "25–26",
    arab: "وَهُزِّيْٓ اِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسٰقِطْ عَلَيْكِ رُطَبًا جَنِيًّا ۖ فَكُلِيْ وَاشْرَبِيْ وَقَرِّيْ عَيْنًا ۖ",
    latin: "Wa huzzī ilaiki bijiż'in-nakhlati tusāqiṭ 'alaiki ruṭaban janiyyā(n). Fakulī wasyribī wa qarrī 'ainā(n).",
    terjemahan: "\"Dan goyanglah pangkal pohon kurma itu ke arahmu, niscaya pohon itu akan menggugurkan buah kurma yang masak kepadamu. Maka makan, minum, dan bersenang hatilah kamu...\"",
    tafsirSingkat: "Ayat ini menceritakan kisah Maryam binti Imran saat melahirkan Nabi Isa a.s. dalam kondisi sendirian, lemah, dan lapar di bawah pohon kurma. Allah Swt. memerintahkannya untuk menguncang pohon kurma yang kering, yang kemudian secara mukjizat menghasilkan buah ruthab (kurma basah segar). Perintah ini memberikan asupan nutrisi instan dan obat penenang alami untuknya pasca melahirkan.",
    korelasiSains: [
      "Ruthab (kurma basah) kaya akan karbohidrat sederhana berupa fruktosa dan glukosa yang langsung diserap tubuh tanpa pencernaan lama, mengembalikan energi Maryam yang terkuras saat kontraksi persalinan.",
      "Zat mirip Oksitosin: Penelitian medis menunjukkan kurma mengandung zat aktif yang mengikat reseptor oksitosin pada otot rahim, memicu kontraksi rahim yang teratur, memperlancar persalinan, serta memperkecil risiko pendarahan pasca-melahirkan.",
      "Kandungan Kalium, Magnesium, dan Serat: Berperan menstabilkan tekanan darah ibu, merelaksasi dinding pembuluh darah, dan mencegah sembelit pasca melahirkan.",
      "Serotonin & Dopamin booster: Membantu Maryam memperoleh ketenangan emosional ('wa qarrī 'ainā') guna menghindari sindrom Baby Blues atau depresi pascapersalinan."
    ]
  },
  {
    surah: "Al-An’am",
    ayat: "99",
    arab: "وَهُوَ الَّذِيْٓ اَنْزَلَ مِنَ السَّمَۤاءِ مَۤاءًۚ فَاَخْرَجْنَا بِهٖ نَبَاتَ كُلِّ شَيْءٍ فَاَخْرَجْنَا مِنْهُ خَضِرًا نُّخْرِجُ مِنْهُ حَبًّا مُّتَرَاكِبًاۚ وَمِنَ النَّخْلِ مِنْ طَلْعِهَا قِنْوَانٌ دَانِيَةٌ وَجَنّٰتٍ مِّنْ اَعْنَابٍ وَالزَّيْتُوْنَ وَالرُّمَّانَ مُشْتَبِهًا وَغَيْرَ مُتَشَابِهٍۗ...",
    latin: "Wa huwal-lażī anzala minas-samā'i mā'an, fa akhrajnā bihī nabāta kulli syai'in fa akhrajnā minhu khaḍiran nukhriju minhu ḥabban mutarākibā(n), wa minan-nakhli min ṭal'ihā qinwānun dāniyatun...",
    terjemahan: "\"Dan Dialah yang menurunkan air dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan, maka Kami keluarkan dari tumbuh-tumbuhan itu tanaman yang menghijau, Kami keluarkan dari tanaman yang menghijau itu butir yang banyak; dan dari pohon kurma, dari mayangnya, mengurai tangkai-tangkai yang menjulai, dan kebun-kebun anggur, dan zaitun dan delima, yang serupa dan yang tidak serupa...\"",
    tafsirSingkat: "Allah Swt. menggambarkan proses fotosintesis dan metamorfosis makhluk hidup nabati melalui peran air hujan. Salah satu tanaman yang paling istimewa yang disebutkan secara mendetail adalah pohon kurma (An-Nakhl) beserta mayangnya yang menghasilkan tandan buah bergelantungan dekat yang mudah dipetik.",
    korelasiSains: [
      "Struktur fotosintesis ('tanaman menghijau' / zat klorofil) yang sangat efisien pada pohon kurma, memungkinkannya bertahan di bawah sinar matahari ekstrem wilayah arid gurun pasir.",
      "Anatomi Mayang dan Tandan: Mayang kurma jantan dan betina mengalami proses penyerbukan (polinasi) yang unik. Secara botani, kurma adalah tumbuhan berumah dua (dioecious), sehingga memerlukan agen penyerbukan (yang dahulu dianjurkan oleh Rasulullah untuk diserbuki secara manual/ta'bir).",
      "Keseimbangan Osmosis: Air hujan yang diserap oleh akar kurma diubah melalui sistem metabolisme tanaman yang sangat rumit menjadi molekul gula tinggi di dalam buahnya, merupakan bukti nyata transformasi kimia organik alami."
    ]
  },
  {
    surah: "An-Nahl",
    ayat: "11",
    arab: "يُنْۢبِتُ لَكُمْ بِهِ الزَّرْعَ وَالزَّيْتُوْنَ وَالنَّخِيْلَ وَالْاَعْنَابَ وَمِنْ كُلِّ الثَّمَرٰتِۗ اِنَّ فِيْ ذٰلِكَ لَاٰيَةً لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
    latin: "Yumbitu lakum bihiz-zar'a waz-zaitūna wan-nakhīla wal-a'nāba wa min kulliś-śamarāt(i), inna fī żālika la'āyatal liqaumiy yatafakkarūn(a).",
    terjemahan: "\"Dengan (air hujan) itu Dia menumbuhkan untuk kamu tanam-tanaman, zaitun, kurma, anggur dan segala macam buah-buahan. Sungguh, pada yang demikian itu benar-benar terdapat tanda (kebesaran Allah) bagi orang yang berpikir.\"",
    tafsirSingkat: "Ayat ini mengajak manusia menggunakan akal pikiran untuk merenungkan rahasia keanekaragaman flora yang tumbuh dari jenis air yang sama namun kaya akan nutrisi dan rasa berbeda. Kurma diposisikan berdampingan dengan komoditas unggul zaitun dan anggur.",
    korelasiSains: [
      "Sistem perakaran kurma yang dalam dan luas (mencapai kedalaman puluhan meter) memungkinkannya menyerap mineral-mineral langka dari dalam tanah gurun kering yang kaya besi, tembaga, belerang, dan selenium.",
      "Dates as a Superfood: Kurma tidak hanya sekadar buah musiman tetapi memiliki keseimbangan nutrisi mikro dan makro lengkap yang unik dibanding buah-buah barat lainnya, menjadikannya penopang ketahanan pangan (food security) masa depan.",
      "Neuroprotective & Antioxidant properties: Kandungan fitokimia polifenol alami di dalamnya mampu melindungi neuron otak dari stres oksidatif, membuktikan keistimewaan buah kurma bagi kesehatan kognitif manusia."
    ]
  }
];

export const jenisKurma: KurmaJenis[] = [
  {
    nama: "Kurma Ajwa",
    karakteristik: "Berwarna hitam pekat, tekstur agak kering namun lembut di dalam, ukurannya sedang, memiliki gurat-gurat putih halus khas di permukaannya.",
    kandunganKhas: "Kadar antioksidan flavonoid paling tinggi di antara kurma lainnya, tinggi selenium, seng, dan zat besi.",
    indeksGlikemik: "Rendah (~45), sangat ramah untuk dikonsumsi.",
    rekomendasi: "Dikenal sebagai 'Kurma Nabi', sangat direkomendasikan untuk detoksifikasi seluler, menangkal radikal bebas, serta menguatkan imunitas tubuh."
  },
  {
    nama: "Kurma Medjool",
    karakteristik: "Ukurannya sangat besar ('Raja Kurma'), berdaging tebal, berserat lembut, basah (moist), berwarna cokelat gelap kemerahan.",
    kandunganKhas: "Kaya akan kalium (potasium), kalsium, tembaga, dan magnesium tinggi.",
    indeksGlikemik: "Rendah hingga sedang (~53), melepaskan energi secara perlahan (slow-release energy).",
    rekomendasi: "Sangat baik dikonsumsi oleh atlet sebelum berlatih, mendukung performa jantung, kontraksi otot yang optimal, dan mengurangi kelelahan fisiologis."
  },
  {
    nama: "Kurma Sukari",
    karakteristik: "Berwarna cokelat keemasan cerah, tekstur sangat renyah (crispy) di luar, basah dan meleleh menyerupai karamel di dalam.",
    kandunganKhas: "Kandungan gula alami berupa fruktosa alami yang mudah larut, kaya zat besi organik penambah hemoglobin darah.",
    indeksGlikemik: "Rendah (~48-50), glukosa plasma meningkat secara stabil.",
    rekomendasi: "Sangat baik untuk mengatasi anemia, memulihkan energi anak-anak pasca sakit, dan alternatif gula sehat bagi pembuat kue/jus."
  },
  {
    nama: "Kurma Deglet Nour",
    karakteristik: "Berwarna kuning kecokelatan semi-transparan (seperti madu), teksturnya agak kenyal dan kering (semi-dry), rasanya ringan dan mirip kacang (nutty).",
    kandunganKhas: "Tinggi serat pangan tidak larut (insoluble fiber) yang memperlancar pencernaan.",
    indeksGlikemik: "Sangat Rendah (~42-44), menjaga kadar insulin tubuh tetap ideal.",
    rekomendasi: "Ideal bagi pelaku diet penurunan berat badan karena memberikan rasa kenyang lebih lama dan mengoptimalkan peristaltik usus besar."
  }
];

export const soalPilihanGanda: SoalPilihanGanda[] = [
  {
    id: 1,
    pertanyaan: "Dalam Surah Maryam ayat 25, Maryam r.a. diperintahkan untuk menggoncang pangkal pohon kurma guna mendapatkan 'ruthab'. Secara medis-fisiologis, mengapa mengonsumsi ruthab pascapersalinan sangat krusial?",
    pilihan: {
      A: "Ruthab kaya akan zat lemak jenuh yang membantu membekukan sisa darah persalinan",
      B: "Sifat ruthab yang dingin dapat meredakan rasa perih luka robekan jalan lahir",
      C: "Kandungan gula sederhana (fruktosa & glukosa) memberikan suplai energi instan mengembalikan tenaga ibu melahirkan tanpa proses cerna berbelit",
      D: "Ruthab mengandung asam amino esensial tinggi yang mampu menjahit kembali sel otot perut yang rusak akibat kehamilan"
    },
    kunci: "C",
    penjelasanSainsDanAgama: "Ruthab (kurma basah segar) kaya karbonhidrat sederhana yang larut dan dapat langsung berdifusi ke pembuluh darah vena porta tanpa membutuhkan penguraian enzimatik panjang. Hal ini menyuplai ATP raksasa instan ke otot miometrium yang kehabisan glikogen selama fase persalinan."
  },
  {
    id: 2,
    pertanyaan: "Senyawa kimia aktif di dalam kurma yang memiliki kemiripan efek fungsional dengan hormon oksitosin dalam rahim bertugas untuk...",
    pilihan: {
      A: "Mempercepat pembentukan ASI di kelenjar lobulus payudara",
      B: "Merangsang reseptor miometrium untuk menghasilkan kontraksi rahim yang teratur dan membantu pengeluaran plasenta",
      C: "Meningkatkan nafsu makan ibu menyusui secara signifikan pada hari pertama",
      D: "Melarutkan lemak perut penyusun plasenta rahim"
    },
    kunci: "B",
    penjelasanSainsDanAgama: "Penelitian ilmiah membuktikan kurma mengandung zat aktif menyerupai hormon oksitosin (oxytocin-like substances). Senyawa ini memicu kontraksi sel-sel otot polos rahim (miometrium), yang mempercepat persalinan normal sekaligus menjepit pembuluh darah terbuka pasca-persalinan guna mencegah pendarahan fatal (postnatal hemorrhage)."
  },
  {
    id: 3,
    pertanyaan: "Surah Al-An'am ayat 99 mengaitkan proses tumbuhnya pohon kurma dengan tanaman menghijau ('khadiran'). Istilah ilmiah modern yang paling tepat untuk menggambarkan zat penghijau ini serta fungsinya pada kurma gundul gurun adalah...",
    pilihan: {
      A: "Klorofil, sebagai pigmen penangkap foton cahaya matahari untuk mengonversi CO2 dan H2O menjadi energi kimia organik berupa glukosa",
      B: "Karotenoid, pigmen penahan air di stomata yang mencegah kurma mengalami dehidrasi kronis",
      C: "Stomata, sel penjaga lubang udara yang menyeimbangkan kadar penguapan dan difusi nitrogen",
      D: "Kutikula lilin, pelapis lilin tipis untuk menangkap kloroplas air gurun"
    },
    kunci: "A",
    penjelasanSainsDanAgama: "Istilah 'tanaman yang menghijau' (khadiran) diartikan klorofil dalam biokimia modern. Kurma merepresentasikan efisiensi klorofil gurun luar biasa, di mana klorofil mengekstrak elektron air dan memfiksasi CO2 menjadi polisakarida tinggi di bawah panas intens, menciptakan ekosistem penyintas."
  },
  {
    id: 4,
    pertanyaan: "Nabi Muhammad saw. bersabda bahwa rumah yang tidak dihuni buah kurma di dalamnya, maka penghuninya akan kelaparan (HR Muslim). Secara gizi sains, mengapa kurma dianggap sebagai buah pertahanan nutrisi luar biasa bagi rumah tangga?",
    pilihan: {
      A: "Satu buah kurma memiliki kalori setara dengan 1 kg nasi putih hangat",
      B: "Kurma memiliki kelembapan tinggi sehingga tidak mudah ditumbuhi jamur meskipun diletakkan di ruang terbuka bertahun-tahun",
      C: "Kurma adalah panganan steril yang tidak mengandung mikroba jahat di kulit luarnya",
      D: "Kandungan zat gizi makro (karbohidrat) terpola seimbang dengan zat gizi mikro (magnesium, kalium, besi, tembaga, vitamin B) dan serat tinggi yang menjaga homeostasis organ"
    },
    kunci: "D",
    penjelasanSainsDanAgama: "Kurma mengandung profil nutrisi makronutrien (karbohidrat pencernaan lambat) serta zat mikro (potasium, zat besi penangkal anemia, serat tak larut untuk peristaltik). Karena kepadatannya yang tinggi, kurma awet disimpan tanpa kulkas lambat basi dan menjadi bahan pertahanan pangan esensial."
  },
  {
    id: 5,
    pertanyaan: "Ketika seseorang berpuasa, kadar gula darah (glukosa darah) menurun drastis sehingga menyebabkan rasa lemas dan pusing. Mengapa mengonsumsi kurma saat berbuka puasa (sebagaimana sunnah Rasulullah saw.) lebih diutamakan secara metabolisme dibanding makan nasi hangat langsung?",
    pilihan: {
      A: "Sebab nasi hangat bersifat asam sedangkan kurma bersifat basa kuat yang dinetralkan lambung",
      B: "Kurma didominasi glukosa-fruktosa sederhana langsung serap dalam 5-15 menit untuk menaikkan kadar gula darah, mengurangi hipoglikemia tanpa memperberat kerja pankreas seketika",
      C: "Makan nasi hangat pasca puasa memicu kerusakan sel eritrosit darah merah akibat ion hangat nasi",
      D: "Kurma memiliki rantai amilopektin raksasa yang langsung dipecah di rongga mulut"
    },
    kunci: "B",
    penjelasanSainsDanAgama: "Ketika perut kosong seharian, tubuh mengalami deplesi glukogen hati. Makanan berkarbohidrat kompleks (seperti nasi putih / adonan terigu) membutuhkan 2-4 jam pencernaan berat, membebani lambung dan pankreas. Gula kurma (monosakarida) meluncur cepat ke sel otak dan hati untuk mengembalikan kesadaran metabolisme dalam hitungan menit."
  },
  {
    id: 6,
    pertanyaan: "Hormon serotonin dan dopamin penting untuk menjaga ketenangan bagi ibu yang baru melahirkan guna menghindari baby blues syndrome. Kandungan mikro mineral apa dalam kurma yang berkooperasi meredakan ketegangan sistem saraf pusat Maryam r.a.?",
    pilihan: {
      A: "Natrium dan Klorida, yang mengikat kadar garam ekstraseluler sel saraf",
      B: "Kalsium saja, yang mengeraskan struktur tulang belikat bayi",
      C: "Magnesium dan Kalium yang merelaksasikan pembuluh darah serta merangsang pematangan neurotransmiter ketenangan di otak",
      D: "Seng dan Silikon, sebagai pembentuk struktur insulin"
    },
    kunci: "C",
    penjelasanSainsDanAgama: "Magnesium adalah relaksan otot alami dan kofaktor untuk konversi triptofan menjadi serotonin (hormon bahagia). Kalium bertindak dalam regulasi potensial aksi saraf dan menurunkan tekanan pembuluh darah yang tegang akibat kontraksi atau kecemasan luar biasa."
  },
  {
    id: 7,
    pertanyaan: "Kurma Ajwa terkenal dengan anti radikal bebas yang kuat dan digunakan sebagai penangkal racun dalam khazanah hadits. Fitokimia spesifik manakah di dalam kurma Ajwa yang bertindak langsung sebagai penjinak radikal bebas berbahaya?",
    pilihan: {
      A: "Keratinogenik asam, pelindung kuku dan rambut dari keracunan arsenik",
      B: "Senyawa Polifenol, Metil-Glikolat, dan Flavonoid yang mendonorkan elektron kepada atom radikal bebas tunggal tak stabil",
      C: "Lipase lipoprotein, yang memecah racun kimia di dinding mukosa lambung",
      D: "Tepung pati halus yang melapisi membran asam klorida lambung"
    },
    kunci: "B",
    penjelasanSainsDanAgama: "Secara fitokimia, kurma Ajwa mengandung metabolit sekunder polifenol tinggi (seperti flavonoid dan asam fenolat). Antioksidan alami ini menangkap spesi oksigen reaktif (ROS) atau radikal bebas dengan mendonorkan hidrogen/elektron, menetralkan toksititas logam berat atau radikal bebas pemicu kanker seluler."
  },
  {
    id: 8,
    pertanyaan: "Jika kita menganalisis sistem penyerbukan bunga kurma, kurma digolongkan ke dalam tanaman 'Dioecious'. Mengapa hal ini berkaitan dengan kisah hadits Rasulullah saw. ketika membiarkan penduduk Madinah tidak menyerbuki kurma?",
    pilihan: {
      A: "Karena dioecious berarti bunga kurma jantan dan betina berada pada pohon yang berbeda, sehingga mutlak membutuhkan polinasi manual (ta'bir) dari manusia agar pembuahan berhasil",
      B: "Sebab dioecious adalah tumbuhan aseksual murni yang tidak membutuhkan serbuk sari sama sekali",
      C: "Pohon kurma dapat berganti jenis kelamin dari betina menjadi jantan saat cuaca gersang tanpa penyerbukan",
      D: "Benih bunga jantan kurma terbang sejauh ribuan kilometer tanpa bantuan angin atau manusia"
    },
    kunci: "A",
    penjelasanSainsDanAgama: "Kurma bersifat dioecious (berumah dua), pohon betina hanya menghasilkan bunga betina dan pohon jantan menghasilkan bunga jantan. Penyerbukan alami gurun oleh angin sangat tidak efisien (menghasilkan buah berkualitas rendah/keras/shiis). Penyerbukan manual (ta'bir) yang dipromosikan masyarakat Madinah merupakan esensi keahlian bioteknologi kuno yang disetujui Rasulullah ('Antum a'lamu bi umuri dunyakum')."
  },
  {
    id: 9,
    pertanyaan: "Indeks Glikemik (IG) kurma berkisar antara 42-53, yang dikategorikan rendah. Mengapa hal ini memberikan keunggulan klinis bagi stabilitas insulin penderita diabetes jika dikonsumsi dalam jumlah wajar?",
    pilihan: {
      A: "Karbohidrat kurma langsung dialihkan menjadi energi murni tanpa melepaskan insulin pankreas sedikit pun",
      B: "Tinggi serat pangan di dalam kurma menunda laju pengosongan jaringan usus dan memperlambat pencampuran enzim, sehingga gula diserap secara bertahap (gradual release)",
      C: "Sebab rasa manis kurma berasal dari bahan aspartam kimia alami yang meniru sukrosa",
      D: "Serat kurma membunuh sel pulau Langerhans pankreas secara perlahan"
    },
    kunci: "B",
    penjelasanSainsDanAgama: "Serat larut (pektin) dan serat tidak larut (selulosa/hemiselulosa) dalam kurma membentuk formasi gel kental di saluran cerna, menghambat absorpsi cepat gula bebas. Karbohidrat kompleks kurma juga diabsorspi secara perlahan, menghasilkan kurva respons glukosa yang landai bagi penderita diabetes dibanding asupan karbo murni."
  },
  {
    id: 10,
    pertanyaan: "Mengapa integrasi antara Agama dan Sains modern dalam kurikulum Abad 21 pada materi buah kurma dianggap penting bagi cara berpikir ilmiah siswa?",
    pilihan: {
      A: "Untuk membuktikan bahwa sains modern selalu inferior dan harus tunduk secara buta pada teologi kuno tanpa penelitian laboratorium",
      B: "Melatih keterampilan berpikir kritis kritis (critical thinking) siswa agar mampu memverifikasi kebenaran empiris wahyu Al-Qur'an, sehingga memperkuat keyakinan spiritual sekaligus rasionalitas sains",
      C: "Memaksa siswa menghafal seluruh istilah Latin tanaman herbal demi kelulusan ujian kualifikasi",
      D: "Menghapuskan fungsi biologi eksakta dari mata pelajaran formal SMA dan madrasah"
    },
    kunci: "B",
    penjelasanSainsDanAgama: "Pembelajaran sains modern terintegrasi nilai keislaman melatih kognisi siswa untuk tidak mendikotomi antara ayat Kauniyah (ciptaan Allah / fenomena alam teramati) dan ayat Qauliyah (firman Allah / teks Al-Qur'an). Keduanya bersumber dari Allah Swt. dan saling melengkapi secara rasional serta spiritual."
  }
];

export const soalEssay: SoalEssay[] = [
  {
    id: 1,
    pertanyaan: "Jelaskan keselarasan biologis-medis dari petunjuk Al-Qur'an dalam QS. Maryam ayat 25-26 terkait mengonsumsi 'ruthab' (kurma basah segar) bagi ibu yang berada dalam proses persalinan maupun pascamelahirkan secara ilmiah!",
    rubrikPanduan: "Siswa harus menjelaskan minimal 3 aspek: (1) Suplai karbohidrat instan berupa monoksakarida (glukosa, fruktosa) yang langsung diserap untuk mengembalikan energi kontraksi uterus. (2) Keberadaan zat aktif menyerupai hormon oksitosin (oxytocin-like effect) yang memperkuat peristaltik kontraksi rahim dan meminimalkan perdarahan pascamelahirkan. (3) Kehadiran kalium, kalsium, dan magnesium yang menenangkan otot dinding pembuluh darah, menyeimbangkan sirkulasi cairan, serta membantu menekan risiko postpartum depression (baby blues)."
  },
  {
    id: 2,
    pertanyaan: "Matahari gurun pasir dikenal berradiasi sangat tinggi, kering, dan minim air. Namun pohon kurma mampu tumbuh subur menghasilkan buah-buahan yang super manis. Hubungkan fenomena ini dengan adaptasi sistem fotosintesis pohon kurma dan tafsir QS. Al-An'am ayat 99 mengenai 'tanaman yang menghijau' (khadiran)!",
    rubrikPanduan: "Siswa harus mengaitkan konsep klorofil ('khadiran' / tanaman menghijau) di QS Al-An'am: 99 dengan proses biokimia fotosintesis. Kurma memiliki daun jenis pelepah yang gempal berlapis kutikula super tebal dengan struktur stomata tersembunyi (cryptic stomata) guna meminimalkan transpirasi ekstrim. Di dalam tanaman menghijau ini, kloroplas berkombinasi dengan suplai air tanah gurun dalam dari sistem akar tunjang luas, mengonversi foton radiasi gurun tinggi menjadi fruktosa melimpah di buah kurma."
  },
  {
    id: 3,
    pertanyaan: "Mengapa secara metabolisme cairan dan tingkat glukosa tubuh, berbuka puasa dengan minimal 3 butir buah kurma (sesuai sunnah Rasulullah saw.) jauh lebih aman secara medis dan menyegarkan sistem homeostasis tubuh dibandingkan langsung meminum sirup manis atau es campur?",
    rubrikPanduan: "Siswa harus membandingkan kandungan kurma dan minuman manis biasa: (1) Es sirup manis sarat sukrosa / sirup jagung fruktosa tinggi (HFCS) murni langsung memicu lonjakan glukosa darah (spike) ekstrim yang meletupkan insulin pankreas, melemahkan tubuh kembali, dan merusak sensitivitas sel. (2) Kurma memiliki serat pektin tinggi yang memperlambat penyerapan monosakaridanya (indeks glikemik rendah-sedang), menjaga kurva glikemik tetap landai. (3) Kurma memiliki mineral kalium melimpah yang mengembalikan keseimbangan elektrolit intraseluler pasca dehidrasi seharian."
  },
  {
    id: 4,
    pertanyaan: "Kurma Ajwa dikenal memiliki khasiat luar biasa anti-racun dan pencegah penyakit berbahaya. Berdasarkan sains fitokimia modern, analisislah kandungan bioaktif apa saja yang terdapat pada kurma Ajwa yang mendasari klaim medis preventif tersebut!",
    rubrikPanduan: "Siswa harus mendeteksi fitokimia aktif kurma Ajwa: Antara lain polifenol pelindung saraf (neuroprotective), flavonoid penangkap radikal bebas, glikosida fenolik, selenium, flavonoid, serta zat besi biologis. Antioksidan ini mendonorkan elektron untuk menjinakkan radikal bebas pemicu stres oksidatif seluler, mencegah lipid peroksidasi di hepar/liver (detoksifikasi racun), serta merangsang modulasi sel natural killer pada imunitas tubuh."
  },
  {
    id: 5,
    pertanyaan: "Analisis isu metodologis: Di era abad ke-21, sebagian kalangan membedakan atau membenturkan antara sains empiris (eksakta) dengan keyakinan agama (teologi). Bagaimana modul integratif sains-Islam tentang fenomena kurma ini mengubah paradigma dikotomis tersebut menjadi pandangan holistik terpadu bagi seorang calon saintis muslim?",
    rubrikPanduan: "Siswa diharapkan menuangkan penalaran filosofis: Bahwa ayat Qauliyah (teks wahyu Al-Qur'an dan Sunnah yang mulia) dan ayat Kauniyah (alam semesta dengan segala mekanismenya yang dipelajari fisika, biokimia, ekologi) memiliki hulu penciptaan tunggal: Allah Swt. Deskripsi kurma sebagai mukjizat herba dalam Al-Qur'an bersesuaian dengan temuan lab kedokteran modern. Hal ini membantu calon saintis muslim melatih cara berpikir bahwa sains empiris adalah alat metodis untuk menelusuri keagungan sunnatullah, menghilangkan kesenjangan sekuler demi spiritualitas yang rasional."
  }
];
