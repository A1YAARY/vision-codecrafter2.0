// pages/index.js or App.js
import RotatingText from '../components/RotatingText'; // Adjust the path as needed
import RadarChartComponent from '../components/analytics/RadarChartComponent';

// Define chart data outside the component to prevent recreation on each render
const chartData = {
  title: "Investment Diversification Analysis",
  chartData: [
    {
      name: "Stocks",
      yourinvestment: 75,
      max:100,
    },
    {
      name: "Mutual Funds",
      yourinvestment: 50,
      max:100,
    },
    {
      name: "Insurance",
      yourinvestment: 20,
      max:100,
    },
    {
      name: "Bonds",
      yourinvestment: 60,
      max:100,
    },
    {
      name: "Foreign Stocks",
      yourinvestment: 30,
      max:100,
    }
  ]
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <section className="bg-gradient-to-b from-[#10002B] to-[#E0AAFF] text-[#C77DFF] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Why put all your capital in one asset?
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Invest
            {' '}
            <RotatingText
              texts={['Stocks', 'Bonds', 'Mutual Funds', 'Insurance', 'Foreign Stocks']}
              mainClassName="px-3 py-2 bg-[#E0AAFF] text- text-[#10002B] inline-block rounded-lg mx-2"
              staggerFrom="center"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.08}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />{' '}
          </h1>
          
          <button className="bg-[#10002b] text-[#FFFFFF] px-8 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>
      
      <div className="p-4">
        <RadarChartComponent data={chartData} />
      </div>
    </div>
  );
}