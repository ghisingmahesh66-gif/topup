import React from 'react'
import { useState } from 'react';
import { Zap, Search, Diamond, CreditCard, Check, X, Wallet, Building2, Smartphone } from 'lucide-react';

const Games = () => {
  const [activeGame, setActiveGame] = useState(null);
  const [step, setStep] = useState(1);
  const [gameIdInput, setGameIdInput] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const games = [
    { id: 'ml', name: 'Mobile Legends', currency: 'Diamonds', color: 'from-purple-600 to-blue-600', initial: 'ML', desc: 'Recharge diamonds instantly' },
    { id: 'ff', name: 'Free Fire', currency: 'Diamonds', color: 'from-orange-500 to-red-600', initial: 'FF', desc: 'Get diamonds fast & easy' },
    { id: 'pubg', name: 'PUBG Mobile', currency: 'UC', color: 'from-yellow-500 to-amber-600', initial: 'PUBG', desc: 'Buy UC securely' },
    { id: 'val', name: 'Valorant', currency: 'VP', color: 'from-red-600 to-pink-600', initial: 'VAL', desc: 'Purchase VP points' },
  ];

  const amounts = [
    { value: 100, price: '$1.99' }, { value: 250, price: '$4.99' },
    { value: 500, price: '$9.99' }, { value: 1000, price: '$19.99' },
    { value: 2500, price: '$49.99' }, { value: 5000, price: '$99.99' },
  ];

  const openTopUp = (game) => {
    setActiveGame(game);
    setStep(1);
    setGameIdInput('');
    setSelectedAmount(null);
    setPaymentMethod(null);
  };

  const closeTopUp = () => {
    setActiveGame(null);
  };

  const game = activeGame || games[0];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 opacity-30" />
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80')` }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Popular Games</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose from our most popular games and recharge instantly</p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((g) => (
            <div key={g.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className={`h-48 bg-gradient-to-br ${g.color} flex items-center justify-center`}>
                <span className="text-white text-6xl font-bold">{g.initial}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{g.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{g.desc}</p>
                <button onClick={() => openTopUp(g)} className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${g.color} text-white font-semibold py-3 rounded-xl transition-all`}>
                  <Zap className="w-4 h-4" /> Top Up
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top-Up Modal */}
      {activeGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={closeTopUp} />
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Top Up {game.name}</h2>
              <button onClick={closeTopUp} className="p-2 hover:bg-gray-100 rounded-full transition"><X className="w-6 h-6" /></button>
            </div>

            {/* Steps */}
            <div className="p-6">
              <div className="flex items-center justify-center gap-4 mb-8">
                {[{ i: Search, l: 'ID' }, { i: Diamond, l: 'Amount' }, { i: CreditCard, l: 'Pay' }].map((s, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step > idx + 1 ? 'bg-green-500 text-white' : step === idx + 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-400'}`}>
                      {step > idx + 1 ? <Check className="w-5 h-5" /> : <s.i className="w-5 h-5" />}
                    </div>
                    <span className="ml-2 text-sm font-medium hidden sm:block">{s.l}</span>
                    {idx < 2 && <div className={`w-8 h-1 mx-2 ${step > idx + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>

              {/* Step 1: Game ID */}
              {step === 1 && (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Game ID</h3>
                  <p className="text-gray-600 mb-4">Enter your {game.name} player ID</p>
                  <input type="text" value={gameIdInput} onChange={(e) => setGameIdInput(e.target.value)} placeholder="Game ID" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-center text-lg mb-4" />
                  <button onClick={() => gameIdInput && setStep(2)} disabled={!gameIdInput} className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-500 transition disabled:opacity-50">Next</button>
                </div>
              )}

              {/* Step 2: Select Amount */}
              {step === 2 && (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                    <Diamond className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Select {game.currency}</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {amounts.map((a) => (
                      <button key={a.value} onClick={() => setSelectedAmount(a)} className={`p-3 rounded-xl border-2 transition ${selectedAmount?.value === a.value ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'}`}>
                        <div className="font-bold text-gray-900">{a.value}</div>
                        <div className="text-xs text-gray-600">{game.currency}</div>
                        <div className="text-sm font-semibold text-pink-600">{a.price}</div>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => selectedAmount && setStep(3)} disabled={!selectedAmount} className="w-full bg-pink-600 text-white font-semibold py-3 rounded-xl hover:bg-pink-500 transition disabled:opacity-50">Next</button>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Payment</h3>
                  <div className="bg-gray-50 rounded-xl p-4 mb-4 text-left">
                    {[{ l: 'Game', v: game.name }, { l: 'Game ID', v: gameIdInput }, { l: 'Amount', v: `${selectedAmount?.value} ${game.currency}` }, { l: 'Total', v: selectedAmount?.price }].map((item, i) => (
                      <div key={i} className={`flex justify-between py-1 ${i === 3 ? 'border-t mt-2 pt-2 font-bold text-orange-600' : ''}`}>
                        <span className="text-gray-600">{item.l}</span>
                        <span>{item.v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Payment Methods */}
                  <p className="text-sm text-gray-600 mb-3">Select payment method <span className="text-red-500">*</span></p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* eSewa */}
                    <button onClick={() => setPaymentMethod('esewa')} className={`flex items-center gap-2 p-3 border-2 rounded-xl transition ${paymentMethod === 'esewa' ? 'bg-green-100 border-green-500 shadow-md' : 'bg-green-50 border-green-200 hover:border-green-400'}`}>
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-green-700">eSewa</span>
                    </button>

                    {/* Khalti */}
                    <button onClick={() => setPaymentMethod('khalti')} className={`flex items-center gap-2 p-3 border-2 rounded-xl transition ${paymentMethod === 'khalti' ? 'bg-purple-100 border-purple-500 shadow-md' : 'bg-purple-50 border-purple-200 hover:border-purple-400'}`}>
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-purple-700">Khalti</span>
                    </button>

                    {/* Bank */}
                    <button onClick={() => setPaymentMethod('bank')} className={`flex items-center gap-2 p-3 border-2 rounded-xl transition ${paymentMethod === 'bank' ? 'bg-blue-100 border-blue-500 shadow-md' : 'bg-blue-50 border-blue-200 hover:border-blue-400'}`}>
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-blue-700">Bank</span>
                    </button>

                    {/* Card */}
                    <button onClick={() => setPaymentMethod('card')} className={`flex items-center gap-2 p-3 border-2 rounded-xl transition ${paymentMethod === 'card' ? 'bg-orange-100 border-orange-500 shadow-md' : 'bg-orange-50 border-orange-200 hover:border-orange-400'}`}>
                      <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-orange-700">Card</span>
                    </button>
                  </div>

                  <button onClick={() => { alert(`Payment successful via ${paymentMethod}!`); closeTopUp(); }} disabled={!paymentMethod} className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-400 transition disabled:opacity-50 disabled:cursor-not-allowed">
                    {paymentMethod ? `Pay with ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}` : 'Select Payment Method'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;
