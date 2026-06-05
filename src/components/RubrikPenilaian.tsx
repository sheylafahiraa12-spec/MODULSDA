import React, { useState } from "react";
import { Award, CheckCircle, ShieldAlert, BookOpen, Star } from "lucide-react";
import { motion } from "motion/react";

export default function RubrikPenilaian() {
  // Attitude checkpoint list
  const [attitudeChecks, setAttitudeChecks] = useState<Record<string, boolean>>({
    jujur_1: false,
    jujur_2: false,
    disiplin_1: false,
    disiplin_2: false,
    tanggung_1: false,
    tanggung_2: false,
    kerjasama_1: false,
    kerjasama_2: false
  });

  // Skills sliders
  const [skillVisual, setSkillVisual] = useState<number>(80);
  const [skillVerbal, setSkillVerbal] = useState<number>(85);
  const [skillDepth, setSkillDepth] = useState<number>(80);

  const toggleAttitude = (id: string) => {
    setAttitudeChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getAttitudeScore = () => {
    const checkedCount = Object.values(attitudeChecks).filter(v => v).length;
    const maxScore = Object.keys(attitudeChecks).length;
    const percentage = Math.round((checkedCount / maxScore) * 100);
    return {
      percentage,
      checkedCount,
      maxScore,
      predikat: percentage >= 85 ? "Sangat Baik (A)" : percentage >= 70 ? "Baik (B)" : percentage >= 55 ? "Cukup Baik (C)" : "Kurang (D)"
    };
  };

  const attitudeScore = getAttitudeScore();
  const calculatedSkillScore = Math.round((skillVisual + skillVerbal + skillDepth) / 3);

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="rounded-2xl border border-palm-100 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-palm-950 flex items-center gap-1.5 border-b border-palm-50 pb-3 mb-2">
          <Award className="h-5.5 w-5.5 text-palm-700" />
          Penilaian Sikap, Pengetahuan, dan Keterampilan
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Dalam modul pembelajaran 21st-century PBL ini, penilaian diukur secara multitaraf (holistik) untuk menjaring seluruh aspek perkembangan diri siswa-siswi sekalian. Selesaikan kalkulator penilaian mandiri (self-assessment) di bawah untuk memantau capaian belajarmu.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* PENILAIAN SIKAP */}
        <div className="rounded-2xl border border-palm-100 bg-white p-6 shadow-sm space-y-4">
          <h4 className="font-serif text-lg font-bold text-palm-900 border-b border-palm-55 pb-2">
            1. Lembar Penilaian Sikap (Self-Checklist)
          </h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-light">
            Klik pernyataan yang menggambarkan perilaku kelompokmu secara jujur selama pengerjaan modul kurma ini:
          </p>

          <div className="space-y-3">
            <div className="rounded-xl bg-palm-50/50 p-3 space-y-2">
              <span className="text-[9px] font-bold text-palm-700 uppercase">Dimensi Jujur & Disiplin</span>
              <label className="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={attitudeChecks.jujur_1}
                  onChange={() => toggleAttitude("jujur_1")}
                  className="mt-0.5 rounded border-gray-300 text-palm-700 focus:ring-palm-550 h-4 w-4"
                />
                <span>Kami menyusun data hasil penyelidikan murni apa adanya tanpa mengarang (manipulasi) hasil jurnal kedokteran.</span>
              </label>

              <label className="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={attitudeChecks.disiplin_1}
                  onChange={() => toggleAttitude("disiplin_1")}
                  className="mt-0.5 rounded border-gray-300 text-palm-700 focus:ring-palm-550 h-4 w-4"
                />
                <span>Kelompok kami membagi tugas secara adil dan mengumpulkan notulensi tepat waktu sesuai tenggat.</span>
              </label>
            </div>

            <div className="rounded-xl bg-palm-50/50 p-3 space-y-2">
              <span className="text-[9px] font-bold text-palm-700 uppercase">Dimensi Tanggung Jawab & Kerjasama</span>
              <label className="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={attitudeChecks.tanggung_1}
                  onChange={() => toggleAttitude("tanggung_1")}
                  className="mt-0.5 rounded border-gray-300 text-palm-700 focus:ring-palm-550 h-4 w-4"
                />
                <span>Setiap anggota menuntaskan pencarian tafsir atau data kandungan gizi sesuai pembagian peran awal.</span>
              </label>

              <label className="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={attitudeChecks.kerjasama_1}
                  onChange={() => toggleAttitude("kerjasama_1")}
                  className="mt-0.5 rounded border-gray-300 text-palm-700 focus:ring-palm-550 h-4 w-4"
                />
                <span>Kami mendengarkan dengan penuh toleransi dan kesantunan saat berdiskusi menentukan kerangka poster.</span>
              </label>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="rounded-xl bg-palm-900 text-white p-4 space-y-2 text-center">
            <span className="text-[10px] text-amber-date-300 uppercase tracking-widest block font-bold">Hasil Penilaian Sikap Mandiri</span>
            <div className="text-2xl font-mono font-bold block">{attitudeScore.percentage}% Skor Sikap</div>
            <p className="text-[11px] text-gray-200">Kategori Predikat: <strong className="text-white">{attitudeScore.predikat}</strong></p>
          </div>
        </div>

        {/* PENILAIAN KETERAMPILAN */}
        <div className="rounded-2xl border border-palm-100 bg-white p-6 shadow-sm space-y-4">
          <h4 className="font-serif text-lg font-bold text-palm-900 border-b border-palm-55 pb-2">
            2. Penilaian Keterampilan Poster & Diskusi (Self-Assessor)
          </h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-light">
            Gunakan slider di bawah untuk menilai estimasi kualitas karya poster infografis dan performa presentasi tim kelompokmu:
          </p>

          <div className="space-y-4 pt-1">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-700">
                <span>🎨 Estetika Visual Desain Poster</span>
                <span className="font-mono font-bold text-palm-800">{skillVisual} / 100</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={skillVisual}
                onChange={e => setVisual(parseInt(e.target.value))}
                className="w-full accent-palm-800 h-1 bg-gray-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-700">
                <span>🎤 Teknik Komunikasi Lisan (Berbicara)</span>
                <span className="font-mono font-bold text-palm-800">{skillVerbal} / 100</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={skillVerbal}
                onChange={e => setVerbal(parseInt(e.target.value))}
                className="w-full accent-palm-800 h-1 bg-gray-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-700">
                <span>📖 Kedalaman Materi Integrasi Agama-Sains</span>
                <span className="font-mono font-bold text-palm-800">{skillDepth} / 100</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={skillDepth}
                onChange={e => setDepth(parseInt(e.target.value))}
                className="w-full accent-palm-800 h-1 bg-gray-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Skill Output calculated */}
          <div className="rounded-xl bg-amber-date-600 text-white p-4 space-y-1 text-center">
            <span className="text-[10px] text-amber-date-100 uppercase tracking-widest block font-bold">Rata-rata Skor Keterampilan</span>
            <div className="text-2xl font-mono font-bold text-white block">{calculatedSkillScore} / 100</div>
            <p className="text-[10px] text-amber-date-50 font-light">Evaluasi berdasar ketepatan data biologi & integrasi keislaman.</p>
          </div>
        </div>
      </div>

      {/* INSTITUTIONAL RUBRIC MATRIX FOR PRESENTATIONS */}
      <div className="rounded-2xl border border-palm-100 bg-white p-6 shadow-sm space-y-4">
        <h4 className="font-serif text-lg font-bold text-palm-950 border-b border-palm-50 pb-2">
          3. Matriks Kriteria Penilaian Rubrik Presentasi (Acuan Guru)
        </h4>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-[11px] text-gray-600 text-left">
            <thead className="bg-palm-800 text-white font-semibold">
              <tr>
                <th className="p-3 border-r border-palm-700">Kriteria Penilaian</th>
                <th className="p-3 border-r border-palm-700">Sangat Baik (Skor 86-100)</th>
                <th className="p-3 border-r border-palm-700">Baik (Skor 71-85)</th>
                <th className="p-3">Cukup Baik (Skor 50-70)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150 font-light">
              <tr className="hover:bg-gray-50/40">
                <td className="p-2.5 font-bold text-gray-750 border-r">Kedalaman Materi Integrasi</td>
                <td className="p-2.5 border-r leading-relaxed">Mampu mengaitkan 3 ayat Al-Qur'an dengan biokimia oksitosin, klorofil dan metabolisme monosakarida secara komprehensif didukung rujukan klinis.</td>
                <td className="p-2.5 border-r leading-relaxed">Menghubungkan ayat Al-Qur'an dengan sains secara tepat, namun kurang menyertakan rujukan literatur klinis pendukung.</td>
                <td className="p-2.5 leading-relaxed">Hanya mencocokkan dalil dan sains secara superfisial tanpa menjabarkan proses fisiologis biokimia seluler.</td>
              </tr>

              <tr className="hover:bg-gray-50/40">
                <td className="p-2.5 font-bold text-gray-750 border-r">Keterampilan Komunikasi Lisan (Verbal)</td>
                <td className="p-2.5 border-r leading-relaxed">Penyampaian lisan lancar, kontak mata kuat, percaya diri, mampu menjawab perdebatan kritis (debat siswa) dengan argumentasi sains logis.</td>
                <td className="p-2.5 border-r leading-relaxed">Penyampaian runtut dan percaya diri, namun agak kaku saat menjawab sanggahan kritis kelompok oposisi.</td>
                <td className="p-2.5 leading-relaxed">Membaca teks slide/poster secara monoton, minim kontak mata, dan kebingungan menjelaskan istilah biologi.</td>
              </tr>

              <tr className="hover:bg-gray-50/40">
                <td className="p-2.5 font-bold text-gray-750 border-r">Estetika Visual Poster</td>
                <td className="p-2.5 border-r leading-relaxed">Layout teratur, dipadukan grafis botanical orisinal, scannable dengan diagram perbandingan kalori-indeks glikemik yang bernilai seni tinggi.</td>
                <td className="p-2.5 border-r leading-relaxed">Grafis poster rapi dan scannable, namun elemen layout masih menjiplak template default tanpa modifikasi.</td>
                <td className="p-2.5 leading-relaxed">Dijejali teks yang sangat rapat tanpa grafis ikon pendukung, terlihat membosankan dan kurang estetis.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Quick helper to mutate inline state safely
  function setVisual(val: number) { setSkillVisual(val); }
  function setVerbal(val: number) { setSkillVerbal(val); }
  function setDepth(val: number) { setSkillDepth(val); }
}
