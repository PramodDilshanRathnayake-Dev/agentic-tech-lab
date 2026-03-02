import React, { useState } from 'react';
import { X, Send, Cpu, FileText, CheckCircle } from 'lucide-react';
import { DocumentViewerOverlay } from './DocumentViewerOverlay';

export function RequirementGroomingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [objective, setObjective] = useState('');
    const [constraints, setConstraints] = useState('');
    const [chatHistory, setChatHistory] = useState<{ sender: 'ceo' | 'pm', text: string }[]>([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [prd, setPrd] = useState('');
    const [sad, setSad] = useState('');
    const [isSummarizing, setIsSummarizing] = useState(false);

    // v3.1 — Document Review State
    const [viewingDoc, setViewingDoc] = useState<'prd' | 'sad' | null>(null);
    const [prdComments, setPrdComments] = useState<string[]>([]);
    const [sadComments, setSadComments] = useState<string[]>([]);
    const [isRevising, setIsRevising] = useState(false);

    React.useEffect(() => {
        if (!isOpen) {
            setStep(1);
            setObjective('');
            setConstraints('');
            setChatHistory([]);
            setCurrentMessage('');
            setPrd('');
            setSad('');
            setViewingDoc(null);
            setPrdComments([]);
            setSadComments([]);
            setIsRevising(false);
            setIsSummarizing(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleStartGrooming = async () => {
        setStep(2);
        const initialText = `Objective: ${objective}. Constraints: ${constraints}`;
        setChatHistory([{ sender: 'ceo', text: initialText }]);
        try {
            const res = await fetch('http://localhost:8080/api/grooming/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: initialText, history: [] })
            });
            const data = await res.json();
            setChatHistory(prev => [...prev, { sender: 'pm', text: data.reply }]);
        } catch (error) {
            console.error(error);
            setChatHistory(prev => [...prev, { sender: 'pm', text: "Systems offline. Mock PM: Please clarify your data compliance needs." }]);
        }
    };

    const handleSendMessage = async () => {
        if (!currentMessage.trim()) return;
        const msg = currentMessage;
        setCurrentMessage('');
        setChatHistory(prev => [...prev, { sender: 'ceo', text: msg }]);
        try {
            const res = await fetch('http://localhost:8080/api/grooming/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: msg, history: chatHistory })
            });
            const data = await res.json();
            setChatHistory(prev => [...prev, { sender: 'pm', text: data.reply }]);
        } catch (error) {
            console.error(error);
            setChatHistory(prev => [...prev, { sender: 'pm', text: "Mock PM: Duly noted. I think I have enough information now." }]);
        }
    };

    const handleFinalize = async () => {
        setStep(3);
        try {
            const res = await fetch('http://localhost:8080/api/grooming/finalize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ finalRequirements: chatHistory.map(m => m.text).join('\n') })
            });
            const data = await res.json();
            setPrd(data.prd);
            setSad(data.sad);
            // Clear comments for fresh review cycle
            setPrdComments([]);
            setSadComments([]);
            setStep(4);
        } catch (e) {
            console.error(e);
            setPrd("Mock PRD: Goal to build a scalable system.");
            setSad("Mock SAD: Event-driven architecture with 2 core APIs.");
            setStep(4);
        }
    };

    // v3.1 — Request Revision: sends compressed context + CEO comments to LLM
    const handleRequestRevision = async (docType: 'prd' | 'sad') => {
        setIsRevising(true);
        const comments = docType === 'prd' ? prdComments : sadComments;
        try {
            const res = await fetch('http://localhost:8080/api/grooming/revise', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    documentType: docType,
                    comments,
                    chatHistory,
                    currentDocument: docType === 'prd' ? prd : sad
                })
            });
            const data = await res.json();
            if (docType === 'prd') {
                setPrd(data.revisedDocument);
                setPrdComments([]); // Clear comments after revision
            } else {
                setSad(data.revisedDocument);
                setSadComments([]);
            }
        } catch (error) {
            console.error("Revision error:", error);
        } finally {
            setIsRevising(false);
        }
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <div className="absolute inset-0 bg-[#0A111F]/80 backdrop-blur-md" onClick={onClose} />

                {/* Modal Container */}
                <div className="relative w-full max-w-4xl bg-[#121E31]/90 rounded-2xl border border-[#1E2D4A] shadow-[0_15px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col max-h-[90vh] overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-[#1E2D4A]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00D2FF] to-[#B026FF] flex items-center justify-center text-white">
                                <Cpu size={16} />
                            </div>
                            <h2 className="text-white font-bold tracking-widest uppercase text-sm">AI Requirements Grooming</h2>
                        </div>
                        <button onClick={onClose} className="text-[#64748B] hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Stepper */}
                    <div className="px-8 py-4 bg-[#0A111F]/50 flex items-center justify-center gap-4 text-xs font-bold tracking-widest uppercase">
                        <div className={`px-4 py-2 rounded-full border ${step === 1 ? 'border-[#00D2FF] text-[#00D2FF] bg-[#00D2FF]/10' : 'border-[#1E2D4A] text-[#64748B]'}`}>1. Input</div>
                        <div className="h-[1px] w-8 bg-[#1E2D4A]" />
                        <div className={`px-4 py-2 rounded-full border ${step === 2 ? 'border-[#00D2FF] text-[#00D2FF] bg-[#00D2FF]/10' : 'border-[#1E2D4A] text-[#64748B]'}`}>2. Grooming</div>
                        <div className="h-[1px] w-8 bg-[#1E2D4A]" />
                        <div className={`px-4 py-2 rounded-full border ${step === 3 ? 'border-[#B026FF] text-[#B026FF] bg-[#B026FF]/10' : 'border-[#1E2D4A] text-[#64748B]'}`}>3. Architecting</div>
                        <div className="h-[1px] w-8 bg-[#1E2D4A]" />
                        <div className={`px-4 py-2 rounded-full border ${step === 4 ? 'border-[#10B981] text-[#10B981] bg-[#10B981]/10' : 'border-[#1E2D4A] text-[#64748B]'}`}>4. Review</div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto p-8">

                        {step === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-[#64748B] text-xs font-bold uppercase tracking-widest mb-2">Required Information (Objective)</label>
                                    <textarea
                                        value={objective}
                                        onChange={(e) => setObjective(e.target.value)}
                                        placeholder="e.g. We need a new compliance portal for GDPR..."
                                        className="w-full h-32 bg-[#0A111F] border border-[#1E2D4A] rounded-xl p-4 text-white focus:outline-none focus:border-[#00D2FF]/50 transition-colors resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#64748B] text-xs font-bold uppercase tracking-widest mb-2">Optional Information (Constraints)</label>
                                    <textarea
                                        value={constraints}
                                        onChange={(e) => setConstraints(e.target.value)}
                                        placeholder="e.g. Must be finished by Q3. Must integrate with AWS..."
                                        className="w-full h-24 bg-[#0A111F] border border-[#1E2D4A] rounded-xl p-4 text-white focus:outline-none focus:border-[#00D2FF]/50 transition-colors resize-none"
                                    />
                                </div>
                                <div className="flex justify-end pt-4">
                                    <button
                                        onClick={handleStartGrooming}
                                        disabled={!objective.trim()}
                                        className="bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/50 hover:bg-[#00D2FF]/30 px-8 py-3 rounded-xl font-bold tracking-widest uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                        Start Grooming
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="flex flex-col h-[500px]">
                                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                                    {chatHistory.map((msg, i) => (
                                        <div key={i} className={`flex ${msg.sender === 'ceo' ? 'justify-end' : 'justify-start'}`}>
                                            <div className="flex items-end gap-3 max-w-[80%]">
                                                {msg.sender === 'pm' && (
                                                    <div className="w-8 h-8 rounded-full border border-[#00D2FF] bg-[#121E31] p-[2px] flex-shrink-0">
                                                        <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=PM`} alt="PM" className="w-full h-full rounded-full bg-[#0B1221]" />
                                                    </div>
                                                )}

                                                <div className={`p-4 rounded-2xl border ${msg.sender === 'ceo'
                                                    ? 'bg-[#00D2FF]/10 border-[#00D2FF]/30 text-white rounded-br-none'
                                                    : 'bg-[#1E2D4A]/50 border-[#1E2D4A] text-slate-300 rounded-bl-none'
                                                    }`}>
                                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                                                </div>

                                                {msg.sender === 'ceo' && (
                                                    <div className="w-8 h-8 rounded-full border border-purple-500 bg-[#121E31] p-[2px] flex-shrink-0">
                                                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=CEO`} alt="CEO" className="w-full h-full rounded-full bg-[#0B1221]" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto">
                                    <div className="relative">
                                        <textarea
                                            value={currentMessage}
                                            onChange={(e) => setCurrentMessage(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSendMessage();
                                                }
                                            }}
                                            placeholder="Reply to the PM Agent..."
                                            className="w-full bg-[#0A111F] border border-[#1E2D4A] rounded-xl py-3 pl-4 pr-12 text-white focus:outline-none focus:border-[#00D2FF]/50 transition-colors resize-none min-h-[50px] max-h-[150px] block"
                                            rows={1}
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            className="absolute right-2 bottom-2 p-2 text-[#00D2FF] hover:bg-[#00D2FF]/10 rounded-lg transition-colors">
                                            <Send size={18} />
                                        </button>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button
                                            onClick={handleFinalize}
                                            className="bg-gradient-to-r from-[#00D2FF] to-[#B026FF] text-white px-8 py-3 rounded-xl font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all">
                                            Finalize & Hand to Architect
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="flex flex-col items-center justify-center h-[500px] text-center">
                                <div className="relative w-24 h-24 mb-6">
                                    <div className="absolute inset-0 border-4 border-[#B026FF]/20 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-[#B026FF] rounded-full border-t-transparent animate-spin"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-[#B026FF]">
                                        <Cpu size={32} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-widest uppercase mb-2">Architect is Analyzing</h3>
                                <p className="text-[#64748B] max-w-md">The AI Architect is designing the system architecture, component breakdown, and mapping necessary APIs based on the finalized PRD.</p>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="flex flex-col h-full">
                                <div className="text-center mb-8">
                                    <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-2">Documents Ready for Review</h3>
                                    <p className="text-[#64748B] text-sm">Click a document to open in full-screen view, add review comments, and request revisions.</p>
                                </div>

                                {/* Document Cards */}
                                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto w-full">
                                    {/* PRD Card */}
                                    <button
                                        onClick={() => setViewingDoc('prd')}
                                        className="group bg-[#0A111F] border border-[#1E2D4A] rounded-2xl p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:border-[#00D2FF]/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)] hover:scale-[1.02]"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center group-hover:bg-[#00D2FF]/20 transition-colors">
                                            <FileText size={28} className="text-[#00D2FF]" />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-white font-black text-xl tracking-wider mb-1">PRD</h4>
                                            <p className="text-[#64748B] text-xs">Product Requirement Document</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[#10B981] text-xs font-medium">
                                            <CheckCircle size={12} />
                                            <span>Generated</span>
                                        </div>
                                        {prdComments.length > 0 && (
                                            <div className="px-3 py-1 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] text-[10px] font-bold tracking-wider">
                                                {prdComments.length} comment{prdComments.length !== 1 ? 's' : ''}
                                            </div>
                                        )}
                                    </button>

                                    {/* SAD Card */}
                                    <button
                                        onClick={() => setViewingDoc('sad')}
                                        className="group bg-[#0A111F] border border-[#1E2D4A] rounded-2xl p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:border-[#B026FF]/50 hover:shadow-[0_0_30px_rgba(176,38,255,0.15)] hover:scale-[1.02]"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-[#B026FF]/10 border border-[#B026FF]/30 flex items-center justify-center group-hover:bg-[#B026FF]/20 transition-colors">
                                            <FileText size={28} className="text-[#B026FF]" />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-white font-black text-xl tracking-wider mb-1">SAD</h4>
                                            <p className="text-[#64748B] text-xs">Software Architecture Design</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[#10B981] text-xs font-medium">
                                            <CheckCircle size={12} />
                                            <span>Generated</span>
                                        </div>
                                        {sadComments.length > 0 && (
                                            <div className="px-3 py-1 rounded-full bg-[#B026FF]/10 border border-[#B026FF]/30 text-[#B026FF] text-[10px] font-bold tracking-wider">
                                                {sadComments.length} comment{sadComments.length !== 1 ? 's' : ''}
                                            </div>
                                        )}
                                    </button>
                                </div>

                                {/* Approve Button */}
                                <div className="flex justify-center mt-10">
                                    <button
                                        onClick={onClose}
                                        className="bg-gradient-to-r from-[#10B981] to-[#047857] text-white px-10 py-3.5 rounded-xl font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-[#10B981]/50">
                                        Approve Mission
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Document Viewer Overlay */}
            <DocumentViewerOverlay
                isOpen={viewingDoc !== null}
                onClose={() => setViewingDoc(null)}
                documentType={viewingDoc || 'prd'}
                content={viewingDoc === 'prd' ? prd : sad}
                comments={viewingDoc === 'prd' ? prdComments : sadComments}
                onAddComment={(comment) => {
                    if (viewingDoc === 'prd') {
                        setPrdComments(prev => [...prev, comment]);
                    } else {
                        setSadComments(prev => [...prev, comment]);
                    }
                }}
                onRequestRevision={() => {
                    if (viewingDoc) handleRequestRevision(viewingDoc);
                }}
                isRevising={isRevising}
            />
        </>
    );
}
