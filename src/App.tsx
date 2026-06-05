import React, { useState } from "react";
import { 
  PblGroup, 
  LkpdData, 
  StudentAnswers, 
  RefleksiSiswa 
} from "./types";
import LandingPage from "./components/LandingPage";
import IdentitasDanCapaian from "./components/IdentitasDanCapaian";
import PendahuluanDanQuran from "./components/PendahuluanDanQuran";
import MateriKurma from "./components/MateriKurma";
import PblSintaksWorkspace from "./components/PblSintaksWorkspace";
import LkpdSection from "./components/LkpdSection";
import EvaluasiQuiz from "./components/EvaluasiQuiz";
import RubrikPenilaian from "./components/RubrikPenilaian";
import PenutupRefleksi from "./components/PenutupRefleksi";
import KamusIstilah from "./components/KamusIstilah";
import { BookOpen, Award, CheckSquare, Compass, ClipboardList, PenTool, HelpCircle, Sparkles, ArrowLeft, ArrowRight, Home, CheckCircle2 } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<number>(0); // Start showing landing page at Step 0!

  // Global shared state for the interactive module
  const [groupState, setGroupState] = useState<PblGroup>({
    namaKelompok: "",
    anggota: [],
    peran: {
      ketua: "",
      pencariDataSains: "",
      pencariTafsir: "",
      penyusunPoster: ""
    }
  });

  const [lkpdState, setLkpdState] = useState<LkpdData>({
    hipotesis: "",
    tabelPengamatan: [
      { makanan: "Kurma (Ruthab / Tamar)", kecepatanEnergi: "Sangat Cepat (<15 mnt)", kandunganGula: "Monosakarida alami (Glow)", efekLambung: "Sangat Ringan, menenangkan", seratKasar: "Tinggi (~8g Pektin)" },
      { makanan: "Es Sirup Manis Pabrik / HFCS", kecepatanEnergi: "", kandunganGula: "", efekLambung: "", seratKasar: "" },
      { makanan: "Air Putih Hangat Saja", kecepatanEnergi: "", kandunganGula: "", efekLambung: "", seratKasar: "" },
      { makanan: "Nasi Putih Hangat + Lauk Berat", kecepatanEnergi: "", kandunganGula: "", efekLambung: "", seratKasar: "" }
    ],
    analisisMaryamm25: "",
    analisisBukaPuasa: "",
    kesimpulan: "",
    refleksiMandiri: ""
  });

  const [answersState, setAnswersState] = useState<StudentAnswers>({
    pilihanGanda: {},
    essay: {},
    essayEvaluations: {}
  });

  const [refleksiState, setRefleksiState] = useState<RefleksiSiswa>({
    pemahamanBaru: "",
    perubahanSikap: "",
    rasaSyukur: "",
    bintangModul: 5
  });

  // Course Roadmap mapping
  const menuItems = [
    { id: 1, label: "Identitas & Tujuan", icon: <BookOpen className="h-4.5 w-4.5" />, desc: "Informasi dasar & TP (ABCD)" },
    { id: 2, label: "Pendahuluan & Quran", icon: <Compass className="h-4.5 w-4.5" />, desc: "Studi literatur ayat suci" },
    { id: 3, label: "Materi Biokimia Kurma", icon: <PenTool className="h-4.5 w-4.5" />, desc: "Kandungan gizi & botani" },
    { id: 4, label: "Aktivitas PBL (Sintaks)", icon: <Sparkles className="h-4.5 w-4.5" />, desc: "Studi kasus & penyidikan" },
    { id: 5, label: "Lembar Kerja Siswa (LKPD)", icon: <ClipboardList className="h-4.5 w-4.5" />, desc: "Matriks & analisa data" },
    { id: 6, label: "Evaluasi HOTS Quiz", icon: <HelpCircle className="h-4.5 w-4.5" />, desc: "Pilihan Ganda & esai (AI)" },
    { id: 7, label: "Kriteria Rubrik Penilaian", icon: <CheckSquare className="h-4.5 w-4.5" />, desc: "Sikap, ilmu, keterampilan" },
    { id: 8, label: "Refleksi & Sertifikat", icon: <Award className="h-4.5 w-4.5" />, desc: "Selesaikan modul belajar" },
  ];

  // If on page 0: Render Landing Page exclusively
  if (activeSection === 0) {
    return (
      <>
        <LandingPage 
          groupState={groupState} 
          setGroupState={setGroupState} 
          onStartLearning={() => setActiveSection(1)} 
        />
        <KamusIstilah />
      </>
    );
  }

  const handleNext = () => {
    if (activeSection < 8) {
      setActiveSection(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (activeSection > 1) {
      setActiveSection(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-palm-50/50 font-sans text-gray-800 antialiased selection:bg-palm-200 flex flex-col justify-between">
      
      {/* Top minimalistic header bar */}
      <header className="sticky top-0 z-40 bg-palm-900 text-white shadow-md border-b border-palm-800 py-3 px-4 md:px-8 no-print">
        <div className="mx-auto max-w-7xl flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveSection(0)}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-amber-date-400 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              title="Kembali ke Landing Page Utama"
            >
              <Home className="h-4.5 w-4.5" />
            </button>
            <div>
              <h1 className="text-xs md:text-sm font-semibold tracking-wide uppercase font-serif">Modul Pembelajaran Abad 21</h1>
              <p className="text-[10px] text-palm-200 font-medium select-none">Kurma antara Agama & Sains Modern • Problem Based Learning</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[10px] bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg font-mono text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {groupState.namaKelompok ? (
                <span className="text-emerald-300 font-bold">Tim: {groupState.namaKelompok}</span>
              ) : (
                <span className="text-amber-date-400 font-bold">Belajar Mandiri</span>
              )}
            </div>

            <div className="bg-palm-800 text-amber-date-200 border border-palm-750 px-3 py-1 rounded-full text-[10px] font-bold font-mono">
              Progres: {activeSection}/8
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 mx-auto max-w-5xl w-full p-4 md:p-6 lg:p-8 space-y-6">
        
        {/* TOP STATUS PROGRESS BAR (Replacing the sidebar for a fully screen separation model) */}
        <div className="bg-white rounded-2xl border border-palm-150 p-4 shadow-sm no-print">
          <div className="flex items-center justify-between gap-4 border-b border-palm-100 pb-3 mb-3">
            <span className="text-[10px] font-bold text-palm-800 uppercase tracking-widest flex items-center gap-1.5">
              🎓 Peta Navigasi Pembelajaran (Alur Lurus):
            </span>
            <span className="text-[10px] text-gray-450 italic hidden sm:inline">
              Klik nomor lingkaran di bawah untuk melompat bebas ke rubrik lain
            </span>
          </div>

          {/* Symmetrical step circle line */}
          <div className="flex justify-between items-center relative overflow-x-auto pb-1 sm:pb-0 gap-2 scrollbar-none">
            {menuItems.map((item) => {
              const num = item.id;
              const isActive = activeSection === num;
              const isPast = activeSection > num;
              
              let stepCircleStyle = "bg-palm-50 text-palm-600 border-palm-100 hover:bg-palm-100/70";
              if (isActive) {
                stepCircleStyle = "bg-palm-700 text-white font-bold border-palm-700 ring-4 ring-palm-100 shadow";
              } else if (isPast) {
                stepCircleStyle = "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100/50";
              }

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(num);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex flex-col items-center flex-1 shrink-0 min-w-14 text-center group cursor-pointer transition-all"
                  title={item.desc}
                >
                  <div className={`h-8 w-8 rounded-full border flex items-center justify-center text-xs font-bold transition-all ${stepCircleStyle}`}>
                    {isPast ? <span className="text-emerald-700 font-bold">✔</span> : num}
                  </div>
                  <span className={`text-[9px] mt-2 font-bold tracking-tight line-clamp-1 max-w-[80px] ${
                    isActive ? "text-palm-950 font-black scale-102" : "text-gray-400 group-hover:text-gray-600"
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE SECTION WORKSPACE */}
        <div className="space-y-6">
          <div className="transition-all duration-300">
            {activeSection === 1 && <IdentitasDanCapaian />}
            {activeSection === 2 && <PendahuluanDanQuran />}
            {activeSection === 3 && <MateriKurma />}
            {activeSection === 4 && <PblSintaksWorkspace groupState={groupState} setGroupState={setGroupState} />}
            {activeSection === 5 && <LkpdSection groupState={groupState} lkpdState={lkpdState} setLkpdState={setLkpdState} />}
            {activeSection === 6 && <EvaluasiQuiz answers={answersState} setAnswers={setAnswersState} />}
            {activeSection === 7 && <RubrikPenilaian />}
            {activeSection === 8 && <PenutupRefleksi groupState={groupState} refleksiState={refleksiState} setRefleksiState={setRefleksiState} />}
          </div>

          {/* BOTTOM PAGINATION NAV BAR (Enforcing separation, clean paging flow) */}
          <div className="flex justify-between items-center bg-white border border-palm-150 p-4 rounded-2xl shadow-sm no-print">
            <button
              onClick={handlePrev}
              disabled={activeSection === 1}
              className="flex items-center gap-1.5 rounded-xl border border-palm-200 px-4 py-2.5 text-xs font-semibold text-palm-800 hover:bg-palm-50 transition-colors disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Sebelumnya</span>
            </button>

            <div className="text-[11px] text-gray-400 font-serif italic hidden sm:block">
              Sekarang di: <strong>{menuItems[activeSection - 1]?.label}</strong>
            </div>

            {activeSection < 8 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 rounded-xl bg-palm-700 hover:bg-palm-800 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Halaman Selanjutnya</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <div className="text-xs bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-xl border border-emerald-250 flex items-center gap-1">
                🎉 Pembelajaran Rampung!
              </div>
            )}
          </div>
        </div>

      </main>

      {/* Decorative footer */}
      <footer className="mx-auto max-w-7xl pt-6 pb-12 text-center text-[10px] text-gray-400 no-print border-t border-dashed border-palm-100/60 w-full mt-6">
        <p>© 2026 E-Modul Pembelajaran Abad 21 • Kurikulum Terintegrasi Sains & Keagamaan</p>
        <p className="mt-1 font-light italic text-gray-300 font-sans">Mencetak generasi cerdas berakhlak mulia melalui nalar sains empiris berazas Al-Qur'an</p>
      </footer>

      {/* Floating interactive Dictionary */}
      <KamusIstilah />
    </div>
  );
}
