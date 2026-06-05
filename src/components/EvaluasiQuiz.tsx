import React, { useState } from "react";
import { soalPilihanGanda, soalEssay } from "../data";
import { StudentAnswers } from "../types";
import { HelpCircle, Check, AlertTriangle, Send, Sparkles, BookOpen, Clock, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EvaluasiQuizProps {
  answers: StudentAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<StudentAnswers>>;
}

export default function EvaluasiQuiz({ answers, setAnswers }: EvaluasiQuizProps) {
  const [activeTab, setActiveTab] = useState<"pilihan-ganda" | "essay">("pilihan-ganda");
  const [activeMcId, setActiveMcId] = useState<number>(1);
  const [mcSubmitted, setMcSubmitted] = useState<boolean>(false);

  // Selected Option for the active Multiple choice
  const selectedOption = answers.pilihanGanda[activeMcId] || "";

  const handleSelectOption = (opt: string) => {
    if (mcSubmitted) return; // Prevent change after submission
    setAnswers(prev => ({
      ...prev,
      pilihanGanda: { ...prev.pilihanGanda, [activeMcId]: opt }
    }));
  };

  const handleEssayChange = (id: number, val: string) => {
    setAnswers(prev => ({
      ...prev,
      essay: { ...prev.essay, [id]: val }
    }));
  };

  // Submit and query secure Express server for AI evaluation of an essay question
  const evaluateEssayWithAi = async (id: number) => {
    const studentAns = answers.essay[id] || "";
    if (!studentAns.trim()) {
      alert("Silakan ketik jawaban esai Anda terlebih dahulu sebelum dikoreksi oleh AI!");
      return;
    }

    const targetQuestion = soalEssay.find(q => q.id === id);
    if (!targetQuestion) return;

    // Set loading state
    setAnswers(prev => ({
      ...prev,
      essayEvaluations: {
        ...prev.essayEvaluations,
        [id]: { score: 0, feedback: "", loading: true }
      }
    }));

    try {
      const response = await fetch("/api/evaluate-essay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          pertanyaan: targetQuestion.pertanyaan,
          jawabanSiswa: studentAns,
          rubrikPanduan: targetQuestion.rubrikPanduan
        })
      });

      const data = await response.json();
      if (response.ok) {
        setAnswers(prev => ({
          ...prev,
          essayEvaluations: {
            ...prev.essayEvaluations,
            [id]: { score: data.score, feedback: data.feedback, loading: false }
          }
        }));
      } else {
        throw new Error(data.error || "Gagal menghubungi modul evaluasi");
      }
    } catch (err: any) {
      console.error(err);
      setAnswers(prev => ({
        ...prev,
        essayEvaluations: {
          ...prev.essayEvaluations,
          [id]: { 
            score: 0, 
            feedback: "Koneksi ke AI Tutor terputus. Silakan periksa kunci API Anda di Settings atau gunakan rubrik penilaian mandiri berdasar kunci.", 
            loading: false 
          }
        }
      }));
    }
  };

  // Multiple choice score calculation
  const getMcCountCorrect = () => {
    let correct = 0;
    soalPilihanGanda.forEach(q => {
      if (answers.pilihanGanda[q.id] === q.kunci) {
        correct++;
      }
    });
    return correct;
  };

  const handleResetMc = () => {
    setAnswers(prev => ({ ...prev, pilihanGanda: {} }));
    setMcSubmitted(false);
    setActiveMcId(1);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="rounded-2xl border border-palm-100 bg-white p-2.5 shadow-sm flex">
        <button
          onClick={() => setActiveTab("pilihan-ganda")}
          className={`flex-1 text-center py-2 text-xs font-bold tracking-wider rounded-xl transition-all ${
            activeTab === "pilihan-ganda"
              ? "bg-palm-800 text-white shadow-sm"
              : "text-palm-850 hover:bg-palm-50"
          }`}
        >
          📝 10 Pilihan Ganda (HOTS)
        </button>
        <button
          onClick={() => setActiveTab("essay")}
          className={`flex-1 text-center py-2 text-xs font-bold tracking-wider rounded-xl transition-all ${
            activeTab === "essay"
              ? "bg-palm-800 text-white shadow-sm"
              : "text-palm-850 hover:bg-palm-50"
          }`}
        >
          🧠 5 Esai Komprehensif (AI Tutor)
        </button>
      </div>

      {/* QUIZ WORKSPACE */}
      <div className="rounded-2xl border border-palm-150 bg-white p-6 shadow-sm min-h-[460px]">
        
        {/* TAB 1: PILIHAN GANDA */}
        {activeTab === "pilihan-ganda" && (
          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Left selector sidebar column */}
            <div className="lg:col-span-3 space-y-4">
              <div className="rounded-xl border border-palm-100 p-4 bg-palm-50/50 space-y-3">
                <h4 className="text-xs font-bold text-palm-950 uppercase border-b border-palm-100 pb-1.5 flex justify-between">
                  <span>Daftar Soal</span>
                  <span className="text-gray-400 font-mono text-[10px]">{answers.pilihanGanda ? Object.keys(answers.pilihanGanda).length : 0}/10 Terisi</span>
                </h4>
                
                <div className="grid grid-cols-5 gap-1.5">
                  {soalPilihanGanda.map(q => {
                    const answered = !!answers.pilihanGanda[q.id];
                    const isCorrect = answers.pilihanGanda[q.id] === q.kunci;
                    let numClass = "bg-white text-gray-700 border-gray-200 hover:bg-gray-100";
                    
                    if (activeMcId === q.id) {
                      numClass = "bg-palm-800 text-white border-palm-800 ring-2 ring-palm-100";
                    } else if (mcSubmitted) {
                      numClass = isCorrect 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                        : "bg-red-50 text-red-700 border-red-200";
                    } else if (answered) {
                      numClass = "bg-palm-50 border-palm-300 text-palm-950 font-bold";
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => setActiveMcId(q.id)}
                        className={`font-mono text-center py-2 text-xs font-semibold rounded-lg border cursor-pointer transition-all ${numClass}`}
                      >
                        {q.id}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status and scoring dashboard */}
              {mcSubmitted ? (
                <div className="rounded-xl border border-palm-200 bg-palm-50 p-4 space-y-3.5">
                  <h4 className="text-[11px] font-bold text-palm-950 uppercase text-center">Rekap Hasil Kuis</h4>
                  <div className="text-center space-y-1">
                    <p className="text-4xl font-serif font-black text-palm-800">
                      {getMcCountCorrect() * 10} <span className="text-sm font-sans font-normal text-gray-400">/ 100</span>
                    </p>
                    <p className="text-[10px] text-gray-500 font-medium">Bener {getMcCountCorrect()} dari 10 soal</p>
                  </div>
                  
                  <div className="rounded bg-white p-2.5 text-center border">
                    <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">Predikat Akhir:</span>
                    <span className="text-xs font-bold text-amber-date-800 block">
                      {getMcCountCorrect() >= 9 ? "🏆 Saintis Mufassir Ulul Albab" :
                       getMcCountCorrect() >= 7 ? "🔬 Penyelidik Sains Berbakat" : 
                       getMcCountCorrect() >= 5 ? "📚 Pembelajar Integratif Baik" : 
                       "📖 Semangat Membaca Kembali"}
                    </span>
                  </div>

                  <button
                    onClick={handleResetMc}
                    className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-red-50 text-red-700 py-1.5 text-xs font-bold hover:bg-red-100 transition-colors"
                  >
                    <RefreshCw className="h-4 w-4" /> Ulangi Kuis PJ
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      if (Object.keys(answers.pilihanGanda).length < 10 && !confirm("Beberapa pertanyaan kuis belum dijawab. Apakah Anda yakin ingin mengirim kuis sekarang?")) {
                        return;
                      }
                      setMcSubmitted(true);
                    }}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-palm-750 text-white py-2.5 text-xs font-bold hover:bg-palm-850 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    🚀 Kirim Jawaban Kuis
                  </button>
                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                    Jawaban yang terkirim akan langsung dievaluasi dengan penjelasan biologi mendalam.
                  </p>
                </div>
              )}
            </div>

            {/* Right Question Card column */}
            <div className="lg:col-span-9 space-y-6">
              {soalPilihanGanda.filter(q => q.id === activeMcId).map(q => (
                <div key={q.id} className="space-y-4">
                  <div className="flex gap-2.5 items-start">
                    <span className="h-6 w-6 font-mono text-center text-xs font-bold bg-palm-850 text-amber-date-200 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      {q.id}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-800 leading-relaxed font-serif">
                      {q.pertanyaan}
                    </h3>
                  </div>

                  {/* Options List */}
                  <div className="space-y-3.5 pl-8.5">
                    {(Object.keys(q.pilihan) as ("A" | "B" | "C" | "D")[]).map(key => {
                      const optText = q.pilihan[key];
                      const isSelected = selectedOption === key;
                      const isKunci = q.kunci === key;
                      
                      let btnStyle = "bg-white border-gray-200 text-gray-700 hover:border-palm-600 hover:bg-palm-50/15";
                      
                      if (mcSubmitted) {
                        if (isKunci) {
                          btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-medium";
                        } else if (isSelected) {
                          btnStyle = "bg-red-50 border-red-300 text-red-900";
                        } else {
                          btnStyle = "bg-gray-50 border-gray-200 text-gray-400 opacity-60";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-palm-900 border-palm-900 text-white font-semibold";
                      }

                      return (
                        <button
                          key={key}
                          onClick={() => handleSelectOption(key)}
                          className={`w-full flex items-start gap-3 rounded-xl border p-3.5 text-left text-xs transition-all ${btnStyle}`}
                        >
                          <span className={`h-5 w-5 font-mono text-xs font-bold rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected && !mcSubmitted ? "bg-amber-date-600 border-amber-date-650 text-white" : "bg-gray-50 text-gray-500 border-gray-300"
                          }`}>
                            {key}
                          </span>
                          <span className="leading-relaxed">{optText}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Show analysis explainers only after submission */}
                  <AnimatePresence>
                    {mcSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="rounded-xl bg-palm-50 border border-palm-150 p-4 space-y-2 mt-4"
                      >
                        <div className="flex items-center gap-1.5 text-palm-900 font-bold text-xs border-b border-palm-100 pb-1.5">
                          <BookOpen className="h-4.5 w-4.5 text-palm-700" />
                          <span>Analisis Penjelasan Ilmiah-Keagamaan</span>
                        </div>
                        <p className="text-xs text-palm-950 font-light leading-relaxed">
                          {q.penjelasanSainsDanAgama}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Stepper buttons */}
                  <div className="flex justify-between border-t border-gray-100 pt-4">
                    <button
                      onClick={() => activeMcId > 1 && setActiveMcId(activeMcId - 1)}
                      disabled={activeMcId === 1}
                      className="rounded-lg border px-3 py-1.5 text-xs font-medium border-gray-250 text-gray-600 disabled:opacity-40"
                    >
                      Sebelumnya
                    </button>
                    <button
                      onClick={() => activeMcId < 10 && setActiveMcId(activeMcId + 1)}
                      disabled={activeMcId === 10}
                      className="rounded-lg bg-palm-800 text-white px-4 py-1.5 text-xs font-bold hover:bg-palm-900 disabled:opacity-40"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: SOAL ESSAY + AI TUTOR */}
        {activeTab === "essay" && (
          <div className="space-y-8">
            <div className="rounded-xl border border-purple-200 bg-purple-50/40 p-4 text-xs text-purple-950 leading-relaxed font-light flex gap-3">
              <Sparkles className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <strong>Fitur Unggulan AI Tutor (Gemini):</strong> Ketik jawaban esai Anda secara lengkap dan klik tombol Koreksi AI. Model <strong>Gemini-3.5</strong> yang berjalan di server akan membaca jawaban Anda secara holistik, mengevaluasi sains dan teks, memberi penilaian angka, dan menyajikan umpan balik kritis untuk menyempurnakan tulisan ilmiahmu!
              </div>
            </div>

            <div className="space-y-6">
              {soalEssay.map((item, index) => {
                const studentAns = answers.essay[item.id] || "";
                const evaluation = answers.essayEvaluations[item.id];
                const isLoading = evaluation?.loading;

                return (
                  <div key={item.id} className="rounded-xl border border-palm-100 bg-palm-50/25 p-5 space-y-4 shadow-3xs">
                    <div className="flex gap-2.5 items-start">
                      <span className="h-6 w-6 font-mono text-center text-xs font-bold bg-palm-800 text-amber-date-200 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        {item.id}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-800 leading-relaxed font-serif">
                        {item.pertanyaan}
                      </h4>
                    </div>

                    {/* Writing Area */}
                    <div className="pl-8.5 space-y-3">
                      <textarea
                        value={studentAns}
                        onChange={e => handleEssayChange(item.id, e.target.value)}
                        placeholder="Ketik analisis ilmiah-keagamaan kelompok Anda di sini..."
                        className="w-full text-xs text-gray-850 bg-white border border-palm-200 rounded-lg p-3 outline-none focus:border-palm-600 min-h-24 leading-relaxed"
                      />

                      <div className="flex flex-wrap items-center justify-between gap-3">
                        {/* Static Rubric guidance disclosure */}
                        <details className="cursor-pointer text-[11px] text-gray-400 group">
                          <summary className="font-semibold text-gray-500 hover:text-palm-700 outline-none">
                            ❔ Lihat Panduan Rubrik Jawaban Mandiri
                          </summary>
                          <p className="mt-2 text-gray-500 bg-white border rounded p-3 leading-relaxed font-light">
                            {item.rubrikPanduan}
                          </p>
                        </details>

                        <button
                          onClick={() => evaluateEssayWithAi(item.id)}
                          disabled={isLoading}
                          className="rounded-lg bg-purple-600 text-white px-4 py-2 text-xs font-bold hover:bg-purple-700 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          {isLoading ? (
                            <>
                              <Clock className="h-4 w-4 animate-spin" />
                              Sedang Menganalisis...
                            </>
                          ) : (
                            <>
                              <Sparkles className="h-4 w-4" />
                              Minta Evaluasi AI Tutor
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* AI Feedback Panel */}
                    <AnimatePresence>
                      {evaluation && !isLoading && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="rounded-xl border border-purple-200 bg-purple-50/20 p-4 space-y-3 pl-8.5"
                        >
                          <div className="flex items-center justify-between border-b border-purple-100 pb-1.5">
                            <span className="text-xs font-bold text-purple-900 flex items-center gap-1">
                              <Sparkles className="h-4.5 w-4.5 text-purple-600" />
                              Koreksi Formatif AI Tutor (Gemini-3.5)
                            </span>
                            
                            <div className="rounded-md bg-purple-650 text-white px-2.5 py-0.5 font-bold font-mono text-xs">
                              Skor: {evaluation.score} / 100
                            </div>
                          </div>

                          <p className="text-xs text-gray-700 leading-relaxed font-light whitespace-pre-line leading-relaxed">
                            {evaluation.feedback}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
