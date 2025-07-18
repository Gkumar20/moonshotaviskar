import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function AIConfiguratorWizard() {
  const [selectedSignals, setSelectedSignals] = useState<string[]>([]);
  const [model, setModel] = useState<string>("");
  const [rules, setRules] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<{
    summary: string;
    accuracy: string;
    topFactors: string[];
    modelUsed: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [autoSuggestEnabled, setAutoSuggestEnabled] = useState<boolean>(true);
  const [suggestionLoading, setSuggestionLoading] = useState<boolean>(false);
  const [aiMode, setAiMode] = useState<string>("Agentic");
  const [suggestions, setSuggestions] = useState<{
    churnSignal: string;
    aiModel: string;
    ruleSuggestion: string;
  }>({
    churnSignal: "Consider adding \"Frequent Complaints\" for better accuracy.",
    aiModel: "\"Random Forest\" is recommended for handling complex datasets.",
    ruleSuggestion: "Try \"if Network Drops > 5 then flag as High Risk\".",
  });

  const runAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      const result = {
        summary: "High churn probability detected based on configured rules.",
        accuracy: "92.3%",
        topFactors: selectedSignals,
        modelUsed: model,
      };
      setAnalysisResult(result);
      setLoading(false);
    }, 2000);
  };

  const exportConfig = () => {
    if (!analysisResult) return;
    const json = JSON.stringify({ selectedSignals, model, rules, analysisResult }, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-config-analysis.json";
    a.click();
  };

  const generateSuggestions = () => {
    setSuggestionLoading(true);
    setTimeout(() => {
      setSuggestions({
        churnSignal: "Consider adding \"Negative Feedback\" for improved insights.",
        aiModel: "\"Neural Network\" is ideal for advanced pattern recognition.",
        ruleSuggestion: "Try \"if Late Payments > 2 then flag as Medium Risk\".",
      });
      setSuggestionLoading(false);
    }, 2000);
  };

  const churnSignalChartData = {
    labels: ["Customer 1", "Customer 2", "Customer 3", "Customer 4", "Customer 5"],
    datasets: [
      {
        label: "Churn Risk %",
        data: [85, 40, 92, 30, 78],
        borderColor: "rgba(99, 102, 241, 0.8)",
        backgroundColor: "rgba(99, 102, 241, 0.3)",
        tension: 0.3,
      },
    ],
  };

  const dummyCustomers = [
    { name: "John Doe", usage: "Low", issues: 3, churnRisk: "High" },
    { name: "Jane Smith", usage: "Medium", issues: 1, churnRisk: "Medium" },
    { name: "Raj Kumar", usage: "Very Low", issues: 4, churnRisk: "High" },
    { name: "Emily Green", usage: "High", issues: 0, churnRisk: "Low" },
    { name: "Carlos Vega", usage: "Low", issues: 2, churnRisk: "High" },
  ];

  return (
    <div className="mt-10 md:mt-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-2xl shadow-2xl p-6 md:p-10 border border-indigo-200">
      <h3 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 text-indigo-800 flex items-center gap-2">🤖 DIY AI Configurator</h3>

      <div className="mb-4 md:mb-6">
        <label className="block mb-2 font-semibold text-gray-700">📂 Upload Optional Customer Excel File</label>
        <input
          type="file"
          accept=".xlsx, .csv"
          className="w-full border border-indigo-300 rounded-lg p-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-200">
          <label className="block mb-2 font-semibold text-gray-700">✨ Select Churn Signals</label>
          <select
            multiple
            className="w-full border border-indigo-200 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setSelectedSignals(Array.from(e.target.selectedOptions, o => o.value))}
          >
            <option value="Network Drops">📶 Network Drops</option>
            <option value="Low Usage">📉 Low Usage</option>
            <option value="Late Payments">⏰ Late Payments</option>
            <option value="Negative Feedback">💬 Negative Feedback</option>
            <option value="Frequent Complaints">📢 Frequent Complaints</option>
          </select>
        </div>
        <div className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-200">
          <label className="block mb-2 font-semibold text-gray-700">🧠 Choose AI Model</label>
          <select
            className="w-full border border-indigo-200 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setModel(e.target.value)}
            value={model}
          >
            <option value="">-- Select Model --</option>
            <option value="Decision Tree">🌲 Decision Tree</option>
            <option value="Random Forest">🌳 Random Forest</option>
            <option value="Neural Network">🕸 Neural Network</option>
          </select>
        </div>
        <div className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-200">
          <label className="block mb-2 font-semibold text-gray-700">⚙️ Configure Rules</label>
          <textarea
            className="w-full border border-indigo-200 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
            rows={3}
            placeholder="e.g. if Late Payments > 3 then flag as High Risk"
            value={rules}
            onChange={(e) => setRules(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white p-3 md:p-4 rounded-xl shadow border border-gray-200 mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex-1">
          <h4 className="text-xl font-bold text-indigo-700 mb-4">🤖 Generated AI Suggestions</h4>
          {suggestionLoading ? (
            <div className="text-center text-indigo-600 font-semibold">
              Generating response based on churn signals... Please wait.
            </div>
          ) : (
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Churn Signal:</strong> {suggestions.churnSignal}
              </li>
              <li>
                <strong>AI Model:</strong> {suggestions.aiModel}
              </li>
              <li>
                <strong>Rule Suggestion:</strong> {suggestions.ruleSuggestion}
              </li>
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={generateSuggestions}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            🔄 Generate Suggestions
          </button>
          <label className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={autoSuggestEnabled}
              onChange={(e) => setAutoSuggestEnabled(e.target.checked)}
              className="rounded border-gray-300"
            />
            Enable Auto-Suggestions
          </label>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">AI Agentic Mode</label>
            <select
              className="w-full border border-indigo-200 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
              value={aiMode}
              onChange={(e) => setAiMode(e.target.value)}
            >
              <option value="Agentic">Agentic</option>
              <option value="Assistive">Assistive</option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={runAnalysis}
        className="mt-6 md:mt-10 px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
      >
        🚀 Run AI Analysis
      </button>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md z-50">
          <div className="text-[5rem] md:text-[10rem] animate-pulse drop-shadow-xl">🧠</div>
        </div>
      )}

      {analysisResult && (
        <div className="mt-8 md:mt-12 bg-white border border-indigo-100 shadow-xl rounded-xl p-6 md:p-8">
          <h4 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">📊 AI Analysis Results</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <Line data={churnSignalChartData} />
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="p-3 text-left font-semibold">Customer</th>
                    <th className="p-3 text-left font-semibold">Usage</th>
                    <th className="p-3 text-left font-semibold">Issues</th>
                    <th className="p-3 text-left font-semibold">Churn Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyCustomers.map((cust, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50">
                      <td className="p-3">{cust.name}</td>
                      <td className="p-3">{cust.usage}</td>
                      <td className="p-3">{cust.issues}</td>
                      <td className="p-3 font-semibold">{cust.churnRisk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p><strong>Summary:</strong> {analysisResult.summary}</p>
            <p><strong>Accuracy:</strong> {analysisResult.accuracy}</p>
            <p><strong>Model Used:</strong> {analysisResult.modelUsed}</p>
            <p><strong>Top Factors:</strong> {analysisResult.topFactors.join(", ")}</p>
          </div>

          <button
            onClick={exportConfig}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            📥 Download Full Report
          </button>
        </div>
      )}
    </div>
  );
}

export default AIConfiguratorWizard;