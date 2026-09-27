import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Trash2 } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in portfolio app:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleResetCache = () => {
    try {
      localStorage.removeItem('nabila_porto_v4_en');
      localStorage.removeItem('nabila_dark_mode');
      localStorage.removeItem('nabila_porto_bookmarks');
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f7] text-[#201d1e] flex items-center justify-center p-6 font-sans">
          <div className="max-w-xl w-full bg-white rounded-2xl border border-neutral-200/90 shadow-xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-rose-50 text-rose-600">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-display text-neutral-900">
                  Terjadi Kesalahan Saat Memuat Portofolio
                </h1>
                <p className="text-xs text-neutral-500">
                  Aplikasi terhenti karena ada data atau file gambar yang tidak valid
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-800 space-y-2 overflow-x-auto">
              <div className="font-semibold text-rose-600">
                {this.state.error?.name}: {this.state.error?.message}
              </div>
              {this.state.errorInfo?.componentStack && (
                <pre className="text-[11px] text-neutral-600 max-h-40 overflow-y-auto whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>

            <div className="space-y-3 text-xs text-neutral-600 leading-relaxed bg-[#fceef2]/50 p-4 rounded-xl border border-[#f5d0da]">
              <div className="font-semibold text-[#b84d66]">Kemungkinan Penyebab & Solusi:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Path Gambar:</strong> Jika memasukkan foto baru, jangan gunakan <code className="bg-white px-1 py-0.5 rounded">require()</code>. Taruh foto di folder <code className="bg-white px-1 py-0.5 rounded">public/</code> dan panggil dengan <code className="bg-white px-1 py-0.5 rounded">'/nama_foto.jpg'</code>.
                </li>
                <li>
                  <strong>Cache LocalStorage:</strong> Browser mungkin masih menyimpan cache format lama. Klik tombol di bawah untuk membersihkan cache.
                </li>
                <li>
                  <strong>Syntax TypeScript:</strong> Periksa apakah ada tanda koma atau tanda kutip yang tertinggal di <code className="bg-white px-1 py-0.5 rounded">src/data/defaultPortfolio.ts</code>.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleResetCache}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#d97288] hover:bg-[#c65e74] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Reset Cache & Muat Ulang</span>
              </button>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh Halaman</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
