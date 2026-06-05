import React, { useState } from "react";
import { quranVerses } from "../data";
import { Flame, HelpCircle, BookOpen, Quote, ShieldAlert, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PendahuluanDanQuran() {
  const [activeVerseIndex, setActiveVerseIndex] = useState<number>(0);
  const [selectedBullet, setSelectedBullet] = useState<number | null>(null);

  const activeVerse = quranVerses[activeVerseIndex];

  const pemantikQuestions = [
    {
      topik: "🌙 Rahasia Berbuka",
      pertanyaan: "Mengapa Nabi Muhammad saw. sangat menganjurkan umatnya berbuka dengan kurma basah (ruthab) atau kurma biasa, padahal secara rasa buah gurun ini sangat manis? Apakah ini aman bagi sistem insulin tubuh pasca puasa seharian?"
    },
    {
      topik: "🤰 Keajaiban Persalinan",
      pertanyaan: "Mengapa Maryam binti Imran r.a. diperintahkan memakan kurma masak pasca melahirkan dalam kondisi sendirian dan sangat lemah di gurun pasir? Bagaimana struktur kimia kurma menstimulasi otot rahim dan mengembalikan energi instannya?"
    },
    {
      topik: "🌵 Survivor Gurun Pasir",
      pertanyaan: "Bagaimana sebuah pohon di padang pasir yang sangat ekstrem gersang dengan radiasi matahari meluap-luap justru mampu mengolah air asin tipis menjadi nutrisi pemanis berkadar gizi tertinggi di dunia flora?"
    }
  ];

  return (
    <div className="space-y-8">
      {/* 3. PENDAHULUAN */}
      <div className="grid gap-8 md:grid-cols-12">
        {/* Deskripsi Pengantar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-7 rounded-2xl bg-white border border-palm-100 p-6 space-y-4 shadow-sm"
        >
          <h3 className="font-serif text-xl font-bold text-palm-950 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-date-500" />
            Pendahuluan: Kurma dalam Keseharian Kita
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Kurma (<em>Phoenix dactylifera</em>) telah mendampingi sejarah peradaban manusia selama ribuan tahun, khususnya di wilayah Timur Tengah dan Afrika Utara. Di Indonesia, kurma sangat identik dengan bulan Ramadan, sajian lebaran, ataupun oleh-oleh ibadah haji. Kita mengenalnya sebagai pencuci mulut yang sangat manis dan praktis dibawa ke mana-mana.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Namun, pernahtah kita berpikir di balik kesederhanaan sebiji kurma terdapat jembatan luar biasa antara sabda/wahyu teologis agama dengan kebenaran empiris laboratorium biokimia modern? Al-Qur'an dan hadits nabi memberikan tempat super istimewa bagi kurma dibanding buah-buahan barat modern lainnya. Di era pembelajaran abad 21, kita diajak menyelidiki secara mendalam dan kritis: <strong>apakah sains membuktikan klaim-klaim suci tersebut?</strong>
          </p>

          <div className="rounded-xl bg-palm-50 p-4 border border-palm-100/70">
            <h4 className="text-xs font-bold text-palm-900 mb-1 flex items-center gap-1.5">
              <Quote className="h-4.5 w-4.5 text-palm-600 shrink-0" />
              Sains & Agama: Satu Sumber Kebenaran
            </h4>
            <p className="text-xs text-palm-800 leading-relaxed leading-relaxed">
              Agama menuntun kita lewat wahyu (ayat Qauliyah), sedangkan sains modern membukakan rahasia proses biokimia penciptaan (ayat Kauniyah). Integrasi keduanya melatih literasi sains sekaligus menguatkan iman spiritual dalam melahirkan generasi saintis muslim yang tangguh.
            </p>
          </div>
        </motion.div>

        {/* Pertanyaan Pemantik */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-5 rounded-2xl bg-radial from-amber-date-900 to-amber-date-950 text-white p-6 space-y-4 shadow-md relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 text-amber-date-600/10 -mr-12 -mt-12">
            <HelpCircle className="h-48 w-48" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-date-500/20 px-2 my-0.5 py-0.5 text-[10px] font-bold text-amber-date-200 uppercase">
              💡 Brainstorming
            </div>
            <h3 className="font-serif text-lg font-bold">Pertanyaan Pemantik</h3>
            <p className="text-xs text-amber-date-100 leading-relaxed">
              Gunakan pertanyaan-pertanyaan ini untuk memicu rasa ingin tahu (curiosity) sebelum kita memulai penyelidikan mendalam:
            </p>

            <div className="space-y-3 pt-1">
              {pemantikQuestions.map((q, idx) => (
                <div key={idx} className="rounded-lg bg-white/5 border border-white/10 p-2.5 hover:bg-white/10 transition-all text-xs">
                  <span className="font-bold text-amber-date-300 block mb-0.5">{q.topik}</span>
                  <p className="text-gray-200 leading-relaxed font-light">{q.pertanyaan}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. INTEGRASI AYAT AL-QUR'AN */}
      <div className="rounded-2xl border border-palm-150 bg-white p-6 shadow-sm space-y-6">
        <div className="border-b border-palm-100 pb-4">
          <h3 className="font-serif text-xl font-bold text-palm-950 flex items-center gap-2">
            <BookOpen className="h-5.5 w-5.5 text-palm-700" />
            Integrasi Ayat Al-Qur’an tentang Kurma
          </h3>
          <p className="text-xs text-gray-500">
            Berikut adalah firman Allah Swt. yang menyebutkan kurma secara spesifik. Klik tab untuk mempelajari teks, terjemahan, tafsir, dan relasi sainsnya.
          </p>
        </div>

        {/* Verse Tab selectors */}
        <div className="flex flex-wrap gap-2">
          {quranVerses.map((v, idx) => (
            <button
              key={v.surah}
              onClick={() => {
                setActiveVerseIndex(idx);
                setSelectedBullet(null);
              }}
              className={`rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                activeVerseIndex === idx
                  ? "bg-palm-850 text-white shadow-md shadow-palm-900/10"
                  : "bg-palm-50 text-palm-800 hover:bg-palm-100"
              }`}
            >
              Surah {v.surah} Ayat {v.ayat}
            </button>
          ))}
        </div>

        {/* Quran Display Board */}
        <div className="grid gap-6 lg:grid-cols-12 bg-palm-50/40 rounded-xl p-5 border border-palm-100">
          
          {/* Saffron Arabic Card */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white border border-palm-100 px-3 py-1 rounded-md">
                <span className="text-xs font-bold text-palm-700 uppercase">Qur'an Board</span>
                <span className="text-xs font-mono text-gray-400">QS. {activeVerse.surah}: {activeVerse.ayat}</span>
              </div>
              
              <div className="rounded-xl bg-white border border-palm-100 p-5 text-right space-y-4">
                <p className="font-serif text-xl leading-loose text-palm-950 md:text-2xl font-semibold select-all">
                  {activeVerse.arab}
                </p>
              </div>

              <div className="rounded-xl bg-white/70 border border-palm-100/50 p-4 space-y-3">
                <p className="text-[11px] font-mono text-gray-500 leading-relaxed italic">
                  <strong>Latin:</strong> &ldquo;{activeVerse.latin}&rdquo;
                </p>
                <div className="border-t border-dashed border-palm-100/60 pt-2 text-xs text-gray-700 leading-relaxed leading-relaxed font-serif">
                  <span className="font-bold text-palm-800">Terjemahan:</span> {activeVerse.terjemahan}
                </div>
              </div>
            </div>

            {/* Tafsir Singkat */}
            <div className="rounded-xl bg-amber-date-50 border border-amber-date-100 p-4">
              <span className="text-[10px] font-bold text-amber-date-800 bg-amber-date-150 px-2 py-0.5 rounded uppercase">
                Tafsir Singkat & Konteks
              </span>
              <p className="mt-1.5 text-xs text-amber-date-900 leading-relaxed">
                {activeVerse.tafsirSingkat}
              </p>
            </div>
          </div>

          {/* Scientific Correlation Decoder */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-1.5 bg-white border border-palm-100 px-3 py-1 rounded-md w-fit">
              <span className="text-xs font-bold text-emerald-700 uppercase">🔬 Jurnal Biologi & Fisiologi</span>
            </div>

            <div className="bg-white rounded-xl border border-palm-150 p-4 space-y-3.5 shadow-2xs">
              <h4 className="text-sm font-bold text-palm-950 flex items-center gap-1">
                Korelasi Sains Modern Terverifikasi
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Para peneliti botani dan ginekolog menemukan fakta menarik yang selaras dengan ayat di samping. Klik baris sains di bawah untuk penjelasannya:
              </p>

              <div className="space-y-2.5">
                {activeVerse.korelasiSains.map((bullet, idx) => {
                  const title = bullet.split(":")[0];
                  const detail = bullet.split(":")[1] || bullet;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setSelectedBullet(selectedBullet === idx ? null : idx)}
                      className={`group border rounded-lg p-3 cursor-pointer transition-all ${
                        selectedBullet === idx 
                          ? "bg-palm-800 border-palm-800 text-white shadow-sm" 
                          : "bg-palm-50/50 border-palm-100 hover:bg-palm-100/65"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[12px] font-bold ${selectedBullet === idx ? "text-amber-date-200" : "text-palm-900 group-hover:text-palm-700"}`}>
                          📌 {title}
                        </span>
                        <span className="text-[10px] font-mono opacity-60">
                          {selectedBullet === idx ? "Tutup" : "Baca Detail"}
                        </span>
                      </div>
                      
                      <AnimatePresence>
                        {selectedBullet === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-1 text-xs leading-relaxed font-light text-white/90"
                          >
                            <p className="pt-2 pl-4 border-l border-amber-date-200">
                              {detail.trim() ? detail.trim() : title}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
