import React, { useState, useMemo } from "react";
import { Book, Search, X, Star, Check, Sparkles, Filter, Info, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface KamusTerm {
  istilah: string;
  kategori: "Sains" | "Agama" | "Sains & Agama";
  definisi: string;
  konteks: string;
}

export const KAMUS_DATA: KamusTerm[] = [
  {
    istilah: "Oksitosin",
    kategori: "Sains",
    definisi: "Hormon peptida yang diproduksi di hipotalamus dan disekresikan oleh kelenjar hipofisis posterior.",
    konteks: "Berperan memicu kontraksi otot miometrium (rahim) secara pas, mempermudah peluncuran janin, serta memperkecil pendarahan pascamelahirkan. Terkandung zat berkhasiat serupa di dalam buah ruthab kurma segar."
  },
  {
    istilah: "Ayat Kauniyah",
    kategori: "Agama",
    definisi: "Tanda-tanda kebesaran Allah Swt. berupa dinamika alam semesta, makhluk hidup, ekologi, serta proses biologis yang memerlukan pembuktian empiris/eksperimen laboratorium.",
    konteks: "Misalnya struktur seluler tanaman kurma yang kokoh bertahan di gurun gersang, melambangkan keagungan sistem rekayasa penciptaan Allah."
  },
  {
    istilah: "Ayat Qauliyah",
    kategori: "Agama",
    definisi: "Tanda-tanda kebenaran berupa firman Allah Swt. tertulis di kitab mukjizat Al-Qur'an serta panduan hadis luhur Rasulullah saw.",
    konteks: "Misalnya penyebutan perintah mengonsumsi kurma basah oleh Allah Swt. kepada Maryam r.a. pada Surah Maryam ayat 25."
  },
  {
    istilah: "Indeks Glikemik (IG)",
    kategori: "Sains",
    definisi: "Skala penentuan kecepatan laju pemecahan zat karbohidrat dari suatu makanan untuk diubah menjadi glukosa darah segar.",
    konteks: "Kurma memiliki indeks glikemik rendah-sedang (~42-53), sehingga aman bagi stabilitas insulin penderita diabetes jika porsinya dikendalikan."
  },
  {
    istilah: "Ruthab",
    kategori: "Agama",
    definisi: "Kondisi buah kurma basah yang matang segar, sangat berair (moist), lunak, dan dipetik sebelum mengering menjadi kurma kering.",
    konteks: "Mempunyai kandungan gula sederhana gembira (cepat serap) yang memulihkan tenaga persalinan Maryam r.a. secara instan 14 abad silam."
  },
  {
    istilah: "Dioecious (Berumah Dua)",
    kategori: "Sains",
    definisi: "Karakteristik biologis suatu spesies tumbuhan di mana organ jantan (bunga jantan) dan organ betina (bunga betina) terpisah di individu pohon berbeda.",
    konteks: "Memiliki konsekuensi mutlak bahwa kurma memerlukan kawin silang dibantu manusia (polinasi manual) seperti yang dikisahkan pada hadis Madinah."
  },
  {
    istilah: "Monosakarida",
    kategori: "Sains",
    definisi: "Karbohidrat yang paling sederhana (seperti glukosa dan fruktosa) yang tidak dapat dipecah lagi dengan air menjadi gugus lebih kecil.",
    konteks: "Membentuk hampir keseluruhan karbohidrat buah kurma matang, langsung diserap usus dalam waktu singkat tanpa membebani sistem cerna yang lelah."
  },
  {
    istilah: "Plasmolisis & Osmosis",
    kategori: "Sains",
    definisi: "Pergerakan molekul pelarut dari zona encer menuju wilayah pekat melewati selaput semipermeabel (osmosis) atau penyusutan membran plasma (plasmolisis).",
    konteks: "Menjelaskan ketahanan kurma kering (tamar); konsentrasi gula yang sangat pekat menarik air dari bakteri pembusuk secara osmotik, membunuhnya secara alami."
  },
  {
    istilah: "Klorofil / Khadiran",
    kategori: "Sains & Agama",
    definisi: "Zat hijau daun penangkap partikel foton radiasi matahari (klorofil) untuk asimilasi fiksasi CO2 menjadi glukosa kompleks (fotosintesis).",
    konteks: "Termaktub di dalam QS. Al-An'am ayat 99 sebagai istilah agung 'tanaman yang menghijau' (khadiran) yang melahirkan untaian mayang subur."
  },
  {
    istilah: "Tamar",
    kategori: "Agama",
    definisi: "Buah kurma kering berserat pekat yang awet disimpan berbulan-bulan tanpa kehilangan kadar fitokimia unggulnya.",
    konteks: "Rasulullah menganjurkan menyimpan tamar di rumah sebagai cadangan logistik utama agar penghuni rumah terhindar dari kelesuan lapar kronis."
  },
  {
    istilah: "Fitoestrogen",
    kategori: "Sains",
    definisi: "Senyawa organik non-steroid turunan tanaman yang memiliki kemiripan struktur molekul dengan hormon estrogen mamalia.",
    konteks: "Terkandung secara alami pada kurma, berkolaborasi membantu kelenturan uterus serta memodulasi fungsi fisiologis kelenjar mami reproduksi."
  },
  {
    istilah: "Polifenol & Flavonoid",
    kategori: "Sains",
    definisi: "Grup metabolit sekunder tanaman berkhasiat antioksidan raksasa untuk menangkap spesi radikal bebas dengan mendonorkan elektron bebas.",
    konteks: "Sangat tinggi di kurma Ajwa, menjadi asas tumpuan bukti mengapa kurma Ajwa berhasiat memulihkan toksisitas racun patogen atau polutan di hati."
  },
  {
    istilah: "Homeostasis",
    kategori: "Sains",
    definisi: "Mekanisme pengkondisian tubuh secara otomatis (pankreas, hati, kelenjar) untuk menjaga keadaan fisis dan kimiawi darah tetap konstan dan ideal.",
    konteks: "Kurma berbuka menopang homeostasis dengan melepaskan kalium guna meredam lemas saraf dan memasok gula secara bertahap (gradual)."
  },
  {
    istilah: "Ta'bir",
    kategori: "Agama",
    definisi: "Praktik agronomi tradisional Arab berupa penyerbukan silang antar-mayang pohon kurma secara manual menggunakan tangan.",
    konteks: "Tercantum dalam sabda legendaris nabi: 'Kalian lebih menguasai detail duniawi kalian,' memerdekakan ruang riset sains murni tanpa sekat dogma semata."
  },
  {
    istilah: "Sunnatullah",
    kategori: "Agama",
    definisi: "Aturan kodrat ketetapan Allah Swt. yang konsisten di alam semesta, melandasi hukum fisika, siklus kimiawi, dan struktur metabolisme seluler.",
    konteks: "Bagi saintis muslim, meneliti fenomena biologi adalah ibadah menelusuri sunnatullah agar semakin lurus keimanan rohani serta rasionalitas akalnya."
  },
  {
    istilah: "Ulul Albab",
    kategori: "Agama",
    definisi: "Sosok cendekiawan berakal jernih yang memadukan kedalaman berzikir (ingat pencipta) dengan ketajaman berpikir menyelidiki rahasia biologi bumi.",
    konteks: "Merupakan output karakter utama yang hendak dicetak oleh model kurikulum terintegratif sains-agama abad 21."
  },
  {
    istilah: "HOTS (Higher Order Thinking Skills)",
    kategori: "Sains",
    definisi: "Keterampilan mengolah informasi secara kritis melalui aktivitas visualisasi, penalaran analisis, komparasi evaluasi, hingga penyusunan gagasan kreatif.",
    konteks: "Dilatih lewat pengerjaan sintaks pembelajaran PBL dan kuis integrasi multi-disiplin di dalam e-modul kurma ini."
  },
  {
    istilah: "Sinergi Pektin (Serat Larut)",
    kategori: "Sains",
    definisi: "Serat larut air penimbul formasi koloid matriks gel di dinding usus, memperlambat cerna karbohidrat agar tidak timbul sugar spike.",
    konteks: "Melimpah dalam kurma, merupakan alasan mengapa buah kurma tidak memicu lonjakan glukosa ekstrem usai puasa panjang dibanding sirup buatan."
  }
];

export default function KamusIstilah() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>( "");
  const [activeTab, setActiveTab] = useState<"Semua" | "Sains" | "Agama" | "Sains & Agama">("Semua");
  const [selectedTerm, setSelectedTerm] = useState<KamusTerm | null>(null);

  // Filter dictionary terms based on active filter tab and search input query
  const filteredTerms = useMemo(() => {
    return KAMUS_DATA.filter((term) => {
      // 1. Tab filter
      const matchesTab = activeTab === "Semua" || term.kategori === activeTab;
      
      // 2. Search query filter
      const matchesSearch = 
        term.istilah.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definisi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.konteks.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <>
      {/* FLOATING TRIGGER BUTTON (Always visible at screen bottom right viewport, above other things) */}
      <div className="fixed bottom-6 right-6 z-48 no-print">
        <motion.button
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true);
            // Default select the first filtered item or reset selected
            setSelectedTerm(null);
          }}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-palm-750 to-palm-850 text-white px-4.5 py-3 shadow-xl hover:shadow-2xl border-2 border-palm-200 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-palm-600"
          id="btn-trigger-kamus"
        >
          <Book className="h-4.5 w-4.5 animate-bounce" />
          <span className="text-xs font-bold tracking-wide uppercase font-serif">Kamus Istilah</span>
          <span className="flex h-2 w-2 rounded-full bg-amber-date-400 animate-pulse" />
        </motion.button>
      </div>

      {/* DRAWER / SIDEBAR WITH COMPREHENSIVE FLOATING VIEWPORT LAYOUT */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark modal overlay background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-palm-950 z-49 backdrop-blur-3xs"
              id="kamus-overlay"
            />

            {/* Sliding Sidebar Panel from Right Side */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white border-l border-palm-150 z-50 shadow-2xl flex flex-col justify-between overflow-hidden"
              id="kamus-sidebar-panel"
            >
              {/* HEADER CONTAINER */}
              <div className="p-5 border-b border-palm-100 bg-palm-900 text-white relative">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -mr-6 -mt-6 blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🌴</span>
                    <div>
                      <h4 className="font-serif text-sm font-bold tracking-wide uppercase flex items-center gap-1.5">
                        Kamus Istilah Sains & Islam
                      </h4>
                      <p className="text-[10px] text-palm-200 uppercase tracking-widest font-mono font-semibold">
                        Glosarium Interaktif Siswa Abad 21
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Tutup Kamus"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-[11px] text-gray-300 font-sans mt-3 leading-relaxed">
                  Temukan rincian kajian istilah ilmiah biokimia / botani atau pengertian teologis Al-Qur'an secara instan untuk memperkaya telaah tugas Anda.
                </p>
              </div>

              {/* SEARCH & FILTERS SECTION */}
              <div className="p-4 bg-palm-50/50 border-b border-palm-100/50 space-y-3">
                {/* Search text input */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari istilah, klorofil, oksitosin, ayat..."
                    className="w-full text-xs rounded-xl bg-white border border-palm-200 pl-9.5 pr-8.5 py-2.5 outline-none focus:border-palm-600 focus:ring-1 focus:ring-palm-600 transition-all text-gray-800"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>

                {/* Filter Buttons Tabs */}
                <div className="flex gap-1 bg-white p-1 rounded-xl border border-palm-150">
                  {(["Semua", "Sains", "Agama", "Sains & Agama"] as const).map((tab) => {
                    const isSelected = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);
                          setSelectedTerm(null);
                        }}
                        className={`flex-1 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg transition-colors cursor-pointer text-center whitespace-nowrap ${
                          isSelected
                            ? "bg-palm-800 text-white border border-palm-750 shadow-3xs"
                            : "text-gray-500 hover:bg-palm-50"
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TWO DIRECT SECTIONS: UPPER IS THE LIST OF TERMS, LOWER IS DETAILED PANEL */}
              <div className="flex-1 flex flex-col justify-stretch overflow-hidden">
                
                {/* 1. LIST VIEWPORT CONTAINER */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 min-h-[180px]">
                  {filteredTerms.length === 0 ? (
                    <div className="text-center py-12 px-6">
                      <div className="mx-auto h-12 w-12 rounded-full bg-palm-100 flex items-center justify-center text-palm-700 mb-3">
                        <Info className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-bold text-gray-700">Istilah tidak diketemukan</p>
                      <p className="text-[10px] text-gray-400 mt-1">Coba gunakan kata kunci lain atau bersihan filter input Anda.</p>
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setActiveTab("Semua");
                        }}
                        className="mt-3.5 text-[10px] font-bold text-palm-700 underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        Reset Pencarian
                      </button>
                    </div>
                  ) : (
                    filteredTerms.map((term) => {
                      const isSelected = selectedTerm?.istilah === term.istilah;
                      
                      // Kategori color setups
                      let catColor = "text-blue-700 bg-blue-50 border-blue-100";
                      if (term.kategori === "Agama") catColor = "text-emerald-700 bg-emerald-50 border-emerald-100";
                      if (term.kategori === "Sains & Agama") catColor = "text-amber-700 bg-amber-50 border-amber-100";

                      return (
                        <div
                          key={term.istilah}
                          onClick={() => setSelectedTerm(isSelected ? null : term)}
                          className={`rounded-xl border p-3 cursor-pointer text-left transition-all ${
                            isSelected 
                              ? "bg-palm-50/70 border-palm-600 ring-1 ring-palm-600 shadow-xs" 
                              : "bg-white border-palm-150 hover:bg-palm-50/30 hover:border-palm-200"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h5 className="text-xs font-bold font-serif text-palm-950 flex items-center gap-2">
                              <span>{term.istilah}</span>
                              {isSelected && <Star className="h-3 w-3 fill-amber-date-400 text-amber-date-400 shrink-0" />}
                            </h5>
                            <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md border ${catColor}`}>
                              {term.kategori}
                            </span>
                          </div>
                          
                          <p className={`text-[11px] text-gray-500 mt-1 lines-clamp-2 ${isSelected ? "line-clamp-none font-medium" : "line-clamp-1"}`}>
                            {term.definisi}
                          </p>
                          
                          {!isSelected && (
                            <div className="flex justify-end mt-1 text-[9px] font-bold text-palm-700 items-center gap-0.5">
                              <span>Detail</span>
                              <ArrowUpRight className="h-2.5 w-2.5" />
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* 2. PERSISTENT INTEGRATED SPLIT DETAIL SCREEN AT BOTTOM (IF SELECTED) */}
                <AnimatePresence>
                  {selectedTerm && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      className="border-t-2 border-palm-200 bg-amber-date-50/70 backdrop-blur-md p-4 space-y-3.5 shadow-inner"
                    >
                      <div className="flex items-center justify-between border-b border-amber-date-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">🔑</span>
                          <h6 className="text-xs font-black font-serif text-amber-date-900 tracking-tight">
                            Analisis Khazanah: {selectedTerm.istilah}
                          </h6>
                        </div>
                        <button
                          onClick={() => setSelectedTerm(null)}
                          className="h-5 w-5 bg-amber-date-100 hover:bg-amber-date-200 rounded-full flex items-center justify-center text-amber-date-800 transition-colors cursor-pointer"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="space-y-2.5">
                        <div>
                          <p className="text-[10px] font-mono font-bold text-amber-date-600 uppercase tracking-wider">Definisi Akademik •</p>
                          <p className="text-xs text-gray-700 leading-relaxed font-sans">{selectedTerm.definisi}</p>
                        </div>

                        <div>
                          <p className="text-[10px] font-mono font-bold text-palm-700 uppercase tracking-wider">Integrasi dalam E-Modul •</p>
                          <div className="rounded-lg bg-white border border-palm-150 p-2.5 shadow-2xs mt-1 flex gap-2">
                            <Sparkles className="h-4 w-4 text-amber-date-600 shrink-0 mt-0.5" />
                            <p className="text-[11px] text-palm-900 italic leading-relaxed font-medium">
                              "{selectedTerm.konteks}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* FOOTER WIDGET */}
              <div className="p-3 bg-palm-950 text-[9px] font-mono text-palm-300 text-center flex items-center justify-between border-t border-palm-900">
                <span>E-Modul Kurma • Kamus Abad 21</span>
                <span>Kemajuan Berpikir Kritis • Kemenag RI</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
