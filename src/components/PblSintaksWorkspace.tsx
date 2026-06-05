import React, { useState } from "react";
import { PblGroup } from "../types";
import { Users, Search, AlertCircle, FileText, Check, Layout, HelpCircle, Save } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PblWorkspaceProps {
  groupState: PblGroup;
  setGroupState: React.Dispatch<React.SetStateAction<PblGroup>>;
}

export default function PblSintaksWorkspace({ groupState, setGroupState }: PblWorkspaceProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [newMember, setNewMember] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [researchEvidence, setResearchEvidence] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>("");

  const steps = [
    { num: 1, title: "Orientasi Masalah" },
    { num: 2, title: "Mengorganisasi Siswa" },
    { num: 3, title: "Penyelidikan Terbimbing" },
    { num: 4, title: "Menyusun Hasil Karya" },
    { num: 5, title: "Analisis & Evaluasi" }
  ];

  // Simulated scientific & religious database for Penyelidikan (Stage 3)
  const databaseArticles = [
    {
      kategori: "Kesehatan/Medis",
      judul: "The effect of late-pregnancy date fruit consumption on delivery: A randomized controlled trial",
      penulis: "Al-Kuran et al., Journal of Obstetrics and Gynaecology (2011)",
      kutipan: "Konsumsi buah kurma secara signifikan meminimalkan kebutuhan induksi prostin/oksitosin buatan pada persalinan normal, serta mempersingkat fase laten persalinan secara klinis."
    },
    {
      kategori: "Biokimia",
      judul: "Glycemic indices of five varieties of dates (Phoenix dactylifera)",
      penulis: "Miller et al., Nutrition Journal (2003)",
      kutipan: "Meskipun sangat manis karena glukosa-fruktosa melimpah, serat pangan pektin di dalam kurma mengontrol laju pelepasannya. Indeks Glikemik kurma berkisar 42-53 (Rendah), mencegah lonjakan gula drastis."
    },
    {
      kategori: "Botani Gurun",
      judul: "Adaptive photosynthetic mechanisms of oasis date palms under extreme arid stress",
      penulis: "El-Sharabasy et al., Desert Ecology (2018)",
      kutipan: "Pelepah daun kurma dilapisi lilin kutikula tebal dengan stomata tersembunyi (cryptic). Sistem akarnya menembus sedalam 15-20 meter untuk mereklamasi mineral belerang, besi, dan selenium dari air bawah tanah gurun."
    },
    {
      kategori: "Tafsir Al-Qur'an",
      judul: "Kajian Tematik Manfaat Tanaman Herbal dalam Tafsir Fi Zilalil Qur'an",
      penulis: "Kementerian Agama Agama RI (2020)",
      kutipan: "Perintah Allah Swt. kepada Maryam r.a. untuk memakan ruthab adalah kombinasi asupan metabolisme fisik (gula mikro untuk melahirkan) dan aspek spiritual ketenangan batin."
    }
  ];

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMember.trim() && !groupState.anggota.includes(newMember.trim())) {
      setGroupState(prev => ({
        ...prev,
        anggota: [...prev.anggota, newMember.trim()]
      }));
      setNewMember("");
    }
  };

  const handleRemoveMember = (name: string) => {
    setGroupState(prev => ({
      ...prev,
      anggota: prev.anggota.filter(m => m !== name)
    }));
  };

  const toggleEvidence = (quote: string) => {
    if (researchEvidence.includes(quote)) {
      setResearchEvidence(prev => prev.filter(e => e !== quote));
    } else {
      setResearchEvidence(prev => [...prev, quote]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Horizontal Step Indicator */}
      <div className="rounded-2xl border border-palm-100 bg-white p-4 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-xs font-bold text-palm-800 uppercase tracking-widest flex items-center gap-1">
            ⚡ Sintaks Model PBL:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
            {steps.map(s => (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-all shrink-0 ${
                  activeStep === s.num
                    ? "bg-palm-800 text-white shadow-sm"
                    : "bg-palm-50 text-palm-700 hover:bg-palm-100"
                }`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px]">
                  {s.num}
                </span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Board Container */}
      <div className="rounded-2xl border border-palm-150 bg-white p-6 shadow-sm min-h-[420px]">
        
        {/* TAHAP 1: ORIENTASI MASALAH */}
        {activeStep === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-6"
          >
            <div className="border-b border-palm-100 pb-3">
              <span className="text-[10px] font-bold text-amber-date-650 bg-amber-date-100 px-2.5 py-0.5 rounded uppercase">
                Tahap 1
              </span>
              <h3 className="font-serif text-xl font-bold text-palm-950 mt-1">
                Orientasi Masalah & Studi Kasus Kontekstual
              </h3>
            </div>

            <div className="rounded-xl border-l-4 border-palm-600 bg-palm-50/50 p-5 space-y-4">
              <h4 className="text-sm font-bold text-palm-950">
                Kisah Sarah & Tante Maryam: Gula Kejut vs Kurma Berkah
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed font-light">
                Saat pertengahan bulan Ramadan, Sarah (siswa kelas XI SMA) sedang merawat tantenya, Tante Maryam, yang sedang hamil tua (trimester ketiga) dan bersiap melakukan persalinan minggu depan di klinik bersalin dekat rumah. Sarah juga menemani ibunya mempersiapkan menu berbuka puasa keluarga.
              </p>
              <p className="text-xs text-gray-700 leading-relaxed font-light">
                Karena cuaca sangat terik, sepupu Sarah, Kak Danu yang merupakan pelari maraton, menyarankan Tante Maryam dan keluarga untuk berbuka puasa dengan minuman isotonik suplemen atau sirup manis konsentrat pekat agar cepat kenyang dan lemasnya segera pulih. Kak Danu berasumsi gula cair komersial adalah bahan bakar terkuat bagi rahim melahirkan.
              </p>
              <p className="text-xs text-gray-700 leading-relaxed font-light">
                Namun Tante Maryam teringat sewaktu mendengarkan kajian di masjid tentang Surah Maryam ayat 25-26, di mana ibunda Nabi Isa a.s. dalam keadaan sendirian dan kepayahan justru mendapat wahyu khusus untuk memakan <strong>ruthab (kurma basah segar)</strong> yang jatuh dari pohon kering. Tante Maryam ragu: <em>&ldquo;Mengapa harus kurma dan bukan buah segar lain, madu murni, atau minuman isotonik modern yang kandungan kalori elektronnya lebih diiklankan di TV? Apakah ada penjelasannya dalam kacamata biologi molekuler secara empiris?&rdquo;</em>
              </p>
            </div>

            {/* Core Investigation Questions */}
            <div className="rounded-xl border border-amber-date-200 bg-amber-date-50/50 p-4 space-y-2.5">
              <h4 className="text-xs font-bold text-amber-date-850 flex items-center gap-1.5">
                <AlertCircle className="h-4.5 w-4.5 text-amber-date-600" />
                Misi Investigasi Kelompokmu (PBL Core Goal)
              </h4>
              <ul className="list-decimal pl-4 text-xs text-gray-650 space-y-1 font-medium leading-relaxed">
                <li>Bandingkan mekanisme absorbsi gula pada sirup jagung (HFCS/isotonik) komersial dibanding glukosa-fruktosa kurma pada sel homeostasis tubuh pascapuasa.</li>
                <li>Telusuri kandungan fitokimia dalam kurma yang memiliki efek meniru hormon oksitosin (oxytocin-like) guna mempermudah persalinan rahim.</li>
                <li>Sajikan laporan kelompok berupa infografis poster berlandaskan integrasi Surah Maryam 25-26, Al-An'am 99, dan data medis kedokteran terkini.</li>
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveStep(2)}
                className="rounded-lg bg-palm-700 text-white px-4 py-2 text-xs font-bold transition-all hover:bg-palm-800"
              >
                Lanjut Tahap 2: Atur Kelompok & Peran
              </button>
            </div>
          </motion.div>
        )}

        {/* TAHAP 2: MENGORGANISASI SISWA */}
        {activeStep === 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-6"
          >
            <div className="border-b border-palm-100 pb-3">
              <span className="text-[10px] font-bold text-amber-date-650 bg-amber-date-100 px-2.5 py-0.5 rounded uppercase">
                Tahap 2
              </span>
              <h3 className="font-serif text-xl font-bold text-palm-950 mt-1">
                Mengorganisasi Peserta Didik & Pembagian Peran
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-12">
              
              {/* Form Input Group */}
              <div className="md:col-span-6 space-y-4">
                <div className="rounded-xl border border-palm-100 bg-palm-50/20 p-4 space-y-3">
                  <h4 className="text-xs font-bold text-palm-800 flex items-center gap-1">
                    <Users className="h-4.5 w-4.5" /> Profil Kelompok Investigasi
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight block mb-1">Nama Kelompok</label>
                      <input
                        type="text"
                        value={groupState.namaKelompok}
                        onChange={e => setGroupState(p => ({ ...p, namaKelompok: e.target.value }))}
                        placeholder="Contoh: Al-Biruni Bio-Teens"
                        className="w-full rounded-lg border border-palm-200 px-3 py-2 text-xs outline-none focus:border-palm-600 bg-white text-gray-800"
                      />
                    </div>

                    <form onSubmit={handleAddMember} className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight block">Tambah Anggota Kelompok</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newMember}
                          onChange={e => setNewMember(e.target.value)}
                          placeholder="Nama Siswa..."
                          className="flex-1 rounded-lg border border-palm-200 px-3 py-2 text-xs outline-none focus:border-palm-600 bg-white text-gray-800"
                        />
                        <button type="submit" className="rounded-lg bg-palm-700 px-3.5 text-xs text-white font-bold hover:bg-palm-800 transition-colors">
                          Tambah
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Assigned Roles matrix */}
                <div className="rounded-xl border border-palm-100 bg-palm-50/20 p-4 space-y-3">
                  <h4 className="text-xs font-bold text-palm-800 uppercase">Penugasan Peran Teknis</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed mb-1">
                    Petakan tugas di bawah ini agar penyelidikan berjalan kolaboratif (21st-century teamwork):
                  </p>

                  <div className="space-y-2.5">
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 block mb-0.5">1. Ketua Kelompok (Moderator Presentasi)</span>
                      <select
                        value={groupState.peran.ketua}
                        onChange={e => setGroupState(p => ({ ...p, peran: { ...p.peran, ketua: e.target.value } }))}
                        className="w-full rounded-lg border border-palm-200 px-2 py-1.5 text-xs outline-none bg-white text-gray-700"
                      >
                        <option value="">-- Pilih Anggota --</option>
                        {groupState.anggota.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-gray-400 block mb-0.5">2. Penyelidik Data Biokimia & Sains Modern</span>
                      <select
                        value={groupState.peran.pencariDataSains}
                        onChange={e => setGroupState(p => ({ ...p, peran: { ...p.peran, pencariDataSains: e.target.value } }))}
                        className="w-full rounded-lg border border-palm-200 px-2 py-1.5 text-xs outline-none bg-white text-gray-700"
                      >
                        <option value="">-- Pilih Anggota --</option>
                        {groupState.anggota.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-gray-400 block mb-0.5">3. Penyelidik Tafsir Quran & Hadits</span>
                      <select
                        value={groupState.peran.pencariTafsir}
                        onChange={e => setGroupState(p => ({ ...p, peran: { ...p.peran, pencariTafsir: e.target.value } }))}
                        className="w-full rounded-lg border border-palm-200 px-2 py-1.5 text-xs outline-none bg-white text-gray-700"
                      >
                        <option value="">-- Pilih Anggota --</option>
                        {groupState.anggota.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-gray-400 block mb-0.5">4. Editor Layout & Poster Kelompok</span>
                      <select
                        value={groupState.peran.penyusunPoster}
                        onChange={e => setGroupState(p => ({ ...p, peran: { ...p.peran, penyusunPoster: e.target.value } }))}
                        className="w-full rounded-lg border border-palm-200 px-2 py-1.5 text-xs outline-none bg-white text-gray-700"
                      >
                        <option value="">-- Pilih Anggota --</option>
                        {groupState.anggota.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

              </div>

              {/* Members List display */}
              <div className="md:col-span-6 rounded-xl border border-palm-100 p-4 space-y-4">
                <h4 className="text-xs font-bold text-palm-950 border-b border-palm-50 pb-2 flex justify-between items-center">
                  <span>Daftar Anggota Aktif ({groupState.anggota.length})</span>
                  <span className="text-[10px] text-gray-400 italic">Klik nama untuk menghapus</span>
                </h4>

                {groupState.anggota.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-48 border border-dashed border-palm-150 rounded-xl bg-palm-50/30 p-4 text-center">
                    <p className="text-xs text-gray-400 font-medium leading-relaxed leading-relaxed">
                      Belum ada nama yang dimasukkan.<br/>Gunakan kolom isian di sebelah kiri untuk menyusun tim pembelajarmu.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2.5">
                    {groupState.anggota.map(name => (
                      <div
                        key={name}
                        onClick={() => handleRemoveMember(name)}
                        className="flex items-center gap-1.5 rounded-full bg-palm-50 border border-palm-200 px-3 py-1.5 text-xs font-bold text-palm-900 cursor-pointer hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all shadow-2xs"
                      >
                        <span>👤 {name}</span>
                        <span className="text-[10px] opacity-40">×</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="rounded-lg bg-amber-date-50 border border-amber-date-100 p-3 text-[11px] text-amber-date-900 leading-relaxed leading-relaxed font-light">
                  <strong>💡 Petunjuk Guru:</strong> Pastikan seluruh anggota tim bertukar pikiran dan tidak ada satu orang pun yang mendominasi pekerjaan. Koordinasikan peran agar berjalan serempak saat melakukan penyidikan data.
                </div>
              </div>

            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setActiveStep(1)}
                className="rounded-lg border border-palm-200 text-palm-700 px-4 py-2 text-xs font-semibold hover:bg-palm-50"
              >
                Kembali
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="rounded-lg bg-palm-700 text-white px-4 py-2 text-xs font-bold hover:bg-palm-800 transition-all"
              >
                Mulai Penyelidikan di Lab Digital
              </button>
            </div>
          </motion.div>
        )}

        {/* TAHAP 3: PENYELIDIKAN TERBIMBING */}
        {activeStep === 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-6"
          >
            <div className="border-b border-palm-100 pb-3">
              <span className="text-[10px] font-bold text-amber-date-650 bg-amber-date-100 px-2.5 py-0.5 rounded uppercase">
                Tahap 3
              </span>
              <h3 className="font-serif text-xl font-bold text-palm-950 mt-1">
                Penyelidikan Mandiri & Penelusuran Database Digital
              </h3>
            </div>

            {/* Simulated Digital Search bar */}
            <div className="rounded-xl border border-palm-150 p-4 bg-palm-50 grid gap-4 sm:flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1">
                <Search className="h-4.5 w-4.5 text-palm-600 shrink-0" />
                <input
                  type="text"
                  placeholder="Ketik kata kunci (misal: oksitosin, glukosa, fotosentis, maryam)..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-white rounded-lg border border-palm-200 px-3 py-1.5 text-xs outline-none text-gray-800 outline-none"
                />
              </div>
              <div className="text-[11px] text-palm-750 font-bold shrink-0">
                🔍 Filter pencarian artikel terpercaya
              </div>
            </div>

            {/* Articles List */}
            <div className="grid gap-4 md:grid-cols-2">
              {databaseArticles
                .filter(art => 
                  searchQuery === "" || 
                  art.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  art.kutipan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  art.kategori.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((art, idx) => {
                  const isChecked = researchEvidence.includes(art.kutipan);
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleEvidence(art.kutipan)}
                      className={`rounded-xl border p-4 cursor-pointer transition-all ${
                        isChecked 
                          ? "bg-emerald-50 border-emerald-300 shadow-2xs" 
                          : "bg-white border-palm-100 hover:border-palm-200 hover:bg-palm-50/20"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-bold uppercase rounded px-2 py-0.5 ${
                          art.kategori === "Kesehatan/Medis" ? "bg-red-50 text-red-700 border border-red-100" :
                          art.kategori === "Biokimia" ? "bg-blue-50 text-blue-700 border border-blue-100" :
                          art.kategori === "Botani Gurun" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                          "bg-purple-50 text-purple-700 border border-purple-100"
                        }`}>
                          {art.kategori}
                        </span>
                        
                        <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                          isChecked ? "bg-emerald-600 border-emerald-600 text-white" : "border-gray-300 bg-white"
                        }`}>
                          {isChecked && <Check className="h-3 w-3" />}
                        </div>
                      </div>

                      <h4 className="text-xs font-bold text-palm-950 mb-1 leading-snug">{art.judul}</h4>
                      <p className="text-[10px] text-gray-400 font-mono mb-2">Sirkulasi: {art.penulis}</p>
                      
                      <div className="rounded bg-gray-50 border border-gray-100 p-2.5">
                        <p className="text-[11px] text-gray-650 leading-relaxed italic">&ldquo;{art.kutipan}&rdquo;</p>
                      </div>
                      
                      <p className="text-[9px] text-gray-400 mt-2 text-right">
                        {isChecked ? "✔ Dipetik sebagai bukti" : "➕ Klik untuk petik sebagai data ilmiah"}
                      </p>
                    </div>
                  );
                })}
            </div>

            {/* Group Notes Workspace */}
            <div className="rounded-xl border border-palm-100 p-4 bg-palm-50/40 space-y-3">
              <div className="flex justify-between items-center border-b border-palm-100 pb-2">
                <h4 className="text-xs font-bold text-palm-950 flex items-center gap-1">
                  <FileText className="h-4.5 w-4.5 text-palm-600" /> Lembar Kerja Catatan Penyelidikan Kelompok
                </h4>
                <span className="text-[10px] text-gray-400">Bukti dipetik: {researchEvidence.length} buah</span>
              </div>

              {researchEvidence.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Kutipan Data Terseleksi:</span>
                  <div className="flex flex-col gap-1.5 max-h-32 overflow-y-auto">
                    {researchEvidence.map((e, i) => (
                      <div key={i} className="text-[11px] bg-white border border-palm-100 text-gray-600 leading-relaxed p-2 rounded-lg">
                        🔹 &ldquo;{e}&rdquo;
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-1 pt-1.5">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-tight block">Ketik Notulensi / Temuan Tambahan Kelompok:</label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Ketik poin analisa, diskusikan perbedaan metabolisme glukosa kurma versus sirup..."
                  className="w-full text-xs text-gray-850 bg-white border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-24 leading-relaxed"
                />
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setActiveStep(2)}
                className="rounded-lg border border-palm-200 text-palm-700 px-4 py-2 text-xs font-semibold hover:bg-palm-50"
              >
                Kembali
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="rounded-lg bg-palm-700 text-white px-4 py-2 text-xs font-bold hover:bg-palm-800 transition-all"
              >
                Lanjut Tahap 4: Susun Karya Poster
              </button>
            </div>
          </motion.div>
        )}

        {/* TAHAP 4: MENGEMBANGKAN DAN MENYAJIKAN HASIL */}
        {activeStep === 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-6"
          >
            <div className="border-b border-palm-100 pb-3">
              <span className="text-[10px] font-bold text-amber-date-650 bg-amber-date-100 px-2.5 py-0.5 rounded uppercase">
                Tahap 4
              </span>
              <h3 className="font-serif text-xl font-bold text-palm-950 mt-1">
                Mengembangkan & Merancang Hasil Karya (Poster/Slide Planner)
              </h3>
            </div>

            <div className="rounded-xl border border-palm-150 p-4 bg-palm-50/20 text-xs text-gray-600 leading-relaxed font-light">
              Gunakan draf perencana di bawah ini untuk merancang kerangka <strong>Poster Infografis</strong> atau <strong>Bahan Presentasi kelompok</strong>. Ini akan membantu editor poster mengolahnya ke aplikasi desain (misal: Canva/Powerpoint) untuk dipresentasikan di depan kelas.
            </div>

            {/* Poster Planner Fields */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-xl border border-palm-100 bg-white p-4 space-y-3">
                  <h4 className="text-xs font-bold text-palm-900 border-b border-palm-50 pb-2">📋 Kepala & Judul Infografis</h4>
                  <div className="space-y-2">
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold block mb-0.5">Judul Kreatif Poster</label>
                      <input
                        type="text"
                        placeholder="Contoh: Rahasia Seluler Kurma dalam Al-Qur'an & Medis"
                        className="w-full text-xs text-gray-800 bg-palm-50/40 rounded border border-palm-150 p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold block mb-0.5">Slogan / Hook Penarik</label>
                      <input
                        type="text"
                        placeholder="Contoh: Lebih dari Manis Gurun, Pembangkit Energi Seluler Rahim"
                        className="w-full text-xs text-gray-850 bg-palm-50/40 rounded border border-palm-150 p-2 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-palm-100 bg-white p-4 space-y-3">
                  <h4 className="text-xs font-bold text-palm-900 border-b border-palm-50 pb-2">🧬 Blok Data Biologi Seluler (Sains)</h4>
                  <div>
                    <label className="text-[10px] text-gray-400 font-bold block mb-1">Poin-poin Penjelasan Ilmiah yang akan Ditampilkan</label>
                    <textarea
                      placeholder="Masukkan 3 kesimpulan biokimia (misal: oksitosin-like, klorofil gurun, serat larut glikemik rendah)..."
                      className="w-full text-xs text-gray-850 bg-palm-50/40 rounded border border-palm-150 p-2.5 outline-none min-h-24 leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-palm-100 bg-white p-4 space-y-3">
                  <h4 className="text-xs font-bold text-palm-900 border-b border-palm-50 pb-2">📒 Blok Integrasi Dalil Al-Qur'an (Agama)</h4>
                  <div>
                    <label className="text-[10px] text-gray-400 font-bold block mb-1">Bagaimana Integrasi QS. Maryam / Al-An'am ditulis?</label>
                    <textarea
                      placeholder="Konseptualisasi wahyu Allah yang mengajarkan proses ilmiah kepada Maryam, rahasia air hujan tumbuh-tumbuhan..."
                      className="w-full text-xs text-gray-850 bg-palm-50/40 rounded border border-palm-150 p-2.5 outline-none min-h-24 leading-relaxed"
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-radial from-amber-date-800 to-amber-date-900 text-white p-4 space-y-2">
                  <h4 className="text-xs font-bold text-amber-date-200">✨ Desain Poster yang Ideal Abad 21</h4>
                  <ul className="list-disc pl-4 text-[11px] text-amber-date-50 font-light space-y-1 leading-relaxed">
                    <li>Gunakan warna kontras yang ramah mata (dominan hijau botanis dan kuning kurma).</li>
                    <li>Sertakan diagram/tabel banding nutrisi kurma dan buah barat.</li>
                    <li>Hindari tumpukan kalimat padat, gunakan grafik ikon yang scannable (mudah dipahami).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setActiveStep(3)}
                className="rounded-lg border border-palm-200 text-palm-700 px-4 py-2 text-xs font-semibold hover:bg-palm-50"
              >
                Kembali
              </button>
              <button
                onClick={() => setActiveStep(5)}
                className="rounded-lg bg-palm-700 text-white px-4 py-2 text-xs font-bold hover:bg-palm-800 transition-all"
              >
                Lanjut Tahap 5: Analisis & Evaluasi Presentasi
              </button>
            </div>
          </motion.div>
        )}

        {/* TAHAP 5: ANALISIS DAN EVALUASI */}
        {activeStep === 5 && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-6"
          >
            <div className="border-b border-palm-100 pb-3">
              <span className="text-[10px] font-bold text-amber-date-650 bg-amber-date-100 px-2.5 py-0.5 rounded uppercase">
                Tahap 5
              </span>
              <h3 className="font-serif text-xl font-bold text-palm-950 mt-1">
                Analisis, Evaluasi & Refleksi Diskusi Kelas
              </h3>
            </div>

            <div className="rounded-xl border border-palm-100 bg-white p-5 space-y-4">
              <h4 className="text-xs font-bold text-palm-900 flex items-center gap-1.5">
                <Layout className="h-4.5 w-4.5" /> Panduan Pelaksanaan Evaluasi & Debat Ilmiah
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Setelah karya kelompok (poster/slide) selesai, masing-masing tim akan melakukan presentasi silang di depan kelas selama 7 menit yang dipandu guru. Lakukan evaluasi kritis dengan kelompok lain melalui pertanyaan berikut:
              </p>

              <div className="grid gap-3.5 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-palm-50/50 border border-palm-150/40">
                  <span className="font-bold text-palm-850 block mb-1">❓ Critical Critique #1:</span>
                  <p className="text-gray-650 font-light">Apakah argumen ilmiah yang mengaitkan ruthab dengan oksitosin-like didukung artikel medis klinis terpercaya, atau hanya sekadar kesimpulan teologis yang dicocokkan?</p>
                </div>
                
                <div className="p-3 rounded-lg bg-palm-50/50 border border-palm-150/40">
                  <span className="font-bold text-palm-850 block mb-1">❓ Critical Critique #2:</span>
                  <p className="text-gray-650 font-light">Bagaimana kita bisa menerjemahkan sunnah makan kurma basah saat berbuka untuk kampanye kesehatan nasional guna menekan prevalensi diabetes akibat ketagihan takjil sirup manis pabrik?</p>
                </div>
              </div>
            </div>

            {/* Teacher Feedback Board simulated */}
            <div className="rounded-xl border border-amber-date-200 bg-amber-date-50/30 p-4 space-y-2">
              <h4 className="text-xs font-bold text-amber-date-850">🗣 Rekomendasi Penguatan Guru Untuk Kelompok</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed font-light">
                Saat mempresentasikan hasil penyelidikan, pastikan kelompok menggarisbawahi bahwa Al-Qur'an menginspirasi jalan penelitian biologi. Keberhasilan menelusuri literatur ilmiah abad 21 ini membuktikan keunggulan analisis berpikir tingkat tinggi (HOTS) yang dikuasai siswa-siswi sekalian.
              </p>
            </div>

            <div className="rounded-lg bg-palm-700/5 border border-palm-700/10 p-3 flex items-center justify-between">
              <span className="text-xs text-palm-900 font-semibold">Semua langkah pbl terselesaikan! Mari isi LKPD Kelompok sekarang.</span>
              <span className="text-xs bg-palm-700 text-white font-bold px-2 py-0.5 rounded">Selesai ⚡</span>
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setActiveStep(4)}
                className="rounded-lg border border-palm-200 text-palm-700 px-4 py-2 text-xs font-semibold hover:bg-palm-50"
              >
                Kembali
              </button>
              <p className="text-[11px] text-gray-400 font-mono self-center">Fase PBL: Selesai</p>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
