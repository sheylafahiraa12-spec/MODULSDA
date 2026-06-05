import React, { useState } from "react";
import { PblGroup } from "../types";
import { BookOpen, Compass, Sparkles, Users, ArrowRight, GraduationCap, CheckCircle2, FlaskConical, Award } from "lucide-react";
import { motion } from "motion/react";

interface LandingPageProps {
  groupState: PblGroup;
  setGroupState: React.Dispatch<React.SetStateAction<PblGroup>>;
  onStartLearning: () => void;
}

export default function LandingPage({ groupState, setGroupState, onStartLearning }: LandingPageProps) {
  const [newMember, setNewMember] = useState<string>("");
  const [localGroupName, setLocalGroupName] = useState<string>(groupState.namaKelompok);
  const [localMembers, setLocalMembers] = useState<string[]>(groupState.anggota);

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMember.trim() && !localMembers.includes(newMember.trim())) {
      const updatedMembers = [...localMembers, newMember.trim()];
      setLocalMembers(updatedMembers);
      setGroupState(prev => ({
        ...prev,
        anggota: updatedMembers
      }));
      setNewMember("");
    }
  };

  const handleRemoveMember = (name: string) => {
    const updatedMembers = localMembers.filter(m => m !== name);
    setLocalMembers(updatedMembers);
    setGroupState(prev => ({
      ...prev,
      anggota: updatedMembers
    }));
  };

  const handleGroupNameChange = (name: string) => {
    setLocalGroupName(name);
    setGroupState(prev => ({
      ...prev,
      namaKelompok: name
    }));
  };

  const handleStart = () => {
    // If the user hasn't typed anything, we can auto-assign a default name for a frictionless start
    if (!localGroupName.trim()) {
      const defaultName = "Siswa Mandiri Ulul Albab";
      setGroupState(prev => ({
        ...prev,
        namaKelompok: defaultName
      }));
    }
    onStartLearning();
  };

  return (
    <div className="relative min-h-screen bg-palm-50/40 text-gray-800 flex flex-col justify-between overflow-hidden selection:bg-palm-200">
      
      {/* Visual background atmospheric elements */}
      <div className="absolute top-[-25%] left-[-15%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-gradient-to-br from-palm-100/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] rounded-full bg-gradient-to-tr from-amber-date-100/30 to-transparent blur-3xl pointer-events-none" />

      {/* TOP METADATA & GREETING */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-8 pb-4">
        <div className="flex items-center justify-between border-b border-palm-100/80 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🌴</span>
            <div>
              <p className="text-[10px] font-bold text-palm-700 tracking-wider uppercase">KURIKULUM SMA/MA KELAS XI</p>
              <h2 className="text-xs font-mono font-bold text-palm-900">E-Modul Biologi Integratif • Kemenag RI</h2>
            </div>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-palm-100/60 px-3 py-1 text-[11px] font-semibold text-palm-800 border border-palm-200/50">
            <GraduationCap className="h-3.5 w-3.5" /> Pembelajaran Abad 21 (PBL)
          </span>
        </div>
      </div>

      {/* MAIN HERO & REGISTRATION BOX */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-8 md:py-16 grid gap-12 lg:grid-cols-12 items-center">
        
        {/* Left side: Editorial marketing hook & overview */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-palm-100 text-palm-800 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-amber-date-600 animate-pulse" />
            Integrasi Keagamaan & Sains Modern
          </span>

          <h1 className="font-serif text-4xl md:text-5.5xl font-black text-palm-950 leading-[1.12] tracking-tight">
            Kurma: Pesona <span className="text-palm-700 relative inline-block">Agama<span className="absolute bottom-1 left-0 w-full h-1 bg-palm-200/60 -z-10" /></span> & Kebenaran <span className="text-amber-date-700">Sains Seluler</span>
          </h1>

          <p className="text-sm md:text-base text-gray-650 leading-relaxed font-light font-sans max-w-2xl">
            Tuntaskan penyelidikan komprehensif berbasis **Problem Based Learning (PBL)**. Telusuri korelasi eksklusif antara firman suci Al-Qur'an 14 abad silam dengan analisis biokimia klinis organel selular, homeostasis metabolisme tubuh pasca-puasa, dan kekuatan fitoestrogen pemicu kontraksi rahim.
          </p>

          {/* Feature highlights list with cute check icons */}
          <div className="grid gap-3.5 sm:grid-cols-2 pt-2">
            <div className="flex gap-3 bg-white/70 backdrop-blur-md rounded-xl p-3 border border-palm-100/50 shadow-3xs hover:shadow-2xs transition-shadow">
              <Compass className="h-5 w-5 text-palm-650 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-palm-950">Ayat Kauniyah & Qauliyah</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Menganalisis tafsir Surah Maryam 25-26 & Al-An'am 99.</p>
              </div>
            </div>

            <div className="flex gap-3 bg-white/70 backdrop-blur-md rounded-xl p-3 border border-palm-100/50 shadow-3xs hover:shadow-2xs transition-shadow">
              <FlaskConical className="h-5 w-5 text-palm-650 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-palm-950">Analisis Biokimia Sel</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Bandingkan kurma Indeks Glikemik rendah vs es sirup buatan.</p>
              </div>
            </div>

            <div className="flex gap-3 bg-white/70 backdrop-blur-md rounded-xl p-3 border border-palm-100/50 shadow-3xs hover:shadow-2xs transition-shadow">
              <Users className="h-5 w-5 text-palm-650 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-palm-950">Kolaborasi Digital PBL</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Petakan tim kelompok, isi LKPD interaktif, rancang infografis.</p>
              </div>
            </div>

            <div className="flex gap-3 bg-white/70 backdrop-blur-md rounded-xl p-3 border border-palm-100/50 shadow-3xs hover:shadow-2xs transition-shadow">
              <Award className="h-5 w-5 text-palm-650 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-palm-950">Evaluasi AI Tutor Gemini</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Kuis HOTS esai langsung dikoreksi oleh asisten pintar server.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Modern High-fidelity Registry desk card */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-palm-600/10 rounded-2xl blur-xl -z-10" />
          <div className="rounded-2xl border-2 border-palm-150 bg-white p-6 md:p-8 shadow-xl relative z-10 space-y-6">
            <div className="border-b border-palm-100 pb-4">
              <h3 className="font-serif text-lg font-bold text-palm-950 flex items-center gap-1.5">
                <Users className="h-5 w-5 text-palm-700" />
                Meja Registrasi Pembelajaran
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wider font-semibold">
                Masuk sebagai tim kelompok atau mandiri
              </p>
            </div>

            {/* Group info forms */}
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight block mb-1">
                  Nama Kelompok Belajar
                </label>
                <input
                  type="text"
                  value={localGroupName}
                  onChange={e => handleGroupNameChange(e.target.value)}
                  placeholder="Contoh: Al-Khawarizmi Bio-Sains"
                  className="w-full rounded-xl border border-palm-200 px-3.5 py-2.5 text-xs outline-none focus:border-palm-600 bg-palm-50/15 text-gray-800 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight block">
                  Daftarkan Anggota Kelompok
                </label>
                <form onSubmit={handleAddMember} className="flex gap-2">
                  <input
                    type="text"
                    value={newMember}
                    onChange={e => setNewMember(e.target.value)}
                    placeholder="Masukkan nama siswa..."
                    className="flex-1 rounded-xl border border-palm-200 px-3.5 py-2 text-xs outline-none focus:border-palm-600 bg-palm-50/15 text-gray-800 transition-colors"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-palm-800 px-4 text-xs text-white font-bold hover:bg-palm-900 transition-colors"
                  >
                    Tambah
                  </button>
                </form>
              </div>

              {/* Members chip container */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight block mb-1">
                  Daftar Nama Terdaat ({localMembers.length})
                </span>
                {localMembers.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-palm-150 bg-palm-50/20 p-4 text-center">
                    <p className="text-[11px] text-gray-450 font-light italic">
                      Belum ada anggota. Tambahkan di atas, atau klik tombol di bawah untuk langsung belajar secara mandiri.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1 bg-palm-50/30 rounded-xl border border-palm-100/50">
                    {localMembers.map(name => (
                      <div
                        key={name}
                        onClick={() => handleRemoveMember(name)}
                        className="flex items-center gap-1.5 rounded-full bg-white border border-palm-200 px-2.5 py-1 text-xs font-semibold text-palm-900 cursor-pointer hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all shadow-3xs"
                        title="Klik untuk menghapus"
                      >
                        <span>👤 {name}</span>
                        <span className="text-[10px] text-gray-450">×</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* GRAND MASTER START ACTION BUTTON */}
            <div className="pt-2">
              <button
                onClick={handleStart}
                className="w-full rounded-xl bg-palm-750 text-white font-bold py-3 px-4 text-xs tracking-wider uppercase hover:bg-palm-850 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-palm-700"
              >
                <span>Mulai Petualangan Belajar</span>
                <ArrowRight className="h-4.5 w-4.5 shrink-0" />
              </button>
              <p className="text-[10px] text-gray-400 text-center mt-2.5 leading-relaxed">
                Menyepakati tata tertib belajar & kesadaran literasi biologi.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER COLLABORATION CREDITS */}
      <div className="relative z-10 w-full border-t border-palm-100/60 bg-white/50 backdrop-blur-md px-6 py-4 text-center font-mono text-[9px] text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-2 max-w-7xl mx-auto">
        <span>© 2026 E-Modul Pembelajaran Biologi SMA/MA. Seluruh hak cipta terjamin.</span>
        <div className="flex gap-4">
          <span>HOTS Compliant</span>
          <span>•</span>
          <span>Kemenag Terintegrasi</span>
          <span>•</span>
          <span>AI Tutor Enabled</span>
        </div>
      </div>

    </div>
  );
}
