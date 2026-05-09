"use client";

import { useState } from "react";
import axios from "axios";

export default function ThreatMonitor() {
  const [target, setTarget] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    try {
      // Intentionally using vulnerable axios for demonstration
      const response = await axios.post("/api/scan", { url: target });
      setResult(response.data);
    } catch (error: any) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-gray-800 pb-6 mt-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Threat Monitor Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Advanced Security Scanning & Vulnerability Detection</p>
        </header>

        <main className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Initiate Scan</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Target URL</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-950 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="https://example.com"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                />
              </div>
              <button 
                onClick={handleScan}
                disabled={loading || !target}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:opacity-50 text-white font-medium py-3 px-4 rounded transition-colors"
              >
                {loading ? "Scanning..." : "Launch Threat Scan"}
              </button>
            </div>
          </section>

          <section className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-2xl flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Scan Results</h2>
            <div className="flex-1 bg-gray-950 rounded border border-gray-800 p-4 font-mono text-sm overflow-auto text-green-400 min-h-[200px]">
              {result ? (
                <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
              ) : (
                <span className="text-gray-600">Awaiting scan initiation...</span>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
