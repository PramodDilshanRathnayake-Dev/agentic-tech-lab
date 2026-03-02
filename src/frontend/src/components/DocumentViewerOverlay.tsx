'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, RefreshCcw, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DocumentViewerOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    documentType: 'prd' | 'sad';
    content: string;
    comments: string[];
    onAddComment: (comment: string) => void;
    onRequestRevision: () => void;
    isRevising: boolean;
}

export function DocumentViewerOverlay({
    isOpen,
    onClose,
    documentType,
    content,
    comments,
    onAddComment,
    onRequestRevision,
    isRevising
}: DocumentViewerOverlayProps) {
    const [newComment, setNewComment] = useState('');
    const commentsEndRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        commentsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [comments]);

    // Scroll content to top when content changes (after revision)
    useEffect(() => {
        contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, [content]);

    if (!isOpen) return null;

    const isPrd = documentType === 'prd';
    const accentColor = isPrd ? '#00D2FF' : '#B026FF';
    const title = isPrd ? 'Product Requirement Document (PRD)' : 'Software Architecture Design (SAD)';

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        onAddComment(newComment.trim());
        setNewComment('');
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0A111F]/90 backdrop-blur-lg" onClick={onClose} />

            {/* Full-screen panel */}
            <div className="relative w-[95vw] h-[92vh] bg-[#0B1221] rounded-2xl border border-[#1E2D4A] shadow-[0_20px_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-[#1E2D4A] bg-[#0B1221] flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}50` }}>
                            <FileText size={20} style={{ color: accentColor }} />
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-lg tracking-wide">{title}</h2>
                            <p className="text-xs mt-0.5" style={{ color: accentColor }}>CEO Review Mode</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-[#64748B] hover:text-white transition-colors p-2 rounded-lg hover:bg-[#1E2D4A]">
                        <X size={22} />
                    </button>
                </div>

                {/* Accent line */}
                <div className="h-[2px] flex-shrink-0" style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }} />

                {/* Body: Document + Comments */}
                <div className="flex flex-1 min-h-0">

                    {/* Document Content */}
                    <div ref={contentRef} className="flex-1 overflow-y-auto p-10">
                        <div className="max-w-4xl mx-auto prose-container">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({ children }) => (
                                        <h1 className="text-2xl font-black mb-4 mt-8 first:mt-0 pb-2 border-b border-[#1E2D4A]" style={{ color: accentColor }}>{children}</h1>
                                    ),
                                    h2: ({ children }) => (
                                        <h2 className="text-xl font-bold text-white mb-3 mt-6">{children}</h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-base font-bold text-white/90 mb-2 mt-4">{children}</h3>
                                    ),
                                    p: ({ children }) => (
                                        <p className="text-slate-300 leading-relaxed mb-4 text-[15px]">{children}</p>
                                    ),
                                    ul: ({ children }) => (
                                        <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1.5 text-[15px] ml-2">{children}</ul>
                                    ),
                                    ol: ({ children }) => (
                                        <ol className="list-decimal list-inside text-slate-300 mb-4 space-y-1.5 text-[15px] ml-2">{children}</ol>
                                    ),
                                    li: ({ children }) => (
                                        <li className="text-slate-300 leading-relaxed">{children}</li>
                                    ),
                                    strong: ({ children }) => (
                                        <strong className="text-white font-bold">{children}</strong>
                                    ),
                                    em: ({ children }) => (
                                        <em className="text-slate-200 italic">{children}</em>
                                    ),
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 pl-4 my-4 text-slate-400 italic" style={{ borderColor: accentColor }}>{children}</blockquote>
                                    ),
                                    code: ({ children, className }) => {
                                        const isBlock = className?.includes('language-');
                                        if (isBlock) {
                                            return (
                                                <code className="block bg-[#0A111F] border border-[#1E2D4A] rounded-lg p-4 text-sm text-slate-300 font-mono overflow-x-auto my-4">{children}</code>
                                            );
                                        }
                                        return <code className="bg-[#1E2D4A] text-[#00D2FF] px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
                                    },
                                    pre: ({ children }) => (
                                        <pre className="bg-[#0A111F] border border-[#1E2D4A] rounded-lg p-4 text-sm overflow-x-auto my-4">{children}</pre>
                                    ),
                                    table: ({ children }) => (
                                        <div className="overflow-x-auto my-4 rounded-lg border border-[#1E2D4A]">
                                            <table className="w-full text-sm text-slate-300">{children}</table>
                                        </div>
                                    ),
                                    thead: ({ children }) => (
                                        <thead className="bg-[#121E31] text-white text-xs uppercase tracking-wider">{children}</thead>
                                    ),
                                    th: ({ children }) => (
                                        <th className="px-4 py-3 text-left font-bold border-b border-[#1E2D4A]">{children}</th>
                                    ),
                                    td: ({ children }) => (
                                        <td className="px-4 py-3 border-b border-[#1E2D4A]/50">{children}</td>
                                    ),
                                    hr: () => (
                                        <hr className="border-[#1E2D4A] my-6" />
                                    ),
                                    a: ({ children, href }) => (
                                        <a href={href} className="underline underline-offset-2" style={{ color: accentColor }}>{children}</a>
                                    ),
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {/* Comments Sidebar */}
                    <div className="w-[320px] border-l border-[#1E2D4A] bg-[#0A111F] flex flex-col flex-shrink-0">
                        {/* Comments Header */}
                        <div className="px-5 py-4 border-b border-[#1E2D4A]">
                            <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: accentColor }}>
                                Review Comments
                            </h3>
                            <p className="text-[#64748B] text-[10px] mt-1">{comments.length} comment{comments.length !== 1 ? 's' : ''}</p>
                        </div>

                        {/* Comments List */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {comments.length === 0 && (
                                <div className="text-center text-[#64748B] text-xs py-8">
                                    No comments yet.<br />Add your review notes below.
                                </div>
                            )}
                            {comments.map((comment, i) => (
                                <div key={i} className="bg-[#121E31] border border-[#1E2D4A] rounded-lg p-3 group">
                                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{comment}</p>
                                    <p className="text-[#64748B] text-[10px] mt-2">Comment #{i + 1}</p>
                                </div>
                            ))}
                            <div ref={commentsEndRef} />
                        </div>

                        {/* Comment Input */}
                        <div className="p-4 border-t border-[#1E2D4A]">
                            <div className="relative">
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleAddComment();
                                        }
                                    }}
                                    placeholder="Add a comment..."
                                    className="w-full bg-[#121E31] border border-[#1E2D4A] rounded-xl py-3 pl-4 pr-12 text-white text-sm focus:outline-none transition-colors resize-none min-h-[48px] max-h-[120px]"
                                    style={{ borderColor: newComment ? `${accentColor}50` : undefined }}
                                    rows={2}
                                />
                                <button
                                    onClick={handleAddComment}
                                    disabled={!newComment.trim()}
                                    className="absolute right-2 bottom-2 p-2 rounded-lg transition-colors disabled:opacity-30"
                                    style={{ color: accentColor }}
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-8 py-4 border-t border-[#1E2D4A] bg-[#0B1221] flex-shrink-0">
                    <button
                        onClick={onClose}
                        className="text-[#64748B] hover:text-white transition-colors text-sm font-medium"
                    >
                        Close
                    </button>
                    <button
                        onClick={onRequestRevision}
                        disabled={isRevising || comments.length === 0}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#00D2FF] to-[#B026FF] text-white px-8 py-3 rounded-xl font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                    >
                        {isRevising ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Revising...
                            </>
                        ) : (
                            <>
                                <RefreshCcw size={16} />
                                Request Revision ({comments.length})
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
