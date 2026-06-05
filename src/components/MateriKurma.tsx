import React, { useState } from "react";
import { jenisKurma } from "../data";
import { Flame, Brain, Heart, ChevronRight, Activity, Smile, BookOpen, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function MateriKurma() {
  const [activeJenis, setActiveJenis] = useState<string>("Kurma Ajwa");
  const [activeNutrient, setActiveNutrient] = useState<string>("Karbohidrat");

  const currentJenis = jenisKurma.find(j => j.nama === activeJenis) || jenisKurma[0];

  // Nutritional dynamic card database
  const nutrientInfo = [
    {
      nama: "Karbohidrat sederhana",
      kadar: "75g per 100g",
      tipe: "Fruktosa & Glukosa",
      fungsi: "Gula sederhana yang langsung diserap mukosa usus halus menuju sel hepatosit hati guna disintesis menjadi glikogen dalam waktu <15 menit tanpa pemecahan enzimatik amylase yang lama.",
      biologi: "Penyuplai energi kinetik cepat pasca puasa seharian, meloloskan tubuh dari fase hipoglikemia kritis."
    },
    {
      nama: "Kalium / Potasium",
      kadar: "696mg per 100g",
      tipe: "Mineral Elektrolit Penting",
      fungsi: "Menstabilkan potensial aksi membra sel saraf, mengatur sirkulasi cairan intraseluler, mengoptimalkan pompa Na+/K+ ATPase, serta merelaksasikan dinding miokardium jantung.",
      biologi: "Sebagai pemulih dehidrasi seluler yang ekstrem pascapuasa berpantang minum air."
    },
    {
      nama: "Serat Pangan (Fiber)",
      kadar: "8.5g per 100g",
      tipe: "Pektin & Selulosa",
      fungsi: "Membentuk matriks viskos gel kental di dalam usus, melambatkan laju absorpsi karbohidrat pelepasan glikemik bertahap, dan memacu peristaltik usus besar.",
      biologi: "Menjaga kadar HbA1c dan meredakan sembelit usus."
    },
    {
      nama: "Magnesium & Kalsium",
      kadar: "54mg & 64mg",
      tipe: "Mineral Logam Esensial",
      fungsi: "Sebagai kofaktor esensial bagi ratusan metabolisme tubuh, mengatur pembukaan kanal ion kalsium, berkombinasi memperkuat kontraksi miofilamen uterus melahirkan.",
      biologi: "Mendukung neuro-transmisi relaksasi melawan stres."
    },
    {
      nama: "Antioksidan Fenolik",
      kadar: "Sangat Tinggi",
      tipe: "Polifenol, Flavonoid, Karotenoid",
      fungsi: "Zat donor elektron kuat yang menangkap radikal bebas spesi oksigen reaktif jahat (ROS), mencegah mutasi DNA inti sel, serta menghambat inflamasi mediator COX-2.",
      biologi: "Melakukan perlindungan organ ginjal, hepar, dan sistem saraf."
    }
  ];

  const benefits = [
    {
      icon: <Brain className="h-5 w-5 text-purple-600" />,
      judul: "Melindungi Fungsi Otak (Kognisi)",
      analisis: "Kandungan polifenol dan flavonoid tinggi menghambat senyawa inflamasi IL-6 di sel glia otak, menurunkan pembentukan plak amiloid-beta, dan mencegah demensia pada usia senja."
    },
    {
      icon: <Flame className="h-5 w-5 text-red-500" />,
      judul: "Suplai Energi Instan Seluler",
      analisis: "Kecepatan asimilasi glukosa kurma dibanding nasi putih adalah 4x lipat dalam waktu 15 menit pascatubuh mengalami deplesi cadangan gula glikogen selama berpuasa."
    },
    {
      icon: <Heart className="h-5 w-5 text-pink-500" />,
      judul: "Fungsi Kardiovaskular & Raham",
      analisis: "Kombinasi zat oxytocin-like dan kadar kalium masif mengontrol tekanan osmosis darah vena porta, meminimalkan spasme pembuluh arteri jantung, serta mempercepat kelahiran bayi normal."
    },
    {
      icon: <Smile className="h-5 w-5 text-emerald-600" />,
      judul: "Homeostasis Saluran Cerna",
      analisis: "Hadirnya serat pektin larut menjadi makanan utama bakteri probiotik usus (prebiotik), meningkatkan asam lemak rantai pendek (SCFA) yang menyehatkan sel mukosa kolon."
    }
  ];

  const haditsList = [
    {
      ar: "إنَّ فِي العَجْوَةِ شِفَاءً، وَأَنَّهَا تِرْيَاقٌ أَوَّلَ البُكْرَةِ",
      ref: "HR. Muslim no. 2048",
      arti: "\"Sesungguhnya pada kurma Ajwa ada obat penawar, dan ia adalah racun penawar pertama di pagi hari.\"",
      konsep: "Anti-toksin biologis: Polifenol Ajwa mendetoksifikasi sisa metabolisme logam berat di organ hati (liver)."
    },
    {
      ar: "يَا عَائِشَةُ بَيْتٌ لا تَمْرَ فِيهِ جِيَاعٌ أَهْلُهُ",
      ref: "HR. Muslim no. 2046",
      arti: "\"Keluarga yang memiliki kurma di rumahnya tidak akan pernah kelaparan, wahai Aisyah.\"",
      konsep: "Security Food: Kepadatan nutrien dan keawetan buah kurma menjadikannya buffer ketahanan pangan berenergi tinggi."
    },
    {
      ar: "إِذَا أَفْطَرَ أَحَدُكُمْ فَلْيُفْطِرْ عَلَى تَمْرٍ فَإِنَّهُ بَرَكَةٌ",
      ref: "HR. Abu Dawud no. 2355",
      arti: "\"Bila salah seorang di antara kalian berbuka puasa, maka berbukalah dengan kurma, karena kurma mengandung berkah...\"",
      konsep: "Proteksi metabolik pankreas: Mencegah insulin shock setelah kosongnya organ sisa pencernaan makanan berjam-jam."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Botanical Definition & Diversity */}
      <div className="grid gap-8 lg:grid-cols-12">
        
        {/* Cultivar selector */}
        <div className="lg:col-span-4 rounded-2xl bg-white border border-palm-100 p-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-palm-900 border-b border-palm-100 pb-3">
              Kultivar & Ragam Jenis Kurma
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Meskipun berasal dari famili pohon palem yang sama, varietas kurma memiliki struktur kimia, kalori, serat, dan rasio gula yang berbeda. Pilih kultivar di bawah untuk mengeksplorasi:
            </p>

            <div className="space-y-2 pt-1">
              {jenisKurma.map(k => (
                <button
                  key={k.nama}
                  onClick={() => setActiveJenis(k.nama)}
                  className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-left transition-all text-xs font-semibold ${
                    activeJenis === k.nama
                      ? "bg-amber-date-600 text-white shadow-sm"
                      : "bg-palm-50 text-palm-900 hover:bg-palm-100"
                  }`}
                >
                  <span>{k.nama}</span>
                  <ChevronRight className="h-4 w-4 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-palm-50 p-4 border border-palm-150/50">
            <span className="text-[9px] font-bold text-palm-700 bg-palm-150 px-2 py-0.5 rounded uppercase">Info Botani</span>
            <p className="mt-1 text-[11px] text-gray-600 leading-relaxed">
              Pohon Kurma berumah dua (<em>dioecious</em>), memiliki bunga jantan dan betina pada tanaman berbeda. Mengalami polinasi manual yang sudah dilakukan sejak masa pra-Islam dan terus dikaji secara modern.
            </p>
          </div>
        </div>

        {/* Cultivar Detail Display */}
        <div className="lg:col-span-8 rounded-2xl bg-white border border-palm-100 p-6 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-amber-date-600 uppercase tracking-widest block">Deskripsi Detail Kultivar</span>
            <h3 className="font-serif text-2xl font-bold text-palm-950 flex items-center gap-2">
              🌴 {currentJenis.nama}
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-palm-100 bg-palm-50/40 p-4">
              <span className="text-[10px] font-bold text-palm-700 block uppercase">Karakter Fisik / Sensorik</span>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">{currentJenis.karakteristik}</p>
            </div>

            <div className="rounded-xl border border-palm-100 bg-palm-50/40 p-4">
              <span className="text-[10px] font-bold text-palm-700 block uppercase">Eksklusivitas Fitokimia</span>
              <p className="mt-1 text-xs text-gray-700 leading-relaxed font-medium">{currentJenis.kandunganKhas}</p>
            </div>

            <div className="rounded-xl border border-palm-100 bg-palm-50/40 p-4">
              <span className="text-[10px] font-bold text-palm-700 block uppercase">Indeks Glikemik (IG)</span>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="rounded bg-amber-date-100 px-2 py-0.5 font-mono text-xs font-bold text-amber-date-800">
                  {currentJenis.indeksGlikemik}
                </span>
                <span className="text-[10px] text-emerald-700 uppercase font-bold">Kategori Rendah</span>
              </div>
              <p className="mt-1 text-[10px] text-gray-500">Mencegah lonjakan sekresi hormon insulin oleh pankreas.</p>
            </div>

            <div className="rounded-xl border border-palm-100 bg-palm-50/40 p-4">
              <span className="text-[10px] font-bold text-palm-700 block uppercase">Rekomendasi Diet Medis</span>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">{currentJenis.rekomendasi}</p>
            </div>
          </div>

          {/* Interactive comparative micro-chart */}
          <div className="rounded-xl bg-radial from-palm-800 to-palm-900 text-white p-5 shadow-inner">
            <h4 className="text-xs font-bold text-amber-date-300 uppercase mb-3 text-center">
              Matriks Perbandingan Nutrisi: Kurma vs Buah Apel Barat (per 100g)
            </h4>
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between text-[11px] text-gray-200 mb-1">
                  <span>Konsentrasi Energi Metabolisme (Kalori)</span>
                  <span className="font-mono text-amber-date-300 font-bold">Kurma: 282 kkal | Apel: 52 kkal</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-date-500" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-gray-200 mb-1">
                  <span>Kadar Kalium / Potasium (Relaksasi Saraf & Otot)</span>
                  <span className="font-mono text-amber-date-300 font-bold">Kurma: 696 mg | Apel: 107 mg</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-gray-200 mb-1">
                  <span>Serat Pangan Kompleks (Serat Kasar)</span>
                  <span className="font-mono text-amber-date-300 font-bold">Kurma: 8.5 g | Apel: 2.4 g</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Kandungan Nutrisi Explorer */}
      <div className="rounded-2xl border border-palm-100 bg-white p-6 shadow-sm space-y-6">
        <div>
          <h3 className="font-serif text-lg font-bold text-palm-900 border-b border-palm-100 pb-3 flex items-center gap-2">
            <Activity className="h-5 w-5 text-emerald-600" />
            Eksplorasi Kandungan Nutrisi Buah Kurma
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Klik parameter senyawa kimia kurma di bawah ini untuk menyelidiki aktivitas metabolik spesifik yang dipicu di dalam tubuh:
          </p>
        </div>

        {/* Horizontal tabs */}
        <div className="flex flex-wrap gap-2">
          {nutrientInfo.map(n => (
            <button
              key={n.nama}
              onClick={() => setActiveNutrient(n.nama.split(" ")[0])}
              className={`rounded-lg px-3.5 py-2 text-xs font-semibold tracking-wide transition-all ${
                activeNutrient === n.nama.split(" ")[0]
                  ? "bg-palm-900 text-white shadow-xs"
                  : "bg-palm-50 text-palm-800 hover:bg-palm-100"
              }`}
            >
              📊 {n.nama}
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-palm-50 p-5 border border-palm-100/70 grid gap-4 md:grid-cols-3">
          {nutrientInfo.filter(n => n.nama.split(" ")[0] === activeNutrient).map(n => (
            <React.Fragment key={n.nama}>
              <div className="md:col-span-1 border-r border-dashed border-palm-250 pr-4 space-y-2">
                <span className="text-[10px] font-bold text-palm-600 bg-palm-100 px-2 py-0.5 rounded tracking-wider uppercase">Senyawa Utama</span>
                <h4 className="text-sm font-bold text-palm-950">{n.nama}</h4>
                <div className="text-xs font-mono text-gray-600">Kadar: <span className="font-bold text-amber-date-600">{n.kadar}</span></div>
                <div className="text-[11px] text-gray-400 font-medium">Tipe: {n.tipe}</div>
              </div>
              
              <div className="md:col-span-1 px-2 space-y-1">
                <span className="text-[10px] font-bold text-amber-date-700 uppercase">Mekanisme Kerja Biokimia</span>
                <p className="text-xs text-gray-650 leading-relaxed leading-relaxed font-light">{n.fungsi}</p>
              </div>

              <div className="md:col-span-1 pl-4 border-l border-palm-200 space-y-1">
                <span className="text-[10px] font-bold text-emerald-700 uppercase">Dampak Kesehatan Nyata</span>
                <p className="text-xs text-emerald-900 font-semibold leading-relaxed">{n.biologi}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Manfaat Medis Modern */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, idx) => (
          <div key={idx} className="rounded-xl border border-palm-100 bg-white p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-palm-50">
              {b.icon}
            </div>
            <div>
              <h4 className="text-xs font-bold text-palm-950 mb-1">{b.judul}</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed leading-relaxed line-clamp-4">{b.analisis}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Kurma dalam Perspektif Agama & Hubungan Sains-Agama */}
      <div className="grid gap-8 lg:grid-cols-12">
        
        {/* Hadits-Hadits Nabawi */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-palm-100 p-6 shadow-sm space-y-4">
          <h3 className="font-serif text-lg font-bold text-palm-900 border-b border-palm-100 pb-3 flex items-center gap-1.5">
            <BookOpen className="h-5 w-5 text-palm-600" />
            Hadits Khasunah Nabawi tentang Khasiat Kurma
          </h3>

          <div className="space-y-4">
            {haditsList.map((h, idx) => (
              <div key={idx} className="rounded-xl bg-amber-date-50/50 border border-amber-date-100 p-4 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-amber-date-800 bg-amber-date-100 px-2 py-0.5 rounded">Hadits #{idx + 1}</span>
                  <span className="text-[10px] font-mono text-gray-400 font-semibold">{h.ref}</span>
                </div>
                <p className="font-serif text-sm text-right text-palm-950 font-semibold leading-loose leading-loose mb-1" dir="rtl">
                  {h.ar}
                </p>
                <p className="text-xs text-gray-700 italic leading-relaxed leading-relaxed">&ldquo;{h.arti}&rdquo;</p>
                <p className="text-[11px] text-palm-800 bg-palm-100/50 p-2 rounded-lg leading-relaxed">
                  🔬 <strong>Konsep Sains:</strong> {h.konsep}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rekonsiliasi Epistemologi: Sains & Agama */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-palm-900 to-palm-950 text-white p-6 shadow-md flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1 bg-white/15 px-2.5 py-1 rounded text-[10px] font-bold text-amber-date-300 uppercase">
              <Layers className="h-3.5 w-3.5" /> Jurnal Hubungan Episteme
            </div>
            <h3 className="font-serif text-lg font-bold text-amber-date-100">
              Menyatukan Dikotomi: Sains vs Agama
            </h3>
            <p className="text-xs text-gray-200 leading-relaxed font-light">
              Dalam cara pandang sekuler, sering kali sains (empiris-observatif) diposisikan bertentangan dengan dogmatisme agama. Namun pada kasus biokimia kurma, kita menyaksikan integrasi yang sangat harmonis:
            </p>

            <ul className="space-y-2.5 text-xs pt-1">
              <li className="flex items-start gap-2 text-gray-200 leading-relaxed font-light">
                <span className="text-amber-date-400 font-bold mt-0.5">✔</span>
                <span><strong>Ayat Kauniyah & Qauliyah:</strong> Keduanya berasal dari Allah Yang Maha Tahu. Al-Qur'an menuliskan petunjuk, laboratorium kimia membongkar mekanismenya.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-200 leading-relaxed font-light">
                <span className="text-amber-date-400 font-bold mt-0.5">✔</span>
                <span><strong>Pencegahan Dikotomi:</strong> Calon saintis muslim abad 21 diajarkan meneliti alam semesta untuk membuktikan dan mengagumi Sunnatullah yang digariskan wahyu.</span>
              </li>
              <li className="flex items-start gap-2 text-gray-200 leading-relaxed font-light">
                <span className="text-amber-date-400 font-bold mt-0.5">✔</span>
                <span><strong>Intelektualitas Islami:</strong> Menjelmakan keyakinan ketuhanan bukan sekadar doktrin taklid, tetapi kokoh berasaskan fakta empiris yang rasional.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-center">
            <p className="text-[11px] text-amber-date-300 font-semibold">
              &ldquo;Maka nikmat Tuhanmu yang manakah yang kamu dustakan?&rdquo; (QS. Ar-Rahman)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
