import React from "react";
import { LkpdData, PblGroup } from "../types";
import { ListCollapse, ClipboardCheck, Printer, Save, Check, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

interface LkpdSectionProps {
  groupState: PblGroup;
  lkpdState: LkpdData;
  setLkpdState: React.Dispatch<React.SetStateAction<LkpdData>>;
}

export default function LkpdSection({ groupState, lkpdState, setLkpdState }: LkpdSectionProps) {
  
  const handleTableChange = (index: number, field: keyof typeof lkpdState.tabelPengamatan[0], value: string) => {
    setLkpdState(prev => {
      const updatedTabel = [...prev.tabelPengamatan];
      updatedTabel[index] = { ...updatedTabel[index], [field]: value };
      return { ...prev, tabelPengamatan: updatedTabel };
    });
  };

  const handleTextChange = (field: keyof Omit<LkpdData, "tabelPengamatan">, value: string) => {
    setLkpdState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveToLocal = () => {
    localStorage.setItem("lkpd_kurma_save", JSON.stringify({ group: groupState, lkpd: lkpdState }));
    alert("Lembar Kerja LKPD berhasil disimpan dalam penyimpanan browser lokal!");
  };

  const handleResetLkpd = () => {
    if (confirm("Apakah Anda yakin ingin memulihkan isian LKPD kembali ke draf awal kosong?")) {
      setLkpdState({
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
    }
  };

  return (
    <div className="space-y-8">
      {/* HEADER LKPD */}
      <div className="rounded-2xl border border-palm-100 bg-white p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-palm-100 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-palm-700 bg-palm-100 px-2 py-0.5 rounded uppercase font-semibold">
              Lembar Kerja Mandiri Terbimbing
            </span>
            <h3 className="font-serif text-xl font-bold text-palm-950 flex items-center gap-1.5">
              <ListCollapse className="h-5.5 w-5.5 text-palm-700" />
              LKPD: Analisis Homeostasis & Fitokimia Kurma
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 no-print">
            <button
              onClick={handleSaveToLocal}
              className="flex items-center gap-1.5 rounded-lg border border-palm-300 text-palm-800 bg-palm-50/50 px-3 py-1.5 text-xs font-bold hover:bg-palm-100"
            >
              <Save className="h-4 w-4" /> Simpan Lokal
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-lg bg-palm-750 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-palm-850"
            >
              <Printer className="h-4 w-4" /> Cetak / Ekspor PDF
            </button>
            <button
              onClick={handleResetLkpd}
              className="flex items-center justify-center p-1.5 rounded-lg border border-dashed border-red-200 text-red-505 hover:bg-red-50 text-red-600 transition-colors"
              title="Reset LKPD"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Group Info Metadata Sheet */}
        <div className="grid gap-4 sm:grid-cols-2 rounded-xl bg-palm-50/30 border border-palm-100/70 p-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase">1. IDENTITAS KELOMPOK</p>
            <p className="text-xs font-bold text-gray-800">
              Kelompok: <span className="text-palm-800">{groupState.namaKelompok || "(Belum Mengisi di Tahap 2)"}</span>
            </p>
            <p className="text-[11px] text-gray-650 font-light max-h-16 overflow-y-auto mt-1">
              <strong>Anggota:</strong> {groupState.anggota.length > 0 ? groupState.anggota.join(", ") : "(Belum ada nama)"}
            </p>
          </div>
          
          <div className="space-y-1 text-xs text-gray-600 border-l border-dashed border-palm-200 pl-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase">2. PERAN TIM</p>
            <div><strong>Ketua:</strong> {groupState.peran.ketua || "-"}</div>
            <div><strong>Bio-Sains:</strong> {groupState.peran.pencariDataSains || "-"}</div>
            <div><strong>Theologian:</strong> {groupState.peran.pencariTafsir || "-"}</div>
          </div>
        </div>
      </div>

      {/* DYNAMIC LKPD DESK */}
      <div className="rounded-2xl border border-palm-150 bg-white p-6 shadow-sm space-y-6 print-card">
        
        {/* Hipotesis */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-palm-900 uppercase tracking-wider flex items-center gap-1">
            🎯 A. Hipotesis Awal Kelompok
          </h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-light">
            Berdasarkan kisah Sarah & Tante Maryam (Tahap 1 PBL), tulislah dugaan sementara kelompokmu: mengapa kurma (ruthab) lebih diunggulkan dibanding minuman isotonik pekat pasca-puasa / melahirkan?
          </p>
          <textarea
            value={lkpdState.hipotesis}
            onChange={e => handleTextChange("hipotesis", e.target.value)}
            placeholder="Ketik hipotesis jawaban kelompok di sini..."
            className="w-full text-xs text-gray-850 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-650 min-h-20 leading-relaxed"
          />
        </div>

        {/* Tabel Pengamatan */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-palm-900 uppercase tracking-wider">
            📊 B. Tabel Matriks Investigasi Perbandingan Nutrisi Berbuka
          </h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-light mb-2">
            Isi atau lengkapi matriks biokimia di bawah ini berdasarkan diskusi dan penelusuran pustaka kelompokmu:
          </p>

          <div className="overflow-x-auto border border-palm-200 rounded-xl">
            <table className="w-full text-xs text-left text-gray-700">
              <thead className="bg-palm-800 text-white text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-3.5 border-r border-palm-700">Makanan / Takjil</th>
                  <th className="p-3.5 border-r border-palm-700">Kecepatan Absorpsi Gula</th>
                  <th className="p-3.5 border-r border-palm-700">Tipe Karbohidrat utama</th>
                  <th className="p-3.5 border-r border-palm-700">Efek Beban Lambung</th>
                  <th className="p-3.5">Kadar Serat Kasar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-palm-100 bg-white">
                {lkpdState.tabelPengamatan.map((row, idx) => (
                  <tr key={idx} className="hover:bg-palm-50/30 transition-colors">
                    <td className="p-3 font-semibold text-palm-950 border-r border-palm-100 bg-palm-50/25">
                      {row.makanan}
                    </td>
                    <td className="p-2 border-r border-palm-100">
                      {idx === 0 ? (
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded inline-block">
                          {row.kecepatanEnergi}
                        </span>
                      ) : (
                        <input
                          type="text"
                          value={row.kecepatanEnergi}
                          onChange={e => handleTableChange(idx, "kecepatanEnergi", e.target.value)}
                          placeholder="e.g. Lambat (2 jam)"
                          className="w-full bg-palm-50/20 border border-palm-150 px-2 py-1.5 rounded outline-none focus:border-palm-600 font-mono text-[11px]"
                        />
                      )}
                    </td>
                    <td className="p-2 border-r border-palm-100">
                      {idx === 0 ? (
                        <span className="text-gray-800 font-semibold">{row.kandunganGula}</span>
                      ) : (
                        <input
                          type="text"
                          value={row.kandunganGula}
                          onChange={e => handleTableChange(idx, "kandunganGula", e.target.value)}
                          placeholder="e.g. Sukrosa pekat"
                          className="w-full bg-palm-50/20 border border-palm-150 px-2 py-1.5 rounded outline-none focus:border-palm-600 font-mono text-[11px]"
                        />
                      )}
                    </td>
                    <td className="p-2 border-r border-palm-100">
                      {idx === 0 ? (
                        <span className="text-gray-800 font-medium">{row.efekLambung}</span>
                      ) : (
                        <input
                          type="text"
                          value={row.efekLambung}
                          onChange={e => handleTableChange(idx, "efekLambung", e.target.value)}
                          placeholder="e.g. Shock kram / berat"
                          className="w-full bg-palm-50/20 border border-palm-150 px-2 py-1.5 rounded outline-none focus:border-palm-600 font-mono text-[11px]"
                        />
                      )}
                    </td>
                    <td className="p-2">
                      {idx === 0 ? (
                        <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded inline-block">
                          {row.seratKasar}
                        </span>
                      ) : (
                        <input
                          type="text"
                          value={row.seratKasar}
                          onChange={e => handleTableChange(idx, "seratKasar", e.target.value)}
                          placeholder="e.g. Sangat Rendah"
                          className="w-full bg-palm-50/20 border border-palm-150 px-2 py-1.5 rounded outline-none focus:border-palm-600 font-mono text-[11px]"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Analisis Data */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-palm-900 uppercase tracking-wider flex items-center gap-1">
            <ClipboardCheck className="h-4.5 w-4.5" /> C. Lembar Analisis Teoritis & Teologis
          </h4>

          {/* Question 1 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block leading-relaxed">
              Pertanyaan 1: Telaahlah keterkaitan firman Allah dalam QS. Maryam: 25-26 mengenai khasiat medis buah kurma dengan mekanisme kontraksi fisiologis miometrium rahim Maryam yang terkuras saat melahirkan!
            </label>
            <textarea
              value={lkpdState.analisisMaryamm25}
              onChange={e => handleTextChange("analisisMaryamm25", e.target.value)}
              placeholder="Hubungkan hormon alami kurma (oxytocin-like) dengan kekuatan kontraksi rahim dan energi monosakaridanya..."
              className="w-full text-xs text-gray-850 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-24 leading-relaxed"
            />
          </div>

          {/* Question 2 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 block leading-relaxed">
              Pertanyaan 2: Berdasarkan tabel pengamatan di atas, bandingkan mengapa berbuka puasa dengan minimal 3 butir kurma jauh lebih adaptif bagi pankreas dan metabolisme tubuh dibanding meminum es sirup dingin bergula tinggi!
            </label>
            <textarea
              value={lkpdState.analisisBukaPuasa}
              onChange={e => handleTextChange("analisisBukaPuasa", e.target.value)}
              placeholder="Ulaslah peranan serat dan Indeks Glikemik rendah kurma dalam mencegah lonjakan gula plasma darah..."
              className="w-full text-xs text-gray-850 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-24 leading-relaxed"
            />
          </div>
        </div>

        {/* Kesimpulan */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-palm-900 uppercase tracking-wider">
            📒 D. Kesimpulan Akhir Penyelidikan Kelompok
          </h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-light mb-1">
            Tulislah kesimpulan komprehensif yang menceritakan hubungan sains dan agama pada keajaiban buah kurma:
          </p>
          <textarea
            value={lkpdState.kesimpulan}
            onChange={e => handleTextChange("kesimpulan", e.target.value)}
            placeholder="Tulis kesimpulan kelompok..."
            className="w-full text-xs text-gray-850 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-24 leading-relaxed"
          />
        </div>

        {/* LKPD Refleksi Mandiri */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-palm-900 uppercase tracking-wider">
            🤝 E. Refleksi Kolaboratif Kelompok
          </h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-light mb-1">
            Tuliskan apa saja tantangan terberat yang dialami dalam menyatukan hadits/ayat Qur'an dengan literatur biologi modern dalam LKPD ini, dan bagaimana kelompok mengatasinya:
          </p>
          <textarea
            value={lkpdState.refleksiMandiri}
            onChange={e => handleTextChange("refleksiMandiri", e.target.value)}
            placeholder="Tulis refleksi kelompok..."
            className="w-full text-xs text-gray-850 bg-palm-50/20 border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-20 leading-relaxed"
          />
        </div>

      </div>
    </div>
  );
}
