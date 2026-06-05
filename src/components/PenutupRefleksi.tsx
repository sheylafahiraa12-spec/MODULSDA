import React, { useState } from "react";
import { RefleksiSiswa, PblGroup } from "../types";
import { Sparkles, Trophy, Star, Printer, ClipboardCheck, ArrowUpRight, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PenutupRefleksiProps {
  groupState: PblGroup;
  refleksiState: RefleksiSiswa;
  setRefleksiState: React.Dispatch<React.SetStateAction<RefleksiSiswa>>;
}

export default function PenutupRefleksi({ groupState, refleksiState, setRefleksiState }: PenutupRefleksiProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [hoverStar, setHoverStar] = useState<number>(0);

  const handleTextChange = (field: keyof Omit<RefleksiSiswa, "bintangModul">, value: string) => {
    setRefleksiState(prev => ({ ...prev, [field]: value }));
  };

  const handleStarClick = (num: number) => {
    setRefleksiState(prev => ({ ...prev, bintangModul: num }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refleksiState.pemahamanBaru.trim()) {
      alert("Silakan ketik pemahaman baru yang Anda peroleh terlebih dahulu!");
      return;
    }
    setSubmitted(true);
  };

  const printCertificate = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* 10. PENUTUP & REFLEKSI MANDIRI WRONG FORMS */}
      {!submitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-palm-100 bg-white p-6 shadow-sm space-y-6"
        >
          <div className="border-b border-palm-100 pb-4">
            <span className="text-[10px] font-bold text-amber-date-600 bg-amber-date-100 px-2 py-0.5 rounded uppercase">
              Bagian 10
            </span>
            <h3 className="font-serif text-xl font-bold text-palm-950 mt-1">
              Refleksi Penutup Pembelajaran Siswa
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Tuliskan perasaan, perubahan sikap, dan kesadaran spiritual-saintifik setelah merampungkan penjelajahan biologi kurma:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 block leading-relaxed">
                1. Apa pemahaman baru paling berharga yang kelompokmu temukan terkait hubungan sains dan ayat Al-Qur'an pada fenomena buah kurma?
              </label>
              <textarea
                value={refleksiState.pemahamanBaru}
                onChange={e => handleTextChange("pemahamanBaru", e.target.value)}
                placeholder="Tuliskan refleksimu (misal: pentingnya membuktikan sunnah nabi secara medis biologi)..."
                className="w-full text-xs text-gray-850 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-24 leading-relaxed"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 block leading-relaxed">
                2. Bagaimana modul integrasi agama & sains pada materi kurma ini mengubah caramu memandang kekuasaan Allah Swt. dalam menciptakan ekosistem flora padang pasir?
              </label>
              <textarea
                value={refleksiState.perubahanSikap}
                onChange={e => handleTextChange("perubahanSikap", e.target.value)}
                placeholder="Tulis peningkatan rasa takjub / iman terhadap ayat-ayat Kauniyah..."
                className="w-full text-xs text-gray-855 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-20 leading-relaxed"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 block leading-relaxed">
                3. Berdasarkan hikmah QS. Maryam: 26 (&ldquo;Maka makan, minum, dan bersenang hatilah kamu...&rdquo;), bagaimana perasaan syukurmu (psikologis) memiliki ketahanan pangan sehat di rumahmu?
              </label>
              <textarea
                value={refleksiState.rasaSyukur}
                onChange={e => handleTextChange("rasaSyukur", e.target.value)}
                placeholder="Tulis perasaan syukur..."
                className="w-full text-xs text-gray-855 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-20 leading-relaxed"
              />
            </div>

            {/* Star ratings */}
            <div className="pt-2 flex flex-col items-center gap-1.5 rounded-xl border border-dashed border-palm-200 bg-palm-50/30 p-4">
              <span className="text-xs font-bold text-palm-900 uppercase">Seberapa Menarik & Membantu E-Modul Interaktif Ini?</span>
              <div className="flex gap-1.5 text-palm-300">
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => handleStarClick(num)}
                    onMouseEnter={() => setHoverStar(num)}
                    onMouseLeave={() => setHoverStar(0)}
                    className="cursor-pointer transition-all hover:scale-115 shrink-0"
                  >
                    <Star 
                      className={`h-7 w-7 ${
                        num <= (hoverStar || refleksiState.bintangModul)
                          ? "fill-amber-date-500 text-amber-date-500"
                          : "text-gray-300"
                      }`} 
                    />
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-gray-400">Peringkat rating Anda sangat kami harapkan guna menyempurnakan kurikulum digital.</p>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-palm-800 text-white font-bold py-3 text-xs tracking-wider uppercase hover:bg-palm-905 transition-all shadow shadow-palm-900/10 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ClipboardCheck className="h-4.5 w-4.5" /> Kirim Refleksi & Terbitkan Sertifikat Kelulusan!
            </button>
          </form>
        </motion.div>
      ) : (
        /* DYNAMIC HIGH-FIDELITY PRINTABLE CERTIFICATE CARD */
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          {/* Congrats banner */}
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-900 text-xs flex justify-between items-center no-print">
            <div className="space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <Trophy className="h-4.5 w-4.5 text-amber-date-500" />
                Selamat! Kelompok Anda Telah Menyelesaikan E-Modul &ldquo;Kurma, Agama, & Sains Modern&rdquo;!
              </p>
              <p className="text-gray-600 font-light pl-6">
                Refleksi kelompok berhasil disimpan. Sertifikat Kelulusan resmi di bawah ini dapat dicetak langsung menggunakan tombol cetak di samping kanan.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={printCertificate}
                className="flex items-center gap-1.5 rounded-lg bg-palm-850 hover:bg-palm-900 text-white px-3 py-1.5 text-xs font-bold transition-all shadow-xs"
              >
                <Printer className="h-4 w-4" /> Cetak Sertifikat
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="flex items-center gap-1 rounded-lg border border-palm-250 bg-white text-gray-700 px-2.5 py-1.5 text-xs hover:bg-gray-100 transition-colors"
              >
                Edit Refleksi
              </button>
            </div>
          </div>

          {/* Majestic Cert of achievement frame */}
          <div className="relative border-12 border-palm-900 bg-amber-date-50 p-8 shadow-xl md:p-14 text-center space-y-8 max-w-4xl mx-auto rounded-3xl overflow-hidden print-card">
            
            {/* Background watermarks */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-palm-700/5 blur-3xl"></div>
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-amber-date-500/5 blur-3xl"></div>

            {/* Top insignia */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-palm-900 text-amber-date-300 shadow">
                <Trophy className="h-8 w-8" />
                <div className="absolute inset-0 border border-amber-date-200/40 rounded-full scale-108 animate-pulse"></div>
              </div>
              <p className="text-[10px] font-bold text-palm-800 uppercase tracking-widest pt-2">
                E-Certificate of Achievement SMA/MA
              </p>
            </div>

            {/* Cert texts */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-5xl font-black text-palm-900 leading-tight">
                SERTIFIKAT KELULUSAN
              </h2>
              <p className="text-xs text-gray-400 font-mono tracking-wider">NO REGISTRASI: EQ-SAINS-BIOLOGY-{Math.floor(Math.random() * 90000) + 10000}</p>
              
              <div className="w-16 h-1 bg-amber-date-450 mx-auto rounded"></div>
              
              <p className="text-xs md:text-sm text-gray-500 font-serif italic pt-3">
                Dengan penuh rasa bangga dan apresiasi tinggi, modul ini menyatakan bahwa tim kemitran belajar:
              </p>

              {/* Group name highlight */}
              <div className="space-y-1 py-4">
                <h3 className="font-serif text-2xl md:text-3.5xl font-extrabold text-amber-date-800 uppercase">
                  {groupState.namaKelompok || "Siswa Teladan Al-Balad"}
                </h3>
                <p className="text-[11px] md:text-xs text-palm-900 font-semibold max-w-xl mx-auto italic">
                  Anggota Tim: {groupState.anggota.length > 0 ? groupState.anggota.join(", ") : "Siswa-Siswa Berpikir Kritis"}
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-white/60 rounded-xl p-4 border border-palm-100 italic text-[11px] md:text-xs text-gray-650 leading-relaxed font-light">
                &ldquo;Telah tuntas menempuh penelusuran pustaka suci, memecahkan permasalahan biokimia, mendetoksifikasi radikal bebas dalam studi kuis, merancang karya literasi sains, serta memberikan sumbangsih pemikiran integratif yang matang pada modul komprehensif: <strong>Kurma antara Agama dan Sains Modern</strong>.&rdquo;
              </div>
            </div>

            {/* Signatures */}
            <div className="grid grid-cols-2 gap-8 pt-8 max-w-xl mx-auto border-t border-dashed border-palm-150">
              <div className="text-center space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Direktur Akademik Digital</p>
                <div className="h-12 flex items-center justify-center font-serif text-palm-700 italic text-sm font-semibold">Prof. Dr. Ir. KH. Al-Kurm, M.Sc</div>
                <p className="text-[9px] text-gray-400 font-mono border-t border-gray-200 pt-1 w-2/3 mx-auto">NIP. 2026.06.05.01</p>
              </div>

              <div className="text-center space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">AI Teaching Mentor</p>
                <div className="h-12 flex items-center justify-center font-serif text-purple-700 italic text-sm font-semibold">Gemini 3.5 Assistant</div>
                <p className="text-[9px] text-gray-400 font-mono border-t border-gray-200 pt-1 w-2/3 mx-auto">AI Studio Google Cloud</p>
              </div>
            </div>

            {/* Bottom ribbon stamp */}
            <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest pt-4">
              🔬 INTEGRATED BIOLOGY EDUCATION FOR 21ST CENTURY SMA/MA
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
